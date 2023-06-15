import axios from 'axios';

import { CREDENTIALS, API_ROUTES } from '../contants/apiRoutes';
import { setLocalStorage, getLocalStorageData, clearLocalStorage, } from './localhandler.service';

const login = (email, password) => {
    return axios.post(
        API_ROUTES.login,
        {
            grant_type: CREDENTIALS.grantTypes.PASSWORD,
            email,
            password,
        },
        {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
    );
};

const setToken = (token) => {
    if (!token) clearLocalStorage();
    else
        setLocalStorage(
            'token',
            JSON.stringify({ ...token, created_at: Date.now() })
        );
};

const getToken = () => {
    const token = JSON.parse(getLocalStorageData('token'));
    if (token && hasTokenExpired(token)) {
        refreshToken(token);
    }
    if (!token || hasTokenExpired(token)) {
        setToken();
        return false;
    }
    if (isTokenExpiring(token)) refreshToken(token);
    // Set token in localStorage
    return token;
};

const isLoggedIn = () => {
    const token = getToken();
    return Boolean(token);
};

const isTokenExpiring = (token) => {
    const tokenLifetime = token.data.expires_in;
    return tokenLifetime - getTokenAge(token) < 120;
};

const hasTokenExpired = (token) => {
    const tokenLifetime = token.data.expires_in;
    return tokenLifetime - getTokenAge(token) < 15;
};

const getTokenAge = (token) => {
    const currentDate = Date.now();
    return (currentDate - token.created_at) / 1000;
};

const logout = () => {
    setToken(null);
    window.location.href = '/login';
};

const refreshToken = (token) => {
    axios
        .post(API_ROUTES.login, {
            grant_type: CREDENTIALS.grantTypes.REFRESH_TOKEN,
            refresh_token: token.data.refresh_token,
        })
        .then(({ data: newToken }) => {
            setToken(newToken);
        })
        .catch(() => {
            logout();
        });
};

export {
    login,
    logout,
    setToken,
    getToken,
    isLoggedIn,
    getTokenAge,
    isTokenExpiring,
    hasTokenExpired,
    refreshToken,
};