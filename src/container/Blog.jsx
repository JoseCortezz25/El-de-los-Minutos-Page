import React, { useState } from 'react';
import Title from '../components/Title';
import { connect } from 'react-redux';
import FeedPosts from '../components/FeedPosts';
import '../assets/styles/components/Blog.css';
import Pagination from '../components/Pagination';


const Blog = ({ posts = [] }) => {
    const [loading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(10)

    // get current posts
    const indexOfLasPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLasPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLasPost);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <section className="container-blog">


            <Title title="Blog" description="News about freestyle" />

            <FeedPosts 
                posts={currentPosts} 
                loading={loading} 
            />
            
            <div className="section-pagination">
                <Pagination 
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate} 
                />
            </div>


        </section>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
};


export default connect(mapStateToProps, null)(Blog);
