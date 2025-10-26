
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { analyses } from '../../data/dummyData';
import { GetDisciplineIcon } from '../../components/icons/index';
import AiChat from './AiChat';
import { XMarkIcon } from '../../components/icons';
import type { Analysis } from '../../types';

const AnalysisCard: React.FC<{ analysis: Analysis, onReadMore: () => void }> = ({ analysis, onReadMore }) => (
    <div className="bg-white p-5 rounded-lg shadow-md flex flex-col border border-gray-200">
        <div className="flex items-center mb-3">
            <span className="text-[#8B1E3F]">{GetDisciplineIcon(analysis.discipline)}</span>
            <h4 className="ml-3 font-bold text-lg text-[#8B1E3F]">{analysis.discipline}</h4>
        </div>
        <p className="text-gray-600 text-sm flex-grow">{analysis.summary}</p>
        <button onClick={onReadMore} className="mt-4 text-sm font-semibold text-[#8B1E3F] hover:text-[#E5C07B] self-start">
            Baca Selengkapnya &rarr;
        </button>
    </div>
);

const AnalysisDetailModal: React.FC<{ analysis: Analysis, onClose: () => void }> = ({ analysis, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all animate-scale-in">
            <div className="flex justify-between items-center p-5 border-b">
                <div className="flex items-center">
                    <span className="text-[#8B1E3F]">{GetDisciplineIcon(analysis.discipline)}</span>
                    <h3 className="ml-3 text-2xl font-bold font-lora text-[#8B1E3F]">{analysis.discipline}</h3>
                </div>
                <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
                    <XMarkIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>
            <div className="p-6 overflow-y-auto">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{analysis.fullText}</p>
            </div>
             <div className="p-4 border-t bg-gray-50 rounded-b-xl text-right">
                <button onClick={onClose} className="bg-[#8B1E3F] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                    Tutup
                </button>
            </div>
        </div>
    </div>
);


const AnalysisTab: React.FC<{ docId: string }> = ({ docId }) => {
    const { state, dispatch } = useContext(AppContext);
    const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(null);
    const docAnalyses = analyses[docId] || [];
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(scrollRef.current) {
            scrollRef.current.scrollTop = state.documentStates[docId]?.analysisScrollPos || 0;
        }

        const handleScroll = () => {
            if(scrollRef.current){
                dispatch({
                    type: 'UPDATE_DOC_STATE',
                    payload: { docId, newState: { analysisScrollPos: scrollRef.current.scrollTop } }
                });
            }
        };

        const currentRef = scrollRef.current;
        currentRef?.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            currentRef?.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [docId]);

    return (
        <div ref={scrollRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {docAnalyses.map(analysis => (
                    <AnalysisCard key={analysis.id} analysis={analysis} onReadMore={() => setSelectedAnalysis(analysis)} />
                ))}
            </div>

            <AiChat docId={docId} />

            {selectedAnalysis && (
                <AnalysisDetailModal analysis={selectedAnalysis} onClose={() => setSelectedAnalysis(null)} />
            )}
        </div>
    );
};

export default AnalysisTab;
