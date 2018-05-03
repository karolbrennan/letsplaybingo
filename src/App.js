import React, { Component } from 'react';
// import logo from './logo.svg';
import _ from 'underscore';
import deepAssign from 'deep-assign';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            balls: {
                1: {letter: "B", number: 1, called: false},
                2: {letter: "B", number: 2, called: false},
                3: {letter: "B", number: 3, called: false},
                4: {letter: "B", number: 4, called: false},
                5: {letter: "B", number: 5, called: false},
                6: {letter: "B", number: 6, called: false},
                7: {letter: "B", number: 7, called: false},
                8: {letter: "B", number: 8, called: false},
                9: {letter: "B", number: 9, called: false},
                10: {letter: "B", number: 10, called: false},
                11: {letter: "B", number: 11, called: false},
                12: {letter: "B", number: 12, called: false},
                13: {letter: "B", number: 13, called: false},
                14: {letter: "B", number: 14, called: false},
                15: {letter: "B", number: 15, called: false},
                16: {letter: "I", number: 16, called: false},
                17: {letter: "I", number: 17, called: false},
                18: {letter: "I", number: 18, called: false},
                19: {letter: "I", number: 19, called: false},
                20: {letter: "I", number: 20, called: false},
                21: {letter: "I", number: 21, called: false},
                22: {letter: "I", number: 22, called: false},
                23: {letter: "I", number: 23, called: false},
                24: {letter: "I", number: 24, called: false},
                25: {letter: "I", number: 25, called: false},
                26: {letter: "I", number: 26, called: false},
                27: {letter: "I", number: 27, called: false},
                28: {letter: "I", number: 28, called: false},
                29: {letter: "I", number: 29, called: false},
                30: {letter: "I", number: 30, called: false},
                31: {letter: "N", number: 31, called: false},
                32: {letter: "N", number: 32, called: false},
                33: {letter: "N", number: 33, called: false},
                34: {letter: "N", number: 34, called: false},
                35: {letter: "N", number: 35, called: false},
                36: {letter: "N", number: 36, called: false},
                37: {letter: "N", number: 37, called: false},
                38: {letter: "N", number: 38, called: false},
                39: {letter: "N", number: 39, called: false},
                40: {letter: "N", number: 40, called: false},
                41: {letter: "N", number: 41, called: false},
                42: {letter: "N", number: 42, called: false},
                43: {letter: "N", number: 43, called: false},
                44: {letter: "N", number: 44, called: false},
                45: {letter: "N", number: 45, called: false},
                46: {letter: "G", number: 46, called: false},
                47: {letter: "G", number: 47, called: false},
                48: {letter: "G", number: 48, called: false},
                49: {letter: "G", number: 49, called: false},
                50: {letter: "G", number: 50, called: false},
                51: {letter: "G", number: 51, called: false},
                52: {letter: "G", number: 52, called: false},
                53: {letter: "G", number: 53, called: false},
                54: {letter: "G", number: 54, called: false},
                55: {letter: "G", number: 55, called: false},
                56: {letter: "G", number: 56, called: false},
                57: {letter: "G", number: 57, called: false},
                58: {letter: "G", number: 58, called: false},
                59: {letter: "G", number: 59, called: false},
                60: {letter: "G", number: 60, called: false},
                61: {letter: "O", number: 61, called: false},
                62: {letter: "O", number: 62, called: false},
                63: {letter: "O", number: 63, called: false},
                64: {letter: "O", number: 64, called: false},
                65: {letter: "O", number: 65, called: false},
                66: {letter: "O", number: 66, called: false},
                67: {letter: "O", number: 67, called: false},
                68: {letter: "O", number: 68, called: false},
                69: {letter: "O", number: 69, called: false},
                70: {letter: "O", number: 70, called: false},
                71: {letter: "O", number: 71, called: false},
                72: {letter: "O", number: 72, called: false},
                73: {letter: "O", number: 73, called: false},
                74: {letter: "O", number: 74, called: false},
                75: {letter: "O", number: 75, called: false}
            },
            pattern: {
                B: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                I: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                N: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                G: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
                O: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
            }
        }
    }

    callNumber = () => {
        // get all balls
        let balls = this.state.balls;
        // get all uncalled balls
        let uncalled = _.where(balls, {called: false});
        // choose a random ball
        let randomball = uncalled[Math.floor(Math.random() * uncalled.length)];
        // set the ball as called
        balls[randomball.number].called = true;
        // update the state to re-render the board
        this.setState(deepAssign({}, this.state, {balls: balls}));
    };

    renderBoard = () => {
        let balls = this.state.balls;
        let rows = {
            B: _.where(balls, {letter: "B"}),
            I: _.where(balls, {letter: "I"}),
            N: _.where(balls, {letter: "N"}),
            G: _.where(balls, {letter: "G"}),
            O: _.where(balls, {letter: "O"})};

        return (
            _.map(rows, (row, letter) => (
                <div key={"row"+letter} className="board-row">
                    <div key={letter} className="letter">{letter}</div>
                    {_.map(row, ball => (
                        <div key={ball.letter + ball.number} className={ball.called ? "called ball" : "ball"}>
                            {ball.number}
                        </div>
                    ))}
                </div>
            ))
        );
    };


    render() {
        return (
            <div className="App">
                <header><h1>Lets Play Bingo</h1></header>
                <section id="bingoboard">
                    {this.renderBoard()}
                </section>
                <section>
                    <button onClick={this.callNumber}>Call Number</button>
                </section>
            </div>
        );
    }
}

export default App;