import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhychooseUs from "@/components/WhychooseUs";
import MovingCards from "@/components/MovingCards";
import { CardHover } from "@/components/CardHover";
import AnimatedTooltipPreview from "@/components/AnimatedTooltipPreview";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black antialiased">
      <HeroSection />
      <FeaturedCourses />
      <WhychooseUs/>
      <MovingCards/>
      <CardHover/>
      <GoogleGeminiEffectDemo/>
      <AnimatedTooltipPreview/>
      <Footer/>
    </main>
  );
}
