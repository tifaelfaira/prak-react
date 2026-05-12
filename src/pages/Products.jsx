import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";

export default function Products() {
  return (
    <div id="dashboard-container" className="p-8 bg-gray-50 min-h-screen">
      <PageHeader title="Products" />

      <div className="mt-8 bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Bagian ini diubah jadi HIJAU sesuai gambar no 2 */}
            <tr className="bg-[#009B6B] text-white">
              <th className="p-5 font-bold text-xs uppercase tracking-widest rounded-tl-[32px]">
                Code
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-widest">
                Product Name
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-widest">
                Category
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-widest">
                Brand
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-widest text-right">
                Price
              </th>
              <th className="p-5 font-bold text-xs uppercase tracking-widest text-center rounded-tr-[32px]">
                Stock
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {products.map((item) => (
              <tr
                key={item.code}
                className="hover:bg-green-50/50 transition-colors group"
              >
                <td className="p-5 text-sm font-mono text-gray-400 group-hover:text-hijau transition-colors">
                  {item.code}
                </td>
                
                {/* Perbaikan: Menghilangkan <td> di dalam <td> agar sejajar */}
                <td className="p-5 font-bold">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-500 hover:text-emerald-600 font-bold"
                  >
                    {item.title}
                  </Link>
                </td>

                <td className="p-5">
                  <span className="px-3 py-1 text-[10px] font-black bg-gray-100 text-gray-500 rounded-full group-hover:bg-green-100 group-hover:text-hijau transition-colors">
                    {item.category}
                  </span>
                </td>
                <td className="p-5 text-gray-500 text-sm">{item.brand}</td>
                <td className="p-5 text-right font-black text-gray-800">
                  Rp {item.price.toLocaleString("id-ID")}
                </td>
                <td className="p-5 text-center">
                  <span
                    className={`text-sm font-black ${item.stock < 10 ? "text-red-500" : "text-gray-600"}`}
                  >
                    {item.stock}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}