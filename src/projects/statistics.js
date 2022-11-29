// Get a project statistics

const { createHttpClient } = '../common';
const client = createHttpClient('/projects');

async function statistics(projectId) {
	let client = createHttpClient(`/projects/${projectId}`);
	let res = await client.get('/statistics');

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret = data;

	return ret;
}

async function userStatistics(projectId, username) {
	let client = createHttpClient(`/projects/${projectId}`);
	let res = await client.get(`/statistics/queries/${username}`);

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret = data;

	return ret;
}

module.exports = {
	statistics,
	userStatistics
};
