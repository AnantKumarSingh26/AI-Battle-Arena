import React from "react";

const Sidebar = ({onNewChat}) => {
    return (
        <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4 border-r border-gray-700 ">
            {/* Top Section */}
            <div className="mb-3">
                <h1 className="text-xl font-mono font-bold text-center mb-8 tracking-wider text-blue-400">AI Battle Arena⚔️</h1>
            </div>
            {/* New Chat Button */}
            <button onClick={onNewChat}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-md transition-all flex items-center justify-center gap-2 ">
                <span>+</span> New Chat
            </button>
            {/* bottom section */}
            <div className="mt-auto flex flex-col gap-4 pb-4">
                <a
                    href="https://github.com/AnantKumarSingh26/AI-Battle-Arena.git" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center">
                    <span>🔗</span> GitHub Repo
                </a>
                <a
                    href="https://www.linkedin.com/in/anantkumarsingh-code" 
                    target="_blank"
                    // rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center"
                >
                    <span>🔗</span> LinkedIn Profile
                </a>
            </div>
        </aside>
    )
}
export default Sidebar