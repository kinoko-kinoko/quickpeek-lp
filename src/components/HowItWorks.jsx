import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Eye, MousePointer2 } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Press & Hold",
    subtitle: "Like a Cat Peeking Out",
    description: "Just press the shortcut key. Your file appears instantly, like a cat peeking from a box.",
    icon: <Command className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
    video: "/promo_instant_hotkey_1766625005708.png" // Placeholder, ideally video
  },
  {
    id: 2,
    title: "Instant Overlay",
    subtitle: "Don't Switch Apps",
    description: "Whether you're coding or browsing, the image overlays right where you are. No context switching.",
    icon: <Eye className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500",
    video: "/promo_hold_to_view_1766625035859.png"
  },
  {
    id: 3,
    title: "Release to Hide",
    subtitle: "It's Gone. Magic.",
    description: "Release the key and it vanishes. Your workspace stays clean and focused.",
    icon: <MousePointer2 className="w-8 h-8" />,
    color: "from-amber-400 to-orange-500",
    video: "/promo_drag_and_zoom_1766625064100.png"
  }
];

export default function HowItWorks() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
          >
            How it Works.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-400 font-medium"
          >
            Simple as a glance. Fast as thought.
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-4">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-500 relative overflow-hidden group ${activeSlide === index
                    ? "bg-white/10 backdrop-blur-xl shadow-2xl border border-white/10 scale-105"
                    : "hover:bg-white/5 border border-transparent opacity-60 hover:opacity-100"
                  }`}
              >
                {/* Progress Bar for Active Slide */}
                {activeSlide === index && (
                  <motion.div
                    layoutId="active-glow"
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-50"
                  />
                )}

                {activeSlide === index && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                )}

                <div className="flex items-start gap-6 relative z-10">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${slide.color} shadow-lg`}>
                    {slide.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-1 ${activeSlide === index ? 'text-white' : 'text-slate-300'}`}>
                      {slide.title}
                    </h3>
                    <p className={`text-lg font-medium mb-2 ${activeSlide === index ? 'text-blue-200' : 'text-slate-400'}`}>
                      {slide.subtitle}
                    </p>
                    <motion.p
                      initial={false}
                      animate={{ height: activeSlide === index ? "auto" : 0, opacity: activeSlide === index ? 1 : 0 }}
                      className="text-slate-400 overflow-hidden"
                    >
                      {slide.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Content - Right Side */}
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-[40px] blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 50, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, scale: 0.9, rotateY: -10 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative z-10 w-full"
              >
                {/* Mockup Frame */}
                <div className="relative mx-auto rounded-[32px] overflow-hidden shadow-2xl border-[8px] border-slate-800 bg-slate-900 group">
                  {/* Screen Content */}
                  <div className="aspect-[16/10] bg-slate-800 relative overflow-hidden">
                    <img
                      src={slides[activeSlide].video}
                      alt={slides[activeSlide].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Reflection/Shadow */}
                <div className="absolute -bottom-12 left-0 right-0 h-10 bg-black/40 blur-xl rounded-[100%]" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
