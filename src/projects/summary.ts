// Get a project summary

import { createHttpClient } from '../common';

export type ProjectPriority = 'URGENT' | 'HIGH' | 'MEDIUM' | 'LOW';
export type MappingType = 'ROADS' | 'BUILDINGS' | 'WATERWAYS' | 'LAND_USE' | 'OTHER';
export type MapperLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface IProjectSummary {
	id: number,
	author: string,
	createdAt: Date,
	dueDate?: Date,
	lastUpdated: Date,
	priority: ProjectPriority,
	// TODO: campaigns property type
	campaigns: any[],
	organisation: IProjectOrganisation,
	countryTag: string[],
	//osmchaFilterId: any,
	mappingTypes: MappingType[],
	changesetComment: string,
	percentMapped: number,
	percentValidated: number,
	percentBadImagery: number,

	aoiCentroid: any,

	mapperLevel: MapperLevel,
	mappingPermission: string,
	validationPermission: string,
	allowedUsernames: string[],

	enforeRandomTaskSelection: bool,
	private: bool,
	teams: any[],

	// What is this exactly??
	projectInfo: IProjectInfo,

	shortDescription?: string,
	status: ProjectStatus,
	imagery: string,
	licenseId?: number,
	idPresets?: any,
	extraIdParas?: any,
	rapidPowerUser: bool,
	mappingEditors: string[],
	validationEditors: string[]
}

export interface IProjectOrganisation {
	id: number,
	name: string,
	slug: string,
	logoURL: string
}

export interface IProjectInfo {
	locale: string,
	name: string,
	shortDescription: string,
	description: string,
	instructions: string,
	perTaskInstruction: string
}

export async function summary(projectId): Promise<IProjectSummary> {
	const client = createHttpClient('/projects');
	let res = await client.get(`/${projectId}/queries/summary`);

	if (res.status !== 200) throw new Error(res.data.Error);

	let { data } = res.data;
	let ret: IProjectSummary = {
		id: data.projectId,
		author: data.author,
		createdAt: new Date(data.created),
		dueDate: data.dueDate == null ? null : new Date(data.dueDate),
		lastUpdated: new Date(data.lastUpdated),
		priority: data.projectPriority,
		campaigns: data.campaigns,

		organisation: {
			id: data.organisation,
			name: data.organisationName,
			slug: data.organisationSlug,
			logoURL: data.organisationLogo
		},

		countryTag: data.countryTag,
		//osmchaFilterId: any,
		mappingTypes: data.mappingTypes,
		changesetComment: data.changesetComment,
		percentMapped: data.percentMapped,
		percentValidated: data.percentValidated,
		percentBadImagery: data.percentBadImagery,

		aoiCentroid: data.aoiCentroid,

		mapperLevel: data.mapperLevel,
		mappingPermission: data.mappingPermission,
		validationPermission: data.validationPermission,
		allowedUsernames: data.allowedUsernames,

		enforeRandomTaskSelection: data.enforeRandomTaskSelection,
		private: data.private,
		teams: data.teams,

		projectInfo: data.projectInfo,

		shortDescription?: data.shortDescription,
		status: data.status,
		imagery: data.imagery,
		rapidPowerUser: data.rapidPowerUser,
		mappingEditors: data.mappingEditors,
		validationEditors: data.validationEditors
	};

	return ret;
}
