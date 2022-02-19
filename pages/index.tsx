import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { LiTech } from "../components/LiTech";
import data from "../utils/technologies.json";
import { Btn } from "../components/Btn";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import webMeta from "../utils/constants.json";

const titleAnim = (delay: number, startX: number, startY: number): Variants => {
	return {
		hidden: {
			translateX: startX,
			translateY: startY,
			opacity: 0,
		},
		visible: {
			translateX: 0,
			translateY: 0,
			opacity: 1,
			transition: {
				delay,
			},
		},
	};
};

const Home: NextPage = () => {
	const delay: number = 0.5;
	return (
		<>
			<Head>
				<title>{webMeta.data.title}</title>
			</Head>
			<div className={styles.hero}>
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={titleAnim(delay, -15, -15)}>
					Empowerment Technologies Quarter 2 Portfolio
				</motion.h1>
				<motion.h2
					initial="hidden"
					animate="visible"
					variants={titleAnim(delay + 0.4, 0, 7)}>
					<u>Andrei DJ P. Berja</u>
				</motion.h2>
				<motion.h2
					initial="hidden"
					animate="visible"
					variants={titleAnim(delay + 0.4, 0, 15)}>
					11-ICT-INDIGO
				</motion.h2>
			</div>
			<div className="p-6">
				<h1 className="text-center text-accent dark:text-purple-800 text-4xl font-medium p-4">
					An Over-engineered portfolio using Next.js with Typescript 🤯
				</h1>
				<h1 className="text-3xl text-accent dark:text-purple-800 text-center p-2;">
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
				<h1 className="text-2xl text-accent dark:text-purple-500 text-center p-2 font-medium">
					Built by{" "}
					<Link href="/">
						<a className="underline">chocomilku-</a>
					</Link>
				</h1>
				<div className="grid place-items-center p-2">
					<Btn text="View All Activities" link="/activities" />
				</div>
			</div>
		</>
	);
};

export default Home;
