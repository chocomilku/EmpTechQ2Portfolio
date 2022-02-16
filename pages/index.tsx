import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { LiTech } from "../components/LiTech";
import data from "../utils/technologies.json";
import { Btn } from "../components/Btn";

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
				<div className="flex content-center justify-center">
					<div className="cardContainer">
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
				<div className="grid place-items-center p-2">
					<Btn text="View All Activities" link="/activities" />
				</div>
			</div>
		</>
	);
};

export default Home;
