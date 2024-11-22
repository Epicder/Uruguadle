import Row from './row'
import './css/grid.css'
export default function Grid (props) {
    return (
        <> 
        <div className='grid'>
                {props.guesses.map((g, i) => {
                if (props.turn === i) {
                return <Row key={i} lenrow={props.lenrow} currentGuess={props.currentGuess}/>
}
                return <Row key={i} lenrow={props.lenrow} guess={g}/>
            })}
        </div> 
        </>
     
    )
}