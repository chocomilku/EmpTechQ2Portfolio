import fs from "fs";

/**
 * Scans and enumerates .md files through a certain directory
 * @returns string array including the names of files with .md extension
 */
export const directory = (): string[] => {
	const dir: string[] = fs.readdirSync(`${process.cwd()}/activities`, "utf-8");
	const files: string[] = dir.filter((file) => file.endsWith(".mdx"));
	return files;
};
