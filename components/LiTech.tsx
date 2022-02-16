import { liTechProps } from "../utils/exports";
import styles from "../styles/LiTech.module.scss";
import Link from "next/link";

export const LiTech = ({ tech, description, url }: liTechProps) => {
	return (
		<Link href={url} passHref>
			<article
				className={styles.item}
				// onClick={() => (window.location.href = url)}
			>
				<h1>
					<Link href={url}>
						<a className="underline">{tech}</a>
					</Link>
				</h1>
				<p>{description}</p>
			</article>
		</Link>
	);
};
