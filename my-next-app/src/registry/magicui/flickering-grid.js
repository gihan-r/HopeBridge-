'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const FlickeringGrid = ({
  className,
  squareSize = 4,
  gridGap = 6,
  color = '#6B7280',
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}) => {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const squaresRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Initialize squares
    const squares = [];
    for (let y = 0; y < height; y += squareSize + gridGap) {
      for (let x = 0; x < width; x += squareSize + gridGap) {
        squares.push({
          x,
          y,
          opacity: Math.random() * maxOpacity,
          targetOpacity: Math.random() * maxOpacity,
          transitionSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    }
    squaresRef.current = squares;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      squaresRef.current.forEach((square) => {
        // Randomly update target opacity
        if (Math.random() < flickerChance) {
          square.targetOpacity = Math.random() * maxOpacity;
        }

        // Smoothly transition opacity
        const diff = square.targetOpacity - square.opacity;
        square.opacity += diff * square.transitionSpeed;

        // Draw square
        ctx.fillStyle = color;
        ctx.globalAlpha = square.opacity;
        ctx.fillRect(square.x, square.y, squareSize, squareSize);
      });

      ctx.globalAlpha = 1;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [width, height, squareSize, gridGap, color, maxOpacity, flickerChance]);

  return (
    <canvas
      ref={canvasRef}
      className={cn('size-full', className)}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export { FlickeringGrid }; 