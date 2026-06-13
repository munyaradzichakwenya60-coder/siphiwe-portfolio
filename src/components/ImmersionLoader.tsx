import { useState, useEffect, useRef } from 'react';

interface ImmersionLoaderProps {
  onComplete: () => void;
}

export const ImmersionLoader: React.FC<ImmersionLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const rotationRef = useRef(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Progressive simulated load engine
  useEffect(() => {
    const start = Date.now();
    const duration = 2500; // Optimal 2.5s simulated loader 

    const updateLoader = () => {
      const elapsed = Date.now() - start;
      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestRef.current = requestAnimationFrame(updateLoader);
      } else {
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 600); // Synchronised match with exit transition duration
      }
    };

    requestRef.current = requestAnimationFrame(updateLoader);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [onComplete]);

  // Mathematical 3D projection engine - auto-rotating wireframe cake structure
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const updateCanvasSize = () => {
      const containerSize = Math.min(container.clientWidth, container.clientHeight, 400);
      const dpr = window.devicePixelRatio || 1;
      canvas.width = containerSize * dpr;
      canvas.height = containerSize * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${containerSize}px`;
      canvas.style.height = `${containerSize}px`;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    const cakeStructure = [
      { radius: 85, height: 45, yOffset: 65, flutes: 20 },  // Base
      { radius: 62, height: 40, yOffset: 5, flutes: 16 },   // Middle
      { radius: 42, height: 35, yOffset: -50, flutes: 12 }  // Top
    ];

    const camDistance = 600;
    const tiltX = 0.35; // Perspective pitch rotation

    interface Point {
      x: number;
      y: number;
      z: number;
    }

    const projectPoint = (x: number, y: number, z: number, rotationY: number, width: number, height: number): Point => {
      const cosY = Math.cos(rotationY), sinY = Math.sin(rotationY);
      const xRot = x * cosY - z * sinY, zRot = x * sinY + z * cosY;
      const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);
      const yTilt = y * cosX - zRot * sinX, zTilt = y * sinX + zRot * cosX;
      const scale = camDistance / (camDistance + zTilt);
      const px = width / 2 + xRot * scale * 1.4;
      const py = height / 2 + yTilt * scale * 1.4;
      return { x: px, y: py, z: zTilt };
    };

    const renderLoop = () => {
      const containerSize = Math.min(container.clientWidth, container.clientHeight, 400);
      const width = containerSize;
      const height = containerSize;
      
      ctx.clearRect(0, 0, width, height);
      rotationRef.current += 0.015; // Rotational velocity

      cakeStructure.forEach((tier) => {
        const pathPoints = 64;
        const topProfile: Point[] = [], baseProfile: Point[] = [];

        for (let i = 0; i < pathPoints; i++) {
          const theta = (i * 2 * Math.PI) / pathPoints;
          const tx = tier.radius * Math.cos(theta), tz = tier.radius * Math.sin(theta);
          topProfile.push(projectPoint(tx, tier.yOffset - tier.height / 2, tz, rotationRef.current, width, height));
          baseProfile.push(projectPoint(tx, tier.yOffset + tier.height / 2, tz, rotationRef.current, width, height));
        }

        // Cylinder Body
        ctx.beginPath();
        ctx.moveTo(topProfile[0].x, topProfile[0].y);
        for (let i = 1; i < pathPoints; i++) ctx.lineTo(topProfile[i].x, topProfile[i].y);
        ctx.lineTo(baseProfile[pathPoints - 1].x, baseProfile[pathPoints - 1].y);
        for (let i = pathPoints - 1; i >= 0; i--) ctx.lineTo(baseProfile[i].x, baseProfile[i].y);
        ctx.closePath();
        ctx.fillStyle = '#FFF5F6'; // Structural pink
        ctx.fill();

        // High-end fluting textures
        for (let i = 0; i < tier.flutes; i++) {
          const fluteTheta = (i * 2 * Math.PI) / tier.flutes + rotationRef.current;
          const fx = tier.radius * Math.cos(fluteTheta), fz = tier.radius * Math.sin(fluteTheta);
          const topFlute = projectPoint(fx, tier.yOffset - tier.height / 2, fz, rotationRef.current, width, height);
          const baseFlute = projectPoint(fx, tier.yOffset + tier.height / 2, fz, rotationRef.current, width, height);

          const surfaceNormalZ = Math.sin(fluteTheta);
          if (surfaceNormalZ > 0) { // Painter's visibility checking
            ctx.beginPath();
            ctx.moveTo(topFlute.x, topFlute.y);
            ctx.lineTo(baseFlute.x, baseFlute.y);
            ctx.strokeStyle = 'rgba(212, 65, 97, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Top Layer Ellipse Face
        ctx.beginPath();
        ctx.moveTo(topProfile[0].x, topProfile[0].y);
        for (let i = 1; i < pathPoints; i++) ctx.lineTo(topProfile[i].x, topProfile[i].y);
        ctx.closePath();
        ctx.fillStyle = '#FAFAFA';
        ctx.fill();
        ctx.strokeStyle = '#D44161';
        ctx.lineWidth = 1.25;
        ctx.stroke();

        // Base Outline
        ctx.beginPath();
        ctx.moveTo(baseProfile[0].x, baseProfile[0].y);
        for (let i = 1; i < pathPoints; i++) ctx.lineTo(baseProfile[i].x, baseProfile[i].y);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(212, 65, 97, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      requestRef.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio system initialisation"
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--color-canvas)] p-6"
      style={{
        transition: 'transform 600ms var(--ease-premium), opacity 600ms var(--ease-premium)',
        transform: isExiting ? 'scale(0.96) translateY(-20px)' : 'scale(1) translateY(0)',
        opacity: isExiting ? 0 : 1,
        pointerEvents: isExiting ? 'none' : 'auto'
      }}
    >
      <div 
        ref={containerRef} 
        className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
      >
        <canvas ref={canvasRef} className="block" />
      </div>
      <div className="mt-8 text-xs font-bold tracking-[0.25em] uppercase text-[var(--color-charcoal)]">
        SYSTEM INITIALIZING {progress.toString().padStart(3, '0')}%
      </div>
      <div className="w-full max-w-[200px] h-[2px] bg-[#111111]/10 mt-6 relative overflow-hidden rounded-full">
        <div 
          className="absolute left-0 top-0 bottom-0 bg-[var(--color-accent)] rounded-full"
          style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
        />
      </div>
    </div>
  );
};
