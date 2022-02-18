import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { motion, AnimatePresence, Variants } from "framer-motion";

const variants: Variants = {
	hidden: {
		translateY: 100,
		opacity: 0,
	},
	visible: {
		translateY: 0,
		opacity: 1,
		transition: {
			delay: 0.25,
		},
	},
};

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<>
			<ThemeProvider attribute="class">
				<Navbar>
					<motion.main
						key={router.route}
						variants={variants}
						initial="hidden"
						animate="visible">
						<Component {...pageProps} />
					</motion.main>
				</Navbar>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
