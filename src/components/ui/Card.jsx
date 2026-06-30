import { defaultProducts } from "../data/product.js";

export default function Card({ products = [] }) {

  const items = products;

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <a
          href={`/product/${item.id}`}
          key={index}
          className="block bg-white rounded-[10px] overflow-hidden w-[190px] cursor-pointer hover:shadow-lg transition duration-300 border border-gray-100"
        >
          <div className="bg-gray-50 h-[180px] flex items-center justify-center relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain p-2"
            />
            {item.badge && (
              <div className="absolute bottom-0 left-0 flex items-center gap-1 bg-gradient-to-r from-blue-700 to-blue-400 text-white px-2 py-1 rounded-tr-lg">
                <div className="leading-tight">
                  <p className="text-[9px] opacity-90">Promo</p>
                  <p className="text-[9px] opacity-90">Guncang</p>
                </div>
                <span className="text-[15px] font-bold">{item.badge}</span>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="p-[10px]">
            <p className="text-[13px] text-gray-800 leading-snug line-clamp-2 mb-[6px]">
              {item.name}
            </p>
            <p className="text-[15px] font-semibold text-gray-900 mb-[2px]">
              {formatPrice(item.price)}
            </p>
            {item.discount && (
              <p className="text-[11px] text-red-500 font-medium mb-[6px]">
                {item.discount}
              </p>
            )}
            <div className="flex items-center gap-1 text-[11px] text-gray-500 mb-[6px]">
              <span className="text-yellow-400 text-xs">★</span>
              <span>{item.rating.toFixed(1)}</span>
              <span className="text-gray-300">•</span>
              <span>{item.sold} terjual</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-gray-500">
              {item.isOfficial && (
                <span className="inline-flex items-center gap-[3px] bg-blue-50 text-blue-600 rounded px-[5px] py-[1px] text-[10px] font-medium">
                  ✓ Official
                </span>
              )}
              <span className="truncate">{item.shop}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
