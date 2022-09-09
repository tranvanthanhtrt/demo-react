import axios from "axios"
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzE4MDg3NmNhOTVkMjg3N2NmNDEyMjMiLCJpYXQiOjE2NjI2MjExMTl9.s_ngsCAbOM6YzOs6fF91a6v7i0Lt2Omuxo-w4uKthZY';

export const getAllPosts = async () => {
    try {
        const res = await axios.get('https://glacial-thicket-32444.herokuapp.com/api/posts',
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
            }
        );
        console.log(res.data.posts);
        return res.data;

    } catch (error) {
        return null;
    }
}