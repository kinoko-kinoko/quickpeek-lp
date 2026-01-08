import './App.css'
import HeroSlideshow from './components/HeroSlideshow'

function App() {
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
      {/* Hero Slideshow */}
      <HeroSlideshow />

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
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-800/30 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Pricing
          </h2>
          <p className="text-slate-400 mb-12">
            No subscriptions. Pay once, keep it forever.
          </p>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl inline-block relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all duration-1000"></div>

            <div className="text-6xl mb-6 relative">💎</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Pro License</h3>
            <div className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $7.99
            </div>
            <p className="text-slate-400 mb-8 font-medium">Lifetime Access</p>

            <ul className="text-left space-y-4 mb-10 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <span>30-day Free Trial</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <span>Unlimited Shortcuts</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <span>All Features Unlocked</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <span>Free Future Updates</span>
              </li>
            </ul>

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'app_store_click', {
                    event_category: 'engagement',
                    event_label: 'Pricing',
                    page: 'landing',
                  });
                }
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-500/20 w-full justify-center"
            >
              Start Free Trial
            </a>
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
