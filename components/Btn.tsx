import { buttonProps } from "../utils/exports";
import Link from "next/link";
import styles from "../styles/Btn.module.scss";

export const Btn = ({ text, link }: buttonProps) => {
	return (
		<>
			<Link href={link} passHref scroll={false}>
				<button className={styles.button}>
					<a>{text}</a>
				</button>
			</Link>
		</>
	);
};
