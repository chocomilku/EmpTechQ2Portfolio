import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import { useTheme } from "next-themes";

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
					<NavContent open={help} setOpen={setHelp} key={Math.random() * 10} />
				</div>
				<main className="flex-1">{children}</main>
				<LargerNavBar key={Math.random() * 10} />
			</div>
		</div>
	);
};

const LargerNavBar: NextPage = () => {
	return (
		<>
			<aside className="bg-purple-900 hidden md:w-52 md:block text-white">
				<NavContent key={Math.random() * 10} />
			</aside>
		</>
	);
};

const NavContent = ({ open, setOpen }: { open?: boolean; setOpen?: any }) => {
	const { theme, setTheme } = useTheme();
	return (
		<nav className={styles.nav}>
			<h1>EmpTech Quarter 2 Portfolio</h1>
			<ul className={styles.ul} key={Math.random() * 10}>
				{paths.map((x, i) => {
					return (
						<>
							{open == undefined ? (
								<li key={i} className={styles.li}>
									<Link href={x.path} scroll={false} key={Math.random() * i}>
										<a>{x.title}</a>
									</Link>
								</li>
							) : (
								<li
									key={i + 10}
									className={styles.li}
									onClick={() => setOpen(!open)}>
									<Link
										href={x.path}
										scroll={false}
										key={Math.random() * (i + 10)}>
										<a>{x.title}</a>
									</Link>
								</li>
							)}
						</>
					);
				})}
			</ul>
			<div className="flex flex-col justify-center content-center text-center text-xl py-4 px-1">
				<h2>Andrei DJ P. Berja</h2>
				<h2>11-ICT-INDIGO</h2>
			</div>
			<div className="flex w-full justify-center content-center py-2 px-4">
				<button
					className="p-4 rounded h-auto w-3/4 text-center bg-purple-700 hover:bg-purple-600 transition-colors max-w-xs"
					onClick={() => {
						setTheme(theme === "dark" ? "light" : "dark");
						setOpen(!open);
					}}
					type="button">
					{theme === "dark" ? "Light Mode" : "Dark Mode"}
				</button>
			</div>
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
		path: "https://github.com/chocomilku/EmpTechQ2Portfolio",
		title: "Source Code",
	},
];
