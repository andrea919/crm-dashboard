import React, { useState } from "react";
import { UserPlus, Trash2, Key, Shield, User, X, Check } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";

// Dati iniziali fittizi
const initialUsers = [
    { id: 1, name: "Admin", email: "admin@hq60.com", role: "Admin", status: "Active", lastAccess: "Today, 10:42" },
    { id: 2, name: "Mario Rossi", email: "m.rossi@hq60.com", role: "Operator", status: "Active", lastAccess: "Yesterday, 18:30" },
    { id: 3, name: "Luca Bianchi", email: "l.bianchi@hq60.com", role: "Operator", status: "Suspended", lastAccess: "10 Feb 2024" },
];

export default function TeamManagement(onMenuClick) {
    const [users, setUsers] = useState(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // New user form state
    const [newUser, setNewUser] = useState({ name: "", email: "", role: "Operator", password: "" });

    // Function to eleminate a user with confirmation
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };
    const handleNewOperator = () => {
        console.log("Create new promotion template");
    };

    // Function to save new user (placeholder logic)
    const handleSaveUser = (e) => {
        e.preventDefault(); // Avoid loading the page
        const id = users.length + 1;
        const today = new Date().toLocaleDateString();

        // Add to the list (in a real app, you'd send this to the backend)
        setUsers([...users, { ...newUser, id, status: "Active", lastAccess: "Never" }]);

        // Chiudi e resetta
        setIsModalOpen(false);
        setNewUser({ name: "", email: "", role: "Operator", password: "" });
        alert(`User ${newUser.name} successfully created!`);
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-10 px-4 md:px-0">

            <PageHeader
                title="Manage Operators"
                description="Add, edit, or remove operators who manage your campaigns."
                onMenuClick={onMenuClick}
                onActionClick={handleNewOperator}
                actionLabel="New Operator"
            />

            {/* Tabella Utenti */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider">
                        <tr>
                            <th className="p-4 font-medium">User</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium hidden md:table-cell">Last Access</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500">
                                            <User size={20} />
                                        </div>
                                        <div>
                                            <div className="font-medium text-slate-900">{user.name}</div>
                                            <div className="text-slate-400 text-xs">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${user.role === 'Admin'
                                        ? 'bg-purple-50 text-purple-700 border-purple-100'
                                        : 'bg-slate-100 text-slate-600 border-slate-200'
                                        }`}>
                                        {user.role === 'Admin' ? <Shield size={12} /> : null}
                                        {user.role}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="p-4 text-slate-500 hidden md:table-cell">
                                    {user.lastAccess}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Reset Password">
                                            <Key size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            title="Delete User"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {users.length === 0 && (
                    <div className="p-8 text-center text-slate-400">
                        No operators found.
                    </div>
                )}
            </div>

            {/* --- CREATE USER --- */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">

                        {/* Header */}
                        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <h3 className="font-bold text-lg text-slate-800">New Account</h3>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-red-500">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSaveUser} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Es. Giulia Verdi"
                                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    value={newUser.name}
                                    onChange={e => setNewUser({ ...newUser, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Corporate Email</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="nome@azienda.com"
                                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    value={newUser.email}
                                    onChange={e => setNewUser({ ...newUser, email: e.target.value })}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Ruolo</label>
                                    <select
                                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                                        value={newUser.role}
                                        onChange={e => setNewUser({ ...newUser, role: e.target.value })}
                                    >
                                        <option value="Operatore">Operator</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Viewer">Only view</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Temporary Password</label>
                                    <input
                                        required
                                        type="password"
                                        placeholder="******"
                                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={newUser.password}
                                        onChange={e => setNewUser({ ...newUser, password: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="flex-1 py-2.5 border border-slate-300 rounded-lg text-slate-600 font-medium hover:bg-slate-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-2.5 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors flex justify-center items-center gap-2"
                                >
                                    <Check size={18} />
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}