import React from 'react';

import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
  return (
    <div
      action=""
      className="bottom-panel d-flex"
    >
      <input
        type="text"
        placeholder="О чём вы думаете сейчас?"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => onAdd('fff')}
      >Добавить</button>
    </div>
  )
}

export default PostAddForm;