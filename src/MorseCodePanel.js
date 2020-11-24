import { Component } from 'react';
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
    }

    render() {
        return (
            <div className="morseCodePanel">
                    <input className="inputMessage" type="text" placeholder="enter message"
                           value={this.state.inputMessage} onChange={this.handleInputMessageChange} />
                    <p className="outputMorseCode"
                       dangerouslySetInnerHTML={{__html: this.state.outputMorseCode}} >
                    </p>
                    <button onClick={this.generateMorseCode}>
                        generate morse code
                    </button>
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

        console.log('mc: ' + mc);

        this.setState({
            outputMorseCode: mc
        });
    } 

    replaceSpacesWithNBSP(text) {
        return text.replace(/   /g, "&nbsp;&nbsp;&nbsp;");
    }
}

export default MorseCodePanel;
