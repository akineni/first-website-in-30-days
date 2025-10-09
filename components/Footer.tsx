import React from "react";
import { whatsAppUrl } from "@/lib/config";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-8 text-center">
			<p className="mb-4">&copy; 2025 Eniola Akinlonu. All rights reserved.</p>

			{/* Social Icons */}
			<div className="flex justify-center space-x-6">
				{/* Portfolio */}
				<a
					href="https://akineni.vercel.app"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-yellow-400 transition"
					title="Portfolio"
					aria-label="Portfolio"
				>
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12zm-8-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
					</svg>
				</a>

				{/* GitHub */}
				<a
					href="https://github.com/akineni"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-yellow-400 transition"
					title="GitHub"
					aria-label="GitHub"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 .297c-6.63 0-12 5.373-12 
              12 0 5.303 3.438 9.8 8.205 
              11.385.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 
              1.205.084 1.84 1.237 1.84 1.237 
              1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.335-5.466-5.93 
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
              0 0 1.005-.322 3.3 1.23a11.48 
              11.48 0 0 1 3-.405c1.02.005 2.045.138 
              3 .405 2.28-1.552 3.285-1.23 
              3.285-1.23.645 1.653.24 2.873.12 
              3.176.765.84 1.23 1.91 1.23 
              3.22 0 4.61-2.805 5.625-5.475 
              5.92.435.375.81 1.096.81 2.22 
              0 1.605-.015 2.895-.015 3.285 
              0 .315.21.69.825.57C20.565 22.092 
              24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
				</a>

				{/* LinkedIn */}
				<a
					href="https://www.linkedin.com/in/eniola-akinlonu-b210b3164"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-yellow-400 transition"
					title="LinkedIn"
					aria-label="LinkedIn"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M19 0h-14c-2.761 
              0-5 2.239-5 5v14c0 2.761 2.239 
              5 5 5h14c2.761 0 5-2.239 
              5-5v-14c0-2.761-2.239-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.268c-.966 
              0-1.75-.784-1.75-1.75s.784-1.75 
              1.75-1.75 1.75.784 
              1.75 1.75-.784 1.75-1.75 
              1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.868-3.063-1.868 
              0-2.154 1.459-2.154 
              2.965v5.702h-3v-10h2.881v1.367h.041c.401-.76 
              1.379-1.562 2.841-1.562 
              3.039 0 3.599 2.001 3.599 
              4.599v5.596z"
						/>
					</svg>
				</a>

				{/* WhatsApp */}
				<a
					href={whatsAppUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-yellow-400 transition"
					title="WhatsApp"
					aria-label="WhatsApp"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path d="M20.52 3.48C18.2 1.16 15.21 
              0 12.02 0 5.39 0 .02 5.37.02 
              12c0 2.11.55 4.17 1.61 
              6l-1.7 6.22 6.36-1.67c1.75.96 
              3.71 1.46 5.73 1.46h.01c6.63 0 
              12-5.37 12-12 0-3.19-1.16-6.18-3.4-8.52zm-8.5 
              18.52c-1.82 0-3.6-.49-5.14-1.41l-.37-.22-3.77.99 
              1.01-3.67-.24-.38c-1.03-1.62-1.57-3.5-1.57-5.43 
              0-5.63 4.59-10.22 10.24-10.22 
              2.73 0 5.29 1.06 7.21 2.98 
              1.92 1.92 2.99 4.48 2.99 
              7.2 0 5.63-4.59 10.23-10.23 
              10.23zm5.63-7.66c-.31-.16-1.83-.9-2.11-1-.28-.1-.49-.16-.7.16-.21.31-.8 
              1-.98 1.21-.18.21-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.53-.92-.82-1.53-1.83-1.71-2.13-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.21.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.21 0-.54.08-.82.39s-1.08 
              1.05-1.08 2.56c0 1.51 1.11 2.96 1.27 3.16.16.21 2.18 3.33 5.28 
              4.67.74.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 
              1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.07-.13-.28-.21-.59-.37z"
						/>
					</svg>
				</a>
			</div>
		</footer>
	);
}
