import React, { useState } from 'react';
import { Globe, BarChart3, Calendar, Megaphone } from 'lucide-react';

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
    id: 'website',
    icon: <Globe className="w-5 h-5" />,
    title: 'High-Converting Website & SEO',
    header: 'Boost Your Online Presence with Expert SEO',
    description: `Turn Visitors Into Booked Appointments 🚀\n\nWe build conversion-focused websites and optimize SEO to drive more leads and bookings.`,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 'tracking',
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Full-Tracking-System',
    header: 'Know Exactly Where Your Leads Come From',
    description: `Most agencies just deliver leads—we deliver tracked, qualified, and converted clients with full automation.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80'
  },
  {
    id: 'ai',
    icon: <Calendar className="w-5 h-5" />,
    title: 'AI Appointment Setter',
    header: 'AI Appointment Setter: Fully Automate Bookings & Save Time',
    description: `Our AI-powered system books high-value clients directly into your calendar—eliminating manual sales calls and no-shows.`,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 'ads',
    icon: <Megaphone className="w-5 h-5" />,
    title: 'FB & Google Ads',
    header: 'Targeted Ads That Reach Your Ideal Clients',
    description: `We engineer campaigns that attract high-value clients through strategic targeting and high-converting ad content.`,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2340&q=80'
  }
];

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find(tab => tab.id === activeTab)!;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1 py-4 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span className="whitespace-nowrap">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
            <img src={activeContent.image} alt={activeContent.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">{activeContent.header}</h1>
            <div className="prose prose-blue max-w-none">
              {activeContent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div className="pt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
