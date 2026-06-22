import React, { useState, useEffect, useRef } from 'react';

// Web Audio API Synthesizers for procedural cat sounds!
const playMeow = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(500, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.4);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1000, audioCtx.currentTime);
    filter.frequency.linearRampToValueAtTime(2500, audioCtx.currentTime + 0.1);
    filter.frequency.linearRampToValueAtTime(800, audioCtx.currentTime + 0.4);
    filter.Q.value = 5;

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.4);
  } catch (e) {}
};

const playHiss = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const bufferSize = audioCtx.sampleRate * 0.3; 
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1; // White noise
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 4000;

    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    noise.start();
  } catch (e) {}
};

const playSqueak = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(2000, audioCtx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) {}
};

const CursorCat = () => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [expression, setExpression] = useState('normal');

  // Mouse tracking logic for pupils
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (['sleep', 'happy', 'blink', 'angry'].includes(expression)) return; // Don't track if eyes are closed/slanted

      const trackEye = (eyeRef) => {
        if (!eyeRef.current) return;
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 15, 4); // Max 4px movement to keep pupil inside eye

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        eyeRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      };

      trackEye(leftEyeRef);
      trackEye(rightEyeRef);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [expression]);

  // Expression state machine
  useEffect(() => {
    let timeoutId;

    if (expression === 'blink') {
      timeoutId = setTimeout(() => setExpression('normal'), 150);
    } else if (expression === 'sleep') {
      timeoutId = setTimeout(() => setExpression('normal'), 3000);
    } else if (expression !== 'normal') {
      // happy, shock, curious, angry, meow
      timeoutId = setTimeout(() => setExpression('normal'), 2000);
    } else {
      // It's normal. After a random delay, pick a new expression.
      timeoutId = setTimeout(() => {
        if (Math.random() > 0.6) {
          setExpression('blink');
        } else {
          const expressions = ['shock', 'happy', 'sleep', 'normal', 'normal', 'curious', 'angry', 'meow'];
          setExpression(expressions[Math.floor(Math.random() * expressions.length)]);
        }
      }, Math.random() * 4000 + 2000); // 2 to 6 seconds delay
    }

    return () => clearTimeout(timeoutId);
  }, [expression]);

  // Render helpers
  const renderEyes = () => {
    switch (expression) {
      case 'angry':
        return (
          <>
            <line x1="28" y1="36" x2="42" y2="42" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="42" x2="72" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'blink':
      case 'sleep':
        return (
          <>
            <line x1="28" y1="40" x2="42" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <line x1="58" y1="40" x2="72" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'happy':
        return (
          <>
            <path d="M 28 40 Q 35 32 42 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M 58 40 Q 65 32 72 40" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </>
        );
      case 'shock':
        return (
          <>
            <circle cx="35" cy="40" r="8" fill="white" />
            <circle cx="65" cy="40" r="8" fill="white" />
            <circle cx="35" cy="40" r="1.5" fill="#0c0b0d" />
            <circle cx="65" cy="40" r="1.5" fill="#0c0b0d" />
          </>
        );
      default: // normal, curious, meow
        return (
          <>
            {/* White of the eyes */}
            <circle cx="35" cy="40" r="8" fill="white" />
            <circle cx="65" cy="40" r="8" fill="white" />
            
            {/* Pupils (these move instantly with mouse) */}
            <g ref={leftEyeRef}>
              <circle cx="35" cy="40" r="3.5" fill="#0c0b0d" />
            </g>
            <g ref={rightEyeRef}>
              <circle cx="65" cy="40" r="3.5" fill="#0c0b0d" />
            </g>
          </>
        );
    }
  };

  const renderMouth = () => {
    switch (expression) {
      case 'shock':
        return <circle cx="50" cy="56" r="4" fill="white" />;
      case 'meow':
        return (
          <>
            <ellipse cx="50" cy="56" rx="3" ry="6" fill="white" />
            <text x="50" y="20" fill="white" fontSize="12" fontFamily="sans-serif" textAnchor="middle" className="animate-bounce font-bold tracking-widest">MEOW!</text>
          </>
        );
      case 'angry':
        return <path d="M 45 56 Q 50 52 55 56" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />;
      case 'sleep':
      case 'happy':
        return <path d="M 45 54 Q 50 58 55 54" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />;
      default: // normal, curious
        return (
          <path d="M 42 54 Q 46 58 50 54 Q 54 58 58 54" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
        );
    }
  };

  // Determine tail animation class based on mood
  const getTailClass = () => {
    if (expression === 'happy' || expression === 'meow') return 'tail-fast';
    if (expression === 'angry') return 'tail-angry';
    if (expression === 'sleep') return '';
    return 'tail-normal';
  };

  return (
    <div 
      className="fixed bottom-0 right-10 z-[150] w-28 h-28 cursor-pointer transition-transform duration-700 hover:scale-110 active:scale-95"
      style={{ transform: expression === 'sleep' ? 'translateY(15px)' : 'translateY(0)' }}
      onMouseEnter={() => {
        if (expression !== 'sleep') setExpression('happy');
      }}
      onClick={(e) => {
        e.preventDefault();
        setExpression('meow');
        playMeow();
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        setExpression('shock');
        playSqueak();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        setExpression('angry');
        playHiss();
      }}
    >
      <style>
        {`
          @keyframes tailWag {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-25deg); }
          }
          .tail-normal {
            transform-origin: 15px 90px;
            animation: tailWag 4s ease-in-out infinite;
          }
          .tail-fast {
            transform-origin: 15px 90px;
            animation: tailWag 0.6s ease-in-out infinite;
          }
          .tail-angry {
            transform-origin: 15px 90px;
            transform: rotate(-35deg);
            transition: transform 0.3s;
          }
        `}
      </style>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full overflow-visible drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-transform duration-500"
        style={{ transform: expression === 'curious' ? 'rotate(-15deg)' : 'rotate(0)' }}
      >
        {/* Tail */}
        <g className={getTailClass()}>
          <path d="M 15 90 Q -10 90 -5 60 Q 0 45 15 45" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
          <path d="M 15 90 Q -10 90 -5 60 Q 0 45 15 45" fill="none" stroke="#0c0b0d" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Ears */}
        <path d="M 20 40 L 20 15 L 40 30" fill="#0c0b0d" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 80 40 L 80 15 L 60 30" fill="#0c0b0d" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Head */}
        <path d="M 15 100 L 15 45 Q 15 25 50 25 Q 85 25 85 45 L 85 100 Z" fill="#0c0b0d" stroke="white" strokeWidth="2" />
        
        {/* Nose */}
        <polygon points="47,48 53,48 50,52" fill="pink" />
        
        {/* Whiskers */}
        <line x1="8" y1="45" x2="25" y2="48" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="6" y1="52" x2="25" y2="52" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        
        <line x1="92" y1="45" x2="75" y2="48" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="94" y1="52" x2="75" y2="52" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Paws */}
        <path d="M 30 100 Q 35 90 40 100" fill="#0c0b0d" stroke="white" strokeWidth="2" />
        <path d="M 60 100 Q 65 90 70 100" fill="#0c0b0d" stroke="white" strokeWidth="2" />

        {renderEyes()}
        {renderMouth()}
        
        {/* Sleep Zzz particles */}
        {expression === 'sleep' && (
          <g className="animate-pulse">
            <text x="65" y="20" fill="white" fontSize="12" fontFamily="sans-serif">z</text>
            <text x="75" y="10" fill="white" fontSize="16" fontFamily="sans-serif">Z</text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default CursorCat;
