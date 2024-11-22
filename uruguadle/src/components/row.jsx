import './css/grid.css'

export default function Row(props) {
    const numElements = props.lenrow.length;
    const elementsArray = Array.from({ length: numElements });
    if (props.guess) {
        return (
            <div className="row past">
                {props.guess.map((l, i) => (
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        );
    }

  // fill each square with the user input letter, fill with empty divs if no input
    if (props.currentGuess) {
        return (
            <div className="row current">
                {elementsArray.map((_, i) => (
                    <div key={i} className={i < props.currentGuess.length ? 'filled' : ''}>
                        {props.currentGuess[i]}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="row">
            {elementsArray.map((_, index) => (
                <div key={index}></div>
            ))}
        </div>
    );
}