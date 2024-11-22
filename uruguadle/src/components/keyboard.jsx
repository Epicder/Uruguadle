import '../App.css';
import './css/keyboard.css';

const detectInput = (e) => {
    console.log(e.target.textContent
        .replace('✓', 'Check')
        .replace('⌫', 'Delete')
        .replace('Q', 'Q')
        .replace('W', 'W')
        .replace('E', 'E')
        .replace('R', 'R')
        .replace('T', 'T')
        .replace('Y', 'Y')
        .replace('U', 'U')
        .replace('I', 'I')
        .replace('O', 'O')
        .replace('P', 'P')
        .replace('A', 'A')
        .replace('S', 'S')
        .replace('D', 'D')
        .replace('F', 'F')
        .replace('G', 'G')
        .replace('H', 'H')
        .replace('J', 'J')
        .replace('K', 'K')
        .replace('L', 'L')
        .replace('Ñ', 'Ñ')
        .replace('Z', 'Z')
        .replace('X', 'X')
        .replace('C', 'C')
        .replace('V', 'V')
        .replace('B', 'B')
        .replace('N', 'N')
        .replace('M', 'M')
    );
};
const Buttons = (props) => {
    const className = `key ${props.isSpecial ? 'special-key' : ''}`;
    return (
        <button className={className} onClick={detectInput}>{props.content}</button>
    );

};


export default function Keyboard() {
    
    const rows = [
        "QWERTYUIOP",
        "ASDFGHJKLÑ",
        "✓ZXCVBNM⌫"
    ];
    const specialChars = ['✓', '⌫'];

    return (
        <div className="keyboard">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="keyboard-row">
                    {[...row].map((char, index) => (
                        <Buttons 
                            key={index} 
                            content={char} 
                            isSpecial={specialChars.includes(char)} 
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}