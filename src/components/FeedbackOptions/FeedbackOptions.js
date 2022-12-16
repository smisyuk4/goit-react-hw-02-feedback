
export const FeedBackOptions = ({ incrementGood, incrementNeutral, incrementBad }) => {
    return <div>
            <button type="button" aria-label="Good" onClick={incrementGood}>Good</button>
            <button type="button" aria-label="Neutral" onClick={incrementNeutral}>Neutral</button>
            <button type="button" aria-label="Bad" onClick={incrementBad}>Bad</button>
        </div>
}