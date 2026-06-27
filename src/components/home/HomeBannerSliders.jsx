import { useState, useEffect, useCallback } from "react";

const banners = [
  {
    id: 1,
    title: "Gajian Sale",
    subtitle: "Diskon tagihan berkali-kali",
    highlight: "Hemat s.d. Rp50rb",
    bg: "from-yellow-300 to-yellow-400",
    textColor: "text-gray-900",
    badge: "bg-gray-900 text-white",
    emoji: "💰",
  },
  {
    id: 2,
    title: "Flash Sale",
    subtitle: "Produk segar pilihan hari ini",
    highlight: "Diskon s.d. 70%",
    bg: "from-red-400 to-orange-400",
    textColor: "text-white",
    badge: "bg-white text-red-500",
    emoji: "⚡",
  },
  {
    id: 3,
    title: "Belanja Hemat",
    subtitle: "Gratis ongkir untuk semua produk",
    highlight: "Min. belanja Rp30rb",
    bg: "from-blue-500 to-blue-600",
    textColor: "text-white",
    badge: "bg-white text-blue-600",
    emoji: "🛵",
  },
];

export default function HomeBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const banner = banners[current];

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* BANNER */}
      <div className={`w-full bg-gradient-to-r ${banner.bg} transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-48 sm:h-56 md:h-64">

            {/* TEXT */}
            <div className="flex flex-col gap-2 z-10">
              <span className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${banner.badge}`}>
                {banner.title}
              </span>
              <p className={`text-sm sm:text-base font-medium ${banner.textColor} opacity-90`}>
                {banner.subtitle}
              </p>
              <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${banner.textColor}`}>
                {banner.highlight}
              </h2>
              <button className="mt-2 w-fit px-5 py-2 bg-white text-gray-900 text-sm font-semibold rounded-full shadow hover:shadow-md hover:scale-105 transition-all">
                Lihat Promo
              </button>
            </div>

            {/* EMOJI / ILLUSTRATION */}
            <div className="text-8xl sm:text-9xl select-none opacity-90 pr-4 hidden sm:block">
              {banner.emoji}
            </div>
          </div>
        </div>
      </div>

      {/* PREV BUTTON */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow flex items-center justify-center transition-all hover:scale-110"
      >
        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
