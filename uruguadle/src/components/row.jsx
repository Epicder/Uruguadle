import './css/grid.css'

export default function Row(props) {
    const numElements = props.lenrow.length;
    const elementsArray = Array.from({ length: numElements });
    return (
        <div className="row">
            {elementsArray.map((_, index) => (
                <div key={index} className="game-cell"></div>
            ))}
        </div>
    );
}