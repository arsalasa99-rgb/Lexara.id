
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { legalDocuments } from '../../data/dummyData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnalysisTab from '../analysis/AnalysisTab';
import BlockchainTab from '../blockchain/BlockchainTab';
import ForumTab from '../forum/ForumTab';
import type { DocumentState } from '../../types';

interface DocumentDetailScreenProps {
  docId: string;
}

const PasalTab: React.FC<{doc: (typeof legalDocuments)[0]}> = ({ doc }) => {
    return (
        <div className="space-y-6">
            {doc.articles.map(article => (
                <div key={article.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-lg text-[#8B1E3F]">{article.title}</h4>
                    <p className="mt-2 text-gray-700 leading-relaxed">{article.content}</p>
                </div>
            ))}
        </div>
    );
};

const DocumentDetailScreen: React.FC<DocumentDetailScreenProps> = ({ docId }) => {
  const { state, dispatch } = useContext(AppContext);
  const doc = legalDocuments.find(d => d.id === docId);

  const docState = state.documentStates[docId] || { activeTab: 'pasal' };

  const setActiveTab = (tab: DocumentState['activeTab']) => {
    dispatch({
      type: 'UPDATE_DOC_STATE',
      payload: { docId, newState: { activeTab: tab } },
    });
  };

  if (!doc) {
    return <div>Dokumen tidak ditemukan.</div>;
  }

  const renderTabContent = () => {
    switch (docState.activeTab) {
      case 'pasal':
        return <PasalTab doc={doc} />;
      case 'analisis':
        return <AnalysisTab docId={docId} />;
      case 'blockchain':
        return <BlockchainTab docId={docId} />;
      case 'forum':
        return <ForumTab docId={docId} />;
      default:
        return <PasalTab doc={doc} />;
    }
  };
  
  const getTabClass = (tabName: DocumentState['activeTab']) => {
    return `px-4 py-3 font-semibold text-sm md:text-base rounded-t-lg transition-colors duration-300 ${
      docState.activeTab === tabName
        ? 'bg-white text-[#8B1E3F] border-b-2 border-[#8B1E3F]'
        : 'bg-transparent text-gray-600 hover:bg-white/50'
    }`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Detail Dokumen" showBackButton={true} />
      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold font-lora text-[#8B1E3F]">{doc.title}</h2>
            <p className="text-gray-600 mt-2">{doc.shortDescription}</p>
            <span className="mt-4 inline-block text-sm font-semibold bg-[#E5C07B] text-[#8B1E3F] px-3 py-1 rounded-full">{doc.status}</span>
        </div>
        
        <div className="border-b border-gray-300">
            <nav className="-mb-px flex space-x-2 md:space-x-4" aria-label="Tabs">
                <button onClick={() => setActiveTab('pasal')} className={getTabClass('pasal')}>Pasal Inti</button>
                <button onClick={() => setActiveTab('analisis')} className={getTabClass('analisis')}>Analisis Multidisipliner</button>
                <button onClick={() => setActiveTab('blockchain')} className={getTabClass('blockchain')}>Timeline Blockchain</button>
                <button onClick={() => setActiveTab('forum')} className={getTabClass('forum')}>Forum Diskusi</button>
            </nav>
        </div>
        
        <div className="mt-6">
          {renderTabContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentDetailScreen;
