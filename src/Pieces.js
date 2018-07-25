import React from 'react';
import ReactSVG from 'react-svg';

import Moves from './Moves';

//Import piece svgs
import king_black from './img/k_b.svg'
import queen_black from './img/q_b.svg'
import rook_black from './img/r_b.svg'
import bishop_black from './img/b_b.svg'
import knight_black from './img/n_b.svg'
import pawn_black from './img/p_b.svg'

import king_white from './img/k_w.svg'
import queen_white from './img/q_w.svg'
import rook_white from './img/r_w.svg'
import bishop_white from './img/b_w.svg'
import knight_white from './img/n_w.svg'
import pawn_white from './img/p_w.svg'

/**
 * Object of pieces and their possible moves
 **/
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
		possibleMoves: [Moves.Pawn]
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
		possibleMoves: [Moves.Pawn]
	}
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
 * React class for a Chess Piece. Uses ReactSVG
 * to create an SVG
 **/
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

export default piece_obj;
