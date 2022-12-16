import { ContainerOptions, OptionBtn } from "./FeedbackOptions.styled"


export const FeedBackOptions = ({ incrementGood, incrementNeutral, incrementBad }) => {
    return <ContainerOptions>
            <OptionBtn type="button" aria-label="Good" onClick={incrementGood}>Good</OptionBtn>
            <OptionBtn type="button" aria-label="Neutral" onClick={incrementNeutral}>Neutral</OptionBtn>
            <OptionBtn type="button" aria-label="Bad" onClick={incrementBad}>Bad</OptionBtn>
        </ContainerOptions>
}