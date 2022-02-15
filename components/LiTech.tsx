import { liTechProps } from "../utils/exports";
import styles from "../styles/LiTech.module.scss";
import Link from "next/link";

export const LiTech = ({ tech, description, url }: liTechProps) => {
	return (
		<article className={styles.item}>
			<h1>
				<Link href={url}>
				<a className="underline">
					{tech}
				</a>
				</Link>
			</h1>
			<p>{description}</p>
		</article>
	);
};
