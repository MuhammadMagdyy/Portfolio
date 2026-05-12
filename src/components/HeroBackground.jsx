import React, { useRef, useEffect } from 'react';

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 130; 
    const connectionDistance = 160; 
    const mouse = { x: null, y: null, radius: 220 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
      }

      update() {
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += dx * force * 0.03;
            this.y += dy * force * 0.03;
          }
        }
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        // Nodes stay white to act as "lights"
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        
        ctx.shadowBlur = 15;
        // Glow alternates between the two theme colors
        ctx.shadowColor = Math.random() > 0.5 ? '#22c55e' : '#06b6d4';
        
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      
      particles.forEach((p, index) => {
        p.update();
        p.draw(isDark);

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // --- GRADIENT LOGIC ---
            // Creates a line that fades from Neon Green to Electric Blue
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            
            // Bright Neon Green
            gradient.addColorStop(0, `rgba(34, 197, 94, ${(1 - dist / connectionDistance) * 0.8})`); 
            // Electric Blue
            gradient.addColorStop(1, `rgba(6, 182, 212, ${(1 - dist / connectionDistance) * 0.8})`); 

            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-transparent">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
}