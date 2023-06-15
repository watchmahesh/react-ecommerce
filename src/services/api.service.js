import axios from 'axios';
import { getToken } from './auth.service';

const api = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

const assignHeaders = (headers) => {
	const token = getToken();
	return Object.assign(headers, {
		Authorization: `Bearer ${token.data.access_token}`,
	});
};

const getData = async (endpoint, headers = {}, params = {}) => {
	return await api.get(endpoint, {
		headers: assignHeaders(headers),
		params,
	});
};

const postData = async (endpoint, data = {}, headers = {}) => {
	return await api.post(endpoint, data, {
		headers: assignHeaders(headers),
	});
};

const putData = async (endpoint, data = {}, headers = {}) => {
	return await api.put(endpoint, data, {
		headers: assignHeaders(headers),
	});
};

const destroyData = async (endpoint, headers = {}) => {
	return await api.delete(endpoint, {
		headers: assignHeaders(headers),
	});
};

export { getData, assignHeaders, postData, putData, destroyData };
