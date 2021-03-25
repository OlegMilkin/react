import React from 'react';

import './post-add-form';

const PostAddForm = () => {
  return (
    <form
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
      >Добавить</button>
    </form>
  )
}

export default PostAddForm;