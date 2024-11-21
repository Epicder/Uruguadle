import '../App.css';
import './css/keyboard.css';

const Buttons = (props) => {
    const className = `key ${props.isSpecial ? 'special-key' : ''}`;
    return (
        <button className={className}>{props.content}</button>
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