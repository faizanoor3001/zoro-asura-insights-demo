
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    buildingSize: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Demo request submitted! Our team will contact you within 24 hours.");
    setFormData({ name: "", email: "", company: "", buildingSize: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ASURA CTA Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
            <div className="text-3xl">🤖</div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Meet <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ASURA</span>?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let ASURA analyze your building and show you exactly how much you can save. 
            Book a personalized demo and see the future of building management.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">32%</div>
              <div className="text-sm text-gray-400">Avg Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">96%</div>
              <div className="text-sm text-gray-400">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">AI Monitoring</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Get Started Today</h3>
            
            <div className="space-y-4">
              <Card className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Book a Live Demo</h4>
                    <p className="text-gray-300 text-sm">See ASURA in action with your building data</p>
                  </div>
                  <ArrowRight className="text-purple-400" size={20} />
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Chat with ASURA</h4>
                    <p className="text-gray-300 text-sm">Try our AI assistant right now</p>
                  </div>
                  <ArrowRight className="text-blue-400" size={20} />
                </div>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50 p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-1">Speak with Expert</h4>
                    <p className="text-gray-300 text-sm">Call (555) 123-ZORO for immediate assistance</p>
                  </div>
                  <ArrowRight className="text-green-400" size={20} />
                </div>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 pt-8 border-t border-slate-700">
              <h4 className="text-lg font-semibold text-white">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} />
                  <span>hello@zoroenergy.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} />
                  <span>(555) 123-ZORO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <Card className="bg-slate-800/50 border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Request Your Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-900/50 border-slate-600 text-white"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-slate-900/50 border-slate-600 text-white"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-slate-900/50 border-slate-600 text-white"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Building Size (sq ft)</label>
                  <Input
                    name="buildingSize"
                    value={formData.buildingSize}
                    onChange={handleInputChange}
                    className="bg-slate-900/50 border-slate-600 text-white"
                    placeholder="100,000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-900/50 border-slate-600 text-white min-h-[100px]"
                  placeholder="Tell us about your building management challenges..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-lg font-semibold"
              >
                Request Demo with ASURA
              </Button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy. We'll never spam you.
              </p>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            ZORO Energy
          </div>
          <p className="text-gray-400 text-sm">
            Empowering smarter buildings for a greener future
          </p>
        </div>
      </div>
    </section>
  );
};
