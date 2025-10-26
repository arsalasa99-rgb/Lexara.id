
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { BookOpenIcon, LightbulbIcon, CubeTransparentIcon, ChatBubbleLeftRightIcon } from '../../components/icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white rounded-xl shadow-lg p-6 text-left w-full h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-200"
  >
    <div className="flex-shrink-0 text-[#8B1E3F] w-12 h-12 rounded-full bg-[#FFF5EC] flex items-center justify-center">
      {icon}
    </div>
    <div className="mt-4 flex-grow">
      <h3 className="text-xl font-bold text-[#333333]">{title}</h3>
      <p className="text-gray-500 mt-2 text-sm">{description}</p>
    </div>
  </button>
);

const HomeScreen: React.FC = () => {
  const { dispatch } = useContext(AppContext);

  const navigateTo = (view: 'LIBRARY_CATEGORIES' | 'DOCUMENT_DETAIL') => {
    if(view === 'LIBRARY_CATEGORIES'){
        dispatch({ type: 'NAVIGATE', payload: { view } });
    } else {
        // For direct access to AI, Blockchain, Forum, we need a document context.
        // For simplicity, we navigate to the library first.
        // A real app might navigate to a global version of these features.
        alert('Silakan pilih dokumen dari Pustaka UU & RUU terlebih dahulu.');
        dispatch({ type: 'NAVIGATE', payload: { view: 'LIBRARY_CATEGORIES' } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Lexara.id" />
      <div className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-lora text-[#8B1E3F]">Analisis Hukum Terbuka</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Platform LegalTech dan CivicTech berbasis budaya Sasak untuk transparansi dan partisipasi publik dalam proses legislasi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Pustaka UU & RUU"
            description="Akses katalog lengkap Undang-Undang dan RUU yang terstruktur, dengan pencarian pintar."
            icon={<BookOpenIcon className="w-7 h-7" />}
            onClick={() => navigateTo('LIBRARY_CATEGORIES')}
          />
          <FeatureCard
            title="Analisis AI"
            description="Pahami dampak regulasi dari berbagai sudut pandang: ekonomi, sosiologi, kriminologi, dan lainnya."
            icon={<LightbulbIcon className="w-7 h-7" />}
            onClick={() => navigateTo('LIBRARY_CATEGORIES')}
          />
          <FeatureCard
            title="Blockchain Transparency"
            description="Lacak setiap perubahan pasal dan proses legislasi dalam timeline yang transparan dan tercatat."
            icon={<CubeTransparentIcon className="w-7 h-7" />}
            onClick={() => navigateTo('LIBRARY_CATEGORIES')}
          />
          <FeatureCard
            title="Forum Diskusi"
            description="Berpartisipasi dalam diskusi publik yang konstruktif bersama warga, ahli, dan pemerintah."
            icon={<ChatBubbleLeftRightIcon className="w-7 h-7" />}
            onClick={() => navigateTo('LIBRARY_CATEGORIES')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
