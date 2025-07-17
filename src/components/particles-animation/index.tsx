'use client';

import { useEffect } from 'react';
import image from '@/assets/images/image1.png';

export function ParticlesAnimation() {
  useEffect(() => {
    const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
    const image = document.getElementById('image1') as HTMLImageElement;

    if (!canvas || !image) {
      console.error('Canvas or image element not found');
      return;
    }

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
      console.error('Canvas context is null');
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gap = 4;
    const particleSize = gap * 0.6;
    const particles: any[] = [];

    const mouse = {
      x: 0,
      y: 0,
      radius: 3000,
    };

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const imgX = centerX - image.width / 2;
    const imgY = centerY - image.height / 2;


    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    function createParticle(originX: number, originY: number) {
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

    function updateParticle(p: any) {
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

    function drawParticle(p: any) {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }

    function initParticles() {
      ctx.drawImage(image, imgX, imgY);
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const i = (y * canvas.width + x) * 4;
          const alpha = pixels[i + 3];
          if (alpha > 0) {
            particles.push(createParticle(x, y));
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


 
      initParticles();
      animate();
   
  }, []);

  return (
    <>

      <canvas id="canvas1" />

      <img id="image1" src={image.src} alt="Animation image" className="hidden" />
      
    </>
  );
}
