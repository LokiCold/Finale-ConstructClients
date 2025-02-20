import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useRef } from 'react';
import TabsSection from "./components/TabsSection";
import { ArrowRight, Video, Star, Play, Shield, Users2, Settings, Rocket, TrendingUp } from 'lucide-react';
import Navbar from "./components/Navbar";
import { useScrollReveal } from './hooks/useScrollReveal';
import { openCalendlyPopup } from './utils/calendly';
import BookingSection from './components/BookingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import About from './components/About';

function App() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const heroRef = useScrollReveal();
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVideo = () => {
    videoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      text: "Working with ConstructClients.ai transformed our business. We've seen a 300% increase in high-value leads.",
      author: "Michael Roberts",
      role: "CEO, Elite Renovations",
      isVideo: false
    },
    {
      text: "The automated system has saved us countless hours and helped us focus on what we do best - creating beautiful spaces.",
      author: "Sarah Chen",
      role: "Director, Modern Spaces",
      isVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=800"
    },
    {
      text: "Our ROI has been incredible. The quality of leads and the automated systems have revolutionized our operations.",
      author: "James Wilson",
      role: "Owner, Wilson Contractors",
      isVideo: false
    },
    {
      text: "The AI appointment setter has been a game-changer. We're booking more high-ticket projects than ever before.",
      author: "Emma Thompson",
      role: "Principal, Luxury Homes Co.",
      isVideo: true,
      videoThumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800"
    },
    {
      text: "Finally, a system that delivers what it promises. Our renovation business has grown 4x in just 6 months.",
      author: "David Martinez",
      role: "Founder, Elite Renovations",
      isVideo: false
    }
  ];

  return (
    <Router>
      <div className="min-h-screen text-white">
        <Navbar 
          scrollToVideo={scrollToVideo} 
          scrollToBooking={scrollToBooking} 
          scrollToTestimonials={scrollToTestimonials}
        />
        
        {/* Hero Section */}
        <header ref={heroRef} className="reveal-element relative min-h-screen flex items-center justify-center bg-[#38071e]">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/Construction.png" 
              alt="Construction background" 
              className="w-full h-full object-cover opacity-85"
            />
            <div 
              className="absolute inset-0" 
              style={{
                background: 'linear-gradient(to bottom, rgba(56, 7, 30, 0.4), rgba(42, 5, 23, 0.55))'
              }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 mt-48">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
                Luxury Renovation Clients on Autopilot
                <br />
                <span className="block text-4xl md:text-5xl lg:text-6xl my-2">
                  –
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl">
                  More Projects, Zero Hassle.
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-[#ec9611] max-w-3xl mx-auto animate-fadeIn">
                We bridge the gap between no clients and booked appointments for high-end <span className="font-bold">home Renovation</span> & <span className="font-bold">Construction companies</span>.{' '}
                <span className="curved-underline">UK-based only</span>
              </p>
              <div className="flex justify-center gap-6 animate-fadeIn mb-24">
                <button 
                  onClick={openCalendlyPopup}
                  className="bg-[#ec9611] hover:bg-[#d88610] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  Book a Free Intro Call
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Floating Guarantee Text */}
              <div className="max-w-3xl mx-auto mt-24 text-center animate-float relative">
                <div className="absolute inset-0 bg-glow rounded-3xl -z-10"></div>
                <div className="relative z-10 p-8">
                  <h3 className="text-3xl font-bold mb-4 text-glow">
                    The Only Risk-Free Offer in the Industry!
                  </h3>
                  <p className="gradient-text text-xl mb-2 animate-pulse">
                    We guarantee results—or we work for FREE until we deliver.
                  </p>
                  <p className="text-lg text-white/80">
                    No excuses. No fluff. Just booked appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Tabs Section */}
        <TabsSection />

        {/* Video Feature Section - Moved here */}
        <section ref={videoRef} className="py-20 scroll-mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">
              How We <span className="text-[#ec9611]">Fill the Gap</span>
            </h2>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Watch how we transform renovation businesses with our proven system
            </p>
            <div className="video-feature max-w-4xl mx-auto rounded-xl p-8">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[#38071e]/50 backdrop-blur-sm flex items-center justify-center cursor-pointer group">
                  <div className="w-20 h-20 rounded-full bg-[#ec9611] flex items-center justify-center transform transition-all group-hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000" 
                  alt="Process Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef}>
          <TestimonialsSection />
        </section>

        {/* Process Section - Moved here */}
        <section className="py-20 bg-[#2a0517]/80 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">
              Our Process: <span className="text-[#ec9611]">Getting Started is Simple</span>
            </h2>
            <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
              We handle everything for you—from strategy to scaling—so you can focus on running your business.
            </p>
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { icon: Users2, title: 'Discovery Call', desc: 'We dive deep into your business, goals, and challenges to craft a tailored client acquisition strategy.' },
                { icon: Settings, title: 'Onboarding & Setup', desc: 'We integrate your business into our system, setting up everything needed before launch—including your website, SEO, and AI-powered automation.' },
                { icon: Rocket, title: 'Launch & Go Live', desc: 'Within 20 days, we finalize your high-converting ad creatives, launch targeted ad campaigns, and activate your AI appointment setter to start booking calls.' },
                { icon: TrendingUp, title: 'Scale & Dominate', desc: 'We optimize, refine, and scale your results—turning your business into a client-generating machine.' }
              ].map((step, index) => (
                <div key={index} className="process-step text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#ec9611]/10 rounded-full flex items-center justify-center relative glow-step">
                    <step.icon className="w-10 h-10 text-[#ec9611]" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-medium text-[#ec9611] glowing-text">
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <BookingSection />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;