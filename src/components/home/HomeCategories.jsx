export default function HomeCategories() {
  const categories = [
    {
      name: "Makanan",
      image: "/categories/makanan.png",
    },
    {
      name: "Minuman",
      image: "/categories/minuman.png",
    },
    {
      name: "Snack",
      image: "/categories/snack.png",
    },
    {
      name: "Kesehatan",
      image: "/categories/kesehatan.png",
    },
    {
      name: "Rumah Tangga",
      image: "/categories/rumah.png",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Kategori</h2>
          <a href="/categories" className="text-blue-600 text-sm">
            Lihat Semua →
          </a>
        </div>

        {/* CATEGORY LIST (horizontal scroll) */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="min-w-[120px] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="p-4 flex flex-col items-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <p className="text-sm font-semibold text-center">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}