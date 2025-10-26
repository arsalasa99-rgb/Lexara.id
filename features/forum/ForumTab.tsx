
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { forumComments } from '../../data/dummyData';
import { ArrowUpIcon, ChatBubbleLeftRightIcon } from '../../components/icons';
import type { ForumComment, UserRole } from '../../types';

const getBadgeClass = (role: UserRole) => {
    switch(role) {
        case 'Warga': return 'bg-gray-200 text-gray-800';
        case 'Ahli': return 'bg-[#E5C07B] text-[#8B1E3F]';
        case 'Pemerintah': return 'bg-[#8B1E3F] text-white';
        default: return 'bg-gray-200 text-gray-800';
    }
}

const Comment: React.FC<{ comment: ForumComment, level?: number }> = ({ comment, level = 0 }) => {
    const [isReplying, setIsReplying] = useState(false);
    
    return (
        <div className={`mt-4 ${level > 0 ? 'ml-6' : ''}`}>
            <div className="flex space-x-3">
                <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${getBadgeClass(comment.role)}`}>
                        {comment.author.charAt(0)}
                    </div>
                </div>
                <div className="flex-grow bg-white p-4 rounded-lg border">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="font-bold text-gray-800">{comment.author}</span>
                            <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${getBadgeClass(comment.role)}`}>{comment.role}</span>
                        </div>
                        <span className="text-xs text-gray-500">{comment.timestamp}</span>
                    </div>
                    {comment.articleId && <p className="text-xs text-gray-500 mt-1">Membahas <span className="font-semibold">{comment.articleId}</span></p>}
                    <p className="mt-2 text-gray-700">{comment.content}</p>
                    <div className="mt-3 flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-600 hover:text-[#8B1E3F]">
                            <ArrowUpIcon className="w-4 h-4 mr-1" /> {comment.upvotes}
                        </button>
                        <button onClick={() => setIsReplying(!isReplying)} className="flex items-center text-sm text-gray-600 hover:text-[#8B1E3F]">
                             <ChatBubbleLeftRightIcon className="w-4 h-4 mr-1" /> Balas
                        </button>
                    </div>
                </div>
            </div>
            {isReplying && <div className="ml-10 mt-4"><CommentForm docId="placeholder" isReply={true} /></div>}
            {comment.replies.map(reply => <Comment key={reply.id} comment={reply} level={level+1} />)}
        </div>
    );
}

const CommentForm: React.FC<{ docId: string, isReply?: boolean }> = ({ docId, isReply = false }) => {
    const { state, dispatch } = useContext(AppContext);
    const { user } = state;
    const docState = state.documentStates[docId];
    
    useEffect(() => {
        if(docState?.forumDraft && !isReply) {
             const continueDraft = window.confirm("Lanjutkan edit draft sebelumnya?");
             if (!continueDraft) {
                 dispatch({ type: 'UPDATE_DOC_STATE', payload: { docId, newState: { forumDraft: '' } } });
             }
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [docId]);

    const handleDraftChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({ type: 'UPDATE_DOC_STATE', payload: { docId, newState: { forumDraft: e.target.value } } });
    }
    
    if (!user) {
        return (
            <div className="text-center bg-gray-100 p-6 rounded-lg">
                <p className="font-semibold text-gray-700">Anda harus masuk untuk berpartisipasi.</p>
                <button onClick={() => dispatch({type: 'NAVIGATE', payload: {view: 'LOGIN'}})} className="mt-3 bg-[#8B1E3F] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all">
                    Masuk
                </button>
            </div>
        );
    }

    return (
        <div className={`p-4 bg-white rounded-lg shadow-md border ${isReply ? '' : 'mt-6'}`}>
            <textarea
                value={docState?.forumDraft || ''}
                onChange={handleDraftChange}
                placeholder="Tulis komentar Anda..."
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E5C07B] transition"
                rows={4}
            ></textarea>
            <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-gray-600">
                    Masuk sebagai <span className="font-bold">{user.name}</span> <span className={`ml-1 text-xs font-semibold px-2 py-0.5 rounded-full ${getBadgeClass(user.role)}`}>{user.role}</span>
                </div>
                <button className="bg-[#8B1E3F] text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-all">
                    Kirim
                </button>
            </div>
        </div>
    );
};


const ForumTab: React.FC<{ docId: string }> = ({ docId }) => {
    const { state, dispatch } = useContext(AppContext);
    const comments = forumComments[docId] || [];
    const sortOption = state.documentStates[docId]?.forumSort || 'relevan';
    
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = e.target.value as 'relevan' | 'terbaru' | 'ahli';
        dispatch({
            type: 'UPDATE_DOC_STATE',
            payload: { docId, newState: { forumSort: newSort } }
        });
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold font-lora text-[#8B1E3F]">Diskusi Publik</h3>
                <select value={sortOption} onChange={handleSortChange} className="border border-gray-300 rounded-md px-3 py-1.5 focus:ring-2 focus:ring-[#E5C07B]">
                    <option value="relevan">Paling Relevan</option>
                    <option value="terbaru">Terbaru</option>
                    <option value="ahli">Komentar Ahli</option>
                </select>
            </div>
            
            <div className="bg-[#FFF5EC] p-4 rounded-lg">
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </div>

            <CommentForm docId={docId} />
        </div>
    );
};

export default ForumTab;
