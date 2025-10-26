
import React, { useContext, useState, useEffect, useRef, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import { legalDocuments, documentCategories } from '../../data/dummyData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface DocumentListScreenProps {
  categoryId: string;
}

const DocumentListScreen: React.FC<DocumentListScreenProps> = ({ categoryId }) => {
  const { state, dispatch } = useContext(AppContext);
  const category = documentCategories.find(c => c.id === categoryId);
  const [searchTerm, setSearchTerm] = useState(state.libraryState.searchQuery || '');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredDocuments = useMemo(() => {
    return legalDocuments
        .filter(doc => doc.category === categoryId)
        .filter(doc => doc.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [categoryId, searchTerm]);

  useEffect(() => {
    const scrollPos = state.libraryState.categoryScrollPos?.[categoryId] || 0;
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPos;
    }
    
    const handleScroll = () => {
      if (scrollRef.current) {
        const newScrollPos = { ...state.libraryState.categoryScrollPos, [categoryId]: scrollRef.current.scrollTop };
        dispatch({ type: 'UPDATE_LIBRARY_STATE', payload: { categoryScrollPos: newScrollPos } });
      }
    };
    
    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', handleScroll);
    
    return () => {
      currentRef?.removeEventListener('scroll', handleScroll);
    };
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    dispatch({ type: 'UPDATE_LIBRARY_STATE', payload: { searchQuery: e.target.value } });
  };
  
  const handleDocClick = (docId: string) => {
    dispatch({ type: 'NAVIGATE', payload: { view: 'DOCUMENT_DETAIL', payload: { docId } } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header title={category?.name || 'Dokumen'} showBackButton={true} />
      <div ref={scrollRef} className="flex-grow overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Cari dokumen..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E5C07B] focus:border-[#E5C07B] transition"
            />
          </div>
          <div className="space-y-4">
            {filteredDocuments.length > 0 ? filteredDocuments.map(doc => (
              <div
                key={doc.id}
                onClick={() => handleDocClick(doc.id)}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-[#8B1E3F]">{doc.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{doc.shortDescription}</p>
                <div className="mt-3">
                    <span className="text-xs font-semibold bg-[#E5C07B] text-[#8B1E3F] px-2 py-1 rounded-full">{doc.status}</span>
                </div>
              </div>
            )) : (
              <div className="text-center py-10 text-gray-500">
                <p>Tidak ada dokumen yang ditemukan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentListScreen;
