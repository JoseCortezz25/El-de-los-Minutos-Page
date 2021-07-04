import {  
    GET_POSTS,
} from '../utils/constant';
// import service from '../utils/service';


export const getDataPosts =  () => async (dispatch) => {
    try {
        const response =await  fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        dispatch({
            type: GET_POSTS,
            payload: data,
        })
        
    } catch (error) {
        throw Error(`An error occurred in the request`);
    }
}


// const getDataPosts = () => {
//     service()
//         .then((data) => {
//             return data
//         })
// }

// export const getPosts = payload => (
//     {
//         type: GET_POSTS,
//         payload: getDataPosts(),
//     }
// )