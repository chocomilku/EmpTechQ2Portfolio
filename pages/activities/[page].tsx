import { GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { directory, pageData, pageSlug, custom } from "../../utils/exports";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";

const h2Link = ({ id, ...rest }: custom) => {
	if (id) {
		return (
			<Link href={`#${id}`}>
				<a id={id}>
					<h2 {...rest} />
				</a>
			</Link>
		);
	}
	return <h2 {...rest} />;
};

const components = {
	h2: h2Link,
};

const page = (props: pageData) => {
	return (
		<>
			<Head>
				<title>{props.meta.title} | Website Name</title>
			</Head>
			<h1>{props.meta.title}</h1>
			<MDXRemote
				compiledSource={props.mdx.compiledSource}
				components={components}
			/>
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
