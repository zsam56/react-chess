import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg'
import './index.css';

import king_white from './img/k_w.svg'
import queen_white from './img/q_w.svg'
import rook_white from './img/r_w.svg'
import bishop_white from './img/b_w.svg'
import knight_white from './img/n_w.svg'
import pawn_white from './img/p_w.svg'

import king_black from './img/k_b.svg'
import queen_black from './img/q_b.svg'
import rook_black from './img/r_b.svg'
import bishop_black from './img/b_b.svg'
import knight_black from './img/n_b.svg'
import pawn_black from './img/p_b.svg'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Moves = Object.freeze({
	Vertical: 0,
	Horizontal: 1,
	Up: 2,
	Pawn_Diagonal: 3,
	Knight: 4,
	Diagonal: 5,
	King: 6
})

const piece_obj = {
	Rw: {
		id: 'Rw',
		color: 'white',
		starting_pos: [
			{
				x: 7,
				y: 0
			},
			{
				x: 7,
				y: 7
			}
		],
		path: rook_white,
		component: function(position, path) {
			return (
				<Rook position={position}
						path={path}
				 />
			)
		},
		possibleMoves: [Moves.Vertical, Moves.Horizontal]
	},
	Nw: {
		id: 'Nw',
		color: 'white',
		starting_pos: [
			{
				x: 7,
				y: 1
			},
			{
				x: 7,
				y: 6
			}
		],
		path: knight_white,
		component: function(position, path) {
			return (
				<ChessPiece 
					position={position}
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Knight]
	},
	Bw: {
		id: 'Bw',
		color: 'white',
		starting_pos: [
			{
				x: 7,
				y: 2
			},
			{
				x: 7,
				y: 5
			}
		],
		path: bishop_white,
		component: function(position, path) {
			return (
				<Rook position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Diagonal]
	},
	Qw: {
		id: 'Qw',
		color: 'white',
		starting_pos: [
			{
				x: 7,
				y: 3
			}
		],
		path: queen_white,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Diagonal, Moves.Vertical, Moves.Horizontal]
	},
	Kw: {
		id: 'Kw',
		color: 'white',
		starting_pos: [
			{
				x: 7,
				y: 4
			}
		],
		path: king_white,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.King]
	},
	Pw: {
		id: 'Pw',
		color: 'white',
		starting_pos: [
			{
				x: 6,
				y: 0
			},
			{
				x: 6,
				y: 1
			},
			{
				x: 6,
				y: 2
			},
			{
				x: 6,
				y: 3
			},
			{
				x: 6,
				y: 4
			},
			{
				x: 6,
				y: 5
			},
			{
				x: 6,
				y: 6
			},
			{
				x: 6,
				y: 7
			},
		],
		path: pawn_white,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Up, Moves.Pawn_Diagonal]
	},


	Rb: {
		id: 'Rb',
		color: 'black',
		starting_pos: [
			{
				x: 0,
				y: 0
			},
			{
				x: 0,
				y: 7
			}
		],
		path: rook_black,
		component: function(position, path) {
			return (
				<Rook position={position}
						path={path}
				 />
			)
		},
		possibleMoves: [Moves.Vertical, Moves.Horizontal]
	},
	Nb: {
		id: 'Nb',
		color: 'black',
		starting_pos: [
			{
				x: 0,
				y: 1
			},
			{
				x: 0,
				y: 6
			}
		],
		path: knight_black,
		component: function(position, path) {
			return (
				<ChessPiece 
					position={position}
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Knight]
	},
	Bb: {
		id: 'Bb',
		color: 'black',
		starting_pos: [
			{
				x: 0,
				y: 2
			},
			{
				x: 0,
				y: 5
			}
		],
		path: bishop_black,
		component: function(position, path) {
			return (
				<Rook position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Diagonal]
	},
	Qb: {
		id: 'Qb',
		color: 'black',
		starting_pos: [
			{
				x: 0,
				y: 3
			}
		],
		path: queen_black,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Diagonal, Moves.Vertical, Moves.Horizontal]
	},
	Kb: {
		id: 'Kb',
		color: 'black',
		starting_pos: [
			{
				x: 0,
				y: 4
			}
		],
		path: king_black,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.King]
	},
	Pb: {
		id: 'Pb',
		color: 'black',
		starting_pos: [
			{
				x: 1,
				y: 0
			},
			{
				x: 1,
				y: 1
			},
			{
				x: 1,
				y: 2
			},
			{
				x: 1,
				y: 3
			},
			{
				x: 1,
				y: 4
			},
			{
				x: 1,
				y: 5
			},
			{
				x: 1,
				y: 6
			},
			{
				x: 1,
				y: 7
			},
		],
		path: pawn_black,
		component: function(position, path) {
			return (
				<Rook 
					position={position} 
					path={path}
				/>
			)
		},
		possibleMoves: [Moves.Up, Moves.Pawn_Diagonal]
	}
}

