import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Website Name</title>
			</Head>
			<div className={styles.hero}>
				<h1 className="">Home Page</h1>
				<h2>Portfolio</h2>
			</div>
			<div>An Over-engineered portfolio using Next.js with Typescript</div>
			<Link href="/activities">
				<a>View All Activities</a>
			</Link>
		</>
	);
};

export default Home;
