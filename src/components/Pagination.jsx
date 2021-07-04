import React from 'react'; 
import { Link, useParams } from 'react-router-dom';
import '../assets/styles/components/Pagination.css'
var classNames = require('classnames');

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    // console.log( postsPerPage, totalPosts, paginate);
    const pageNumbers = [];
    const { id } = useParams();

    console.log(totalPosts);
    console.log(postsPerPage);
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);
    
    return (
        <>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link
                            id={`page page-${number}`}
                            onClick={() => paginate(number)} 
                            to={`/El-de-los-Minutos-Page/blog/${number}`} 
                            className="page page-link"
                        >
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Pagination
