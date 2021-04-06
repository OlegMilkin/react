import React, {Component} from 'react'

import './search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);

  }

  onSearchChange(e) {
    this.setState({
      term: e.target.value,
    })
    this.props.onSearchChanged(this.state.term)
  }

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Поиск по записям"
        onChange={this.onSearchChange}
      />
    )
  }
}