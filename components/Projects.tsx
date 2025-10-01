import React from "react";

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
						<img
							src="images/personal-page.jpg"
							alt="Personal Webpage"
							className="w-full"
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Personal Webpage</h3>
							<p>
								Create a clean, professional personal webpage to showcase your
								skills.
							</p>
						</div>
					</div>

					{/* Project 2 */}
					<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
						<img
							src="images/interactive-elements.jpg"
							alt="Interactive Elements"
							className="w-full"
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Interactive Elements</h3>
							<p>Add buttons, forms, and interactive features using JavaScript.</p>
						</div>
					</div>

					{/* Project 3 */}
					<div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition transform hover:scale-105">
						<img
							src="images/deployed-website-2.png"
							alt="Deployed Website"
							className="w-full"
						/>
						<div className="p-6">
							<h3 className="font-bold text-2xl mb-2">Deployed Website</h3>
							<p>
								Deploy your fully functional webpage online and make it public
								for potential employers or friends.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
