import { useRef } from 'react';
import { ArrowRight, Play, Users2, Settings, Rocket, TrendingUp } from 'lucide-react';
import Navbar from "../components/Navbar";
import TabsSection from "../components/TabsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingSection from "../components/BookingSection";
import { useScrollReveal } from '../hooks/useScrollReveal';
import { openCalendlyPopup } from '../utils/calendly';
import FAQSection from '../components/FAQSection';

const Home = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const heroRef = useScrollReveal();
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    tabsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar 
        scrollToVideo={scrollToVideo} 
        scrollToBooking={openCalendlyPopup} 
        scrollToTestimonials={scrollToTestimonials}
        scrollToFAQ={scrollToFAQ}
      />
      
      {/* Hero Section */}
      <header ref={heroRef} className="reveal-element relative min-h-[80vh] flex items-center justify-center bg-[#38071e] z-0 pt-4 md:pt-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 opacity-40 flex items-center justify-center">
          <img 
            src="/Untitled design.svg" 
            alt="Background" 
            className="w-auto min-w-[120%] md:min-w-[110%] h-auto min-h-[100%] object-cover object-center"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(236, 150, 17, 0.2))'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 mt-16 lg:mt-20">
          <div className="flex flex-col items-center md:items-start max-w-3xl mx-auto md:mx-0">
            {/* Text Content */}
            <div className="text-center md:text-left relative pt-4 md:pt-8 z-20">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fadeIn relative">
                <span className="bg-[#38071e]/40 px-2 py-1 rounded backdrop-blur-sm inline-block">
                  Luxury Renovation Clients on Autopilot
                </span>
                <div className="h-4"></div>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-2">
                  –
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-[#38071e]/40 px-2 py-1 rounded backdrop-blur-sm inline-block">
                  More Projects, Zero Hassle.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-[#ec9611] animate-fadeIn relative bg-[#38071e]/60 px-2 py-1 rounded backdrop-blur-sm inline-block">
                We bridge the gap between no clients and booked appointments for high-end <span className="font-bold">home Renovation</span> & <span className="font-bold">Construction companies</span>.{' '}
                <span className="curved-underline">US-based only</span>
              </p>
              
              {/* Book My Call Button */}
              <div className="flex justify-center md:justify-start gap-6 animate-fadeIn mb-12 md:mb-24 relative">
                <button 
                  onClick={openCalendlyPopup}
                  className="bg-[#ec9611] hover:bg-[#d88610] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-base rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg z-20"
                >
                  Book My Free Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Floating Guarantee Text */}
              <div className="w-full max-w-none sm:max-w-2xl animate-float relative z-10">
                <div className="absolute inset-0 bg-glow rounded-3xl -z-10"></div>
                <div className="relative p-4 sm:p-8 bg-[#38071e]/70 backdrop-blur-md rounded-3xl shadow-xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-glow text-center md:text-left">
                    The Only Risk-Free Offer in the Industry!
                  </h3>
                  <p className="gradient-text text-base sm:text-lg md:text-xl mb-2 animate-pulse text-center md:text-left">
                    We guarantee results—or we work for FREE until we deliver.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-white/80 text-center md:text-left">
                    No excuses. No fluff. Just booked appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Problem & Video Section */}
      <section ref={videoRef} className="py-20 scroll-mt-16 bg-[#2a0517]/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Video */}
            <div className="video-feature rounded-xl p-6">
              <h2 className="text-4xl font-bold mb-4">
                How We <span className="text-[#ec9611]">Fill the Gap</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Watch how we transform renovation businesses with our proven system
              </p>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <wistia-player 
                  media-id="0804d3mffu" 
                  aspect="1.7777777777777777"
                  className="w-full h-full"
                ></wistia-player>
              </div>
            </div>

            {/* Right side - Problem Statement */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  The Hidden Problem <span className="text-[#ec9611]">Stealing Your Time, Money & Future</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Does This Sound Familiar?
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  <p className="text-gray-300">
                    <strong className="text-white">You Rely on Referrals</strong> – You tell yourself "word of mouth is enough," but deep down, you know it's not a real growth strategy. What happens when the calls stop coming?
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  <p className="text-gray-300">
                    <strong className="text-white">You've Tried Ads Before, But They Flopped</strong> – Maybe an agency ran some campaigns, but they burned through your budget without real results. You can't afford to keep guessing.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Leads That Waste Your Time</strong> – You're stuck dealing with price shoppers and indecisive prospects instead of serious, high-paying clients ready to move forward.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-xl flex-shrink-0">❌</span>
                  <p className="text-gray-300">
                    <strong className="text-white">Appointments That Never Show</strong> – You finally book a lead… only for them to ghost you at the last minute. That's time and money down the drain.
                  </p>
                </div>

                <div className="flex items-start gap-3 pt-4">
                  <span className="text-[#ec9611] text-xl flex-shrink-0">⏳</span>
                  <p className="text-gray-300">
                    The truth is, most renovation companies don't see the real problem—they think "things will pick up," but months pass, and nothing changes. Every day you wait, you're losing potential clients to competitors who have a system in place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section ref={tabsRef}>
        <TabsSection />
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef}>
        <TestimonialsSection />
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#2a0517]/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Process: <span className="text-[#ec9611]">Getting Started is Simple</span>
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            We handle everything for you—from strategy to scaling—so you can focus on running your business.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Users2, 
                title: 'Book/Schedule', 
                desc: 'We dive deep into your challenges, assess your current marketing efforts, and qualify if you\'re the right fit. If so, we show you exactly how we\'ll scale your business with our proven system.' 
              },
              { 
                icon: Settings, 
                title: 'We\'ll Get to Work', 
                desc: 'You fill out a form, and we handle the rest—tracking, automation, and high-converting ads. Once everything is set, we launch and start bringing in leads.' 
              },
              { 
                icon: Rocket, 
                title: 'Happily Ever After!', 
                desc: 'Your calendar fills with eager, qualified clients on autopilot—saving you time, reducing stress, and letting you focus on what truly matters.' 
              }
            ].map((step, index) => (
              <div key={index} className="process-step text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#ec9611]/10 rounded-full flex items-center justify-center relative glow-step">
                  <step.icon className="w-10 h-10 text-[#ec9611]" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[#ec9611] glowing-text">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef}>
        <FAQSection />
      </section>

      {/* Booking Section */}
      <BookingSection />
    </div>
  );
};

export default Home; 