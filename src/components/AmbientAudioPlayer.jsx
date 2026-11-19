import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

/**
 * Procedural Serene Ambient Forest Soundscape
 * Synthesizes gentle wind and soft chimes using Web Audio API without external audio files.
 */
export default function AmbientAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const chimeIntervalRef = useRef(null);

  const startSoundscape = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Pink noise generator for gentle breeze
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Filter for warm soft forest wind
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(masterGain);
      whiteNoise.start();

      // Gentle random chimes (harmonic pentatonic scale)
      const notes = [528, 660, 792, 924, 1056]; // 528Hz Solfeggio resonance
      chimeIntervalRef.current = setInterval(() => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const chimeFreq = notes[Math.floor(Math.random() * notes.length)];
        const osc = ctx.createOscillator();
        const chimeGain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(chimeFreq, ctx.currentTime);

        chimeGain.gain.setValueAtTime(0, ctx.currentTime);
        chimeGain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.15);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

        osc.connect(chimeGain);
        chimeGain.connect(masterGain);

        osc.start();
        osc.stop(ctx.currentTime + 3.6);
      }, 4200);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio initialization paused:", e);
    }
  };

  const stopSoundscape = () => {
    if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopSoundscape();
    } else {
      startSoundscape();
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.15, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (chimeIntervalRef.current) clearInterval(chimeIntervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-xs text-xs text-white">
      <button
        onClick={toggleSound}
        className="flex items-center gap-1.5 text-white hover:text-[#D6E3CE] transition-colors focus:outline-hidden"
        title={isPlaying ? "Mute forest ambiance" : "Play gentle forest soundscape"}
      >
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#D6E3CE] animate-pulse" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 opacity-60" />
        )}
        <span className="font-medium tracking-wide">
          {isPlaying ? "Forest Ambiance (528Hz)" : "Forest Ambiance"}
        </span>
      </button>

      {isPlaying && (
        <div className="flex items-center gap-1 pl-1 border-l border-white/20">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-12 h-1 accent-[#D6E3CE] cursor-pointer"
            title="Volume"
          />
          <Sparkles className="w-3 h-3 text-[#D6E3CE]" />
        </div>
      )}
    </div>
  );
}
