interface Config {
	repository: string;
	tempLocation: string;
	fromReleases?: boolean;
	branch?: string;
	token?: string;
	ignoreFiles?: string[];
	executeOnComplete?: string;
	exitOnComplete: boolean;
	packageManager?: string;
}

export default class AutoGitUpdate {
	constructor(config: Config);
	autoUpdate(): Promise<boolean>;
	compareVersions(): Promise<{
		upToDate: boolean;
		currentVersion: string;
		remoteVersion: string;
	}>;
	forceUpdate(): Promise<boolean>;
}
