
import { ReactNode } from 'react';

export interface User {
  name: string;
  role: 'Warga' | 'Ahli' | 'Pemerintah';
}

export type UserRole = 'Warga' | 'Ahli' | 'Pemerintah';

export interface LegalDocument {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  status: string;
  articles: Article[];
}

export interface Article {
  id: string;
  title: string;
  content: string;
}

export interface DocumentCategory {
  id: string;
  name: string;
  description: string;
  documentCount: number;
}

export type AnalysisDiscipline =
  | 'Hukum' | 'Sosiologi' | 'Ekonomi' | 'Politik & Kebijakan Publik'
  | 'Psikologi' | 'Antropologi & Budaya Lokal' | 'Agama & Moral Publik'
  | 'Lingkungan & Ekologi' | 'Teknologi & Privasi' | 'Sejarah Hukum'
  | 'Etika & Filsafat Hukum' | 'Kriminologi' | 'Administrasi Publik'
  | 'Komunikasi Publik & Media' | 'HAM & Keadilan Sosial';

export interface Analysis {
  id: string;
  discipline: AnalysisDiscipline;
  summary: string;
  fullText: string;
}

export interface BlockchainNode {
  id: string;
  date: string;
  actor: string;
  summary: string;
  hash: string;
  articleId: string;
  before: string;
  after: string;
  reason: string;
}

export interface ForumComment {
  id: string;
  author: string;
  role: UserRole;
  timestamp: string;
  content: string;
  upvotes: number;
  articleId?: string;
  replies: ForumComment[];
}

export interface ChatMessage {
    sender: 'user' | 'ai' | 'external' | 'google';
    text: string | ReactNode;
}

// State Management Types
export interface DocumentState {
    activeTab: 'pasal' | 'analisis' | 'blockchain' | 'forum';
    analysisScrollPos: number;
    selectedNodeId: string | null;
    chatHistory: ChatMessage[];
    chatInput: string;
    forumDraft: string;
    forumSort: 'relevan' | 'terbaru' | 'ahli';
}

export interface LibraryState {
    searchQuery: string;
    scrollPos: number;
    categoryScrollPos: { [key: string]: number };
}

export type View =
  | { view: 'HOME' }
  | { view: 'LIBRARY_CATEGORIES' }
  | { view: 'DOCUMENT_LIST'; payload: { categoryId: string } }
  | { view: 'DOCUMENT_DETAIL'; payload: { docId: string } }
  | { view: 'LOGIN' };

export interface AppState {
  user: User | null;
  viewStack: View[];
  documentStates: { [key: string]: Partial<DocumentState> };
  libraryState: Partial<LibraryState>;
}

export type AppAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'NAVIGATE'; payload: View }
  | { type: 'GO_BACK' }
  | { type: 'UPDATE_DOC_STATE'; payload: { docId: string; newState: Partial<DocumentState> } }
  | { type: 'UPDATE_LIBRARY_STATE'; payload: Partial<LibraryState> };
