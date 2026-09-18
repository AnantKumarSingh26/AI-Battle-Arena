import React from "react";


const JudgePanel = ({ winner, reasoning1, reasoning2 }) => {
    return (
        <div className="mt-8 bg-gray-900 border border-yellow-500/50 rounded-lg p-6 w-full shadow-[0_0_20px_rgba(234,179,8,0,0.05)]">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold text-yellow-500 tracking-wider flex items-center justify-center gap-3">
                    <span>🏆</span> WINNER : {winner} <span>🏆</span>
                </h2>
            </div>


            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300 border-b border-gray-700 pb-2">Judge's Reasoning</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Thought's on AI 1</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{reasoning1}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded border border-gray-700">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Thought's on AI 2</span>
                        <p className="text-gray-300 text-sm leading-relaxed">{reasoning2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JudgePanel