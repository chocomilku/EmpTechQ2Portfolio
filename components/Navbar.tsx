import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export const Navbar: NextPage = ({ children }) => {
	return (
		<div className="min-h-screen">
			<div className="flex flex-col md:flex-row flex-1">
				<main className="flex-1">{children}</main>
				<aside className="bg-purple-900 w-full md:w-52 text-white">
					<nav className={styles.nav}>
						<h1>Quarter 2 Portfolio</h1>
						<ul className={styles.ul}>
							{paths.map((x, i) => {
								return (
									<li key={i} className={styles.li}>
										<Link href={x.path}>
											<a>{x.title}</a>
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</aside>
			</div>
		</div>
	);
};

interface pathsStruct {
	path: string;
	title: string;
}

const paths: pathsStruct[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/activities",
		title: "Activities",
	},
	{
		path: "/",
		title: "Source Code",
	},
];
