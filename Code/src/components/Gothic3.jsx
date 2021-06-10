import React, { Component } from 'react';
import { gothic3 } from '../data/questions.json';
import $ from 'jquery';

class Gothic3 extends Component {
    state = {
        points: 0,
        nr: 0,
        dialogue: ''
    }

    handleShowNextQuestion = (val) => {
        if (val === true) {
            let points = this.state.points;
            points++;
            this.setState({ points: points });
        }
        if (this.state.nr === 24) {
            this.handleShowProperDialogue();
            $('.result.hidden').removeClass('hidden');
            $('.quiz').addClass('hidden');
            return;
        }
        let nr = this.state.nr;
        nr++;
        this.setState({ nr: nr });
    }

    handleShowProperDialogue = () => {
        const { points } = this.state;
        if (points === 24) {
            this.setState({ dialogue: 'Pyrokar: To niesamowite! Czy Ty masz pojęcie jak wielkim fanem Gothica jesteś?' });
        } else if (points < 5) {
            this.setState({ dialogue: 'Bulko: Znam ja takich jak Ty. Mocni tylko w gębie. Gardzę ludźmi, którzy stroją się jak paw i chwalą się swoją wiedzą o Gothicu!' })
        } else if (points < 10) {
            this.setState({ dialogue: 'Saturas: Ale czy ja Cię skądś znam... Oczywiście... Ty sukinsynu! Nie myśl, że zapomnieliśmy jak chwaliłeś się swoją wiedzą o Gothicu w Nowym Obozie!' })
        } else if (points < 15) {
            this.setState({ dialogue: 'Vatras: A więc jesteś graczem... i grałeś dużo w Gothica... i uważasz, że wiesz o nim wszystko... Mam wrażenie, że nie mówisz mi całej prawdy.' })
        } else if (points < 20) {
            this.setState({ dialogue: 'Bosper: Dobra robota! Jeśli chcesz, możesz zacząć pracę jako mój czeladnik już od zaraz!' })
        } else if (points < 24) {
            this.setState({ dialogue: 'Gomez: Nieźle jak na żółtodzioba. Przyda się nam ktoś taki jak Ty. Witaj w drużynie, chłopcze! Kruk wprowadzi Cię w szczegóły.' })
        }
    }

    handleAgain = () => {
        $('.quiz').removeClass('hidden');
        $('.result').addClass('hidden');
        this.setState({ nr: 0 })
    }

    render() { 
        return (
            <React.Fragment>
                <div key="quiz" className="quiz">
                    <div key='1' className="quiz-question">
                        <h4>Pytanie nr {this.state.nr + 1} / 25</h4>
                        <p>{gothic3.questions[this.state.nr]}</p>
                    </div>
                    <div key='2' className="quiz-answers">
                        {gothic3.answers[0][this.state.nr].map(m => 
                            <p key={m[0]} onClick={() => this.handleShowNextQuestion(m[1])}>{m[0]}</p>
                        )}
                    </div>
                </div>
                <div className="result hidden">
                    <img src="./images/gothic3.png" alt="Tytuł gry"/>
                    <div className="result-title">
                        <h1>Gratuluję!</h1>
                    </div>
                    <div className="result-points">
                        <p>Zdobyte doświadczenie: {this.state.points}00 / 2500 PD</p>
                    </div>
                    <div className="result-dialogue">
                        {this.state.dialogue}
                    </div>
                    <div className="result-buttons">
                        <button onClick={() => this.handleAgain()}>Możesz powtórzyć?</button>
                        <button onClick={() => window.location.reload()}>KONIEC.</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Gothic3;