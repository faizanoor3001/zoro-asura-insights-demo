
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Server, CheckCircle } from "lucide-react";

export const SecurityPrivacy = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data transmitted between your building and our servers is encrypted using AES-256 encryption",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      description: "Every device and connection is verified before accessing your building data",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Private Data Processing",
      description: "Your building data never leaves your premises for processing - AI runs locally",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Server,
      title: "Secure Cloud Storage",
      description: "Data backups stored in SOC 2 Type II certified data centers with 99.9% uptime",
      color: "from-orange-500 to-red-500"
    }
  ];

  const certifications = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Compliant",
    "CCPA Compliant",
    "HIPAA Ready"
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Security & Privacy First
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security protecting your building data and operations
          </p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:animate-pulse`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Data Flow Diagram */}
        <Card className="bg-slate-800/30 border-slate-700/30 p-8 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Secure Data Flow</h3>
          
          <div className="relative">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
              {/* Building Sensors */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-2xl">🏢</div>
                </div>
                <h4 className="text-white font-semibold mb-2">Building Sensors</h4>
                <p className="text-gray-400 text-sm text-center">Encrypted data collection</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-px lg:w-16 h-16 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-blue-500 to-purple-500 relative">
                  <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-400 bg-slate-800 p-1 rounded-full" size={20} />
                </div>
              </div>

              {/* Edge Processing */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-2xl">🧠</div>
                </div>
                <h4 className="text-white font-semibold mb-2">Edge AI Processing</h4>
                <p className="text-gray-400 text-sm text-center">Local analysis & privacy</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col lg:flex-row items-center">
                <div className="w-px lg:w-16 h-16 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-purple-500 to-green-500 relative">
                  <Shield className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-400 bg-slate-800 p-1 rounded-full" size={20} />
                </div>
              </div>

              {/* Secure Cloud */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <div className="text-2xl">☁️</div>
                </div>
                <h4 className="text-white font-semibold mb-2">Secure Cloud</h4>
                <p className="text-gray-400 text-sm text-center">Encrypted backup & insights</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Industry Certifications</h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-6 py-4 flex items-center space-x-3 hover:border-blue-500/50 transition-colors"
              >
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-white font-medium">{cert}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/20">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-blue-400">Data Ownership Promise:</strong> Your building data belongs to you. 
              We never sell, share, or use your data for any purpose other than optimizing your building's performance. 
              You can export or delete your data at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
