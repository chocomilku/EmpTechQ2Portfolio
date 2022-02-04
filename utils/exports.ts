import fs from "fs";

/**
 * Scans and enumerates .md files through a certain directory
 * @returns string array including the names of files with .md extension
 */
export const directory = (): string[] => {
	const dir: string[] = fs.readdirSync(`${process.cwd()}/posts`, "utf-8");
	const files: string[] = dir.filter((file) => file.endsWith(".mdx"));
	return files;
};

export interface postItemProp {
	slug: string;
	title: string;
	description: string;
	img: string;
	date: string;
	headers: string[];
}

export interface iProps {
	props: {
		[metadata: string]: any;
	};
}

export interface propRec {
	metadata: postItemProp;
}

export interface inProps {
	metadata: postItemProp[];
}
