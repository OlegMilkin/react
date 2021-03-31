import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css'

const PostList = ({posts}) => {

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;

    if (typeof item === 'object' && isEmpty(item)) {
      return (
        <li
          className='list-group-item'
          key={id}
        >
          <PostListItem
            label={itemProps.label}
            important={itemProps.important}
          />
        </li>
      )
    }
  });

  function isEmpty(obj) {
    for(let key in obj) {
      return true;
    }
    return false;
  }

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList;