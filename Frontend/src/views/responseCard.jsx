import React from "react";

const ResponseCard = ({aiName, score, solutionText})=>{
    return(
        <div className="bg-gray-900 border border-gray-700 rounded-lg flex\]
         flex-col w-full shadow-lg overflow-hidden">
{/* Header Area */}
            <div className="bg-gray-800 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-100">{aiName}</h3>
                <span className="bg-blue-900/50 border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                Score:{score}/10</span>
            </div>
{/* Content Area */}
            <div className="p-6 text-gray-300 font-mono text-sm whitespace-pre-wrap overflow-y-auto max-h-[500px] bg-gray-900/50">
            {solutionText}
            </div>
         </div>
    )
}
export default ResponseCard