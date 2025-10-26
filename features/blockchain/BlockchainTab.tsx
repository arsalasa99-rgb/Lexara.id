
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { blockchainTimeline } from '../../data/dummyData';
import { CheckCircleIcon, XMarkIcon } from '../../components/icons';
import type { BlockchainNode } from '../../types';

const NodeDetailModal: React.FC<{ node: BlockchainNode, onClose: () => void }> = ({ node, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col transform transition-all animate-scale-in" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b">
                    <div>
                        <h3 className="text-xl font-bold font-lora text-[#8B1E3F]">Detail Perubahan</h3>
                        <p className="text-sm text-gray-500">{node.date} - oleh {node.actor}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200">
                        <XMarkIcon className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto space-y-4">
                    <div>
                        <h4 className="font-semibold text-gray-800">Alasan Perubahan:</h4>
                        <p className="mt-1 text-gray-600 italic bg-gray-100 p-3 rounded-md">{node.reason}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-red-600 mb-2">Sebelum</h4>
                            <div className="bg-red-50 p-3 rounded-md text-red-800 text-sm border border-red-200">
                                {node.before}
                            </div>
                        </div>
                        <div>
                             <h4 className="font-semibold text-green-600 mb-2">Sesudah</h4>
                            <div className="bg-green-50 p-3 rounded-md text-green-800 text-sm border border-green-200">
                                {node.after}
                            </div>
                        </div>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <h4 className="font-semibold text-gray-800">Hash (Simulasi Blockchain)</h4>
                        <p className="text-sm text-gray-500 font-mono break-all bg-gray-100 p-2 rounded-md mt-1">{node.hash}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BlockchainTab: React.FC<{ docId: string }> = ({ docId }) => {
    const { state, dispatch } = useContext(AppContext);
    const timeline = blockchainTimeline[docId] || [];
    const selectedNodeId = state.documentStates[docId]?.selectedNodeId;

    const handleNodeClick = (node: BlockchainNode) => {
        dispatch({
            type: 'UPDATE_DOC_STATE',
            payload: { docId, newState: { selectedNodeId: node.id } }
        });
    };
    
    const closeDetail = () => {
         dispatch({
            type: 'UPDATE_DOC_STATE',
            payload: { docId, newState: { selectedNodeId: null } }
        });
    }

    const selectedNode = timeline.find(node => node.id === selectedNodeId);

    return (
        <div className="p-2">
            <div className="relative border-l-2 border-[#E5C07B] ml-4">
                {timeline.map((node, index) => (
                    <div key={node.id} className="mb-8 flex items-center w-full">
                        <div className="absolute -left-[1.35rem] bg-[#E5C07B] p-1 rounded-full">
                            <CheckCircleIcon className="w-8 h-8 text-[#8B1E3F] bg-white rounded-full"/>
                        </div>
                        <div className="ml-10 w-full">
                            <button onClick={() => handleNodeClick(node)} className={`w-full text-left p-4 rounded-lg shadow-md transition-all duration-300 ${selectedNodeId === node.id ? 'bg-[#FFF5EC] border-[#E5C07B] border-2 shadow-lg' : 'bg-white hover:shadow-lg hover:-translate-y-1'}`}>
                                <p className="text-sm font-semibold text-[#8B1E3F]">{node.date}</p>
                                <p className="text-xs text-gray-500">Oleh: {node.actor}</p>
                                <p className="mt-2 text-gray-700">{node.summary}</p>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
             {selectedNode && (
                <NodeDetailModal node={selectedNode} onClose={closeDetail} />
            )}
        </div>
    );
};

export default BlockchainTab;
