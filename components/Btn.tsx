import { buttonProps } from "../utils/exports";
import Link from "next/link";
import styles from "../styles/Btn.module.scss";

export const Btn = ({ text, link }: buttonProps) => {
	return (
		<>
			<Link href={link} passHref scroll={false}>
				<button
					className={`${styles.button} bg-indigo-600 hover:bg-indigo-700 text-white hover:text-slate-100 dark:bg-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-slate-200`}>
					<a>{text}</a>
				</button>
			</Link>
		</>
	);
};
