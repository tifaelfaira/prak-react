import React, { useState } from "react";
import { FaCrown, FaEnvelope, FaArrowLeft, FaMobileAlt, FaUserCircle } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    const customers = Array.from({ length: 30 }, (_, i) => {
        const names = ["John Doe", "Siti Aminah", "Michael Chen", "Dewi Lestari", "Robert Fox", "Ahmad Fauzi"];
        const loyalties = ["Bronze", "Silver", "Gold"];
        return {
            id: `CUST-00${i + 1}`,
            name: names[i % names.length],
            email: `${names[i % names.length].toLowerCase().replace(" ", ".")}@example.com`,
            phone: `0812-9876-54${i < 10 ? "0" + i : i}`,
            loyalty: loyalties[i % loyalties.length]
        };
    });

    const getLoyaltyStyle = (loyalty) => {
        switch (loyalty) {
            case "Gold": return "bg-yellow-100 text-yellow-700 border border-yellow-200";
            case "Silver": return "bg-slate-100 text-slate-700 border border-slate-200";
            case "Bronze": return "bg-orange-100 text-orange-700 border border-orange-200";
            default: return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div id="customers-container">
            <PageHeader 
                title={showForm ? "Add New Customer" : "Customers"} 
                breadcrumb={showForm ? ["Home", "Customers", "Add"] : ["Home", "Management", "Customers"]}
            >
                {!showForm && (
                    <button 
                        onClick={() => setShowForm(true)}
                        className="bg-hijau hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95"
                    >
                        + Add Customer
                    </button>
                )}
            </PageHeader>

            {showForm ? (
                /* --- FORM SECTION --- */
                <div className="mt-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl animate-in fade-in duration-300">
                    <button 
                        onClick={() => setShowForm(false)}
                        className="flex items-center text-gray-400 hover:text-gray-600 mb-6 text-sm font-medium"
                    >
                        <FaArrowLeft className="mr-2" /> Back to List
                    </button>
                    
                    <form onSubmit={(e) => { e.preventDefault(); alert('Customer Saved!'); setShowForm(false); }} className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <input type="text" required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter customer name..." />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <input type="email" required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="customer@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" required className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="0812xxxxxxx" />
                        </div>
                        
                        <div className="flex gap-4 pt-4">
                            <button type="submit" className="flex-1 bg-hijau text-white py-3 rounded-xl font-bold hover:bg-green-700 shadow-md">
                                Save Customer
                            </button>
                            <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold hover:bg-gray-200">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                /* --- TABLE SECTION --- */
                <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm">
                                <th className="p-4 font-bold">Customer ID</th>
                                <th className="p-4 font-bold">Name</th>
                                <th className="p-4 font-bold">Email</th>
                                <th className="p-4 font-bold">Phone</th>
                                <th className="p-4 font-bold text-center">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 text-sm">
                            {customers.map((cust) => (
                                <tr key={cust.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="p-4 font-medium text-gray-400 font-mono text-xs">{cust.id}</td>
                                    
                                    {/* Kolom Nama yang sudah ditambah icon person */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
                                                <FaUserCircle size={20} />
                                            </div>
                                            <span className="font-bold text-gray-800">{cust.name}</span>
                                        </div>
                                    </td>
                                    
                                    <td className="p-4">
                                        <div className="flex items-center gap-2 group cursor-pointer">
                                            <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                                <FaEnvelope className="text-blue-500 text-xs" />
                                            </div>
                                            <span className="text-gray-600 font-medium hover:text-blue-600 transition-colors">{cust.email}</span>
                                        </div>
                                    </td>

                                    <td className="p-4">
                                        <div className="flex items-center gap-2 group cursor-pointer">
                                            <div className="p-2 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors">
                                                <FaMobileAlt className="text-green-500 text-xs" />
                                            </div>
                                            <span className="text-gray-600 font-medium hover:text-green-600 transition-colors">{cust.phone}</span>
                                        </div>
                                    </td>

                                    <td className="p-4 text-center">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${getLoyaltyStyle(cust.loyalty)}`}>
                                            {cust.loyalty === "Gold" && <FaCrown size={10} />}
                                            {cust.loyalty}
                                        </span>
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