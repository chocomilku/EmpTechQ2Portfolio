import { liTechProps } from "../utils/exports";
import styles from "../styles/LiTech.module.scss";
import Link from "next/link";

export const LiTech = ({ tech, description, url }: liTechProps) => {
	return (
		<Link href={url} passHref scroll={false}>
			<article
				className={`${styles.item} dark:bg-zinc-900 bg-slate-100 shadow-accent shadow  dark:shadow-purple-400`}
				// onClick={() => (window.location.href = url)}
			>
				<h1 className="text-accent dark:text-purple-400">
					<Link href={url} scroll={false}>
						<a className="underline">{tech}</a>
					</Link>
				</h1>
				<p>{description}</p>
			</article>
		</Link>
	);
};
