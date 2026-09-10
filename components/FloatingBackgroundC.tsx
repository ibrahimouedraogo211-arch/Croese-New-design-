/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

interface FloatingBackgroundCProps {
  opacity?: number;
}

export function FloatingBackgroundC({ opacity = 1.0 }: FloatingBackgroundCProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt playback immediately
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy handled silently
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-0 w-screen h-screen overflow-hidden select-none bg-black"
    >
      {/* 3D Rotating Chrome C Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        {/* Instant Static 3D C WebP Poster (renders immediately while video starts) */}
        <img
          src="/preloader-c-logo.webp"
          alt=""
          className="absolute top-1/2 left-1/2 h-auto w-full max-w-[850px] md:max-w-[1050px] lg:max-w-[1200px] xl:max-w-[1350px] -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none"
          style={{ opacity: opacity * 0.9 }}
        />

        {/* The Exact 3D Rotating C MP4 Video from Creativeans - Perfectly Centered on All Screens */}
        <video
          ref={videoRef}
          src="/creativeans_rotating_c.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 h-auto w-full max-w-[950px] md:max-w-[1150px] lg:max-w-[1350px] xl:max-w-[1500px] -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none transition-opacity duration-700"
          style={{ opacity: opacity }}
        />
      </div>

      {/* Atmospheric depth vignette gradients - Balanced around the centered 3D C */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.45) 75%, rgba(0, 0, 0, 0.85) 100%)'
        }}
      />
      
      {/* Delicate architectural matrix grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
