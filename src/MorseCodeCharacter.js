import { Component } from 'react';

class MorseCodeCharacter extends Component {
    constructor(props) {
        super(props);
    }

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