
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Zap, DollarSign, Leaf, Wrench, Thermometer, Users } from "lucide-react";

export const DashboardPreview = () => {
  const [selectedZone, setSelectedZone] = useState("all");
  const [timeframe, setTimeframe] = useState("today");

  // Sample data
  const energyData = [
    { time: "00:00", usage: 45, baseline: 60 },
    { time: "06:00", usage: 52, baseline: 65 },
    { time: "12:00", usage: 38, baseline: 58 },
    { time: "18:00", usage: 41, baseline: 62 },
    { time: "24:00", usage: 35, baseline: 55 },
  ];

  const zonesData = [
    { name: "Zone A", efficiency: 96, temp: 72, occupancy: 85 },
    { name: "Zone B", efficiency: 94, temp: 71, occupancy: 92 },
    { name: "Zone C", efficiency: 98, temp: 73, occupancy: 67 },
    { name: "Zone D", efficiency: 91, temp: 70, occupancy: 78 },
  ];

  const emissionsData = [
    { name: "Saved", value: 67, color: "#10b981" },
    { name: "Used", value: 33, color: "#64748b" },
  ];

  const metrics = [
    {
      title: "Energy Saved",
      value: "1,247 kWh",
      change: "-32%",
      icon: Zap,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Cost Savings",
      value: "$186",
      change: "+28%",
      icon: DollarSign,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "CO₂ Reduced",
      value: "0.85 tons",
      change: "-45%",
      icon: Leaf,
      color: "text-emerald-400",
      bgColor: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Equipment Health",
      value: "96%",
      change: "+2%",
      icon: Wrench,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="dashboard" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Interactive Dashboard Preview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and control at your fingertips
          </p>
        </div>

        {/* Dashboard Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex gap-2">
            {["all", "zone-a", "zone-b", "zone-c", "zone-d"].map((zone) => (
              <Button
                key={zone}
                variant={selectedZone === zone ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedZone(zone)}
                className={selectedZone === zone ? "bg-gradient-to-r from-cyan-600 to-blue-600" : "border-slate-700"}
              >
                {zone === "all" ? "All Zones" : `Zone ${zone.split("-")[1].toUpperCase()}`}
              </Button>
            ))}
          </div>
          
          <div className="flex gap-2">
            {["today", "week", "month"].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeframe(period)}
                className={timeframe === period ? "bg-gradient-to-r from-cyan-600 to-blue-600" : "border-slate-700"}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`bg-gradient-to-r ${metric.bgColor} rounded-lg p-3 w-fit mb-4`}>
                <metric.icon className={`${metric.color}`} size={24} />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-400">{metric.title}</h3>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold text-white">{metric.value}</span>
                  <span className={`text-sm font-medium ${metric.change.startsWith('+') || metric.change.startsWith('-') && !metric.change.includes('-0') ? metric.color : 'text-gray-400'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="energy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600">
              Energy
            </TabsTrigger>
            <TabsTrigger value="zones" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600">
              Zones
            </TabsTrigger>
            <TabsTrigger value="environment" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-600 data-[state=active]:to-blue-600">
              Environment
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Energy Usage vs Baseline</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e293b', 
                        border: '1px solid #475569',
                        borderRadius: '8px'
                      }}
                    />
                    <Line type="monotone" dataKey="baseline" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="usage" stroke="#06b6d4" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Emissions Reduction</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={emissionsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {emissionsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                    <span className="text-sm text-gray-300">Saved (67%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-slate-500 rounded-full" />
                    <span className="text-sm text-gray-300">Used (33%)</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="energy">
            <Card className="bg-slate-800/50 border-slate-700/50 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Energy Consumption by Hour</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e293b', 
                      border: '1px solid #475569',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="usage" fill="url(#energyGradient)" />
                  <defs>
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="zones">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zonesData.map((zone, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-cyan-500/50 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-4">{zone.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="text-yellow-400" size={16} />
                        <span className="text-sm text-gray-300">Efficiency</span>
                      </div>
                      <span className="text-lg font-bold text-yellow-400">{zone.efficiency}%</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Thermometer className="text-blue-400" size={16} />
                        <span className="text-sm text-gray-300">Temperature</span>
                      </div>
                      <span className="text-lg font-bold text-blue-400">{zone.temp}°F</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="text-green-400" size={16} />
                        <span className="text-sm text-gray-300">Occupancy</span>
                      </div>
                      <span className="text-lg font-bold text-green-400">{zone.occupancy}%</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="environment">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Environmental Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">CO₂ Emissions Saved</div>
                      <div className="text-2xl font-bold text-emerald-400">0.85 tons</div>
                    </div>
                    <Leaf className="text-emerald-400" size={32} />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">Equivalent Trees Planted</div>
                      <div className="text-2xl font-bold text-green-400">38 trees</div>
                    </div>
                    <div className="text-2xl">🌳</div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400">Carbon Footprint Reduction</div>
                      <div className="text-2xl font-bold text-cyan-400">45%</div>
                    </div>
                    <div className="text-2xl">🌍</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Air Quality Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: "PM2.5", value: "8 µg/m³", status: "Good", color: "text-green-400" },
                    { metric: "CO₂ Levels", value: "420 ppm", status: "Optimal", color: "text-blue-400" },
                    { metric: "Humidity", value: "45%", status: "Ideal", color: "text-cyan-400" },
                    { metric: "VOCs", value: "Low", status: "Excellent", color: "text-emerald-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-900/30 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-400">{item.metric}</div>
                        <div className="text-lg font-semibold text-white">{item.value}</div>
                      </div>
                      <div className={`text-sm font-medium ${item.color}`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-3">
            View Full Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};
