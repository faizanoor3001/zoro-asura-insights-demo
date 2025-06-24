
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Zap, Shield, Wrench } from "lucide-react";

export const AsuraSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const demoQuestions = [
    {
      question: "Show me today's energy savings",
      answer: "Today, your building has saved 1,247 kWh of energy, reducing costs by $186. HVAC optimization in Zone A contributed to 32% of these savings through predictive temperature control.",
      metrics: { energy: "1,247 kWh", cost: "$186", co2: "0.85 tons" }
    },
    {
      question: "What maintenance issues are there?",
      answer: "I've detected 3 items requiring attention: HVAC Unit 7 shows 15% efficiency drop (filter replacement needed), Zone C thermostat calibration is off by 2°F, and fresh air intake damper needs cleaning.",
      metrics: { issues: "3", priority: "Medium", efficiency: "15%" }
    },
    {
      question: "How does ZORO Energy optimize my building?",
      answer: "I continuously analyze 47 data points across your building, learning occupancy patterns, weather forecasts, and equipment performance. I make micro-adjustments every 30 seconds to maintain comfort while minimizing energy use.",
      metrics: { dataPoints: "47", adjustments: "2,880/day", zones: "12" }
    }
  ];

  return (
    <section id="asura" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ASURA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Your Virtual Building Engineer - AI-powered assistant that monitors, optimizes, and maintains your building systems 24/7
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* ASURA Avatar and Info */}
          <div className="space-y-8">
            <div className="relative">
              {/* ASURA Avatar */}
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse" />
                <div className="absolute inset-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border-2 border-purple-500/50 flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
                {/* Floating indicators */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
              </div>
            </div>

            {/* ASURA Capabilities */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Real-time Monitoring", desc: "24/7 system surveillance" },
                { icon: Shield, title: "Predictive Analytics", desc: "Issue prevention" },
                { icon: Wrench, title: "Smart Maintenance", desc: "Automated diagnostics" },
                { icon: MessageCircle, title: "Natural Language", desc: "Easy communication" }
              ].map((capability, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-4 hover:border-purple-500/50 transition-colors">
                  <capability.icon className="text-purple-400 mb-2" size={24} />
                  <h4 className="text-white font-semibold text-sm mb-1">{capability.title}</h4>
                  <p className="text-gray-400 text-xs">{capability.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Try ASURA Demo</h3>
            
            {/* Demo Questions */}
            <div className="space-y-3">
              {demoQuestions.map((demo, index) => (
                <Button
                  key={index}
                  variant={activeDemo === index ? "default" : "outline"}
                  className={`w-full text-left justify-start p-4 h-auto ${
                    activeDemo === index 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                      : "border-slate-700 text-gray-300 hover:border-purple-500/50"
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <MessageCircle className="mr-3 flex-shrink-0" size={16} />
                  <span className="text-sm">{demo.question}</span>
                </Button>
              ))}
            </div>

            {/* Demo Response */}
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm flex-shrink-0">
                  A
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {demoQuestions[activeDemo].answer}
                  </p>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(demoQuestions[activeDemo].metrics).map(([key, value]) => (
                      <div key={key} className="bg-slate-900/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-purple-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Chat with ASURA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
