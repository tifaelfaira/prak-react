export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-[#fffafa] font-sans text-rose-950 pb-16 selection:bg-rose-200">
      {/* 1. Navbar Glassmorphism dengan Logo Animasi */}
      <FlexboxGrid />

      {/* 2. Hero Section - Ukuran lebih proporsional dengan efek Pop-Up */}
      <header className="text-center py-16 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
          Tailwind CSS 4 Learning
        </div>
        <h1 className="text-4xl font-black tracking-tight text-rose-900 mb-6">
          Belajar Tailwind CSS 4
        </h1>
        <button className="bg-rose-400 text-white px-8 py-2.5 rounded-xl font-bold shadow-lg shadow-rose-200 hover:bg-rose-500 hover:scale-110 active:scale-95 transition-all duration-300">
          Click Me
        </button>
      </header>

      {/* Main Content - Grid dengan Jarak yang Pas */}
      <main className="max-w-5xl mx-auto px-6 space-y-8">
        
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="hover:scale-[1.03] transition-transform duration-500">
            <Typography />
          </div>
          <div className="hover:scale-[1.03] transition-transform duration-500">
            <Spacing />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="hover:scale-[1.03] transition-transform duration-500">
            <BackgroundColors />
          </div>
          <div className="hover:scale-[1.03] transition-transform duration-500">
            <ShadowEffects />
          </div>
        </div>

        {/* Section 3 - Bottom Interaction */}
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-[32px] shadow-xl shadow-rose-100/50 border border-rose-50 hover:scale-[1.02] transition-all duration-500">
          <p className="mb-4 text-rose-300 font-bold tracking-widest uppercase text-[10px]">
            Interactive Element
          </p>
          <BorderRadius />
        </div>

      </main>
    </div>
  );
}

// NAVBAR: Judul SoftDesign ✨ di kanan atas
function FlexboxGrid() {
  return (
    <nav className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 px-10 border-b border-rose-100 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-6 h-6 bg-rose-400 rounded-md rotate-12 group-hover:rotate-0 transition-transform duration-300"></div>
        <h1 className="text-xl font-bold tracking-tighter text-rose-900">MyWebsite</h1>
      </div>
      
      <div className="flex items-center space-x-8">
        <ul className="hidden md:flex items-center space-x-6 text-rose-900/60 text-sm font-bold">
          <li><a href="#" className="hover:text-rose-500 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-rose-500 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-rose-500 transition-colors">Contact</a></li>
        </ul>
        <div className="pl-6 border-l border-rose-100">
          <span className="text-lg font-black italic bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            SoftDesign ✨
          </span>
        </div>
      </div>
    </nav>
  );
}

function Spacing() {
  return (
    <div className="bg-white p-8 rounded-[28px] shadow-lg shadow-rose-100/50 border border-rose-50 h-full">
      <h2 className="text-xl font-bold text-rose-800">Card Title</h2>
      <p className="mt-3 text-rose-600/70 text-sm leading-relaxed">
        Ini adalah contoh penggunaan padding dan margin di Tailwind.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="p-8 bg-gradient-to-br from-rose-50 to-white rounded-[28px] border border-rose-100 h-full">
      <h1 className="text-2xl font-black text-rose-600 leading-tight">Tailwind Typography</h1>
      <p className="text-rose-400 text-base mt-3 font-medium italic">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <button className="relative overflow-hidden group border-2 border-rose-400 text-rose-500 px-10 py-2.5 rounded-full font-bold hover:text-white transition-all duration-500">
      <span className="relative z-10">Klik Saya</span>
      <span className="absolute inset-0 bg-rose-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
    </button>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-rose-400 text-white p-8 rounded-[28px] shadow-xl shadow-rose-200 cursor-pointer h-full">
      <h3 className="text-2xl font-black mb-2">Tailwind Colors</h3>
      <p className="mt-1 text-rose-50 text-sm opacity-90">
        Belajar Tailwind itu seru dan fleksibel!
      </p>
    </div>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-lg p-8 rounded-[28px] border border-rose-50 hover:shadow-rose-200/60 transition-all duration-500 h-full">
      <h3 className="text-xl font-bold text-rose-800">Hover me!</h3>
      <p className="text-rose-400 mt-3 text-sm font-medium">
        Lihat efek bayangan saat hover.
      </p>
    </div>
  );
}