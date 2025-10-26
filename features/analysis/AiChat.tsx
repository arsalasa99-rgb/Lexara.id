
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { getAiAnalysis } from '../../services/geminiService';
import { PaperAirplaneIcon } from '../../components/icons';
import { legalDocuments } from '../../data/dummyData';
import type { ChatMessage } from '../../types';

const AiChat: React.FC<{ docId: string }> = ({ docId }) => {
    const { state, dispatch } = useContext(AppContext);
    const docState = state.documentStates[docId];
    const doc = legalDocuments.find(d => d.id === docId);

    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: 'UPDATE_DOC_STATE',
            payload: { docId, newState: { chatInput: e.target.value } }
        });
    };
    
    const updateChatHistory = (newHistory: ChatMessage[]) => {
        dispatch({
            type: 'UPDATE_DOC_STATE',
            payload: { docId, newState: { chatHistory: newHistory } }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userInput = docState?.chatInput?.trim();
        if (!userInput || isLoading) return;

        const newHistory: ChatMessage[] = [...(docState?.chatHistory || []), { sender: 'user', text: userInput }];
        updateChatHistory(newHistory);
        dispatch({ type: 'UPDATE_DOC_STATE', payload: { docId, newState: { chatInput: '' } } });
        setIsLoading(true);

        const prompt = `Terkait "${doc?.title}", ${userInput}`;
        const aiResponse = await getAiAnalysis(prompt);
        
        const finalHistory: ChatMessage[] = [...newHistory, { sender: 'ai', text: aiResponse }];
        updateChatHistory(finalHistory);
        setIsLoading(false);
    };
    
    useEffect(() => {
        if(chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [docState?.chatHistory]);


    const renderMessage = (msg: ChatMessage, index: number) => {
        const baseClass = "p-4 rounded-lg max-w-lg";
        if (msg.sender === 'user') {
            return (
                <div key={index} className="flex justify-end mb-4">
                    <div className={`${baseClass} bg-[#8B1E3F] text-white`}>{msg.text}</div>
                </div>
            );
        } else if(msg.sender === 'ai') {
             return (
                <div key={index} className="flex justify-start mb-4">
                    <div className={`${baseClass} bg-gray-200 text-gray-800`}>
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                        <div className="mt-4 border-t pt-2 space-x-2">
                             <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">Penjelasan AI Eksternal</button>
                             <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-100">Cari di Google</button>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }


    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 mt-8">
            <h3 className="text-2xl font-bold font-lora text-[#8B1E3F] mb-4">Tanya AI Lexara</h3>
            <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4 bg-[#FFF5EC] rounded-lg mb-4 border">
                {docState?.chatHistory && docState.chatHistory.length > 0 ? (
                    docState.chatHistory.map(renderMessage)
                ) : (
                    <div className="text-center text-gray-500 h-full flex items-center justify-center">
                        <p>Ajukan pertanyaan tentang <br/>"{doc?.title}"</p>
                    </div>
                )}
                 {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="p-4 rounded-lg max-w-lg bg-gray-200 text-gray-800">
                           <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                           </div>
                        </div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <textarea
                    value={docState?.chatInput || ''}
                    onChange={handleInputChange}
                    placeholder="Contoh: jelaskan RUU ini dari sisi ekonomi negara dan kriminologi..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E5C07B] transition resize-none"
                    rows={2}
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading} className="bg-[#8B1E3F] text-white p-3 rounded-lg disabled:bg-gray-400 hover:bg-opacity-90 transition">
                    <PaperAirplaneIcon className="w-6 h-6" />
                </button>
            </form>
        </div>
    );
};

export default AiChat;
