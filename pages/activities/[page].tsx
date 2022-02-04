import { GetStaticPaths } from "next";
import Head from "next/head";
import { directory } from "../../utils/exports";

const page = () => {
	return (
		<>
			<Head>
				<title>Page | Website Name</title>
			</Head>
			<h1>Page</h1>
		</>
	);
};

export default page;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = directory().map((file) => ({
		params: {
			page: file.replace(".mdx", ""),
		},
	}));
	return {
		paths,
		fallback: false,
	};
};
