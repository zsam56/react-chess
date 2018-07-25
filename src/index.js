import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Board from './Board';
import GameInfo from './GameInfo';
import registerServiceWorker from './registerServiceWorker';

class Game extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			black_check: false,
			white_check: false,
			moves: [
			]
		};
	}

	updateInfo(prevState) {
		
		let moves = prevState.moves;
		//square we moved from
		let move_square = prevState.move_square;
		let piece_id = move_square.piece.id;

		if (piece_id === 'Pw') {

		}

	}

	addMove() {

	}

	render() {
		return (
			<div className="game">
				<div className="game-board">
		  			<Board updateInfo={this.updateInfo}/>
				</div>
				<GameInfo />
			</div>
		);
	}
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i< lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
