const service = async () => {
    try {
        const response =await  fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    } catch (error) {
        throw Error(error)
    }
}

export default service;

