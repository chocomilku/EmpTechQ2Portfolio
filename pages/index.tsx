import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { LiTech } from "../components/liTech";
import data from "../utils/technologies.json";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Website Name</title>
			</Head>
			<div className={styles.hero}>
				<h1>Home Page</h1>
				<h2>Portfolio</h2>
			</div>
			<h1 className="text-center text-accent text-3xl font-medium p-4">
				An Over-engineered portfolio using Next.js with Typescript 🤯
			</h1>
			<div className={styles.content}>
				<h1>Technologies Used</h1>
				<ul>
					{data.data.map((item, i) => {
						return (
							<LiTech
								tech={item.title}
								description={item.Description}
								key={i}
							/>
						);
					})}
				</ul>
			</div>
			<Link href="/activities">
				<a>View All Activities</a>
			</Link>
		</>
	);
};

export default Home;
