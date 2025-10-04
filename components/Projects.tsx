import React from "react";
import Image from "next/image";

export default function Projects() {
	return (
		<section className="py-24">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-extrabold text-center mb-16 gradient-text">
					{"Projects You'll Build"}
				</h2>

				<div className="grid md:grid-cols-3 gap-12">
					{/* Project 1 */}
					<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
						<Image
							src="/images/personal-page.jpg"
							alt="Personal Webpage"
							className="w-full"
							width={1024}
							height={1024}
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Personal Webpage</h3>
							<p>
								Build a clean, professional personal webpage that introduces you and showcases your skills.
							</p>
						</div>
					</div>

					{/* Project 2 */}
					<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
						<Image
							src="/images/interactive-elements.jpg"
							alt="Interactive Elements"
							className="w-full"
							width={1024}
							height={1024}
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Interactive Elements</h3>
							<p>Bring your site to life with buttons, forms, and interactive elements powered by JavaScript.</p>
						</div>
					</div>

					{/* Project 3 */}
					<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
						<Image
							src="/images/deployed-website.jpg"
							alt="Deployed Website"
							className="w-full"
							width={1024}
							height={1024}
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Deployed Website</h3>
							<p>
								Deploy your finished website to the internet so friends, clients, and employers can see it live.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
