
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TrendingDown, DollarSign, Leaf, Zap, Building } from "lucide-react";

export const ImpactResults = () => {
  const [isBeforeView, setIsBeforeView] = useState(true);
  const [buildingSize, setBuildingSize] = useState([100000]); // sq ft
  const [energySavings, setEnergySavings] = useState(0);
  const [costSavings, setCostSavings] = useState(0);
  const [co2Reduction, setCo2Reduction] = useState(0);

  // Calculate savings based on building size
  useEffect(() => {
    const sqft = buildingSize[0];
    const baseEnergyPerSqFt = 0.15; // kWh per sq ft per day
    const savingsRate = 0.32; // 32% average savings
    
    const dailyEnergy = sqft * baseEnergyPerSqFt * savingsRate;
    const annualEnergy = dailyEnergy * 365;
    const annualCost = annualEnergy * 0.12; // $0.12 per kWh
    const annualCO2 = annualEnergy * 0.0004; // tons CO2 per kWh
    
    setEnergySavings(Math.round(annualEnergy));
    setCostSavings(Math.round(annualCost));
    setCo2Reduction(Math.round(annualCO2 * 10) / 10);
  }, [buildingSize]);

  const beforeAfterData = {
    before: {
      energyUse: "High & Inefficient",
      comfortScore: "72%",
      maintenanceIssues: "Reactive",
      operatingCosts: "Above Market",
      carbonFootprint: "Standard",
      bgColor: "from-red-900/20 to-orange-900/20",
      borderColor: "border-red-500/30"
    },
    after: {
      energyUse: "Optimized & Smart",
      comfortScore: "96%",
      maintenanceIssues: "Predictive",
      operatingCosts: "32% Reduced",
      carbonFootprint: "45% Lower",
      bgColor: "from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30"
    }
  };

  const currentData = isBeforeView ? beforeAfterData.before : beforeAfterData.after;

  const realTimeCounters = [
    { label: "Buildings Optimized", value: 247, suffix: "" },
    { label: "Energy Saved (MWh)", value: 15847, suffix: "" },
    { label: "Cost Savings", value: 2847293, suffix: "", prefix: "$" },
    { label: "CO₂ Prevented (tons)", value: 8925, suffix: "" }
  ];

  const [counters, setCounters] = useState(realTimeCounters.map(() => 0));

  useEffect(() => {
    const intervals = realTimeCounters.map((target, index) => {
      return setInterval(() => {
        setCounters(prev => {
          const newCounters = [...prev];
          if (newCounters[index] < target.value) {
            newCounters[index] = Math.min(newCounters[index] + Math.ceil(target.value / 100), target.value);
          }
          return newCounters;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="results" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Impact & Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations happening every day with ZORO Energy
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 rounded-lg p-2 flex">
              <Button
                variant={isBeforeView ? "default" : "ghost"}
                className={`px-6 ${isBeforeView ? "bg-gradient-to-r from-red-600 to-orange-600" : ""}`}
                onClick={() => setIsBeforeView(true)}
              >
                Before ZORO
              </Button>
              <Button
                variant={!isBeforeView ? "default" : "ghost"}
                className={`px-6 ${!isBeforeView ? "bg-gradient-to-r from-green-600 to-emerald-600" : ""}`}
                onClick={() => setIsBeforeView(false)}
              >
                After ZORO
              </Button>
            </div>
          </div>

          <Card className={`bg-gradient-to-r ${currentData.bgColor} border ${currentData.borderColor} p-8 transition-all duration-500`}>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <Zap className={`mx-auto mb-3 ${isBeforeView ? 'text-red-400' : 'text-green-400'}`} size={32} />
                <h4 className="text-white font-semibold mb-2">Energy Use</h4>
                <p className={`text-sm ${isBeforeView ? 'text-red-300' : 'text-green-300'}`}>{currentData.energyUse}</p>
              </div>

              <div className="text-center">
                <Building className={`mx-auto mb-3 ${isBeforeView ? 'text-red-400' : 'text-green-400'}`} size={32} />
                <h4 className="text-white font-semibold mb-2">Comfort Score</h4>
                <p className={`text-sm ${isBeforeView ? 'text-red-300' : 'text-green-300'}`}>{currentData.comfortScore}</p>
              </div>

              <div className="text-center">
                <TrendingDown className={`mx-auto mb-3 ${isBeforeView ? 'text-red-400' : 'text-green-400'}`} size={32} />
                <h4 className="text-white font-semibold mb-2">Maintenance</h4>
                <p className={`text-sm ${isBeforeView ? 'text-red-300' : 'text-green-300'}`}>{currentData.maintenanceIssues}</p>
              </div>

              <div className="text-center">
                <DollarSign className={`mx-auto mb-3 ${isBeforeView ? 'text-red-400' : 'text-green-400'}`} size={32} />
                <h4 className="text-white font-semibold mb-2">Operating Costs</h4>
                <p className={`text-sm ${isBeforeView ? 'text-red-300' : 'text-green-300'}`}>{currentData.operatingCosts}</p>
              </div>

              <div className="text-center">
                <Leaf className={`mx-auto mb-3 ${isBeforeView ? 'text-red-400' : 'text-green-400'}`} size={32} />
                <h4 className="text-white font-semibold mb-2">Carbon Footprint</h4>
                <p className={`text-sm ${isBeforeView ? 'text-red-300' : 'text-green-300'}`}>{currentData.carbonFootprint}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Savings Calculator */}
        <Card className="bg-slate-800/50 border-slate-700/50 p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Calculate Your Potential Savings</h3>
          
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Building Size: {buildingSize[0].toLocaleString()} sq ft
              </label>
              <Slider
                value={buildingSize}
                onValueChange={setBuildingSize}
                max={500000}
                min={10000}
                step={10000}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-400">{energySavings.toLocaleString()}</div>
                <div className="text-xs text-gray-400">kWh Saved/Year</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <div className="text-2xl font-bold text-green-400">${costSavings.toLocaleString()}</div>
                <div className="text-xs text-gray-400">Cost Savings/Year</div>
              </div>
              <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-400">{co2Reduction}</div>
                <div className="text-xs text-gray-400">Tons CO₂ Saved/Year</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Real-time Global Impact */}
        <Card className="bg-slate-800/30 border-slate-700/30 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Global Impact - Live Counter
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realTimeCounters.map((item, index) => (
              <div key={index} className="text-center p-6 bg-slate-900/50 rounded-lg">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-2">
                  {item.prefix || ""}{counters[index].toLocaleString()}{item.suffix}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 text-sm">
              🌍 Numbers update in real-time as buildings worldwide benefit from ZORO Energy
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
