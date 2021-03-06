import { GetStaticPaths } from "next";
import Head from "next/head";
import Link from "next/link";
import { directory, pageData, pageSlug, custom } from "../../utils/exports";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import { Btn } from "../../components/Btn";
import styles from "../../styles/page.module.scss";
import remarkGFM from "remark-gfm";
import imageSize from "rehype-img-size";
import Image from "next/image";
import { Navigation } from "../../components/Navigation";
import webMeta from "../../utils/constants.json";

const h2Link = ({ id, ...rest }: custom) => {
	if (id) {
		return (
			<Link href={`#${id}`} scroll={false}>
				<a id={id}>
					<h2 {...rest} />
				</a>
			</Link>
		);
	}
	return <h2 {...rest} />;
};

const emAns = ({ ...rest }: any) => {
	return (
		<span
			className="text-accent dark:text-purple-400 no-underline not-italic"
			{...rest}
		/>
	);
};

const nextImg = (props: any) => {
	return <Image {...props} layout="responsive" loading="lazy" />;
};

const components = {
	h2: h2Link,
	em: emAns,
	img: nextImg,
};

const page = (props: pageData) => {
	return (
		<>
			<Head>
				<title>
					{props.meta.title} | {webMeta.data.title}
				</title>
			</Head>
			<div className={styles.hero}>
				<div className="bg-center bg-cover bg-no-repeat bg-heroLight dark:bg-heroDark text-white dark:text-slate-100">
					<h1>{props.meta.title}</h1>
					<h2>{props.meta.description}</h2>
				</div>
			</div>
			<div className="w-full grid place-items-center">
				<article className="prose dark:prose-invert bg-slate-50 dark:bg-zinc-900 rounded w-fit p-4 container m-4">
					<MDXRemote
						compiledSource={props.mdx.compiledSource}
						components={components}
					/>
				</article>
			</div>
			<div className="p-4 flex flex-row w-full underline justify-evenly content-center text-lg">
				{props.meta.previous ? (
					<div>
						<Navigation link={props.meta.previous} type="previous" />
					</div>
				) : (
					<></>
				)}
				{props.meta.next ? (
					<div>
						<Navigation link={props.meta.next} type="next" />
					</div>
				) : (
					<></>
				)}
			</div>
			<div className="grid place-items-center p-2">
				<Btn text="Go Back to Activities" link="/activities" />
			</div>
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
			rehypePlugins: [rehypeSlug, [imageSize, { dir: "public" }]],
			//@ts-ignore
			remarkPlugins: [remarkGFM],
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
