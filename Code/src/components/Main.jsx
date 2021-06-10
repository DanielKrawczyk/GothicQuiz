import React, { Component } from 'react';
import $ from 'jquery';
import Gothic from './Gothic';
import Gothic2 from './Gothic2';
import Gothic3 from './Gothic3';

class Main extends Component {
    state = {
        count: 0,
        selected: '',
        game: [
            <div key='main' className="main">
                <div key='1' className="main-title">
                    <img key='1.1' src="./images/title.png" alt="Tytuł gry"/>
                </div>
                <div key='2' className="main-options">
                    <div key='2.1' onClick={() => this.handleChoice('gothic')} className="main-options_item">
                        Gothic I
                    </div>
                    <div key='2.2' onClick={() => this.handleChoice('gothic2')} className="main-options_item">
                        Gothic II
                    </div>
                    <div key='2.3' className="main-options_item">
                        
                    </div>
                </div>
                <div key='3' className="main-info">
                    Wybierz quiz do pokonania!
                </div>
            </div>,
            <div key='quiz-loading' className="quiz-loading">
                <h1 key='1'>WCZYTYWANIE</h1>
                <div key='2' className="loading"><div key='2.1' className="bar"></div></div>
            </div>,
            <Gothic />,
            <Gothic2 />,
            <Gothic3 />
        ]
    }

    handleChoice = (x) => {
        let selected = x;
        let count = this.state.count;
        count++;
        this.setState({ selected: selected, count: count });
        this.handleDownloadQuestions();
        this.handleLoadingBar();
    }


    handleDownloadQuestions = () => {
        switch(this.state.selected) {
            case 'gothic':
                this.setState({ count: 2 });
                break;
            case 'gothic2':
                this.setState({ count: 3 });
                break;
            case 'gothic3':
                this.setState({ count: 4 });
                break;
            default:
                break;
        }
    }

    handleLoadingBar = () => {
        $('.bar').animate({width: '75px'}, 100);
        setTimeout(() => {
            $('.bar').animate({width: '125px'}, 1);

            setTimeout(() => {
                $('.bar').animate({width: '210px'}, 2500);
                $('.bar').animate({width: '250px'}, 10);

                setTimeout(() => {
                    $('.bar').animate({width: '285px'}, 200)

                    setTimeout(() => {
                        this.handleDownloadQuestions();
                    }, 3000);
                }, 3000);
            }, 1000);
        }, 1000)
    }

    render() { 
        return (
            this.state.game[this.state.count]
        );
    }
}
 
export default Main;