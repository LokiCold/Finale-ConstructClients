import React, { useState } from 'react';
import { Globe, BarChart3, Calendar, Megaphone, Search, Video } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type Tab = {
  id: string;
  icon: React.ReactNode;
  title: string;
  header: string;
  description: string;
  image: string;
};

const tabs: Tab[] = [
  {
    id: 'ai',
    icon: <Calendar className="w-5 h-5" />,
    title: 'AI Appointment Setter',
    header: 'Fully Automate Bookings & Save 6-8+ Hours Weekly ⏳',
    description: `Our AI-powered system warms up, pre-qualifies, and books high-value renovation clients directly into your calendar—eliminating manual sales calls and no-shows.

Why High-End Renovation Companies Love This:

✅ Save 6-8+ hours per week – No more chasing leads or confirming appointments.

✅ 2.5x Higher Scheduling Rate – AI engages, qualifies, and books clients with zero drop-off.

✅ No Need for Sales Reps – AI sounds human, handles objections, and knows your business inside out.

✅ 100% Automated Follow-Ups – AI double-dial calls, SMS, and email reminders to ensure clients actually show up.

🚀 Traditional sales teams lose 30-35% of bookings—our AI automates 99% of scheduling with no drop-off. Let AI fill your calendar while you focus on high-value projects!`,
    image: '/ai.jpg'
  },
  {
    id: 'website',
    icon: <Globe className="w-5 h-5" />,
    title: 'High-Converting Website & SEO',
    header: 'Boost Your Online Presence with Expert SEO',
    description: `Turn Visitors Into Booked Appointments 🚀

We build conversion-focused websites and optimize SEO to drive more leads and bookings. Plus, we offer seamless website migrations to better platforms—something most agencies don't do.

Why Our Websites Outperform Others:

✅ Migrate to Webflow or Framer – Ditch outdated platforms like WordPress and gain full control without relying on developers.

✅ Save 40-60% on Routine Web Development – No need for constant design & maintenance outsourcing.

✅ Cut 20-30% in Update & Maintenance Costs – No more SEO-breaking WordPress updates.

✅ Reduce 15-25% on Hosting & Infrastructure – Faster, more efficient sites with lower long-term costs.

✅ SEO That Drives Leads – Optimized for search rankings and conversion, ensuring more prospects find and book you.

✅ High-Converting VSLs – Engaging video sales letters that address pain points, build trust, and position your business as the only solution—turning viewers into booked clients.

💰 Most agencies keep clients dependent on them for ongoing web work—we help you break free. Get a high-performing site you control and watch your leads grow!`,
    image: '/construction_website.jpg'
  },
  {
    id: 'tracking',
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Full-Tracking-System',
    header: 'Know Exactly Where Your Leads Come From',
    description: `Most agencies just deliver leads—we deliver tracked, qualified, and converted clients with full automation. Our system organizes every lead, tracks ROI, and streamlines follow-ups, so no opportunity is lost.

📊 100% Lead Tracking – Know exactly where leads come from & their ROI (5.8x average).

📅 Smart CRM & Calendar – Automate bookings & manage clients in one place.

🔗 Seamless Ad-to-Sale Flow – From first click to paid client—fully optimised.

🚀 Most agencies stop at leads—we turn them into revenue.`,
    image: '/handsome-young-man-working-laptop-smiling-while-sitting-sidewalk-cafe_231208-12079.avif'
  },
  {
    id: 'ads',
    icon: <Megaphone className="w-5 h-5" />,
    title: 'FB & Google Ads',
    header: 'Targeted Ads That Reach Your Ideal Clients',
    description: `We don't just run ads—we engineer campaigns that attract affluent homeowners looking for premium renovations. With strategic targeting, battle-tested ad creatives, and high-converting video content, we turn clicks into booked projects.

Why We Outperform Other Agencies:

✅ 5.8x ROI – More high-value projects, less wasted ad spend.

✅ Precision Targeting – Reach homeowners ready to invest in luxury renovations.

✅ Proven Ad Frameworks – We leverage thousands of successful Renovation & Construction campaigns to generate more clients for less ad spend.

✅ Google Review Campaigns – Boost credibility & SEO with automated client reviews.

✅ Elite UGC Video Ads 🎥 – High-converting content crafted by top-tier creators that outperforms static images.

💰 Stop wasting ad spend—get real leads that convert. Let's scale your business today`,
    image: '/FB.png'
  }
];

