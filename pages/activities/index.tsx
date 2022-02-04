import Head from "next/head";
import { directory, inProps, iProps, propRec } from "../../utils/exports";
import fs from "fs";
import matter from "gray-matter";
import { PostCard } from "../../components/PostCard";

const actHome = (props: inProps) => {
	return (
		<>
			{console.log("index", props)}
			<Head>
				<title>Activities | Website Name</title>
			</Head>
			<h1>Activities</h1>
			{props.metadata.map((item, i) => {
				return <PostCard metadata={item} key={i} />;
			})}
		</>
	);
};

export default actHome;

export const getStaticProps = async (): Promise<iProps> => {
	const data: string[] = directory().map((page) => {
		const path: string = `${process.cwd()}/posts/${page}`;
		const content: string = fs.readFileSync(path, { encoding: "utf-8" });
		return content;
	});
	const parse = data.map((item) => matter(item));
	const metadata = parse.map((item) => item.data);
	return {
		props: {
			metadata,
		},
	};
};
