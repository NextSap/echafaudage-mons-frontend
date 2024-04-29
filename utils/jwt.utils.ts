export const getToken = () => {
    return localStorage.getItem('token');
}

export const setToken = (token: string) => {
    localStorage.setItem('token', token);
}

export const removeToken = () => {
    localStorage.removeItem('token');
}

export const isTokenValid = () => {
    const token = getToken();
    if (token) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        const currentTime = new Date().getTime();
        return decodedToken.exp > currentTime;
    }
    removeToken();
    return false;
}