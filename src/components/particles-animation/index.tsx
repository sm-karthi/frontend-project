'use client';

import { useEffect } from 'react';
import image from '../../../public/images/image4.png';
import { Particle } from '@/types';


export function ParticlesAnimation() {
  useEffect(() => {
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const imageEl = document.getElementById('image1') as HTMLImageElement;

    if (!canvas || !imageEl) {
      console.error('Canvas or image element not found');
      return;
    }

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth + 1500;
    canvas.height = window.innerHeight + 1000;

    const gap = 4;
    const particleSize = gap * 0.6;
    const particles: Particle[] = [];

    const mouse = { x: 0, y: 0, radius: 10000 };

    window.addEventListener('mousemove', (e) => {
      const mousePercentX = (e.clientX / window.innerWidth) * 100;
      const mousePercentY = (e.clientY / window.innerHeight) * 100;

      mouse.x = (mousePercentX / 100) * canvas.width;
      mouse.y = (mousePercentY / 100) * canvas.height;
    });


    function createParticle(originX: number, originY: number): Particle {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        originX,
        originY,
        vx: 0,
        vy: 0,
        color: 'white',
        size: particleSize,
        ease: 0.1,
        friction: 0.88,
      };
    }

    function updateParticle(p: Particle) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const distance = dx * dx + dy * dy;

      if (distance < mouse.radius) {
        const angle = Math.atan2(dy, dx);
        const force = -mouse.radius / distance;
        p.vx += force * Math.cos(angle);
        p.vy += force * Math.sin(angle);
      }

      p.vx *= p.friction;
      p.vy *= p.friction;
      p.x += p.vx + (p.originX - p.x) * p.ease;
      p.y += p.vy + (p.originY - p.y) * p.ease;
    }

    function drawParticle(p: Particle) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
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
      const percentageFromBottom = 10;
      const imageBottomY = canvas.height * ((100 - percentageFromBottom) / 100) - tempCanvas.height;

      for (let y = 0; y < tempCanvas.height; y += gap) {
        for (let x = 0; x < tempCanvas.width; x += gap) {
          const i = (y * tempCanvas.width + x) * 4;
          const alpha = pixels[i + 3];
          if (alpha > 0) {
            const posX = centerX + x;
            const posY = imageBottomY + y;
            particles.push(createParticle(posX, posY));
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });
      requestAnimationFrame(animate);
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
  }, []);

  return (
    <>
      <canvas id="canvas1" className="fixed inset-0 w-full h-full -z-10" />
      <img id="image1" src={image.src} alt="Animation image" className="hidden" />
    </>
  );
}

