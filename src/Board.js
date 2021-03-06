import React from 'react';
import ReactSVG from 'react-svg';

import Moves from './Moves';
import Square from './Square';
import piece_obj from './Pieces';

/**
 * Board class that controls the movements of the
 * Pieces
 */
class Board extends React.Component {
	constructor(props) {
		super(props);

		//initialize board array
		let rows = new Array(8).fill(0);
		for (let i = 0; i < 8; i++) {
			rows[i] = new Array(8).fill(
				{
					piece: '',
					piece_color: '',
					move: false,
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
			move_square: {},
			move_to_square: {},
			black_king_pos: {
				x: 0,
				y: 4
			},
			white_king_pos: {
				x: 7,
				y: 4
			}
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

	isInCheck() {
		//check if white king is in check
		const white_king_pos = this.state.white_king_pos;
		let squares = this.state.squares.slice();
		let curr_x = parseInt(white_king_pos.x);
		let curr_y = parseInt(white_king_pos.y);

		//search on the horizontal rank
		curr_y = parseInt(white_king_pos.y) - 1;
		while(curr_y >= 0 && squares[curr_x][curr_y].piece === '') {
			curr_y--;
		}
		if (curr_y != -1) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Horizontal)) {
					alert('check');
				}
			}
		}

		curr_y = parseInt(white_king_pos.y) + 1;
		while(curr_y < 8 && squares[curr_x][curr_y].piece === '') {
			curr_y++;
		}
		if (curr_y != 8) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Horizontal)) {
					alert('check');
				}
			}
		}

		//search on vertical rank
		curr_y = parseInt(white_king_pos.y);
		curr_x = parseInt(white_king_pos.x) - 1;
		while(curr_x >= 0 && squares[curr_x][curr_y].piece === '') {
			curr_x--;
		}
		if (curr_x != -1) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Vertical)) {
					alert('check');
				}
			}
		}

		curr_x = parseInt(white_king_pos.y) + 1;
		while(curr_x < 8 && squares[curr_x][curr_y].piece === '') {
			curr_x++;
		}
		if (curr_x != 8) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Vertical)) {
					alert('check');
				}
			}
		}

		//search on the diagonal
		curr_y = parseInt(white_king_pos.y) + 1;
		curr_x = parseInt(white_king_pos.x) - 1;
		while(curr_x >= 0 && curr_y < 8 && squares[curr_x][curr_y].piece === '') {
			curr_x--;
			curr_y++;
		}
		if (curr_x != -1 && curr_y != 8) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Diagonal)) {
					alert('check');
				}
			}
		}

		curr_y = parseInt(white_king_pos.y) - 1;
		curr_x = parseInt(white_king_pos.x) - 1;
		while(curr_x >= 0 && curr_y >= 0 && squares[curr_x][curr_y].piece === '') {
			curr_x--;
			curr_y--;
		}
		if (curr_x != -1 && curr_y != -1) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Diagonal)) {
					alert('check');
				}
			}
		}

		curr_y = parseInt(white_king_pos.y) + 1;
		curr_x = parseInt(white_king_pos.x) + 1;
		while(curr_x < 8 && curr_y < 8 && squares[curr_x][curr_y].piece === '') {
			curr_x++;
			curr_y++;
		}
		if (curr_x != 8 && curr_y != 8) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Diagonal)) {
					alert('check');
				}
			}
		}

		curr_y = parseInt(white_king_pos.y) - 1;
		curr_x = parseInt(white_king_pos.x) + 1;
		while(curr_x < 8 && curr_y >= 0 && squares[curr_x][curr_y].piece === '') {
			curr_x++;
			curr_y--;
		}
		if (curr_x != 8 && curr_y != -1) {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Diagonal)) {
					alert('check');
				}
			}
		}

		//knight
		const knight_positions = [
			{
				x: parseInt(white_king_pos.x) - 2,
				y: parseInt(white_king_pos.y) + 1
			},
			{
				x: parseInt(white_king_pos.x) - 1,
				y: parseInt(white_king_pos.y) + 2
			},
			{
				x: parseInt(white_king_pos.x) - 2,
				y: parseInt(white_king_pos.y) - 1
			},
			{
				x: parseInt(white_king_pos.x) + 1,
				y: parseInt(white_king_pos.y) + 2
			},
			{
				x: parseInt(white_king_pos.x) + 2,
				y: parseInt(white_king_pos.y) + 1
			},
			{
				x: parseInt(white_king_pos.x) - 1,
				y: parseInt(white_king_pos.y) - 2
			},
			{
				x: parseInt(white_king_pos.x) + 1,
				y: parseInt(white_king_pos.y) - 2
			},
			{
				x: parseInt(white_king_pos.x) + 2,
				y: parseInt(white_king_pos.y) - 1
			},
		];

		knight_positions.forEach(function(position) {
			if(position.x >= 0 && position.x < 8 &&
				position.y >=0 && position.y < 8 &&
				squares[position.x][position.y].piece !== '') {
				let pieceData = squares[position.x][position.y];
				let piece = piece_obj[pieceData.piece];
				if (piece.color != 'white') {
					if (piece.possibleMoves.includes(Moves.Knight)) {
						alert('check');
					}
				}
			}
		});

		//pawn positions
		curr_y = parseInt(white_king_pos.y) - 1;
		curr_x = parseInt(white_king_pos.x) - 1;
		if (curr_x >= 0 && curr_y >= 0 && squares[curr_x][curr_y].piece !== '') {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Pawn)) {
					alert('check');
				}
			}
		}

		curr_y = parseInt(white_king_pos.y) + 1;
		if (curr_x >= 0 && curr_y < 8 && squares[curr_x][curr_y].piece !== '') {
			let pieceData = squares[curr_x][curr_y];
			let piece = piece_obj[pieceData.piece];
			if (piece.color != 'white') {
				if (piece.possibleMoves.includes(Moves.Pawn)) {
					alert('check');
				}
			}
		}

	}

	isHorizontalCheck() {

	}

	handleClick = (squareData) => {
		if (!this.state.moving) { //starting to move
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
					case Moves.Vertical:
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
					case Moves.Pawn:
						if (moving_piece.color === 'white') {
							x = parseInt(curr_pos[0]) - 1;
						} else {
							x = parseInt(curr_pos[0]) + 1;
						}
						y = parseInt(curr_pos[1]);

						if (x >= 0 && x < 8 &&
							y >= 0 && y < 8 &&
							squares[x][y].piece === '') {
							//add square as a possible move
							self.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});
						}

						//if pawn is at starting position
						if (moving_piece.color === 'white' &&
									parseInt(curr_pos[0]) === 6)
						{
							x = parseInt(curr_pos[0]) - 2;
						} else if (moving_piece.color === 'black' &&
									parseInt(curr_pos[0]) === 1)
						{
							x = parseInt(curr_pos[0]) + 2;
						}

						if (x >= 0 && x < 8 &&
							y >= 0 && y < 8 &&
							squares[x][y].piece === '') {
							//add square as a possible move
							self.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});
						}

						//pawn diagonal
						if (moving_piece.color === 'white') {
							x = parseInt(curr_pos[0]) - 1;
						} else {
							x = parseInt(curr_pos[0]) + 1;
						}
						y = parseInt(curr_pos[1]) + 1;
						if (x >= 0 && x < 8 &&
							y >= 0 && y < 8 &&
							squares[x][y].piece !== '' &&
							squares[x][y].piece_color !== moving_piece.color) {
							//add square as a possible move
							self.addMoveSquare(squares, x, y);

							new_moves.push({
								x: x,
								y: y
							});
						}

						y = parseInt(curr_pos[1]) - 1;
						if (x >= 0 && x < 8 &&
							y >= 0 && y < 8 &&
							squares[x][y].piece !== '' &&
							squares[x][y].piece_color !== moving_piece.color) {
							//add square as a possible move
							self.addMoveSquare(squares, x, y);

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

			//set the state
			this.setState({
				squares: squares,
				moving: true,
				move_square: squareData,
				moves: new_moves
			});
		} else { //perform the move
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
			let has_moved = false;
			if (can_move) {
				//remove the piece from the from square
				let from_obj = squares[from_pos[0]][from_pos[1]];
				let new_from_obj = {...from_obj, piece: '', piece_color: ''};
				squares[from_pos[0]][from_pos[1]] = new_from_obj;

				//add the piece to the to square
				let to_obj = squares[to_pos[0]][to_pos[1]];
				let new_to_obj = {...to_obj, piece: this.state.move_square.piece.id, piece_color: this.state.move_square.piece.color};
				squares[to_pos[0]][to_pos[1]] = new_to_obj;

				has_moved = true;
			}

			//remove move symbols
			for (let r = 0; r < 8; r++) {
				for (let c = 0; c < 8; c++) {
					let square_obj = squares[r][c];
					let new_obj = {...square_obj, move: false};
					squares[r][c] = new_obj;
				}
			}

			if (has_moved) {
				//if king has moved update king position
				if (this.state.move_square.piece.id === 'Kw'
					|| this.state.move_square.piece.id === 'Kb') {
					let king_position;
					king_position = {
						x: parseInt(to_pos[0]),
						y: parseInt(to_pos[1])
					}

					if (this.state.move_square.piece.id === 'Kw') {
						this.setState({
							squares: squares,
							moving: false,
							move_square: {},
							white_king_pos: king_position
						});
					} else if (this.state.move_square.piece.id === 'Kb') {
						this.setState({
							squares: squares,
							moving: false,
							move_square: {},
							black_king_pos: king_position
						});
					}
				} else {
					this.setState({
						squares: squares,
						moving: false,
						move_square: {},
						move_to_square: squareData
					});
				}
			} else {
				this.setState({
					squares: squares,
					moving: false,
					move_square: {},
					move_to_square: squareData
				});
			}
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

	componentDidUpdate(prevProps, prevState, snapshot) {
		//check for check
		if (prevState.moving) {//if we have just moved
			this.isInCheck();
			this.updateInfo(prevState);
		}
	}

	updateInfo(prevState) {
		this.props.updateInfo(prevState);
	}

	render() {

		return (
			<div>
				{this.renderBoard()}
			</div>
		);
	}
}

export default Board;
