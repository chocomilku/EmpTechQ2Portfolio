import Head from "next/head";
import { directory, inProps, iProps } from "../../utils/exports";
import fs from "fs";
import matter from "gray-matter";
import { PostCard } from "../../components/PostCard";
import styles from "../../styles/actHome.module.scss";
import { Btn } from "../../components/Btn";

const actHome = (props: inProps) => {
	return (
		<>
			<Head>
				<title>Activities | Website Name</title>
			</Head>
			<div className={styles.hero}>
				<h1>Activities</h1>
			</div>

			<div className="flex content-center justify-center">
				<div className="cardContainer">
					{props.metadata.map((item, i) => {
						return <PostCard metadata={item} key={i} />;
					})}
				</div>
			</div>
			<div className="grid place-items-center p-2">
				<Btn text="Go Back to Home" link="/" />
			</div>
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
