/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          oscNodesRef.current.forEach(osc => osc.stop());
          oscNodesRef.current = [];
        }, 300);
      }
      setIsPlaying(false);
    } else {
      // Initialize Web Audio ambient chord
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = audioCtxRef.current || new AudioContextClass();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.gain.setTargetAtTime(0.06, ctx.currentTime, 0.4);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm ambient drone frequencies (F# minor 9th: F#2, C#3, A3, E4)
        const frequencies = [92.5, 138.6, 220.0, 329.6];
        const oscs: OscillatorNode[] = [];

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          
          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          // Subtle detune for shimmer
          osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);
          
          oscGain.gain.setValueAtTime(0.25, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          
          osc.start();
          oscs.push(osc);
        });

        oscNodesRef.current = oscs;
        setIsPlaying(true);
      } catch {
        // AudioContext not permitted or blocked
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      id="ambient-sound-toggle"
      onClick={toggleSound}
      aria-label={isPlaying ? "Mute ambient atmosphere" : "Play ambient atmosphere"}
      className="group fixed right-5 bottom-5 z-[10040] flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/80 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-black/95 active:scale-95 md:right-7 md:bottom-7 md:size-13"
    >
      <span className="sr-only">Toggle Atmosphere</span>
      {isPlaying ? (
        <Volume2 className="size-5 text-emerald-400 animate-pulse" />
      ) : (
        <VolumeX className="size-5 text-neutral-400 group-hover:text-white" />
      )}
      
      {/* Tooltip on hover */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-neutral-900/90 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-neutral-300 opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
        {isPlaying ? 'Mute ambient' : 'Atmosphere: On'}
      </span>
    </button>
  );
}
