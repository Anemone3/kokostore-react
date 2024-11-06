import { Search } from 'lucide-react';

export const Navbar = () => {
    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">La Tiendita de Don Pepe</h1>
                    <p className="text-gray-600 text-sm">Disfruta de un desayuno simple, nutritivo y delicioso.</p>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>
    );
}
