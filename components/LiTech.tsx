import { liTechProps } from "../utils/exports";
import styles from "../styles/LiTech.module.scss";

export const LiTech = ({ tech, description }: liTechProps) => {
	return (
		<li className={styles.item}>
			<p>
				<span>{tech}</span>: {description}
			</p>
		</li>
	);
};
