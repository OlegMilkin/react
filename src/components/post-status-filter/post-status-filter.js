import React, {Component} from 'react'

import './post-status-filter.css';

export default class PostStatusFilter extends Component {
  constructor(prop) {
    super(prop);
    this.buttons = [
      {name: 'all', label: 'All'},
      {name: 'like', label: 'Понравилось'},
    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          key={name}
          type='button'
          className={`btn ${clazz}`}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </button>
      )
    })
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}