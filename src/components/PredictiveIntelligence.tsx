
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Clock, Lightbulb } from "lucide-react";

export const PredictiveIntelligence = () => {
  const [accuracyProgress, setAccuracyProgress] = useState(0);
  const [learningProgress, setLearningProgress] = useState(0);

  useEffect(() => {
    // Animate accuracy meter
    const accuracyTimer = setTimeout(() => setAccuracyProgress(96), 500);
    const learningTimer = setTimeout(() => setLearningProgress(78), 800);
    
    return () => {
      clearTimeout(accuracyTimer);
      clearTimeout(learningTimer);
    };
  }, []);

  const predictions = [
    {
      title: "Temperature Forecasting",
      accuracy: 96,
      description: "Predicts optimal temperature settings 4 hours ahead",
      icon: Target
    },
    {
      title: "Energy Demand",
      accuracy: 94,
      description: "Forecasts peak energy usage with 15-minute precision",
      icon: TrendingUp
    },
    {
      title: "Equipment Maintenance",
      accuracy: 89,
      description: "Predicts maintenance needs 2 weeks in advance",
      icon: Clock
    },
    {
      title: "Occupancy Patterns",
      accuracy: 92,
      description: "Learns building usage patterns for proactive optimization",
      icon: Lightbulb
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Predictive Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning algorithms that get smarter every day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Accuracy Meter */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700/50 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Predictive Accuracy</h3>
              
              {/* Main accuracy display */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-700"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 80}`}
                    strokeDashoffset={`${2 * Math.PI * 80 * (1 - accuracyProgress / 100)}`}
                    className="transition-all duration-2000 ease-out"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#34d399" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">{accuracyProgress}%</div>
                    <div className="text-sm text-gray-400">Accuracy</div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300">
                Our AI maintains industry-leading accuracy across all prediction models
              </p>
            </Card>

            {/* Learning Progress */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Continuous Learning</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Learning Progress</span>
                  <span className="text-green-400">{learningProgress}%</span>
                </div>
                <Progress value={learningProgress} className="h-2" />
                <p className="text-xs text-gray-400">
                  System adapts and improves based on building performance data
                </p>
              </div>
            </Card>
          </div>

          {/* Prediction Categories */}
          <div className="space-y-6">
            {predictions.map((prediction, index) => (
              <Card 
                key={index}
                className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <prediction.icon className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{prediction.title}</h4>
                      <span className="text-2xl font-bold text-green-400">{prediction.accuracy}%</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-3">{prediction.description}</p>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${prediction.accuracy}%`,
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Timeline */}
        <div className="mt-16">
          <Card className="bg-slate-800/30 border-slate-700/30 p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">AI Learning Timeline</h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 to-emerald-500" />
              
              <div className="space-y-8">
                {[
                  { time: "Day 1", event: "Initial data collection and baseline establishment" },
                  { time: "Week 1", event: "Pattern recognition and first optimization cycles" },
                  { time: "Month 1", event: "Advanced predictions and proactive adjustments" },
                  { time: "Month 3", event: "Peak efficiency with predictive maintenance alerts" }
                ].map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="text-green-400 font-semibold mb-1">{milestone.time}</div>
                      <div className="text-gray-300 text-sm">{milestone.event}</div>
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-slate-900 relative z-10" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
