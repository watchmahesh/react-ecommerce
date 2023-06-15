const API_BASE_URL = 'http://localhost:5000/api/v1';

export const API_ROUTES = {
	login: `${API_BASE_URL}/auth/login`,
	get_current_user: `${API_BASE_URL}/auth/profile`
};

export const CREDENTIALS = {

	grantTypes: {
		PASSWORD: 'password',
		REFRESH_TOKEN: 'refresh_token',
	},
};