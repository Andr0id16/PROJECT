function CalculateResult(props) {
    let wpm = Math.round(props.state.words.length * 60 / props.state.seconds);
    console.log(props.correct + "," + props.wrong)
    return <span>WPM: {wpm}, Correct: {props.state.correct}, Wrong: {props.state.wrong}</span>
}

class Game extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            words:[],
            donewords:[],
            count:0,
            correct:0,
            wrong:0,
            seconds:0,
            word_tags: [],
            started:false,
        }

        this.scanFile(this.props.txtfile);

        this.key_pressed = this.key_pressed.bind(this);
        this.startGame = this.startGame.bind(this);
        this.update_seconds = this.update_seconds.bind(this);
    }
    
    startGame(wordlist) {
        console.log(wordlist);
        let temp_tags = [];
        for (var cnt = 0; cnt < wordlist.length; cnt++) {
            temp_tags.push(<span className="unused" key={cnt}>{wordlist[cnt]} </span>);
        }

        this.setState({
            words: wordlist,
            word_tags: temp_tags,
        });
    }

    scanFile(filename) {
        var self = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var array=JSON.parse(xhttp.responseText);
                var randomNumber=Math.floor(Math.random()*array.length);
                var quote = array[randomNumber].split(' ');
                self.startGame(quote);
            }
        };
        xhttp.open('GET', this.props.txtfile);
        xhttp.send();
    }

    update_seconds() {
        this.setState({seconds: this.state.seconds + 1});
    }

    key_pressed(event) {
        if (!this.state.started) {
            this.setState({started: true});
            this.f = setInterval(this.update_seconds, 1000);
        }

        if (event.key == ' ') {
            this.setState(
                prevstate => {
                    let tcorrect = event.target.value == this.state.words[this.state.count];
                    event.target.value = '';
                    event.preventDefault();

                    if (this.state.count + 1 == this.state.words.length) {
                        clearInterval(this.f);
                        ReactDOM.render(<CalculateResult state={this.state}/>, document.getElementById('bb2'));
                    }

                    return {
                        words: prevstate.words,
                        donewords: prevstate.donewords.concat(event.target.value),
                        count: prevstate.count + 1,
                        correct: prevstate.correct + tcorrect,
                        wrong: prevstate.wrong + !tcorrect,
                    }

                    
                },
            );
        }
        event.persist();
    }

    render() {
        return (
            <div>
                {this.state.word_tags}
                <span>{this.state.words[this.state.count]}</span>
                <br/>
                <input className={"gameinput"} onKeyPress={this.key_pressed}/>
            </div>
        );
    }
}

ReactDOM.render(<Game txtfile='quotes.txt'/>, document.getElementById('bb'));