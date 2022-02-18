import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export const Navbar: NextPage = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="min-h-screen">
			<div className="flex flex-col md:flex-row flex-1">
				<MobileNavBar open={open} setOpen={setOpen} />
				<main className="flex-1">{children}</main>
				<LargerNavBar />
			</div>
		</div>
	);
};

const MobileNavBar = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
	return (
		<>
			{setOpen(true)}
			<aside
				className={`hidden text-white bg-purple-900 absolute top-0 right-0 h-screen w-screen transition-transform duration-300 ease-in-out z-10 ${
					open ? "translate-x-0" : "translate-x-full"
				}`}>
				<NavContent />
			</aside>
		</>
	);
};

const LargerNavBar: NextPage = () => {
	return (
		<>
			<aside className="bg-purple-900 hidden md:w-52 md:block text-white">
				<NavContent />
			</aside>
		</>
	);
};

const NavContent = () => {
	return (
		<nav className={styles.nav}>
			<h1>Quarter 2 Portfolio</h1>
			<ul className={styles.ul}>
				{paths.map((x, i) => {
					return (
						<li key={i} className={styles.li}>
							<Link href={x.path} scroll={false}>
								<a>{x.title}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
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
