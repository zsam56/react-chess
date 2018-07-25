import React from 'react';

class GameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

		return (
      <div class="game-info">
        <div class="game-info-header">
          Game Header
        </div>

        <div class="game-info-content">
          <ol></ol>
        </div>
      </div>
		);
	}
}

export default GameInfo;
