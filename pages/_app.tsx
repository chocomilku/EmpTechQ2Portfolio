import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { motion, Variants } from "framer-motion";
import { ToTop } from "../components/ToTop";

const variants: Variants = {
	hidden: {
		translateY: 100,
		opacity: 0,
	},
	visible: {
		translateY: 0,
		opacity: 1,
	},
};

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class">
				<Navbar>
					<motion.main
						key={router.route}
						initial="hidden"
						variants={variants}
						animate="visible">
						<Component {...pageProps} />
					</motion.main>
					<ToTop />
				</Navbar>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
