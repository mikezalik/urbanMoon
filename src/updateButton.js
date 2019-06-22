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
      <button onClick={() => this.setState({ update: true })}>
        Update
      </button>
    );
  }
}

const domContainer = document.querySelector('#update_button_container');
ReactDOM.render(<UpdateButton />, domContainer);
