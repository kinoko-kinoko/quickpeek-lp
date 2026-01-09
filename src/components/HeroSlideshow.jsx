import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Zap, Layers, Lock } from 'lucide-react';
import { trackCTAClick } from '../hooks/useABTest';

export default function HeroSlideshow({ variant }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: variant === 'B' ? "Stop Searching. Just Peek." : "Instant Looking",
      subtitle: "Don't Search. Just Peek.",
      description: "Finder's QuickLook is great, but you have to find the file first. QuickPeek brings your most-used files to you, instantly, with a single key.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-400",
      image: "/promo_instant_hotkey_1766625005708.png"
    },
    {
      id: 2,
      title: "Persistent Memory",
      subtitle: "Pinned to Your Keyboard",
      description: "Cheat sheets, design comps, API docs. Register them once, access them forever. Your keyboard becomes your memory.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      image: "/promo_hold_to_view_1766625035859.png"
    },
    {
      id: 3,
      title: "Zero Interruption",
      subtitle: "Workflow Unbroken",
      description: "No window switching. No Alt-Tab sliding. Peek at what you need, release to hide, and keep typing without missing a beat.",
      icon: <Layers className="w-8 h-8" />,
      color: "from-amber-400 to-orange-500",
      image: "/promo_drag_and_zoom_1766625064100.png"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-30">
        <div className={`absolute inset-0 bg-gradient-to-br ${slides[activeSlide].color} blur-[120px] opacity-20`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content - Left Side */}
          <div className="space-y-8 order-2 lg:order-1 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-medium text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              v1.0 is Live on Mac App Store
            </motion.div>

            <div className="space-y-6">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className={`
                    p-6 rounded-3xl transition-all duration-500 cursor-pointer group border
                    ${activeSlide === index
                      ? "bg-white/5 border-white/10 shadow-lg scale-100"
                      : "bg-transparent border-transparent opacity-40 hover:opacity-70 scale-95 origin-left"}
                  `}
                >
                  <div className="flex items-start gap-5">
                    <div className={`
                      p-3 rounded-2xl transition-all duration-500
                      ${activeSlide === index
                        ? `bg-gradient-to-br ${slide.color} shadow-[0_0_30px_-5px_var(--tw-shadow-color)] shadow-${slide.color.split('-')[1]}-500/50`
                        : "bg-slate-800 text-slate-400"}
                    `}>
                      {activeSlide === index ? <div className="text-white">{slide.icon}</div> : slide.icon}
                    </div>

                    <div className="space-y-2">
                      <h3 className={`text-2xl font-bold transition-colors ${activeSlide === index ? "text-white" : "text-slate-300"}`}>
                        {slide.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeSlide === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-lg font-medium text-blue-200 mb-2">
                              {slide.subtitle}
                            </p>
                            <p className="text-slate-300 leading-relaxed max-w-md">
                              {slide.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://apps.apple.com/us/app/quickpeek-image-overlay-tool/id6756771088?mt=12"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick('headline_test_v1', variant, 'Hero')}
                className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl shadow-white/10 flex items-center gap-2"
              >
                <span>Download for Mac</span>
                <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-full text-slate-600">Free Trial</span>
              </a>
            </div>
          </div>

          <div className="relative h-auto py-10 flex items-center justify-center order-1 lg:order-2 lg:col-span-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl animate-[spin_20s_linear_infinite]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 w-full"
            >
              {/* Glassy Container for Video - Mac Style */}
              <div className="relative p-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl">
                {/* Window Controls (Simulated) */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>

                {/* Video Container - Larger & Matches Mac Aspect Ratio */}
                <div className="aspect-[16/10] w-full bg-black rounded-lg overflow-hidden relative shadow-inner shadow-white/10 ring-1 ring-white/10">
                  <video
                    src="/AppstoreQuickPeekMovie.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
              </div>

              {/* Reflection */}
              <div className="absolute -bottom-10 left-10 right-10 h-8 bg-black/40 blur-xl rounded-[100%] opacity-60" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
