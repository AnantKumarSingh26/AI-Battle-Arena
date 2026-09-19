import { useState } from "react";

export const useBattleController = () => {
    const [battleData, setBattleData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errar, setErrar] = useState(null)

    const handleStartBattle = async (question) => {
        setBattleData(null);
        setErrar(null);
        setIsLoading(true)
        try {
            setTimeout(() => {
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
                }
                setBattleData(dummyResponse)
                setIsLoading(false)
            }, 1500);

        } catch (err) {
            setErrar('Error in getting data from Backend',err)
            setIsLoading(false)
        }
    }
    const handleNewChat = () => {
        setBattleData(null);
        setErrar(null)
    }
    return {
        battleData,
        isLoading,
        errar,
        handleStartBattle,
        handleNewChat
    }
}