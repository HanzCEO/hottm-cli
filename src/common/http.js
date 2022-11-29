const axios = require('axios');

function createHttpClient(subPart, opts={}): {
	const defaults = {
		timeout: 10_000,
		headers: {
			'Accept-Language': 'en',
			'Accept': 'application/json'
		}
	};

	opts = Object.assign({}, defaults, opts);
	opts.baseURL = `https://tasking-manager-tm4-production-api.hotosm.org/api/v2${subPart}`;

	// Auth
	if (opts.auth.startsWith('Token')) {
		opts.headers['Authorization'] = opts.auth;
		delete opts.auth;
	}

	return axios.create(opts);
}

module.exports = {
	createHttpClient
};
