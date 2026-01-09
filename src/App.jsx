import './App.css'
import HeroSlideshow from './components/HeroSlideshow'
import Navbar from './components/Navbar'
import { useABTest, trackCTAClick } from './hooks/useABTest'

function App() {
  // AB Test Initialization
  // This automatically assigns 'A' or 'B' and pushes 'ab_test' event to dataLayer
  const variant = useABTest('headline_test_v1');

  const appStoreUrl = "https://apps.apple.com/us/app/quickpeek-image-overlay-tool/id6756771088?mt=12"

  const privacyPolicyUrl = "https://note.com/rich_hare1260/n/n4ab2822f3015"
  const supportUrl = "https://note.com/rich_hare1260/n/n02e73807a6fb"

  const features = [
    {
      title: "Global Shortcuts",
      description: "Peek at your files instantly from any app with custom hotkeys.",
      icon: "⌨️",
      image: "/promo_instant_hotkey_1766625005708.png"
    },
    {
      title: "Hold to Peek",
      description: "Visible only while you hold the key. Just like a peeking cat!",
      icon: "😺",
      image: "/promo_hold_to_view_1766625035859.png"
    },
    {
      title: "Drag & Zoom",
      description: "Zoom in with the scroll wheel and drag to inspect every detail.",
      icon: "🔍",
      image: "/promo_drag_and_zoom_1766625064100.png"
    },
    {
      title: "PDF Support",
      description: "Supports not just images, but PDF documents too.",
      icon: "📄",
      image: "/promo_pdf_support_1766625213660.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      {/* Hero Slideshow */}
      <HeroSlideshow variant={variant} />

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Features, Simple Usage
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Check necessary information instantly without breaking your flow.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl filter drop-shadow-lg transform transition-transform group-hover:scale-110 duration-300">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-100">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-700/50 bg-slate-800/50">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Value Proposition */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-semibold text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                30-Day Free Trial Available
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Pay Once,<br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Use Forever.</span>
                </h2>
                <p className="text-xl text-slate-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  No subscription fatigue. No hidden fees.<br />
                  Experience the full power of QuickPeek completely free for 30 days.
                </p>
              </div>

              <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">⚡️</div>
                  <div>
                    <div className="font-bold text-white">Unlimited Shortcuts</div>
                    <div className="text-sm text-slate-400">Register as many files as you need</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">🔄</div>
                  <div>
                    <div className="font-bold text-white">Free Updates</div>
                    <div className="text-sm text-slate-400">Get all future features for free</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Pricing Card */}
            <div className="relative mx-auto w-full max-w-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                {/* Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-500 to-purple-600 text-white font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                  Launch Special
                </div>

                <div className="text-center mb-8">
                  <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner mb-4 border border-white/5">
                    <span className="text-5xl">💎</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Pro License</h3>
                  <div className="flex items-baseline justify-center gap-1 mt-4">
                    <span className="text-lg text-slate-400">$</span>
                    <span className="text-6xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">7.99</span>
                    <span className="text-slate-500 font-medium ml-2">/ lifetime</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackCTAClick('headline_test_v1', variant, 'Pricing_Trial_Main')}
                    className="block w-full text-center bg-white text-slate-900 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-white/20"
                  >
                    Start Free Trial
                  </a>

                  <p className="text-center text-xs text-slate-500">
                    Download from Mac App Store • Cancel anytime
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <img src="/app-icon.png" alt="QuickPeek" className="w-10 h-10 rounded-lg shadow-md" />
              <span className="font-bold text-xl tracking-tight">QuickPeek</span>
            </div>

            <div className="flex items-center gap-8 text-sm font-medium text-slate-400">
              <a
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                title="Support"
              >
                Support
              </a>
            </div>

            <p className="text-sm text-slate-600">
              © 2025 APworks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
