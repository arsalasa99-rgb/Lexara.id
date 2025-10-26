
import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { documentCategories } from '../../data/dummyData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const LibraryScreen: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = state.libraryState.scrollPos || 0;
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        dispatch({ type: 'UPDATE_LIBRARY_STATE', payload: { scrollPos: scrollRef.current.scrollTop } });
      }
    };

    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll);

    return () => {
      currentRef?.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    dispatch({ type: 'NAVIGATE', payload: { view: 'DOCUMENT_LIST', payload: { categoryId } } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Pustaka Hukum" showBackButton={true} />
      <div ref={scrollRef} className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold font-lora text-[#8B1E3F] mb-6">Kategori Dokumen</h2>
            <div className="space-y-4">
            {documentCategories.map((category) => (
                <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg hover:border-[#E5C07B] border-2 border-transparent transition-all duration-300"
                >
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-[#8B1E3F]">{category.name}</h3>
                        <p className="text-gray-600 mt-1">{category.description}</p>
                    </div>
                    <div className="text-right">
                        <span className="text-2xl font-bold text-[#E5C07B]">{category.documentCount}</span>
                        <p className="text-sm text-gray-500">Dokumen</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LibraryScreen;
