import React from 'react';
import './index.css';

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

export default Square;