'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import image from '../../../public/images/image4.png';
import { Particle } from '@/types';

export function ParticlesAnimation() {
  const [zoom, setZoom] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const lastMouseMoveTime = useRef<number>(0);
  const isMouseMoving = useRef<boolean>(false);
  const animationStartTime = useRef<number>(0);
  const hasAnimatedIn = useRef<boolean>(false);

  const mouseRef = useRef({
    x: 0,
    y: 0,
    radius: 8000,
    activeRadius: 8000,
    isActive: false,
    forceMultiplier: 10,
    hoverForceBoost: 2.5,
    hoverSizeBoost: 0.5,
    hoverPulseSpeed: 0.02
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const createParticle = useCallback((originX: number, originY: number, baseParticleSize: number): Particle => {
    return {
      x: -50,
      y: originY,
      originX,
      originY,
      vx: 0,
      vy: 0,
      color: 'white',
      size: baseParticleSize,
      ease: 0.2,
      returnEase: 0.07,
      friction: 0.85,
      baseSize: baseParticleSize,
      maxSpeed: 25,
      delay: Math.random() * 300,
      sizeVariation: Math.random() * 0.5 + 0.90
    };
  }, []);

  const initParticles = useCallback(() => {
    if (!imageRef.current) return;

    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const imageEl = imageRef.current;
    const gap = 4;
    const baseParticleSize = gap * 0.6;

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d')!;
    tempCanvas.width = imageEl.width;
    tempCanvas.height = imageEl.height;

    tempCtx.drawImage(imageEl, 0, 0);

    const imgData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const pixels = imgData.data;

    const centerX = canvas.width / 2 - tempCanvas.width / 2;
    const percentageFromBottom = window.innerWidth < 1450 ? 10 : 5;
    const imageBottomY = canvas.height * ((100 - percentageFromBottom) / 100) - tempCanvas.height;

    particlesRef.current = [];
    for (let y = 0; y < tempCanvas.height; y += gap) {
      for (let x = 0; x < tempCanvas.width; x += gap) {
        const i = (y * tempCanvas.width + x) * 4;
        if (pixels[i + 3] > 0) {
          const posX = centerX + x;
          const posY = imageBottomY + y;
          particlesRef.current.push(createParticle(posX, posY, baseParticleSize));
        }
      }
    }
    animationStartTime.current = Date.now();
    hasAnimatedIn.current = false;
  }, [createParticle]);

  useEffect(() => {
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;

    const setCanvasSize = () => {
      if (window.innerWidth < 600) {
        canvas.width = window.innerWidth + 600;
        canvas.height = window.innerHeight + 900;
      }
      else if (window.innerWidth < 1450) {
        canvas.width = window.innerWidth + 1500;
        canvas.height = window.innerHeight + 900;
      } else {
        canvas.width = window.innerWidth + 600;
        canvas.height = window.innerHeight + 300;
      }
    };

    setCanvasSize();

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mouseRef.current.x = (e.clientX - rect.left) * scaleX;
      mouseRef.current.y = (e.clientY - rect.top) * scaleY;
      mouseRef.current.isActive = true;
      lastMouseMoveTime.current = Date.now();
      isMouseMoving.current = true;
    };

    const handleMouseLeave = () => {
      if (isMobile) return;

      mouseRef.current.isActive = false;
      setIsHovering(false);
      setZoom(1);
      isMouseMoving.current = false;
    };

    const handleMouseEnter = () => {
      if (isMobile) {
        setIsHovering(true);
        setZoom(1.8);
        return;
      }

      setIsHovering(true);
      setZoom(1.8);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isMobile) return;

      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.95 : 1.05;
      setZoom(prev => Math.min(Math.max(prev * delta, 1), 3));
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    const handleTouchStart = () => {
      if (!isMobile) return;
      setIsHovering(true);
      setZoom(1.8);
    };

    const handleTouchEnd = () => {
      if (!isMobile) return;
      setIsHovering(false);
      setZoom(1);
    };

    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchend', handleTouchEnd);

    const updateParticle = (p: Particle, elapsed: number) => {
      const mouse = mouseRef.current;

      if (!hasAnimatedIn.current) {
        const animationProgress = Math.min(1, (elapsed - p.delay) / 1000);
        if (animationProgress > 0) {
          const easedProgress = 1 - Math.pow(1 - animationProgress, 3);
          p.x = -50 + (p.originX + 50) * easedProgress;
          p.y = p.originY * easedProgress + p.y * (1 - easedProgress);
        }

        if (elapsed > 1000 + p.delay && !hasAnimatedIn.current) {
          hasAnimatedIn.current = true;
        }
        return;
      }

      if ((isMouseMoving.current && Date.now() - lastMouseMoveTime.current < 100) || isMobile) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = dx * dx + dy * dy;
        const currentRadius = mouse.isActive ? mouse.activeRadius : mouse.radius;

        if (distance < currentRadius * currentRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (-currentRadius / distance) *
            mouse.forceMultiplier *
            (isHovering ? mouse.hoverForceBoost : 1);

          const forceVariation = 1 + (Math.random() * 0.4 - 0.2);
          p.vx += force * Math.cos(angle) * forceVariation;
          p.vy += force * Math.sin(angle) * forceVariation;

          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > p.maxSpeed) {
            p.vx = (p.vx / speed) * p.maxSpeed;
            p.vy = (p.vy / speed) * p.maxSpeed;
          }
        }
      } else {
        isMouseMoving.current = false;
      }

      p.vx *= p.friction;
      p.vy *= p.friction;

      const currentEase = isHovering ? p.ease : p.returnEase;
      p.x += p.vx + (p.originX - p.x) * currentEase;
      p.y += p.vy + (p.originY - p.y) * currentEase;

      const pulseEffect = isHovering ?
        Math.sin(Date.now() * mouse.hoverPulseSpeed) * 0.2 + 1 :
        1;
      const sizeMultiplier = isHovering ?
        mouse.hoverSizeBoost * pulseEffect * p.sizeVariation :
        p.sizeVariation;
      p.size = p.baseSize * zoom * sizeMultiplier;
    };

    const drawParticle = (p: Particle) => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(zoom, zoom);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      const elapsed = Date.now() - animationStartTime.current;
      particlesRef.current.forEach((p) => {
        updateParticle(p, elapsed);
        drawParticle(p);
      });

      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };

    if (imageRef.current?.complete) {
      initParticles();
      animate();
    } else {
      const img = imageRef.current;
      if (img) {
        img.onload = () => {
          initParticles();
          animate();
        };
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('wheel', handleWheel);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, [zoom, isHovering, initParticles, isMobile]);

  return (
    <>
      <canvas
        id="canvas1"
        className="fixed inset-0 w-full h-full -z-10"
      />
      <img
        id="image1"
        ref={imageRef}
        src={image.src}
        alt="Animation image"
        className="hidden"
        crossOrigin="anonymous"
      />
    </>
  );
}