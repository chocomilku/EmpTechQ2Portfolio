import { GetStaticPaths } from "next";
import Head from "next/head";
import { directory, pageSlug } from "../../utils/exports";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";

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

export const getStaticProps = async ({ params: { page } }: pageSlug) => {
	const slug = directory().filter((file) => {
		if (file == `${page}.mdx`) {
			return file;
		}
	});

	const file = fs.readFileSync(`${process.cwd()}/posts/${slug[0]}`, "utf-8");

	const { data: meta, content } = matter(file);

	const mdx = await serialize(content, {
		mdxOptions: {
			//@ts-ignore
			rehypePlugins: [rehypeSlug],
		},
	});

	return {
		props: {
			meta,
			page,
			mdx,
		},
	};
};

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
