import './App.css'

function App() {
  const appStoreUrl = "https://apps.apple.com/us/app/quickpeek-image-overlay-tool/id6756771088?mt=12"
  const privacyPolicyUrl = "https://note.com/rich_hare1260/n/n4ab2822f3015"
  const supportUrl = "https://note.com/rich_hare1260/n/n02e73807a6fb"

  const features = [
    {
      title: "グローバルショートカット",
      description: "どのアプリからでも、登録したショートカットキーで瞬時にファイルを表示",
      icon: "⌨️",
      image: "/promo_instant_hotkey_1766625005708.png"
    },
    {
      title: "Hold to Show",
      description: "キーを押している間だけ表示。離すと自動で非表示に",
      icon: "👆",
      image: "/promo_hold_to_view_1766625035859.png"
    },
    {
      title: "拡大縮小・移動",
      description: "マウスホイールで拡大縮小、ドラッグで位置を調整",
      icon: "🔍",
      image: "/promo_drag_and_zoom_1766625064100.png"
    },
    {
      title: "PDF対応",
      description: "画像だけでなく、PDFファイルもサムネイル表示でサポート",
      icon: "📄",
      image: "/promo_pdf_support_1766625213660.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white font-sans">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            {/* App Icon */}
            <div className="inline-block mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/30 flex items-center justify-center text-5xl md:text-6xl">
                👁️
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              QuickPeek
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-2xl mx-auto">
              画像・PDFを瞬時にオーバーレイ表示
            </p>
            <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
              ショートカットを押すだけで、参照資料や画像を即座に「覗き見」。
              <br />
              macOS専用の生産性ツール。
            </p>

            {/* CTA Button */}
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-xl shadow-white/10"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Mac App Storeでダウンロード
            </a>

            <p className="mt-6 text-sm text-slate-400">
              30日間無料体験 • $7.99で永久ライセンス
            </p>
          </div>

          {/* Hero Screenshot */}
          <div className="mt-16 md:mt-24 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none z-10" />
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-slate-800/50 rounded-2xl p-2 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                <img
                  src="/Screenshot_Dark_2880x1800.png"
                  alt="QuickPeek アプリのスクリーンショット"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            シンプルで強力な機能
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            必要な時に、必要な情報をすぐに確認。作業を中断することなく参照できます。
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-900/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-700/50">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Demo Video */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            使い方
          </h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            ショートカットを押している間だけ表示。シンプルで直感的な操作。
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* MacBook Style Frame */}
            <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-t-2xl p-4 border-t border-l border-r border-slate-600">
              <div className="bg-slate-900 rounded-lg overflow-hidden aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/AppstoreQuickPeekMovie.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* MacBook Bottom */}
            <div className="h-6 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-sm relative">
              <div className="absolute inset-x-0 -bottom-2 mx-auto w-1/4 h-2 bg-slate-700 rounded-b-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-800/50 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-slate-400 mb-12">
            サブスクリプションなし。一度の購入で永久にご利用いただけます。
          </p>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl inline-block">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-2">Proライセンス</h3>
            <div className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $7.99
            </div>
            <p className="text-slate-400 mb-6">買い切り・永久ライセンス</p>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>30日間無料体験</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>全機能アンロック</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>無制限のスロット</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400">✓</span>
                <span>将来のアップデート無料</span>
              </li>
            </ul>

            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              無料で始める
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👁️</span>
              <span className="font-semibold text-lg">QuickPeek</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a
                href={privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                サポート
              </a>
            </div>

            <p className="text-sm text-slate-500">
              © 2025 APworks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
