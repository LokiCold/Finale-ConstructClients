import { useRef } from 'react';
import { ArrowRight, Play, Users2, Settings, Rocket, TrendingUp } from 'lucide-react';
import Navbar from "../components/Navbar";
import TabsSection from "../components/TabsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BookingSection from "../components/BookingSection";
import { useScrollReveal } from '../hooks/useScrollReveal';
import { openCalendlyPopup } from '../utils/calendly';
import FAQSection from '../components/FAQSection';

// Add custom element type for wistia-player
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
      }, HTMLElement>;
    }
  }
}

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
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar 
        scrollToVideo={scrollToVideo} 
        scrollToBooking={openCalendlyPopup} 
        scrollToTestimonials={scrollToTestimonials}
        scrollToFAQ={scrollToFAQ}
      />
      
      {/* Hero Section */}
      <header ref={heroRef} className="reveal-element relative min-h-[80vh] flex items-start bg-[#38071e] z-0 pt-4 md:pt-0">
        {/* Content */}
        <div className="container mx-auto px-2 sm:px-4 relative z-10 mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left side - Text Content */}
            <div className="max-w-3xl text-center md:text-left relative pt-4 md:pt-8 order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] animate-fadeIn relative z-10">
                <span className="block text-white mb-3 md:mb-4">
                  Luxury Renovation Clients on{' '}
                  <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent text-glow inline-block">
                    AutoPilot
                  </span>
                </span>
                <div className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mt-5 md:mt-6 leading-relaxed">
                  <span className="text-[#ec9611] font-semibold">More freedom</span>
                  <span className="text-white/70">, </span>
                  <span className="text-[#ec9611] font-semibold">more joy</span>
                  <span className="text-white/70">, </span>
                  <span className="text-[#FFA500] font-semibold text-glow">more high-value projects</span>
                  <span className="text-white/70">.</span>
                </div>
              </h1>
              {/* Book My Call Button */}
              <div className="flex justify-center md:justify-start gap-6 animate-fadeIn mb-12 md:mb-24 relative z-50">
                <button 
                  onClick={openCalendlyPopup}
                  className="bg-[#ec9611] hover:bg-[#d88610] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-base rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  Book My Free Call
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative hidden sm:flex items-center justify-center z-0 order-1 md:order-2 mt-8 md:mt-0 mx-auto">
              <img 
                src="/Untitled design.svg" 
                alt="Extension Hero" 
                className="w-full md:w-auto max-w-[90%] md:max-w-full h-auto md:h-[450px] lg:h-[500px] xl:h-[550px] object-contain animate-fadeIn mx-auto relative"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(236, 150, 17, 0.2))'
                }}
              />
            </div>
          </div>
        </div>
      </header>
      
      {/* Video Section */}
      <section ref={videoRef} className="py-20 scroll-mt-16 bg-[#2a0517]/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center">
            {/* Title and Subheading */}
            <div className="text-center mb-12 space-y-6 animate-float relative">
              <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
              <div className="relative z-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-4">
                  The Glory Gap
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-normal gradient-text mt-2 animate-pulse">
                    — powered by The Path to ConstructClients.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl font-light italic">
                  <span className="text-[#FC7B15]">The bridge from chaos to </span><span className="text-[#FFA500] text-glow font-semibold">control</span>.
                </p>
              </div>
                </div>

            {/* Video Container */}
            <div className="w-full max-w-5xl">
              <div className="relative group">
                {/* Glow effect container */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ec9611] via-[#d88610] to-[#ec9611] rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Video wrapper with border */}
                <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-[#ec9611]/30 bg-black/20 backdrop-blur-sm shadow-2xl">
                  <wistia-player 
                    media-id="io32j94r86" 
                    aspect="1.7777777777777777"
                    className="w-full h-full"
                  >
                    <div className="wistia_preload_transcript_outer_wrapper" style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-56.25%'}}>
                      <div className="wistia_preload_transcript_inner_wrapper" style={{overflow: 'auto'}}>
                        <p className="wistia_preload_transcript_text" aria-hidden="true" tabIndex={-1} style={{textAlign: 'justify', fontSize: '5px !important'}}>
                          Good morning, I'm Nate. If you're a high end home renovator doing over thirty k per month, I want to show you something that may completely change the way you operate your business because right now ninety nine percent of renovation business owners, they're quietly carrying around a heavy stress that goes untalked about. The pressure of unpredictability, never really know what's coming next, the long exhausting hours that feel endless, the constant grind of irony or freedom or constant fruits to show fruit, and the feeling of having no real control of your income even when you're working harder than ever. And then there's the one percent, the small group who seem to have something different in the air around them, a calm breeze instead of chaos, they know exactly where their next projects are coming from, they have consistent predictable jobs lined up months in advance and their revenue is stable, the team organised, and then they have freedom to actually love their work again and to enjoy what truly matters outside of it. So what's the difference? It's just a structured system. Now I will spend a few minutes walking you down the path of a pretty simple structured system I have for you, from where most renovators are right now, and what the destination is, and the path down the glory gap to arrive there in no time. Firstly, you're probably relying on word-of-mouth or referrals to get jobs. And look, referrals are great, but they're not predictable because when something's unpredictable, you have no real control of your jobs, of your revenue. And every month then becomes a gamble because you're basically waiting on luck. And then some months you're stacked with projects and other months you're not. And that means you can't plan ahead, invest confidently or grow, and you can't scale at a realistic pace because you don't even know if the work will be there. Okay, so now let's talk about competitors real quick. Let's be honest, they're not really bad than you, they're not smart either, they're not even talented, it just comes down to visibility and being seen. It's like a glowing yellow duck at the park that all the kids run to feed, while all the normal black and white ducks get ignored. And that's literally what's happening, their names keep popping up everywhere, people's feeds, in ads, in Google, in front of homeowners, and yours doesn't. You know, their ads make them look premium, established, and trustworthy, and yours, they barely exist. So they're not winning because you're bad. It's because their business is more attractive, and you know attention equals money. And when you're not attractive in the marketplace, you know, people don't see your value. And then it comes down to price, you start competing on price. Yo, that's the worst part. You probably already felt it so it's kind of useless explaining the feeling. You know people asking a million questions, then disappearing, comparing you to some random guy charging half your price, and then they just look at you just like another contractor instead of a premium option. So why don't you stand out? Why aren't you attractive in the marketplace? Okay. That's a good next question. A big reason is the advertising most re renovators rely on. You know, Facebook ads are just static images of boring genetic text like like here. Get a free quote, quality home renovation. Mean seriously, it's hard to get someone to spend thousands with someone because of a nice sentence. Know, people nowadays, they just scroll past in zero point two seconds because there's no trust, no authority, and no urgency. So they don't even click. Or if they do, then they just ghost you because nothing really convinced them to trust you. Then the stress kicks in, like that heavy feeling in your chest every day wondering where the next job is coming from. You know I've been there when I was starting my own business, like constant pressure, and eventually it catches up, the stress, the uncertainty, always putting out fires like a full time firefighter, and it doesn't just hit your business, it hits your personal life too, because you didn't start your business to be overworked, stressed or financially stuck. I mean I didn't. Everything depended on you, constantly chasing leads, following up, trying to close them, organizing your team, planning the future and then still nobody respects you. Well, with all of that, it's about time. I paint you the picture of the one percent. The renovation businesses doing seven fifty k to around two mil a year and some even more. You know, these guys aren't trapped relying on referrals. They're not playing that guessing game on what next month will look like. They have automated predictable lead flow, jobs lined up, and they don't waste time hoping and praying for opportunities. You know, clients come to them consistently because they build attention and authority. They're not drowning in work or arguing about price, they get qualified pre sold leads. When I say pre sold, I mean to say people who already want what you offer, who have the money, who know what to expect, so every conversation is aligned and projects run smoother and the deals close faster. And when the revenue becomes consistent, you get stability. No more roller coasters. Yeah. You'll be happy to say that one day. Trust me. And no more worrying if the next month is dry. And with consistent revenue comes growth. You know, they got a back end tracking and organization system that gives them peace of mind even as they scale, which means more time and more freedom. So instead of working on the business every day, you get to work on the business, expanding, scaling, and actually breathing, taking time off without everything falling apart, you know, going on vacations, spending time with family, and actually enjoying life. So how do you go from where you are to where you want to be? You need a bridge, a clear proven path that takes you from stress, unpredictability and inconsistent projects to stability, to predictable revenue and freedom. And that bridges what I call the glory gap, a transformation powered by the path to construct client system, a fully managed growth system that eliminates the stress of inconsistent projects by filling your pipeline with booked pre sold appointments and tracking every lead in one place, giving you freedom, predictability, and your time back. And we guarantee results if you don't see booked appointments, we work for free until you do. So how does this system work? Of course we lay the foundation first, attention. So we put you in front of one hundred to one thousand plus ideal buyers every single day using Facebook and Google Ads. Okay, Facebook firstly, instead of you know those boring image ads everyone scroll past, we use our proven tactics and ad frameworks with UGC video ads created by professional creators, ads that feel natural and real, that actually stop people in their tracks, grab attention and speaking directly to emotion, building desire instantly. And how do we get us to perform consistently alongside our ad frameworks? It's by data analysis. We track all ads with our data tracker. How many viewers are turning to leads, how many are booking appointments. And with our team, we keep an eye on the winning ads, what's working, and what needs improving. And as you guys can see, here are some examples. Well, that's only part one. Another big channel is Google and specifically AI SEO, the new word-of-mouth. You know, six years ago, ranking on Google was easy. You would rank for something like luxury home renovation, you know, sit back on your comfy chair. I mean, mine isn't really that comfy, but you just wait for cools in it. Well, that world is over. In twenty twenty five, Google AI overview dominates the entire top of the page. It recommends businesses before you even see a single result. Actually, companies are buried under FAQs, review sites, you know a random blog post here, and people look first where AI points them, and most of the time they choose what AI chooses. And that's why we use AI powered ranking strategies to get you positioned inside that AI overview where attention goes first. It's one of our most powerful and honestly kinda secret advantages, but that's just step one. Now let me show you how we turn that attention into real quality leads. Okay. Step two. Now that the attention is the foundation, next step is building the structure on top of it. We convert interest into actual leads using a trust building system. When someone engages with the ad, we send them through an application form to book a call with your custom AI appointment assistant. But before we go into that in detail, once they book and they go directly to your website, a site designed to look and feel like the top one percent online presence that homeowners trust above everyone else, and we only achieve that with the right wireframe and sitemap, you know, engineered to build unquestionable trust and remove all risk and uncertainty from choosing you. And we do that through a game plan structure, your reputation and story front end and center, a persuasive emotional backstory, you know, testimonials, trust badges, reviews, and clear reasons to choose you, and the result are visitors that become clients fast. Because the real barrier isn't really the sales or price, it's just trust at the end of the day, and now that's no longer a problem. And now the final piece of the puzzle, lock in the deal, and this is where most businesses lose. They get leads, but if those leads don't book appointments and show up, it's pretty pointless. And that's why we build a custom AI appointment cell and tracking management system to make sure deals are locked and ready consistently. And we customize your AI directly with your company information so it knows your business inside out, handling objections, answering questions, and prequalifying prospects. So by the time they get to the call, they know what you offer. They have the budget and they're already pre sold. Serious buyers get automatically pushed into your calendar and on the day of the appointment, they double the hours again to confirm attendance. And the crazy thing is, it sounds natural and real, like crazy real, and no one will even notice AI. And we start first with Facebook leads, not Russian for automation. So, like, once everything is running smoothly and then you give us the green light and then we expand it fully onto your website Google traffic. Goodbye chasing, ghosting, wasting time. And the tracking system. Okay. Imagine knowing exactly where your business stands at any moment From ad spend to booked calls to paid clients, our system checks everything for you, complete organisation and peace of mind. Google and Facebook ads, website metrics, appointments, revenue, all in one place. And this is way more than any system, it's a flywheel that compounds real results over time and over time. So here's the deal, if your desired situation is freedom, real control of your income, dominating your market and waking up every single day with that calm breeze in your chest, knowing everything is handled, then one system can flip everything around, and that system is the path to construct clients. And here's what happens when you start. Firstly, we will ask you to fill out a simple form about your business, and from there, we get to work immediately. Designing your website firstly with our proven blueprint, integrating our SEO and geo strategies, and building your custom AI assistant and tracking dashboard behind the scenes. And while all of this is happening, we onboard you into direct communication with us, showing you real time progress so you know exactly what stage, we're in before we launch. And then we begin running your first video ad and start filling your calendar of booked appointments. So book your call now. I'll be most likely the one that's speaking to you personally. And on the call, we will break down exactly process step by step, going over specific challenges and see where the bottleneck is and to show you exactly how we can solve it. And then I'll walk you through pricing, and if it makes sense, you can get started immediately. But here's the truth. We only work with, five homeowner payers per month. We're not trying to be the cheapest, we're trying to be the best, which means fewer clients but far deeper impact and better results. And let's be honest, you probably wasted time or money on agencies sending you low quality leads that never turn into jobs, And that's not what we do. We bridge the glory gap, solve real problems, and we guarantee results, or we work for free until we deliver. So if that's what you want, schedule a call now. But before you go, I wanna leave you guys with something. You matter. Your work matters, your life matters and Jesus loves you more than you know.
                  </p>
                </div>
                </div>
                  </wistia-player>
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
          <div className="text-center mb-6 animate-float relative">
            <div className="absolute inset-0 bg-glow rounded-3xl -z-10 opacity-50"></div>
            <div className="relative z-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4">
                Our Process: <span className="bg-gradient-to-r from-[#ec9611] via-[#FFA500] to-[#ec9611] bg-clip-text text-transparent">Getting Started is Simple</span>
              </h2>
            </div>
          </div>
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