const getLocalStorageData = (key) => {
	return localStorage.getItem(key) || null;
};

const clearLocalStorage = () => {
	localStorage.clear();
};

const setLocalStorage = (key, value) => {
	localStorage.setItem(key, value);
};

export { setLocalStorage, getLocalStorageData, clearLocalStorage };
