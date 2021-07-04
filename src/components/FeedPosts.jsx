import React from 'react';
import PostCard from './PostCard';

const FeedPosts = ({posts, loading}) => {

    if(loading) return <h2>Loading ...</h2>


    return (
        <div className="post-feed" id="post-feed">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    image={post.image}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    )
}

export default FeedPosts
