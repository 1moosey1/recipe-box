import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './utility/TextInput';
import Button from './utility/Button';

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.textHandler = this.textHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  textHandler(event) {
    this.setState({ text: event.target.value });
  }

  buttonHandler() {
    if (this.state.text.trim() !== '') {
      this.props.onClick(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div className="add-recipe">

        <TextInput onChange={this.textHandler}>
          {this.state.text}
        </TextInput>

        <Button className="add-btn" onClick={this.buttonHandler}>
          + Recipe
        </Button>

      </div>
    );
  }
}

AddRecipe.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default AddRecipe;
