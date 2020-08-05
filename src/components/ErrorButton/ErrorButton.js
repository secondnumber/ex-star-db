import React, { Component } from 'react';

export default class ErrorButton extends Component {
    state = {
        renderError: false
    }

  render() {
        if (this.state.renderError) {
            this.foo.bar = 0;
        }
    return (
      <div>
        <button className='btn btn-danger' onClick={() => this.setState({renderError: true})}>Get error!</button>
      </div>
    );
  }
}
