import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  RotateCcw, 
  Loader2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

interface MediaVideoProps {
  src: string;
  poster?: string;
  title: string;
  subtitle?: string;
  isBackground?: boolean;
  autoplayMuted?: boolean;
  loop?: boolean;
  aspectRatio?: '16/9' | '21/9' | '4/3';
  className?: string;
  isConceptual?: boolean;
}

export const MediaVideo: React.FC<MediaVideoProps> = ({
  src,
  poster,
  title,
  subtitle,
  isBackground = false,
  autoplayMuted = false,
  loop = false,
  aspectRatio = '16/9',
  className = '',
  isConceptual = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(isBackground || autoplayMuted);
  const [isMuted, setIsMuted] = useState(isBackground || autoplayMuted);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoplayMuted || isBackground) {
      video.muted = true;
      video.play().catch(() => {
        // Handled silently for browsers restricting autoplay
        setIsPlaying(false);
      });
    }
  }, [autoplayMuted, isBackground]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          setHasError(true);
        });
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    if (video && video.duration) {
      video.currentTime = clickPos * video.duration;
      setProgress(clickPos * 100);
    }
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      container.requestFullscreen().catch(() => {});
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const aspectClass = {
    '16/9': 'aspect-video',
    '21/9': 'aspect-[21/9]',
    '4/3': 'aspect-4/3',
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      className={`relative w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group ${aspectClass} ${className}`}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        loop={loop || isBackground}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className="w-full h-full object-cover block"
      />

      {/* Conceptual Badge if applicable */}
      {isConceptual && (
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 border border-purple-500/40 text-purple-300 font-mono text-[10px] tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            <span>CONCEPTUAL SYSTEM DEMO</span>
          </span>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#080d1e]/95 backdrop-blur-md">
          <AlertCircle className="w-8 h-8 text-amber-400" />
          <div className="space-y-1">
            <h4 className="text-sm font-display font-semibold text-white">Video Stream Unavailable</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              The requested demonstration stream could not be loaded on this network profile.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setHasError(false);
              togglePlay();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium hover:bg-cyan-500/30 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry Connection</span>
          </button>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-none">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
        </div>
      )}

      {/* Center Play Button Overlay when paused */}
      {!isPlaying && !isBackground && !hasError && (
        <button
          type="button"
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-all cursor-pointer group"
          aria-label={`Play video: ${title}`}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black flex items-center justify-center shadow-2xl shadow-cyan-500/40 group-hover:scale-110 transition-transform duration-300">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 text-black fill-black" />
          </div>
        </button>
      )}

      {/* Custom Accessible Controls Overlay (Section 11) */}
      {!isBackground && (
        <div
          className={`absolute inset-x-0 bottom-0 z-20 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col gap-2.5 transition-opacity duration-300 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Scrub Track */}
          <div
            onClick={handleSeek}
            className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer overflow-hidden transition-all duration-150"
            role="slider"
            aria-label="Seek video progress"
            aria-valuenow={progress}
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full relative"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <div className="font-mono text-[11px] text-slate-300">
                <span>{formatTime(currentTime)}</span>
                <span className="text-slate-500 mx-1">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-xs text-slate-300 truncate max-w-xs">
                {title}
              </span>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-1 focus:ring-cyan-400"
                aria-label="Toggle fullscreen"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
