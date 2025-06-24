
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { AsuraSection } from "@/components/AsuraSection";
import { PredictiveIntelligence } from "@/components/PredictiveIntelligence";
import { DashboardPreview } from "@/components/DashboardPreview";
import { SecurityPrivacy } from "@/components/SecurityPrivacy";
import { ImpactResults } from "@/components/ImpactResults";
import { CallToAction } from "@/components/CallToAction";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      <Hero />
      <HowItWorks />
      <AsuraSection />
      <PredictiveIntelligence />
      <DashboardPreview />
      <SecurityPrivacy />
      <ImpactResults />
      <CallToAction />
    </div>
  );
};

export default Index;
