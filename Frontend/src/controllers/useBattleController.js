import { useState } from "react";
import { fetchBattleResult } from "../models/battleModel";

export const useBattleController = () => {
    const [battleData, setBattleData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [errar, setErrar] = useState(null)

    const handleStartBattle = async (question) => {
        setBattleData(null);
        setErrar(null);
        setIsLoading(true)
        try {
            const realData = await fetchBattleResult(question);
            setBattleData(realData);
        } catch (err) {
            setErrar('Error in getting data from Backend', err)
            console.error(err);
        } finally {
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