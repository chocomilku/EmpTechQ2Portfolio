import { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

export const Navbar: NextPage = ({ children }) => {
	const [help, setHelp] = useState(false);
	return (
		<div className="min-h-screen">
			<div className="flex flex-col md:flex-row flex-1 min-h-screen w-full">
				<div
					className="fixed md:hidden z-20 top-0 right-0 w-16 h-16 cursor-pointer bg-purple-900"
					onClick={() => setHelp(!help)}>
					<span className="relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-16 w-16"
							viewBox="0 0 20 20"
							fill="#FFFFFF">
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</div>
				<div
					className={`md:hidden fixed w-screen transition-all h-screen bg-purple-900 text-white z-10 ${
						help ? "translate-x-0" : "-translate-x-[100%]"
					}`}>
					<NavContent open={help} setOpen={setHelp} />
				</div>
				<main className="flex-1">{children}</main>
				<LargerNavBar />
			</div>
		</div>
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

const NavContent = ({ open, setOpen }: { open?: boolean; setOpen?: any }) => {
	return (
		<nav className={styles.nav}>
			<h1>Quarter 2 Portfolio</h1>
			<ul className={styles.ul}>
				{paths.map((x, i) => {
					return (
						<>
							{open == undefined ? (
								<li key={i} className={styles.li}>
									<Link href={x.path} scroll={false}>
										<a>{x.title}</a>
									</Link>
								</li>
							) : (
								<li
									key={i}
									className={styles.li}
									onClick={() => setOpen(!open)}>
									<Link href={x.path} scroll={false}>
										<a>{x.title}</a>
									</Link>
								</li>
							)}
						</>
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
