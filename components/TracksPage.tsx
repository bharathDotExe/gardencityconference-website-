
import React, { useState, useEffect, useRef } from 'react';
import { TRACKS } from '../constants';

const TracksPage: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showHint, setShowHint] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);

    // Track scroll position to update active index
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.querySelector('.track-card')?.clientWidth || 400;
            const gap = 24; // gap-6
            const index = Math.round(scrollLeft / (itemWidth + gap));

            if (index !== activeIndex && index >= 0 && index < TRACKS.length) {
                setActiveIndex(index);
            }
            if (scrollLeft > 50 && showHint) {
                setShowHint(false);
            }
        }
    };

    // Auto-scroll logic
    const startAutoScroll = () => {
        stopAutoScroll();
        autoScrollTimer.current = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                const maxScroll = scrollWidth - clientWidth;

                if (scrollLeft >= maxScroll - 10) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const cardWidth = scrollContainerRef.current.querySelector('.track-card')?.clientWidth || 400;
                    scrollContainerRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
                }
            }
        }, 5000);
    };

    const stopAutoScroll = () => {
        if (autoScrollTimer.current) {
            clearInterval(autoScrollTimer.current);
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
            } else if (e.key === 'ArrowRight') {
                scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const scrollToSlide = (index: number) => {
        if (scrollContainerRef.current) {
            const cardElement = scrollContainerRef.current.querySelector(`.track-card-${index}`);
            cardElement?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const activeTrack = TRACKS[activeIndex];

    return (
        <div className="bg-slate-50 min-h-screen overflow-x-hidden pt-20">
            {/* 🔹 Background Title (Semi-hidden) */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03] whitespace-nowrap overflow-hidden">
                <h1 className="text-[12rem] md:text-[20rem] font-black tracking-tighter uppercase leading-none">
                    CONFERENCE THEMES
                </h1>
            </div>

            {/* 🔹 Content Header */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold mb-6 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    THEME OF THE CONFERENCE 2026
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight animate-fade-in-up">
                    Theme of the <span className="text-accent underline decoration-4 decoration-accent/20">Conference</span>
                </h2>
            </div>

            {/* 🔹 3D Carousel Section */}
            <section className="relative w-full overflow-visible py-10" style={{ perspective: '1200px' }}>
                {/* Swipe Hint */}
                {showHint && (
                    <div className="absolute left-1/2 -top-4 -translate-x-1/2 flex items-center gap-2 text-accent font-bold animate-bounce z-20 md:hidden">
                        <span className="material-symbols-outlined">swipe_left</span>
                        <span>Swipe to explore</span>
                    </div>
                )}

                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    onMouseEnter={stopAutoScroll}
                    onMouseLeave={startAutoScroll}
                    className="flex overflow-x-auto gap-6 px-[20vw] md:px-[35vw] scrollbar-hide snap-x snap-mandatory pb-24 overflow-y-visible"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {TRACKS.map((track, idx) => {
                        const distance = Math.abs(idx - activeIndex);
                        const isActive = idx === activeIndex;

                        // Coverflow Logic
                        const rotation = idx < activeIndex ? 35 : (idx > activeIndex ? -35 : 0);
                        const translateZ = isActive ? 100 : -150;
                        const translateX = idx < activeIndex ? 60 : (idx > activeIndex ? -60 : 0);
                        const opacity = isActive ? 1 : 0.6;
                        const scale = isActive ? 1.1 : 0.85;

                        return (
                            <div
                                key={track.id}
                                className={`track-card track-card-${idx} flex-shrink-0 w-[70vw] md:w-[350px] lg:w-[380px] snap-center transition-all duration-700 ease-out transform-gpu cursor-pointer`}
                                onClick={() => scrollToSlide(idx)}
                                style={{
                                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotation}deg) scale(${scale})`,
                                    zIndex: 10 - distance,
                                    opacity: opacity,
                                }}
                            >
                                <div
                                    className={`relative aspect-[3/4] rounded-[3rem] border-2 transition-all duration-500 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 text-center bg-white/80 backdrop-blur-2xl ${isActive ? 'border-accent shadow-accent/20' : 'border-white'}`}
                                >
                                    {/* Icon with focus animation */}
                                    <div className={`size-24 rounded-3xl flex items-center justify-center text-primary mb-6 transition-all duration-700 shadow-inner ${isActive ? 'bg-primary text-white scale-110 rotate-[360deg]' : 'bg-primary/5'}`}>
                                        <span className="material-symbols-outlined text-5xl">{track.icon}</span>
                                    </div>

                                    <h3 className={`text-2xl md:text-3xl font-black mb-4 transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                                        {track.title}
                                    </h3>

                                    {/* Decorative number */}
                                    <div className="absolute top-10 right-10 text-6xl font-black text-primary/5 select-none transition-colors group-hover:text-accent/10">
                                        0{idx + 1}
                                    </div>

                                    {/* Floating glow for active */}
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5 pointer-events-none"></div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center gap-4 -mt-12 mb-12 relative z-20">
                    {TRACKS.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`transition-all duration-500 rounded-full h-1.5 ${activeIndex === idx ? 'w-10 bg-accent' : 'w-1.5 bg-slate-300'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* 🔹 Information Display Area (Matches the Bottom Part of User Image) */}
            <div className="max-w-[800px] mx-auto px-6 mb-24 animate-fade-in-up">
                <div className="relative p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl text-center overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent/20 rounded-full"></div>

                    <h4 className="text-accent font-black tracking-widest uppercase text-sm mb-4">Theme Highlights</h4>
                    <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed mb-8 transition-all duration-500">
                        "{activeTrack.description}"
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {activeTrack.tags.map(tag => (
                            <span key={tag} className="px-5 py-2 rounded-xl bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-tighter">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <button className="mt-10 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/30 active:scale-95 flex items-center gap-2 mx-auto">
                        View Submission Details
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Desktop Navigation Hints */}
            <div className="hidden lg:block">
                <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                    className="fixed left-10 top-1/2 -translate-y-1/2 size-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 z-30"
                >
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button
                    onClick={() => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                    className="fixed right-10 top-1/2 -translate-y-1/2 size-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform hover:scale-110 z-30"
                >
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div>
    );
};

export default TracksPage;
