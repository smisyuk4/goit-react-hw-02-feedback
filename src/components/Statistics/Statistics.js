import { countTotalFeedback, countPositiveFeedbackPercentage } from "utils"
import {Feedback, Count} from "./Statistics.styled"

export const Statistics = ({ state }) => {
    const {good, neutral, bad} = state

    const total = countTotalFeedback(good, neutral, bad)
    const positivePercentage = countPositiveFeedbackPercentage(good, total)

    return <ul>
                <Feedback>Good:<Count>{good}</Count></Feedback>
                <Feedback>Neutral:<Count>{neutral}</Count></Feedback>
                <Feedback>Bad:<Count>{bad}</Count></Feedback>
                <Feedback>Total feedbacks:<Count>{total}</Count></Feedback>
                <Feedback>Positive percentage:<Count>{positivePercentage}%</Count></Feedback>
            </ul>
}