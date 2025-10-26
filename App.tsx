
import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import HomeScreen from './features/home/HomeScreen';
import LibraryScreen from './features/library/LibraryScreen';
import DocumentListScreen from './features/library/DocumentListScreen';
import DocumentDetailScreen from './features/library/DocumentDetailScreen';
import LoginScreen from './features/auth/LoginScreen';

const App: React.FC = () => {
  const { state } = useContext(AppContext);
  const currentView = state.viewStack[state.viewStack.length - 1];

  const renderView = () => {
    switch (currentView.view) {
      case 'HOME':
        return <HomeScreen />;
      case 'LIBRARY_CATEGORIES':
        return <LibraryScreen />;
      case 'DOCUMENT_LIST':
        return <DocumentListScreen categoryId={currentView.payload.categoryId} />;
      case 'DOCUMENT_DETAIL':
        return <DocumentDetailScreen docId={currentView.payload.docId} />;
      case 'LOGIN':
        return <LoginScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="bg-[#FFF5EC] min-h-screen text-[#333333]">
      <div className="relative min-h-screen">
         <main className="pb-20">
            {renderView()}
         </main>
      </div>
    </div>
  );
};

export default App;
