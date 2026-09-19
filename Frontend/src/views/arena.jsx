import React from "react";
import SideBar from './sidebar'
import PromptInput from "./promptInput";
import Sidebar from "./sidebar";
import JudgePanel from "./JudgePanel";
import ResponseCard from "./responseCard";
import { useBattleController } from "../controllers/useBattleController";

const Arena = () => {
    const { battleData,
        isLoading,
        errar,
        handleStartBattle,
        handleNewChat } = useBattleController()

    let winner = "Tie";
    if (battleData) {
        if (battleData.judge.solution_1_score > battleData.judge.solution_2_score) winner = "AI Response 1";
        else if (battleData.judge.solution_2_score > battleData.judge.solution_2_score) winner = "AI Response 2"
    }
// console.log("Check Function:", handleStartBattle)
    return (
        <div className="flex h-screen bg-gray-800 text-gray-100 font-sans">
            {/* Left Sidebar  */}
            <Sidebar onNewChat={handleNewChat} />

            {/* Right Side me main component Area */}
            <main className="flex-1 flex flex-col items-center p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-50
           ">
                {/* Title Area */}
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-4xl font-extrabold mb-3 text-white tracking-widest drop-shadow-md">AI Battle Arena</h1>
                    <p className="text-gray-400 text-lg"> Two AIs. One Question. One Winner.</p>
                </div>
                {/* Prompt input */}
                <div className="w-full max-w-4xl mb-12 ">
                    <PromptInput onBattleSubmit={handleStartBattle} />
                </div>
                {/* Loading State Showing */}
                {isLoading && (
                    <div className="text-yellow-400 text-xl font-bold animate-pulse mt-10">
                        ⚔️AIs are battling.... Please wait...
                    </div>
                )}

                {errar && (<div className="text-red-500 bg-red-900/30 px-6 py-4 rounded-md mt-10 border border-red500">
                    {errar}
                </div>)}

                {/* Batttle Data shoing box if available */}
                {!isLoading && battleData && (<div className="w-full max-w-6xl flex flex-col items-center animate-fade-in">
                    {/* question diaplay box   */}
                    <div className="bg-gray-700 px-6 py-3 rounded-lg mb-8 text-xl font-medium border-gray-600 shadow-md">
                        Question: <span className="text-white">{battleData?.problem}</span>
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
                </div>
                )}
            </main>
        </div>
    )
}

export default Arena;