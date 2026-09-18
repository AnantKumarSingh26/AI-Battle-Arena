
import React, { useState } from "react";

const PromptInput = ({ onBattleSubmit }) => {
    const [question, setQuestion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.trim() !== '') {
            onBattleSubmit(question);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg"
        >
            <input type="text"
                placeholder="Enter Your question to start the battle..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="flex-1 bg-transparent text-white px-6 py-4 focus:outline-none "
            />
            <button
                type="submit"
                disabled={!question.trim()}    
                className="bg-blue-600 hover:bg-blue-400 disabled:bg-gray-600 text-white font-bold px-8 py-4 transition-colors uppercase tracking-wider"
            >➤</button>
        </form>
    )
}

export default PromptInput