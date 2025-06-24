
import { useEffect, useRef } from "react";

export const Building3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a modern building visualization using CSS transforms and animations
    const building = containerRef.current;
    
    // Add floating animation
    let animationId: number;
    let startTime: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const yOffset = Math.sin(elapsed * 0.001) * 10;
      building.style.transform = `translateY(${yOffset}px)`;
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center h-96 lg:h-[500px]">
      <div
        ref={containerRef}
        className="relative transform-gpu"
        style={{ perspective: "1000px" }}
      >
        {/* Main building structure */}
        <div className="relative">
          {/* Building base */}
          <div className="w-48 h-64 bg-gradient-to-t from-slate-700 to-slate-600 rounded-t-lg relative shadow-2xl">
            {/* Windows grid */}
            <div className="absolute inset-4 grid grid-cols-6 grid-rows-12 gap-1">
              {Array.from({ length: 72 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm ${
                    Math.random() > 0.3
                      ? "bg-gradient-to-br from-blue-400/80 to-cyan-500/80 animate-pulse"
                      : "bg-slate-800/50"
                  }`}
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Building top */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg shadow-lg">
              {/* Antenna/sensors */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-cyan-400 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Energy flow indicators */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col space-y-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* HVAC indicators */}
          <div className="absolute -left-8 top-1/4">
            <div className="flex flex-col space-y-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-ping"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating data points */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent rounded-full blur-xl" />
    </div>
  );
};
