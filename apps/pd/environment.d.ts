/* eslint-disable unicorn/prevent-abbreviations */
declare namespace NodeJS {
	export interface ProcessEnv {
		NODE_ENV?: "development" | "production" | "test";
		REDIS_URL?: string;
		MAX_FILE_SIZE?: number;
		PORT?: string;
		HOST?: string;
	}
}