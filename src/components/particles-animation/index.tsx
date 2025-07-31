'use client';

import { useEffect, useState } from 'react';
import image from '../../../public/images/image4.png';
import { Particle } from '@/types';

export function ParticlesAnimation() {
  const [zoom, setZoom] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const imageEl = document.getElementById('image1') as HTMLImageElement;
    const ctx = canvas.getContext('2d')!;

    const setCanvasSize = () => {
      // const scaleFactor = window.innerWidth < 1450 ? 1.5 : 1.2;
      // canvas.width = window.innerWidth * scaleFactor;
      // canvas.height = window.innerHeight * scaleFactor;


      if (window.innerWidth < 1450) {
        canvas.width = window.innerWidth + 1500;
        canvas.height = window.innerHeight + 900;
      }
      else {
        canvas.width = window.innerWidth + 600;
        canvas.height = window.innerHeight + 300;
      }
    };

    setCanvasSize();

    const gap = 4;
    const baseParticleSize = gap * 0.6;
    let particles: Particle[] = [];
    let animationId: number;

    const mouse = {
      x: 0,
      y: 0,
      radius: 10000,
      activeRadius: 15000,
      isActive: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      setIsHovering(false);
      setZoom(1);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
      setZoom(1.8); 
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.95 : 1.05;
      setZoom(prev => Math.min(Math.max(prev * delta, 1), 3));
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('wheel', handleWheel, { passive: false });

    function createParticle(originX: number, originY: number): Particle {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX: originX,
        originY: originY,
        vx: 0,
        vy: 0,
        color: 'white', 
        size: baseParticleSize,
        ease: isHovering ? 0.2 : 0.1, 
        friction: 0.9, 
        baseSize: baseParticleSize
      };
    }

    function updateParticle(p: Particle) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = dx * dx + dy * dy;

      const currentRadius = mouse.isActive ? mouse.activeRadius : mouse.radius;

      if (distance < currentRadius * currentRadius) {
        const angle = Math.atan2(dy, dx);
        const force = -currentRadius / distance * (isHovering ? 2 : 1);
        p.vx += force * Math.cos(angle);
        p.vy += force * Math.sin(angle);
      }

      p.vx *= p.friction;
      p.vy *= p.friction;
      p.x += p.vx + (p.originX - p.x) * p.ease;
      p.y += p.vy + (p.originY - p.y) * p.ease;
      p.size = p.baseSize * zoom; 
    }

    function drawParticle(p: Particle) {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    function initParticles() {
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

      particles = [];
      for (let y = 0; y < tempCanvas.height; y += gap) {
        for (let x = 0; x < tempCanvas.width; x += gap) {
          const i = (y * tempCanvas.width + x) * 4;
          if (pixels[i + 3] > 0) {
            const posX = centerX + x;
            const posY = imageBottomY + y;
            particles.push(createParticle(posX, posY));
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

     
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(zoom, zoom);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);

      particles.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });

      ctx.restore();
      animationId = requestAnimationFrame(animate);
    }

    if (imageEl.complete) {
      initParticles();
      animate();
    } else {
      imageEl.onload = () => {
        initParticles();
        animate();
      };
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('wheel', handleWheel);
    };
  }, [zoom, isHovering]);

  return (
    <>
      <canvas
        id="canvas1"
        className="fixed inset-0 w-full h-full -z-10"
      />
      <img id="image1" src={image.src} alt="Animation image" className="hidden" />
    </>
  );
}