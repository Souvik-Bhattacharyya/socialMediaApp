import React from 'react';
import postData from '../../Data/postData';
import './index.css';
import VerticalList from './VerticalList';
import Posts from './Posts';

const PostsPage = () => {
  return (
    <div className='postPage'>
      {postData.map((e, index) => <Posts {...e} key={index} />)}
      <VerticalList />
    </div>
  )
}

export default PostsPage;
