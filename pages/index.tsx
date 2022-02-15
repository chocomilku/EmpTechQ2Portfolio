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
			<div className="p-6">
				<h1 className="text-center text-accent text-4xl font-medium p-4">
					An Over-engineered portfolio using Next.js with Typescript 🤯
				</h1>
				<h1 className="text-3xl text-accent text-center p-2;">
					Main Technologies Used
				</h1>
				<div className="flex">
					<div className="p-4 w-full flex flex-row container gap-2 justify-center content-center flex-wrap">
						{data.data.map((item, i) => {
							return (
								<LiTech
									tech={item.title}
									description={item.Description}
									url={item.URL}
									key={i}
								/>
							);
						})}
					</div>
				</div>
				<Link href="/activities">
					<a>View All Activities</a>
				</Link>
			</div>
		</>
	);
};

export default Home;
