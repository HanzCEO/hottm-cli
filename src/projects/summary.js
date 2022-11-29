// Get a project summary

const { createHttpClient } = require('../common');

async function summary(projectId) {
	const client = createHttpClient('/projects');
	let res = await client.get(`/${projectId}/queries/summary`);

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret = data;

	return ret;
}

module.exports = {
	summary
};
