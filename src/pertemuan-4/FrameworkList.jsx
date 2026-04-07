import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
      {/* Judul Halaman (Opsional) */}
      <h1 className="text-3xl font-extrabold text-pink-400 text-center mb-10 tracking-tight">
        Framework Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {frameworkData.map((item, idx) => (
          <div
            key={item.id}
            className="group relative bg-white/80 backdrop-blur-sm border border-pink-100 p-6 rounded-3xl shadow-sm 
                       transition-all duration-500 ease-out 
                       hover:-translate-y-2 hover:shadow-xl hover:shadow-pink-200/50 hover:bg-white
                       animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
          >
            {/* Header: Nama & Badge Tahun */}
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                {item.name}
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-pink-100 text-pink-500 px-2 py-1 rounded-lg">
                {item.details.releaseYear}
              </span>
            </div>

            {/* Deskripsi */}
            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
              {item.description}
            </p>

            {/* Info Developer - Styled like a pill */}
            <div className="flex items-center mb-5">
              <div className="flex items-center space-x-2 bg-pink-50/50 border border-pink-100 px-3 py-1.5 rounded-2xl">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></div>
                <span className="text-xs font-medium text-pink-600">
                  {item.details.developer}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border border-gray-100 text-gray-400 text-[10px] px-3 py-1 rounded-full 
                             transition-all duration-300 group-hover:border-pink-200 group-hover:text-pink-400"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Link Website */}
            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 rounded-2xl
                         bg-pink-400 text-white font-semibold text-sm
                         transition-all duration-300 hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-300"
            >
              Visit Website
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}