
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-[#333333] text-[#FFF5EC] py-4">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-sm">Analisis Hukum Terbuka dan Terverifikasi Publik</p>
        <p className="text-xs mt-1">&copy; {new Date().getFullYear()} Lexara.id. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