function ChessPiece(props) {
	return (
		<ReactSVG
			id={props.id}
		    path={props.path}
		    onInjected={svg => {
		      console.log('onInjected', svg)
		    }}
		    svgClassName="piece-svg"
		    className="piece-wrapper"
		    onClick={() => {
		      console.log('wrapper onClick')
		    }}
		  />
		)
}

class Rook extends React.Component {
	constructor(props) {
		super(props) 

		this.state = {
			x: props.x,
			y: props.y
		}
	}

	render() {
		return(
			<ChessPiece 
				id={this.props.id}
				path={this.props.path}
			/>
		)
	}
}

/**
 * Square on the board
 * extends PureComponent because more often than
 * not, we are not changing every square. Helps with 
 * performance
 */
class Square extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			occupied: false,
			piece: ''
		}
	}

	handleClick() {
		this.props.squareClickCallback(this.state);
	}

	render() {
		let path = '';
		let piece_component;
		let move = false;
		if (this.props.pieceData != undefined) {
			this.state.piece = this.props.pieceData;
			path = this.props.pieceData.path;
			piece_component = this.props.pieceData.component(this.props.id, path);
		}

		return (
			<div className={this.props.color} onClick={() => this.handleClick()}>
				{piece_component}
				<span className={this.props.possMove ? 'poss-move' : 'poss-move invisible'}></span>
			</div>
		)
	}
}

class Board extends React.Component {
	constructor(props) {
		super(props);
		let rows = new Array(8).fill(0);
		for (let i = 0; i < 8; i++) {
			rows[i] = new Array(8).fill(
				{
					piece: '',
					piece_color: '',
					move: false
				}
			);
		}

		//set pieces in starting positions
		const squares = rows.slice();
		Object.keys(piece_obj).forEach(function(key) {
			let piece = piece_obj[key];
			for (let pos of piece.starting_pos) {
				let square_obj = rows[pos.x][pos.y];
				var new_square_obj = {...square_obj, piece: piece.id, piece_color: piece.color};
				rows[pos.x][pos.y] = new_square_obj;
			}
		})

		this.state = {
			squares: squares,
			moving: false,
			move_square: {}
		};
	}

	addMoveSquare = (squaresList, x, y) => {
		//add square as a possible move
		let square_obj = squaresList[x][y];
		let new_square_obj = {...square_obj, move: true};
		squaresList[x][y] = new_square_obj;
	}

	canMoveToSquare = (squaresList, x, y, color) => {
		//check if we can move to a certain square
		return (x >= 0 && x < 8 &&
			y >= 0 && y < 8 && 
			(squaresList[x][y].piece === '' ||
			 squaresList[x][y].piece_color !== color)
		)
	}

