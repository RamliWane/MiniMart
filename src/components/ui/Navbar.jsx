import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  const cartCount = 3;
  const isLoggedIn = false;
  const user = { name: "Wane", avatar: null };

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center h-8 gap-4">
          <a href="/about" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">Tentang Minimart</a>
          <a href="/promo" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">Promo</a>
          <a href="/help" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">Bantuan</a>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 h-16">

          {/* LOGO */}
          <a href="/" className="shrink-0 flex items-center gap-1.5">

            <span className="text-blue-600 font-bold text-xl tracking-tight">minimart</span>
          </a>

          {/* KATEGORI DROPDOWN */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Kategori
              <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                {[
                  { label: "Fresh Food", icon: "🥦" },
                  { label: "Beverages", icon: "🥤" },
                  { label: "Snacks", icon: "🍪" },
                  { label: "Household", icon: "🧹" },
                  { label: "Personal Care", icon: "🧴" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={`/category/${item.label.toLowerCase().replace(" ", "-")}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH BAR */}
          <div className="flex-1">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2.5 gap-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:bg-white transition-all">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari di Minimart..."
                className="bg-transparent flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-1 shrink-0">

            {/* CART */}
            <a href="/cart" className="relative flex flex-col items-center p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors group">
              <div className="relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-0.5 group-hover:text-gray-900">Keranjang</span>
            </a>

            {/* WISHLIST */}
            <a href="/wishlist" className="flex flex-col items-center p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-xs mt-0.5 group-hover:text-gray-900">Wishlist</span>
            </a>

            {/* DIVIDER */}
            <div className="w-px h-8 bg-gray-200 mx-1" />

            {/* USER */}
            {isLoggedIn ? (
              <button className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors group">
                {user.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-6 h-6 rounded-full object-cover" />
                ) : (
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{user.name[0]}</span>
                  </div>
                )}
                <span className="text-xs mt-0.5 text-gray-500 group-hover:text-gray-900 max-w-14 truncate">{user.name}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2 pl-1">
                <a href="/login" className="px-4 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
                  Masuk
                </a>
                <a href="/register" className="px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Daftar
                </a>
              </div>
            )}

            {/* HAMBURGER MOBILE */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 py-3 px-4 flex flex-col gap-1">
          {["Home", "Products", "Promo", "Wishlist", "Keranjang"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {item}
            </a>
          ))}
          {!isLoggedIn && (
            <div className="flex gap-2 mt-2">
              <a href="/login" className="flex-1 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-lg text-center hover:bg-blue-50 transition-colors">
                Masuk
              </a>
              <a href="/register" className="flex-1 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg text-center hover:bg-blue-700 transition-colors">
                Daftar
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
