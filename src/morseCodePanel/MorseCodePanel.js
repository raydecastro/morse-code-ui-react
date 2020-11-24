import { Component } from 'react';
import MorseCodeCharacter from "./MorseCodeCharacter";
import MorseCodeGenerator from 'morse-code/source/morsecodegenerator';
import "./MorseCodePanel.css";

class MorseCodePanel extends Component {
    constructor(props) {
        super(props);
        this.mcg = new MorseCodeGenerator(); 

        this.state = {
            inputMessage: "",
            outputMorseCode: ""
        }

        this.generateMorseCode = this.generateMorseCode.bind(this);
        this.handleInputMessageChange = this.handleInputMessageChange.bind(this);
        this.renderMorseCodeCharacters = this.renderMorseCodeCharacters.bind(this);
        this.clear = this.clear.bind(this);
    }

    render() {
        return (
            <div className="morseCodePanel">
                    <input className="inputMessage" type="text" placeholder="enter message"
                           value={this.state.inputMessage} onChange={this.handleInputMessageChange} />
                    <button onClick={this.generateMorseCode} >
                        generate morse code
                    </button>
                    <button onClick={this.clear} >
                        clear
                    </button>
                    
                    <div className="outputMorseCode">
                        {this.renderMorseCodeCharacters()}
                    </div>

                    <textarea className="outputMorseCode" value={this.state.outputMorseCode} readOnly={true} />
            </div>
        )
    }

    handleInputMessageChange(event) {
        this.setState({ 
            inputMessage: event.target.value 
        });
    }

    generateMorseCode() {
        let mc = this.mcg.generate(this.state.inputMessage);

        this.setState({
            outputMorseCode: mc
        });
    }

    clear() {
        this.setState({
            inputMessage: "",
            outputMorseCode: ""
        });
    }

    renderMorseCodeCharacters() {
        return this.state.inputMessage.split("").map((letter, index, list) => {
            let code = this.mcg.generate(letter);
            return <MorseCodeCharacter key={letter+index} letter={letter} morseCode={code} />
            });
    }
}

export default MorseCodePanel;
