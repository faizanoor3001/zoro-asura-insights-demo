
import { Button } from "@/components/ui/button";
import { Building3D } from "@/components/Building3D";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients and effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Smarter Buildings.
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Greener Future.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              AI-driven HVAC optimization for sustainability and savings.
              <br />
              <span className="text-blue-400 font-semibold">Powered by ZORO Energy.</span>
            </p>

            {/* Real-time indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-green-400">-32%</div>
                <div className="text-sm text-gray-400">Energy Use</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">96%</div>
                <div className="text-sm text-gray-400">Comfort</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-cyan-400">-45%</div>
                <div className="text-sm text-gray-400">CO₂ Emissions</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-lg font-semibold hover-scale"
              >
                Request Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right side - 3D Building */}
          <div className="relative">
            <Building3D />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-blue-400" size={32} />
      </div>
    </section>
  );
};
