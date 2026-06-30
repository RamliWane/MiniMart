export default function HomeCategories() {
  const categories = [
  { name: "Elektronik", image: "/categories/elektronik.png" },
  { name: "Komputer & Aksesoris", image: "/categories/komputer.png" },
  { name: "Handphone & Aksesoris", image: "/categories/handphone.png" },
  { name: "Pakaian Pria", image: "/categories/pakaian-pria.png" },
  { name: "Sepatu Pria", image: "/categories/sepatu-pria.png" },
  { name: "Tas Pria", image: "/categories/tas-pria.png" },
  { name: "Aksesoris Fashion", image: "/categories/aksesoris.png" },
  { name: "Jam Tangan", image: "/categories/jam-tangan.png" },
  { name: "Kesehatan", image: "/categories/kesehatan.png" },
  { name: "Hobi & Koleksi", image: "/categories/hobi.png" },

  { name: "Makanan & Minuman", image: "/categories/makanan.jpeg" },
  { name: "Perawatan & Kecantikan", image: "/categories/kecantikan.png" },
  { name: "Perlengkapan Rumah", image: "/categories/rumah.png" },
  { name: "Pakaian Wanita", image: "/categories/pakaian-wanita.png" },
  { name: "Fashion Muslim", image: "/categories/pakaian-muslim.png" },
  { name: "Fashion Bayi & Anak", image: "/categories/pakaian-anak.png" },
  { name: "Olahraga & Outdoor", image: "/categories/olahraga.png" },
  { name: "Sepatu Wanita", image: "/categories/sepatu-wanita.png" },
  { name: "Tas Wanita", image: "/categories/tas-wanita.png" },
  { name: "Otomotif", image: "/categories/otomotif.png" },
  ];

  return (
    <section className="py-5 mt-3 rounded-3xl bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-medium text-gray-400">Kategori</h2>
          <a href="/categories" className="text-blue-600 text-sm font-medium">
            Lihat Semua →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border-gray-200 border flex flex-col items-center justify-center p-4 hover:bg-gray-50 hover:shadow-xl cursor-pointer transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-14 h-14 object-contain mb-2 bg-gray-200 rounded-full"
              />
              <p className="text-xs text-center font-medium">{cat.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}