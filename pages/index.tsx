import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Website Name</title>
			</Head>
			<h1 className="text-3xl font-bold">Home Page</h1>
			<Link href="/activities">
				<a>View All Activities</a>
			</Link>
		</>
	);
};

export default Home;
