'use strict';

class UpdateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { update: false };
  }

  render() {
    if (this.state.updated) {
      return 'Your location is updated';
    }

    return (
      <button onClick={() => this.setState({ update: true }) }>
        Update
      </button>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);