import React from 'react';
import PostCard from './PostCard';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_POSTS = gql`
  query PostData {
    posts {
      title
      content
      createdAt
      author {
        name
      }
    }
  }
`;

const Posts = () => {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p className="text-center mt-6">Loading posts...</p>;
    if (error) return <p className="text-center mt-6 text-red-500">Error: {error.message}</p>;

    return (
        <div>
            <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
            <hr />
            <div className='grid grid-cols-3 gap-5'>
                {data?.posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
