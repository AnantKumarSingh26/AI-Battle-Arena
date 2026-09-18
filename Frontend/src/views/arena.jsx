import React, { useState } from "react";
import SideBar from './sidebar'
import PromptInput from "./promptInput";
import Sidebar from "./sidebar";
import JudgePanel from "./JudgePanel";
import ResponseCard from "./responseCard";

const Arena = () => {
    //state handling for battle results
    const [battleData, setBattleData] = useState(null)
    // New Chat Handling
    const handleNewChat = () => {
        setBattleData(null)
    }
    // Response of API from Backend
    const handleStartBattle = (question) => {
        // Abhi ke liye API call ki jagah hum dummy data set kar rahe hain.
        // Baad me yahan Axios fetch aayega.
        const dummyResponse = {
            problem: question,
            solution_1: "# Program to Calculate Factorial of a Number\n\nHere's a simple program to calculate the factorial of a number in several programming languages...",
            solution_2: "Here's a Python script with a self-contained function that solves the problem and passes corresponding tests:\n```python\ndef factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\n```",
            judge: {
                solution_1_score: 10,
                solution_2_score: 5,
                solution_1_reasoning: "Solution 1 provides a comprehensive and highly useful response by demonstrating the implementation...",
                solution_2_reasoning: "Solution 2 provides only a single function in Python without any input/output handling or testing code..."
            }
        };
        setBattleData(dummyResponse);
    };

    let winner = "Tie";
    if (battleData) {
        if (battleData.judge.solution_1_score > battleData.judge.solution_2_score) winner = "AI Response 1";
        else if (battleData.judge.solution_2_score > battleData.judge.solution_2_score) winner = "AI Response 2"
    }

    return (
        <div className="flex h-screen bg-gray-800 text-gray-100 font-sans">
            {/* Left Sidebar  */}
            <Sidebar onNewChat={handleNewChat} />

            {/* Right Side me main component Area */}
            <main className="flex-1 flex flex-col items-center p-8 overflow-y-auto">
                {/* Title Area */}
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-4xl font-extrabold mb-3 text-white tracking-widest drop-shadow-md">AI Battle Arena</h1>
                    <p className="text-gray-400 text-lg"> Two AIs. One Question. One Winner.</p>
                </div>

                <div className="w-full max-w-4xl mb-12 ">
                    <PromptInput onBattleSubmit={handleStartBattle} />
                </div>
                {/* Batttle Data shoing box if available */}
                {battleData && (<div className="w-full max-w-6xl flex flex-col items-center animate-fade-in">
                    {/* question diaplay box   */}
                    <div className="bg-gray-700 px-6 py-3 rounded-lg mb-8 text-xl font-medium border-gray-600 shadow-md">
                        Question <span className="text-white">{battleData?.problem}</span>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full mb-10">
                        <ResponseCard
                            aiName="Mistral"
                            score={battleData.judge.solution_1_score}
                            solutionText={battleData.solution_1}
                        />
                        <ResponseCard
                            aiName="Cohere"
                            score={battleData.judge.solution_2_score}
                            solutionText={battleData.solution_2}
                        />
                    </div>
                    <JudgePanel
                        winner={winner}
                        reasoning1={battleData.judge.solution_1_reasoning}
                        reasoning2={battleData.judge.solution_2_reasoning}
                    />
                </div>)}
            </main>

        </div>
    )
}

export default Arena;