
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import type { User } from '../../types';

const LoginScreen: React.FC = () => {
    const { dispatch } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login. In a real app, this would be an API call.
        // We'll assign a role based on the email for this demo.
        let user: User;
        if (email.includes('ahli')) {
            user = { name: 'Ahli Terverifikasi', role: 'Ahli' };
        } else if (email.includes('pemerintah')) {
            user = { name: 'Perwakilan Pemerintah', role: 'Pemerintah' };
        } else {
            user = { name: 'Warga Publik', role: 'Warga' };
        }
        dispatch({ type: 'LOGIN', payload: user });
        dispatch({ type: 'GO_BACK' }); // Go back to the previous screen after login
    };
    
    const handleGoBack = () => {
        dispatch({ type: 'GO_BACK' });
    }

    return (
        <div className="min-h-screen bg-[#FFF5EC] flex items-center justify-center p-4">
            <div className="w-full max-w-sm mx-auto">
                 <div className="text-center mb-8">
                     <svg className="w-16 h-16 text-[#E5C07B] mx-auto" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1.5L2 7v3.8c0 5.9 4.3 11 10 12.5 5.7-1.5 10-6.6 10-12.5V7L12 1.5zm-2.5 14l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" transform="scale(0.8) translate(3, 3)"/>
                        <path d="M5.5 11.5l-1 2h13l-1-2h-11z M5 14.5v2h2v-2H5zm12 0v2h2v-2h-2z M12 6.5l2.5 4h-5l2.5-4z"/>
                    </svg>
                    <h1 className="text-3xl font-bold font-lora text-[#8B1E3F] mt-2">LEXARA.ID</h1>
                    <p className="text-gray-600">Masuk untuk berpartisipasi</p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email atau Telepon</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#8B1E3F] transition"
                                placeholder="anda@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"  className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-[#8B1E3F] transition"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#8B1E3F] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E3F] transition"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center text-sm">
                        <a href="#" className="font-medium text-[#8B1E3F] hover:text-[#E5C07B]">Lupa Password?</a>
                        <div className="my-2 text-gray-400">atau</div>
                        <a href="#" className="font-medium text-[#8B1E3F] hover:text-[#E5C07B]">Daftar Akun Baru</a>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button onClick={handleGoBack} className="text-sm text-gray-600 hover:text-[#8B1E3F]">Kembali ke halaman sebelumnya</button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
