import { useEffect, useState } from "react";

export const ToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{showButton && (
				<div className="fixed bottom-10 right-10 md:right-60 z-0 bg-zinc-900 dark:bg-zinc-700 rounded-full w-16 h-16 grid place-items-center transition-colors hover:bg-zinc-800 dark:hover:bg-zinc-800">
					<button onClick={scrollToTop}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-12 w-12"
							viewBox="0 0 20 20"
							fill="#FFFFFF">
							<path
								fillRule="evenodd"
								d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
			)}
		</>
	);
};
