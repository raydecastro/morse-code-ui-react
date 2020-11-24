import { Component } from 'react';

class MorseCodeCharacter extends Component {
    render() {
        return (
            <div className="morseCodeCharacter">
                <span className="code">{this.props.morseCode}</span>
                <span className="letter">{this.props.letter}</span>
            </div>
        )
    }
}

export default MorseCodeCharacter;