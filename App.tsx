import React, { useState, useEffect } from 'react';
import { FacebookIcon as Facebook, InstagramIcon as Instagram, LinkedinIcon as Linkedin, YoutubeIcon as Youtube, XIcon as Twitter } from './components/SocialIcons';
import { IMAGES, TRACKS, IMPORTANT_DATES } from './constants';
import Countdown from './components/Countdown';
import ChatAssistant from './components/ChatAssistant';
import RegistrationModal from './components/RegistrationModal';
import FloatingMenu from './components/FloatingMenu';
import CommitteePage from './components/CommitteePage';
import AboutPage from './components/AboutPage';
import CallForPapersPage from './components/CallForPapersPage';
import TracksPage from './components/TracksPage';
import SpeakersPage from './components/SpeakersPage';
import SchedulePage from './components/SchedulePage';
import ImportantDatesPage from './components/ImportantDatesPage';
import RegistrationPage from './components/RegistrationPage';
import SubmissionPage from './components/SubmissionPage';
import VenuePage from './components/VenuePage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  // Track active section on scroll - only if on home page
  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'call-for-papers', 'themes', 'committee', 'speakers', 'important-dates', 'registration', 'submission', 'venue', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveItem(section);
          return;
        }
      }
      if (window.scrollY < 100) setActiveItem('home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Prevent background scrolling when an overlay is active
  useEffect(() => {
    if (isRegModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
  }, [isRegModalOpen]);

  const navItems = [
    { label: 'Home', href: 'home', icon: 'home' },
    { label: 'Registration', href: 'registration', icon: 'how_to_reg' },
    { label: 'About', href: 'about', icon: 'info' },
    { label: 'Call for Papers', href: 'call-for-papers', icon: 'description' },
    { label: 'Themes', href: 'themes', icon: 'schema' },
    { label: 'Committee', href: 'committee', icon: 'groups' },
    { label: 'Speakers', href: 'speakers', icon: 'mic' },
    { label: 'Schedule', href: 'schedule', icon: 'schedule' },
    { label: 'Important Dates', href: 'important-dates', icon: 'calendar_month' },
    { label: 'Submission', href: 'submission', icon: 'upload_file' },
    { label: 'Venue', href: 'venue', icon: 'location_on' },
    { label: 'Contact', href: 'contact', icon: 'mail' }
  ];

  const handleNavigate = (href: string) => {
    // These items have dedicated pages now
    const dedicatedPages = [
      'committee', 'about', 'call-for-papers', 'themes',
      'speakers', 'schedule', 'important-dates',
      'registration', 'submission', 'venue', 'contact'
    ];

    if (dedicatedPages.includes(href)) {
      setCurrentPage(href);
      setActiveItem(href);
      window.scrollTo(0, 0);
    } else if (href === 'home') {
      setCurrentPage('home');
      setActiveItem('home');
      window.scrollTo(0, 0);
    } else {
      // Logic for home sections if we ever use them
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          const element = document.getElementById(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <AboutPage />;
      case 'committee': return <CommitteePage />;
      case 'call-for-papers': return <CallForPapersPage />;
      case 'themes': return <TracksPage />;
      case 'speakers': return <SpeakersPage />;
      case 'schedule': return <SchedulePage />;
      case 'important-dates': return <ImportantDatesPage />;
      case 'registration': return <RegistrationPage />;
      case 'submission': return <SubmissionPage />;
      case 'venue': return <VenuePage />;
      case 'contact': return <ContactPage />;
      default: return (
        <>
          {/* Hero Section */}
          <section className="relative bg-background-dark text-white overflow-hidden shrink-0">
            <div id="home" className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center scale-105 transform-gpu"
                style={{ backgroundImage: `url('${IMAGES.hero}')` }}
              />
            </div>
            <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-12 md:py-16 lg:py-20 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/20 mb-8 backdrop-blur-md">
                <span className="material-symbols-outlined text-accent text-sm">calendar_month</span>
                <span className="text-sm font-medium text-gray-100">April 8-9, 2026</span>
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                <span className="hidden sm:inline text-sm font-medium text-gray-100">Bengaluru, India</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[1.2] md:leading-[1.15] tracking-tight mb-8 max-w-4xl uppercase">
                International Conference on<br />
                Innovation, Engineering &amp; Management<br />
                <span className="text-accent">(ICIEM-2026)</span>
              </h1>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 mb-10 max-w-3xl text-gray-200 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent mt-0.5">corporate_fare</span>
                    <div>
                      <h3 className="text-white/70 font-bold uppercase tracking-widest text-[10px] mb-1">Organized By</h3>
                      <p className="font-medium text-sm md:text-base leading-relaxed text-white">Department of Computer Science<br />Garden City University, Bengaluru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent mt-0.5">location_on</span>
                    <div>
                      <h3 className="text-white/70 font-bold uppercase tracking-widest text-[10px] mb-1">Venue</h3>
                      <p className="font-medium text-sm md:text-base leading-relaxed text-white">GCU Auditorium, Garden City University Campus<br />Old Madras Road, KR Puram, Bengaluru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-accent mt-0.5">calendar_month</span>
                    <div>
                      <h3 className="text-white/70 font-bold uppercase tracking-widest text-[10px] mb-1">Date</h3>
                      <p className="font-medium text-sm md:text-base leading-relaxed text-white">Wednesday & Thursday<br />8–9 April 2026</p>
                    </div>
                  </div>

                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full md:w-auto">
                <button
                  onClick={() => handleNavigate('registration')}
                  className="w-full sm:w-auto min-w-[180px] md:min-w-[220px] rounded-lg h-14 md:h-16 px-10 bg-accent hover:bg-accent-hover text-white text-base font-extrabold shadow-xl shadow-accent/20 transition-all transform hover:-translate-y-1 uppercase tracking-widest active:translate-y-0"
                >
                  Register Now
                </button>
                <button
                  onClick={() => handleNavigate('submission')}
                  className="w-full sm:w-auto min-w-[180px] md:min-w-[220px] rounded-lg h-14 md:h-16 px-10 bg-white/5 hover:bg-white/10 border border-white/30 text-white text-base font-extrabold backdrop-blur-sm transition-all uppercase tracking-widest active:scale-95"
                >
                  Submit Paper
                </button>
              </div>

              <Countdown />
            </div>
          </section>

          <main className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10 py-24 space-y-32 w-full">
            {/* Themes Mini-Section */}
            <section id="themes" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-primary text-3xl md:text-4xl font-black leading-tight mb-6 flex items-center gap-4">
                    <span className="w-1.5 h-10 bg-accent rounded-full"></span>
                    Theme of the Conference
                  </h2>
                  <p className="text-gray-800 text-lg leading-relaxed font-medium">
                    Explore our comprehensive themes designed to foster interdisciplinary dialogue and innovation at the forefront of global sustainability.
                  </p>
                </div>
                <button
                  onClick={() => handleNavigate('themes')}
                  className="text-accent font-black uppercase tracking-widest text-sm flex items-center gap-2 hover:translate-x-2 transition-all"
                >
                  View All Themes <span className="material-symbols-outlined font-black">arrow_forward</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {TRACKS.slice(0, 3).map(track => (
                  <div key={track.id} className="group relative flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-8 md:p-10 hover:shadow-2xl transition-all transform-gpu hover:-translate-y-2">
                    <div className="size-16 md:size-20 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-[36px] md:text-[42px]">{track.icon}</span>
                    </div>
                    <h3 className="text-primary text-2xl font-bold">{track.title}</h3>
                    <p className="text-slate-700 leading-relaxed text-base font-medium">
                      {track.description}
                    </p>
                    <div className="mt-auto pt-6 flex gap-3">
                      {track.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-primary/60 bg-primary/5 px-3 py-1.5 rounded border border-primary/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Dates Mini-Section */}
            <section className="grid grid-cols-1 gap-16 md:gap-20 items-start">
              <div className="bg-white px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 rounded-3xl shadow-xl shadow-primary/10 border border-gray-200 relative group overflow-visible">
                <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none overflow-hidden">
                  <span className="material-symbols-outlined text-[150px] md:text-[200px] -rotate-12">calendar_today</span>
                </div>

                <div className="flex justify-between items-center mb-14 px-2 md:px-4">
                  <h3 id="important-dates" className="text-2xl sm:text-3xl font-black text-primary flex items-center gap-3 relative z-10">
                    <span className="material-symbols-outlined text-accent text-3xl sm:text-4xl">event_upcoming</span>
                    Important Dates
                  </h3>
                  <button
                    onClick={() => handleNavigate('important-dates')}
                    className="text-accent font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-x-2 transition-all"
                  >
                    More Info <span className="material-symbols-outlined text-sm font-black">arrow_forward</span>
                  </button>
                </div>

                <div className="relative ml-8 sm:ml-10 md:ml-6 border-l-2 border-gray-200 space-y-16 overflow-visible">
                  {IMPORTANT_DATES.slice(0, 3).map((d) => (
                    <div key={d.id} className="relative group/item overflow-visible">
                      <div className={`absolute -left-[21px] size-10 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white transition-all duration-300 z-20 ${d.isActive ? 'bg-primary text-white scale-110' : 'bg-white border-2 border-primary text-primary group-hover/item:bg-primary/5'}`}>
                        {d.isActive && <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>}
                        <span className="material-symbols-outlined text-[20px]">{d.icon}</span>
                      </div>

                      <div className="flex flex-col max-w-full overflow-visible pl-14 md:pl-20">
                        <span className={`text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] mb-4 px-4 py-1.5 rounded w-fit border shadow-sm ${d.isActive ? 'bg-accent text-white border-accent' : 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                          {d.date}
                        </span>
                        <h4 className="text-lg md:text-2xl font-black text-primary group-hover/item:text-accent transition-colors leading-tight break-words pr-4">
                          {d.title}
                        </h4>
                        <p className="text-slate-600 text-sm md:text-base mt-3 leading-relaxed max-w-2xl font-medium opacity-90 break-words pr-4">
                          {d.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Speaker Highlight */}
              <div id="speakers" className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10"></div>
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-1000 transform-gpu group-hover:scale-110"
                  style={{ backgroundImage: `url('${IMAGES.speaker}')` }}
                />
                <div className="absolute bottom-0 left-0 p-8 md:p-14 z-20 text-white w-full text-left">
                  <span className="material-symbols-outlined text-[40px] md:text-[56px] text-accent mb-4 md:mb-6 opacity-80">mic</span>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-4">Distinguished Speakers</p>
                  <blockquote className="text-2xl md:text-4xl font-black leading-tight mb-6 max-w-3xl">
                    Connecting Visionaries, Innovators &amp; Industry Leaders at ICIEM-2026
                  </blockquote>
                  <p className="text-base md:text-xl text-gray-300 mb-8 font-medium leading-relaxed max-w-2xl">
                    Gain insights from keynote speakers, invited experts from top institutions, and industry pioneers shaping the future of technology and engineering.
                  </p>
                  <button
                    onClick={() => handleNavigate('speakers')}
                    className="bg-white text-primary px-8 py-4 rounded font-bold text-sm hover:bg-accent hover:text-white transition-all duration-300 inline-flex items-center gap-3 uppercase tracking-widest shadow-xl active:scale-95"
                  >
                    View All Speakers <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full text-left">
      {/* Top Bar */}
      <div className="hidden sm:block bg-primary text-white/90 px-4 py-2 border-b border-white/5 shrink-0">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center text-left">
          <div className="text-[10px] md:text-xs font-medium flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">mail</span>
              <span>surendar.m@gcu.edu.in</span>
            </div>

          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/GardenCityUniversity/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/garden_city_university?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram className="w-4 h-4" />
            </a>

            <a href="https://www.linkedin.com/school/garden-city-uniiversity/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/c/GardenCityUniversity" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300 transform-gpu sticky-header">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-10 h-16 md:h-20 lg:h-24 flex items-center justify-between text-left">
          <div
            className="h-10 md:h-14 lg:h-20 flex items-center cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              alt="Garden City University Logo"
              className="h-full w-auto object-contain"
              src={IMAGES.logo}
            />
          </div>

          <nav className="hidden xl:flex items-center gap-10 xl:gap-14">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.label}
                className={`text-[#111318] text-[13px] font-bold hover:text-primary transition-colors uppercase tracking-widest relative group ${activeItem === item.href ? 'text-primary' : ''}`}
                href={`#${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.href);
                }}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${activeItem === item.href ? 'w-full' : ''}`}></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              onClick={() => handleNavigate('registration')}
              className="flex items-center justify-center rounded h-10 md:h-12 px-5 md:px-8 bg-primary hover:bg-primary-light transition-all text-white text-[11px] md:text-xs font-black shadow-md uppercase tracking-widest whitespace-nowrap active:scale-95"
            >
              Register Now
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`menu-toggle-btn flex items-center justify-center rounded-xl size-10 md:size-12 transition-all duration-300 ${isMenuOpen ? 'bg-primary text-white rotate-90 shadow-lg' : 'text-primary hover:bg-primary/5'
                }`}
            >
              <span className="material-symbols-outlined text-2xl md:text-3xl">
                {isMenuOpen ? 'close' : 'format_list_bulleted'}
              </span>
            </button>
          </div>
        </div>

        {/* Floating Navigation Panel */}
        <FloatingMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
          items={navItems}
          activeItem={activeItem}
        />
      </header>

      {/* Main Content Area */}
      <div className="flex-grow">
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-10 border-t-4 border-accent shrink-0 text-left">
        <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 md:gap-x-16 gap-y-16 mb-20">
            <div className="col-span-1 order-1">
              <div
                className="flex items-center mb-8 bg-white p-4 rounded shadow-inner w-fit cursor-pointer"
                onClick={() => handleNavigate('home')}
              >
                <img
                  alt="Garden City University Logo"
                  className="h-12 md:h-14 w-auto object-contain"
                  src={IMAGES.logo}
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-8">
                An institution of heritage and excellence. Garden City University is committed to fostering innovation that addresses global challenges through rigorous academic inquiry.
              </p>
              <div className="flex gap-5">
                <a href="https://www.facebook.com/GardenCityUniversity/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/garden_city_university?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>

                <a href="https://www.linkedin.com/school/garden-city-uniiversity/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/c/GardenCityUniversity" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="col-span-1 order-4 md:order-2 lg:order-4">
              <h3 className="font-black text-base uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-2">
                Location
                <span className="w-8 h-[2px] bg-accent"></span>
              </h3>
              <div className="w-full h-44 md:h-48 lg:h-44 rounded-xl overflow-hidden bg-primary-light relative shadow-inner group">
                <div
                  className="w-full h-full bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: `url('${IMAGES.map}')` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href="https://maps.app.goo.gl/uZTct1CB7gANPRxQA" target="_blank" rel="noopener noreferrer" className="bg-primary/80 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">map</span>
                    Explore Map
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 order-2 md:order-3 lg:order-2">
              <h3 className="font-black text-base uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-2">
                Quick Links
                <span className="w-8 h-[2px] bg-accent"></span>
              </h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li><button onClick={() => handleNavigate('about')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5">About Conference</button></li>
                <li><button onClick={() => handleNavigate('call-for-papers')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5 uppercase">Call for Papers</button></li>
                <li><button onClick={() => handleNavigate('registration')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5">Registration Guidelines</button></li>
                <li><button onClick={() => handleNavigate('schedule')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5">Conference Program</button></li>
                <li><button onClick={() => handleNavigate('venue')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5">Venue & Accommodation</button></li>
                <li><button onClick={() => handleNavigate('contact')} className="hover:text-accent hover:translate-x-1 transition-all inline-block py-0.5">Contact Us</button></li>
              </ul>
            </div>
            <div className="col-span-1 order-3 md:order-4 lg:order-3">
              <h3 className="font-black text-base uppercase tracking-[0.2em] mb-8 text-white flex items-center gap-2">
                Contact Info
                <span className="w-8 h-[2px] bg-accent"></span>
              </h3>
              <ul className="space-y-6 text-sm text-gray-300">
                <li className="flex items-start gap-4">
                  <a href="https://maps.app.goo.gl/uZTct1CB7gANPRxQA" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group/loc">
                    <span className="material-symbols-outlined text-accent text-[22px] group-hover/loc:scale-110 transition-transform">location_on</span>
                    <span className="leading-relaxed group-hover/loc:text-accent transition-colors">Garden City University,<br />16th KM, Old Madras Road,<br />Bengaluru, 560049</span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-accent text-[22px]">mail</span>
                  <span className="break-all">surendar.m@gcu.edu.in</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 text-center md:text-left">
            <p>© 2026 Garden City University. Excellence in Education.</p>
            <div className="flex gap-8">
              <a className="hover:text-accent transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-accent transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
          <div className="mt-8 text-[11px] text-gray-400 text-center text-balance max-w-4xl mx-auto leading-relaxed border-t border-white/5 pt-6">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </div>
        </div>
      </footer>

      {/* Floating Chat Assistant */}
      <ChatAssistant onNavigate={handleNavigate} />

      {/* Registration Modal */}
      <RegistrationModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)} />
    </div>
  );
};

export default App;
