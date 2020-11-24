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
    }

    render() {
        return (
            <div className="morseCodePanel">
                    <input className="inputMessage" type="text" placeholder="enter message"
                           value={this.state.inputMessage} onChange={this.handleInputMessageChange} />
                    <button onClick={this.generateMorseCode}>
                        generate morse code
                    </button>
                    
                    <div className="morseyOutputz">
                        {this.renderMorseCodeCharacters()}
                    </div>

                    <div className="outputMorseCode"
                       dangerouslySetInnerHTML={{__html: this.state.outputMorseCode}} >
                    </div>
            </div>
        )
    }

    handleInputMessageChange(event) {
        this.setState({ 
            inputMessage: event.target.value 
        });
        console.log('msg: ' + event.target.value);
        console.log('inputMessage: ' + this.state.inputMessage);
    }

    generateMorseCode() {
        let mc = this.mcg.generate(this.state.inputMessage);

        mc = this.replaceSpacesWithNBSP(mc);

        this.setState({
            outputMorseCode: mc
        });
    } 

    replaceSpacesWithNBSP(text) {
        return text.replace(/\s\s\s/g, "&nbsp;&nbsp;&nbsp;");
    }

    renderMorseCodeCharacters() {
        return this.state.inputMessage.split("").map((letter, index, list) => {
            console.log('letter: ' + letter);
            let code = this.mcg.generate(letter);
            console.log('code: [' + code + ']');
            return <MorseCodeCharacter key={letter+index} letter={letter} morseCode={code} />
            });
    }
}

export default MorseCodePanel;
