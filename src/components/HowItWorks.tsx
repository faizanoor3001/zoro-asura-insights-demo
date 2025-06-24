
import { ArrowRight, Database, Brain, Settings, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Building sensors continuously collect temperature, humidity, occupancy, and energy data",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "ASURA analyzes patterns and predicts optimal HVAC settings using machine learning",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Automated Control",
      description: "Smart adjustments are made across building zones in real-time",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "System learns and improves efficiency while maintaining comfort",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            How ZORO Energy Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI-driven platform transforms building management through intelligent automation
          </p>
        </div>

        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 opacity-30" />
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} p-4 mb-6 mx-auto group-hover:animate-pulse`}>
                    <step.icon className="w-full h-full text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-400 animate-pulse" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive data flow visualization */}
        <div className="mt-16 bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Real-Time Data Flow
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['Temperature', 'Humidity', 'Occupancy', 'Energy Usage', 'Air Quality'].map((metric, index) => (
              <div
                key={metric}
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg px-4 py-2 animate-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-blue-300 font-medium">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
