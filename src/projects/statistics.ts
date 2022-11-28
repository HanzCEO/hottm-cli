// Get a project statistics

import { createHttpClient } from '../common';
const client = createHttpClient('/projects');

export interface IProjectStatistics {
	id: number,
	area: number,
	totalMappers: number,
	totalTasks: number,
	totalComments: number,
	totalMappingTime: number,
	totalValidationTime: number,
	totalTimeSpent: number,
	averageMappingTime: number,
	averageValidationTime: number,
	percentMapped: number,
	percentValidated: number,
	percentBadImagery: number,
	aoiCentroid: any,
	timeToFinishMapping: number,
	timeToFinishValidating: any
};

export interface IUserProjectStatistics {
	timeSpentMapping: number,
	timeSpentValidating: number,
	totalTimeSpent: number
}

export async function statistics(projectId): Promise<IProjectStatistics> {
	let client = createHttpClient(`/projects/${projectId}`);
	let res = await client.get('/statistics');

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret: IProjectStatistics = {
		id: projectId,
		area: data["projectArea(in sq.km)"],
		totalMappers: data.totalMappers,
		totalTasks: data.totalTasks,
		totalComments: data.totalComments,
		totalMappingTime: data.totalMappingTime,
		totalValidationTime: data.totalValidationTime,
		totalTimeSpent: data.totalTimeSpent,
		averageMappingTime: data.averageMappingTime,
		averageValidationTime: data.averageValidationTime,
		percentMapped: data.percentMapped,
		percentValidated: data.percentValidated,
		percentBadImagery: data.percentBadImagery,
		aoiCentroid: data.aoiCentroid,
		timeToFinishMapping: data.timeToFinishMapping,
		timeToFinishValidating: data.timeToFinishValidating
	};

	return ret;
}

export async function userStatistics(projectId, username): Promise<IUserProjectStatistics> {
	let client = createHttpClient(`/projects/${projectId}`);
	let res = await client.get(`/statistics/queries/${username}`);

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret: IUserProjectStatistics = {
		timeSpentMapping: data.timeSpentMapping,
		timeSpentValidating: data.timeSpentValidating,
		totalTimeSpent: data.totalTimeSpent
	}

	return ret;
}
