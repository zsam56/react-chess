import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function WhiteSquare(props) {
	return (
		<button className="square white" onClick={props.onClick}>
			
		</button>
	);
}

function BlackSquare(props) {
	return (
		<button className="square black" onClick={props.onClick}>
			
		</button>
	);
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(64).fill(0),
		};
	}

	// handleClick(i) {
	// 	const squares = this.state.squares.slice();
	// 	if (calculateWinner(squares) || squares[i]) {
	// 		return;
	// 	}
	// 	squares[i] = this.state.xIsNext ? 'X' : 'O';
	// 	this.setState(
	// 		{
	// 			squares: squares,
	// 			xIsNext: !this.state.xIsNext
	// 		}
	// 	);
	// }

	renderWhiteSquare(i) {
		return (
			<WhiteSquare 
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	renderBlackSquare(i) {
		return (
			<BlackSquare 
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
	}

	renderRow(startColor, row_num) {
		let color = startColor;
		let row = [];
		for (let i = 0; i < 8; i++) {
			let square_key = 'rect' + row_num + '-' + i;
			if (color === 'b') {
				row.push(
					<span key={square_key}>
						{this.renderBlackSquare(1)}
					</span>
				)
				color = 'w';
			} else {
				row.push(
					<span key={square_key}>
						{this.renderWhiteSquare(1)}
					</span>
				)
				color = 'b';
			}
		}
		return row
	}

	render() {
		let color = 'w';

		return (
			<div>
				<div className="board-row">
					{this.renderRow('b', 1)}
				</div>
				<div className="board-row">
					{this.renderRow('w', 2)}
				</div>
				<div className="board-row">
					{this.renderRow('b', 3)}
				</div>
				<div className="board-row">
					{this.renderRow('w', 4)}
				</div>
				<div className="board-row">
					{this.renderRow('b', 5)}
				</div>
				<div className="board-row">
					{this.renderRow('w', 6)}
				</div>
				<div className="board-row">
					{this.renderRow('b', 7)}
				</div>
				<div className="board-row">
					{this.renderRow('w', 8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
		  			<Board />
				</div>
				<div className="game-info">
		  			<div>{/* status */}</div>
		  			<ol>{/* TODO */}</ol>
				</div>
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
