
import React, { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';
import type { AppState, AppAction, View, User, DocumentState, LibraryState } from '../types';

const initialState: AppState = {
  user: null,
  viewStack: [{ view: 'HOME' }],
  documentStates: {},
  libraryState: {
    searchQuery: '',
    scrollPos: 0,
    categoryScrollPos: {},
  },
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'NAVIGATE':
      if (action.payload.view === 'HOME') {
        return { ...state, viewStack: [{ view: 'HOME' }] };
      }
      return { ...state, viewStack: [...state.viewStack, action.payload] };
    case 'GO_BACK':
      if (state.viewStack.length > 1) {
        return { ...state, viewStack: state.viewStack.slice(0, -1) };
      }
      return state;
    case 'UPDATE_DOC_STATE': {
      const { docId, newState } = action.payload;
      return {
        ...state,
        documentStates: {
          ...state.documentStates,
          [docId]: {
            ...state.documentStates[docId],
            ...newState,
          },
        },
      };
    }
    case 'UPDATE_LIBRARY_STATE': {
        return {
            ...state,
            libraryState: {
                ...state.libraryState,
                ...action.payload,
            },
        };
    }
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
    try {
      const localData = localStorage.getItem('lexaraState');
      return localData ? JSON.parse(localData) : initial;
    } catch (error) {
      console.error("Could not parse local storage", error);
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lexaraState', JSON.stringify(state));
    } catch (error) {
      console.error("Could not save to local storage", error);
    }
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
