import {countTotalFeedback, countPositiveFeedbackPercentage} from "utils"

export const Statistics = ({ state }) => {
    const {good, neutral, bad} = state

    const total = countTotalFeedback(good, neutral, bad)
    const positivePercentage = countPositiveFeedbackPercentage(good, total)

    return <ul>
                <li>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>
                <li>Bad: <span>{bad}</span></li>
                <li>Total feedbacks: <span>{total}</span></li>
                <li>Positive percentage: <span>{positivePercentage}%</span></li>
            </ul>
}