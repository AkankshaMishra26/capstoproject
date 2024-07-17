import axios from 'axios';

const BACKEND_ORIGIN_URL = 'http://localhost:3000'; // Change this to your actual backend URL

const Login = async (email, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/login`, { email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Request made and server responded
            return { error: error.response.data };
        } else if (error.request) {
            // The request was made but no response was received
            return { error: "No response from server" };
        } else {
            // Something happened in setting up the request that triggered an Error
            return { error: error.message };
        }
    }
};

const Register = async (name, email, mobile, password) => {
    try {
        const response = await axios.post(`${BACKEND_ORIGIN_URL}/user/register`, { name, email, mobile, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            // Request made and server responded
            return { error: error.response.data };
        } else if (error.request) {
            // The request was made but no response was received
            return { error: "No response from server" };
        } else {
            // Something happened in setting up the request that triggered an Error
            return { error: error.message };
        }
    }
};

export { Login, Register };