	handleClick = (squareData) => {
		if (!this.state.moving) {
			let moving_piece = squareData.piece;

			if (moving_piece === '') {
				return;
			}
			let curr_pos = squareData.id.split('-');

			//piece's possible moves
			let possibleMoves = moving_piece.possibleMoves;

			//mark possible move squares
			const squares = this.state.squares.slice();
			let new_moves = [];
			let self = this;
			for (let move of possibleMoves) {
				switch(move) {
					case Moves.Vertical: //find possible vertical moves
						//get moves going up
						let x = parseInt(curr_pos[0]) - 1;
						let y = parseInt(curr_pos[1]);
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}
							x--;
						}

						//get moves going down
						x = parseInt(curr_pos[0]) + 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}
							x++;
						}

						break;
					case Moves.Horizontal:
						//get moves going left
						x = parseInt(curr_pos[0]);
						y = parseInt(curr_pos[1]) - 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}
							y--;
						}

						//get moves going right
						y = parseInt(curr_pos[1]) + 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}
							y++;
						}

						break;
					case Moves.Up: //find possible moves for going up
						if (moving_piece.color === 'white') {
							x = parseInt(curr_pos[0]) - 1;
						} else {
							x = parseInt(curr_pos[0]) + 1;
						}
						y = parseInt(curr_pos[1]);

						if (squares[x][y].piece === '') {
							//add square as a possible move
							let square_obj = squares[x][y];
							let new_square_obj = {...square_obj, move: true};
							squares[x][y] = new_square_obj;

							new_moves.push({
								x: x,
								y: y
							});
						}
						break;
					case Moves.Knight:
						const positions = [
							{
								x: parseInt(curr_pos[0]) - 2,
								y: parseInt(curr_pos[1]) + 1
							},
							{
								x: parseInt(curr_pos[0]) - 1,
								y: parseInt(curr_pos[1]) + 2
							},
							{
								x: parseInt(curr_pos[0]) - 2,
								y: parseInt(curr_pos[1]) - 1
							},
							{
								x: parseInt(curr_pos[0]) + 1,
								y: parseInt(curr_pos[1]) + 2
							},
							{
								x: parseInt(curr_pos[0]) + 2,
								y: parseInt(curr_pos[1]) + 1
							},
							{
								x: parseInt(curr_pos[0]) - 1,
								y: parseInt(curr_pos[1]) - 2
							},
							{
								x: parseInt(curr_pos[0]) + 1,
								y: parseInt(curr_pos[1]) - 2
							},
							{
								x: parseInt(curr_pos[0]) + 2,
								y: parseInt(curr_pos[1]) - 1
							},
						];
						positions.forEach(function(position) {
							if(self.canMoveToSquare(squares, position.x, position.y, moving_piece.color)) {
								self.addMoveSquare(squares, position.x, position.y);

								new_moves.push({
									x: position.x,
									y: position.y
								});
							}
						});

						break;
					case Moves.Diagonal:
						x = parseInt(curr_pos[0]) + 1;
						y = parseInt(curr_pos[1]) + 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}

							x++;
							y++;
						}

						x = parseInt(curr_pos[0]) - 1;
						y = parseInt(curr_pos[1]) + 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}

							x--;
							y++;
						}

						x = parseInt(curr_pos[0]) - 1;
						y = parseInt(curr_pos[1]) - 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}

							x--;
							y--;
						}

						x = parseInt(curr_pos[0]) + 1;
						y = parseInt(curr_pos[1]) - 1;
						while(this.canMoveToSquare(squares, x, y, moving_piece.color)) {
							//add square as a possible move
							this.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});

							if (squares[x][y].piece_color != '') {
								break;
							}

							x++;
							y--;
						}

						break;
					case Moves.King:
						const king_positions = [
							{
								x: parseInt(curr_pos[0]) - 1,
								y: parseInt(curr_pos[1])
							},
							{
								x: parseInt(curr_pos[0]) - 1,
								y: parseInt(curr_pos[1]) + 1
							},
							{
								x: parseInt(curr_pos[0]),
								y: parseInt(curr_pos[1]) + 1
							},
							{
								x: parseInt(curr_pos[0]) + 1,
								y: parseInt(curr_pos[1]) + 1
							},
							{
								x: parseInt(curr_pos[0]) + 1,
								y: parseInt(curr_pos[1])
							},
							{
								x: parseInt(curr_pos[0]) + 1,
								y: parseInt(curr_pos[1]) - 1
							},
							{
								x: parseInt(curr_pos[0]),
								y: parseInt(curr_pos[1]) - 1
							},
							{
								x: parseInt(curr_pos[0]) - 1,
								y: parseInt(curr_pos[1]) - 1
							},
						];
						king_positions.forEach(function(position) {
							if(self.canMoveToSquare(squares, position.x, position.y, moving_piece.color)) {
								self.addMoveSquare(squares, position.x, position.y);

								new_moves.push({
									x: position.x,
									y: position.y
								});
							}
						});

						break;
				}
			}

			this.setState({
				squares: squares,
				moving: true,
				move_square: squareData,
				moves: new_moves
			});
		} else {
			let from_pos = this.state.move_square.id.split('-');
			let to_pos = squareData.id.split('-');

			//check if we can move here
			let can_move = false;
			for (let move of this.state.moves) {
				if (move.x == to_pos[0] && move.y == to_pos[1]) {
					can_move = true;
				}
			}

			const squares = this.state.squares.slice();
			if (can_move) {
				//remove the piece from the from square
				let from_obj = squares[from_pos[0]][from_pos[1]];
				let new_from_obj = {...from_obj, piece: '', piece_color: ''};
				squares[from_pos[0]][from_pos[1]] = new_from_obj;

				//add the piece to the to square
				let to_obj = squares[to_pos[0]][to_pos[1]];
				let new_to_obj = {...to_obj, piece: this.state.move_square.piece.id, piece_color: this.state.move_square.piece.color};
				squares[to_pos[0]][to_pos[1]] = new_to_obj;
			}

			//remove move symbols
			for (let r = 0; r < 8; r++) {
				for (let c = 0; c < 8; c++) {
					let square_obj = squares[r][c];
					let new_obj = {...square_obj, move: false};
					squares[r][c] = new_obj;
				}
			}

			this.setState({
				squares: squares, 
				moving: false, 
				move_square: {}
			});
		}
	}

	renderWhiteSquare(i, position, pieceData, possMove) {
		return (
			<Square 
				color='square white'
				key={position} 
				id={position}
				squareClickCallback={this.handleClick}
				pieceData={pieceData}
				possMove={possMove}
			/>
		);
	}

	renderBlackSquare(i, position, pieceData, possMove) {
		return (
			<Square 
				color="square black"
				key={position}
				id={position}
				squareClickCallback={this.handleClick}
				pieceData={pieceData}
				possMove={possMove}
			/>
		);
	}

	renderRow(row, row_num, start_white) {
		let black = false;
		if (!start_white) {
			black = true;
		}
		let row_view = [];
		for (let c = 0; c < 8; c++) {
			let square_key = '' + row_num + '-' + c;
			let piece_id = row[c].piece;
			let pieceData = piece_obj[piece_id];
			let possMove = row[c].move;
			if (black) {
				row_view.push(
					this.renderBlackSquare(1, square_key, pieceData, possMove)
				)
				black = false;
			} else {
				row_view.push(
					this.renderWhiteSquare(1, square_key, pieceData, possMove)
				)
				black = true;
			}
		}
		return row_view;
	}

	renderBoard() {
		let board = [];
		let start_white = true;
		for (let r = 0; r < 8; r++) {
			let row = this.state.squares[r];
			board.push(
				<div className="board-row" key={r}>
					{this.renderRow(row, r, start_white)}
				</div>
			);
			start_white = !start_white;
		}
		return board;
	}

	render() {

		return (
			<div>
				{this.renderBoard()}
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
