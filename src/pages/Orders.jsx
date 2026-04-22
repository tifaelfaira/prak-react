import React, { useState } from "react";
import { 
    FaShoppingCart, 
    FaArrowLeft, 
    FaUser, 
    FaCalendarAlt, 
    FaWallet, 
    FaClipboardList 
} from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Orders() {
    // State untuk kontrol tampilan web saya(table atau form)
    const [showForm, setShowForm] = useState(false);

    // Generate 30 data order dummy saya
    const orders = Array.from({ length: 30 }, (_, i) => {
        const statuses = ["Pending", "Completed", "Cancelled"];
        const customers = ["Budi Santoso", "Siti Aminah", "Andi Wijaya", "Dewi Lestari", "Eko Prasetyo"];
        
        return {
            id: `ORD-${2024001 + i}`,
            customerName: customers[i % customers.length],
            status: statuses[i % statuses.length],
            totalPrice: (Math.floor(Math.random() * 10) + 1) * 50000,
            date: `2024-05-${(i % 28) + 1}`
        };
    });

    // Helper untuk warna status saya
    const getStatusStyle = (status) => {
        switch (status) {
            case "Completed": return "bg-green-100 text-green-700 border border-green-200";
            case "Pending": return "bg-yellow-100 text-yellow-700 border border-yellow-200";
            case "Cancelled": return "bg-red-100 text-red-700 border border-red-200";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div id="orders-container">
            <PageHeader 
                title={showForm ? "Create New Order" : "Orders"} 
                breadcrumb={showForm ? ["Home", "Orders", "Add"] : ["Home", "Orders"]}
            >
                {!showForm && (
                    <button 
                        onClick={() => setShowForm(true)}
                        className="bg-hijau hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 flex items-center gap-2"
                    >
                        <FaShoppingCart size={14} /> + Add Orders
                    </button>
                )}
            </PageHeader>

            {showForm ? (
                /* --- TAMPILAN FORM --- */
                <div className="mt-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl animate-in fade-in duration-300">
                    <button 
                        onClick={() => setShowForm(false)}
                        className="flex items-center text-gray-400 hover:text-gray-600 mb-6 text-sm font-medium"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Orders
                    </button>
                    
                    <form onSubmit={(e) => { e.preventDefault(); alert('Order Saved!'); setShowForm(false); }} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Customer Name</label>
                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter customer name..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
                            <input type="number" required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="e.g. 500000" />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button type="submit" className="flex-1 bg-hijau text-white py-3 rounded-xl font-bold hover:bg-green-700 shadow-md transition-all">
                                Save Order
                            </button>
                            <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                /* --- TAMPILAN TABEL YANG SUDAH DIPERBAIKI --- */
                <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm">
                                <th className="p-4 font-bold">Order ID</th>
                                <th className="p-4 font-bold">Customer Name</th>
                                <th className="p-4 font-bold text-center">Status</th>
                                <th className="p-4 font-bold">Total Price</th>
                                <th className="p-4 font-bold">Order Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 font-bold text-hijau font-mono">{order.id}</td>
                                    <td className="p-4 font-semibold text-gray-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-7 h-7 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center">
                                                <FaUser size={12} />
                                            </div>
                                            {order.customerName}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusStyle(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    
                                    {/* Total Price dengan Icon Dompet Berwarna */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-blue-50 rounded-lg">
                                                <FaWallet className="text-blue-500" size={12} />
                                            </div>
                                            <span className="font-black text-gray-900">
                                                Rp {order.totalPrice.toLocaleString("id-ID")}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Order Date dengan warna Biru Navy/Gelap agar elegan */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-2 text-slate-600 font-bold">
                                            <FaCalendarAlt className="text-hijau opacity-70" size={13} /> 
                                            {order.date}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}