const TabsSection: React.FC = () => {
  const headerRef = useScrollReveal();
  const tabsRef = useScrollReveal(0.2);
  const contentRef = useScrollReveal(0.3);
  const imageRef = useScrollReveal(0.4);
  const textRef = useScrollReveal(0.5);
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(tab => tab.id === activeTab)!;

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-20 bg-[#2a0517]/90 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 reveal-element">
          <h2 className="text-4xl font-bold mb-4">
            The Proven <span className="text-[#ec9611]">4-Step System</span> to Break Free & Scale Your Business
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            A proven framework that consistently delivers premium renovation leads and booked appointments
          </p>
        </div>

        {/* Desktop Tabs */}
        <div ref={tabsRef} className="hidden md:flex justify-center space-x-2 md:space-x-4 mb-12 sticky top-20 z-50 bg-[#2a0517]/95 py-2 md:py-4 backdrop-blur-sm reveal-element">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                flex items-center px-2 md:px-6 py-2 md:py-3 rounded-lg 
                transition-all duration-300 ease-in-out
                transform hover:scale-105 active:scale-95
                text-sm md:text-base
                ${activeTab === tab.id 
                  ? 'bg-[#ec9611] text-white shadow-lg' 
                  : 'bg-[#38071e] text-white hover:bg-[#ec9611]/20'
                }
                focus:outline-none focus:ring-2 focus:ring-[#ec9611]/50
                cursor-pointer select-none relative
              `}
            >
              <div className="flex items-center space-x-1 md:space-x-2">
                {tab.icon}
                <span className="whitespace-nowrap font-medium">{tab.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Tabs */}
        <div className="block md:hidden mb-8 w-full fixed top-[5rem] left-0 right-0 z-[99] bg-[#2a0517] py-2 shadow-lg sticky top-20 z-50 bg-[#2a0517]/95 py-2 backdrop-blur-sm">
        {/* Add spacing to compensate for fixed tabs on mobile */}
        <div className="block md:hidden h-16"></div>
          <div className="grid grid-cols-2 gap-2 px-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  flex items-center px-3 py-2 rounded-lg w-full
                  transition-all duration-300 ease-in-out
                  active:scale-95 select-none
                  text-xs
                  ${activeTab === tab.id 
                    ? 'bg-[#ec9611] text-white shadow-lg' 
                    : 'bg-[#38071e] text-white hover:bg-[#ec9611]/20'
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#ec9611]/50
                  cursor-pointer break-words
                `}
              >
                <div className="flex items-center space-x-1 w-full">
                  {tab.icon}
                  <span className="font-medium text-left flex-1">{tab.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          {/* Image Section */}
          <div ref={imageRef} className="order-1 md:order-none reveal-element">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl transition-all duration-500">
              <img 
                src={activeContent.image} 
                alt={activeContent.title} 
                className="w-full h-full object-cover transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
          
          {/* Content Section */}
          <div ref={textRef} className="space-y-6 reveal-element">
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              {activeContent.header}
            </h3>
            <div className="prose prose-invert max-w-none">
              {activeContent.description.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('✅') || paragraph.startsWith('📊') || 
                    paragraph.startsWith('📅') || paragraph.startsWith('🔗') || 
                    paragraph.startsWith('🚀')) {
                  const [mainPoint, ...rest] = paragraph.split('–');
                  return (
                    <p key={index} className="text-white leading-relaxed mb-4">
                      <span className="glow-text font-bold text-white">
                        {mainPoint.trim()}
                      </span>
                      {rest.length > 0 && (
                        <>
                          {' – '}
                          <span className="text-white">
                            {rest.join('–')}
                          </span>
                        </>
                      )}
                    </p>
                  );
                }
                return (
                  <p key={index} className={`
                    text-white leading-relaxed mb-4
                    ${paragraph.includes('💰') ? 'glow-text font-bold' : ''}
                    ${paragraph.includes('Why Our Websites Outperform Others:') || 
                      paragraph.includes('Why High-End Renovation Companies Love This:') ||
                      paragraph.includes('Why We Outperform Other Agencies:')
                      ? 'font-bold text-2xl text-[#ec9611] mt-8 mb-6' : ''}
                  `}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection; 
