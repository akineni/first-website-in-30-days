import Curriculum from "@/components/Curriculum";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Instructor from "@/components/Instructor";
import Projects from "@/components/Projects";
import RegisterCTA from "@/components/RegisterCTA";
import Testimonials from "@/components/Testimonials";
import ValueProposition from "@/components/ValueProposition";

export default function Home() {
	return (
		<>
			<Header />
			<ValueProposition />
			<Curriculum />
			<Projects />
			<Testimonials />
			<RegisterCTA />
			<Instructor />
			<FAQ />
			<FinalCTA />
			<Footer />
		</>
	);
}
