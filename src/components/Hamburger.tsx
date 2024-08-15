"use client";

import { SyntheticEvent, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import MobileNav from "./MobileNav";

export default function Hamburger(): JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	function handleIsOpen(isOpen: boolean) {
		setIsOpen(isOpen);
	}
	return (
		<div
			className="flex items-center lg:hidden"
			onClick={() => setIsOpen(!isOpen)}
		>
			{isOpen ? (
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-x"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M18 6l-12 12" />
						<path d="M6 6l12 12" />
					</svg>
				</button>
			) : (
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6l16 0" />
						<path d="M4 12l16 0" />
						<path d="M4 18l16 0" />
					</svg>
				</button>
			)}
			{mounted
				? createPortal(
					<MobileNav open={isOpen} onClose={handleIsOpen} />,
					document.body
				)
				: null}
		</div>
	);
}
