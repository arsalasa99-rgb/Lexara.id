
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ArrowLeftIcon, UserCircleIcon } from './icons';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const { state, dispatch } = useContext(AppContext);
  const { user } = state;

  const handleBack = () => {
    dispatch({ type: 'GO_BACK' });
  };
  
  const handleLoginNav = () => {
    dispatch({ type: 'NAVIGATE', payload: { view: 'LOGIN' } });
  };
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#8B1E3F] text-white shadow-lg batik-pattern">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button onClick={handleBack} className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
          )}
          <div className="flex items-center">
             <svg className="w-10 h-10 text-[#E5C07B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.5L2 7v3.8c0 5.9 4.3 11 10 12.5 5.7-1.5 10-6.6 10-12.5V7L12 1.5zm-2.5 14l-4-4 1.4-1.4 2.6 2.6 5.6-5.6 1.4 1.4-7 7z" transform="scale(0.8) translate(3, 3)"/>
                <path d="M5.5 11.5l-1 2h13l-1-2h-11z M5 14.5v2h2v-2H5zm12 0v2h2v-2h-2z M12 6.5l2.5 4h-5l2.5-4z"/>
            </svg>
            <h1 className="text-xl md:text-2xl font-bold font-lora text-[#E5C07B] ml-2">{title}</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4">
            {user ? (
                 <div className="relative group">
                    <button className="flex items-center space-x-2 text-[#FFF5EC] hover:text-[#E5C07B]">
                        <UserCircleIcon className="w-8 h-8"/>
                        <span className="hidden sm:inline">{user.name}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                        <span className="block px-4 py-2 text-sm text-[#333333] border-b">Role: <span className="font-semibold">{user.role}</span></span>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
                    </div>
                </div>
            ) : (
                <button onClick={handleLoginNav} className="bg-[#E5C07B] text-[#8B1E3F] font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all">
                    Masuk
                </button>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
