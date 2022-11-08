import http from './';

export const registerUser = async (user) => {
    try {
        const { status } = await http.post(
            `${http.url}/register`,
            JSON.stringify(user));
        return status;
    }catch (err) {
        console.log(err);
    }
};