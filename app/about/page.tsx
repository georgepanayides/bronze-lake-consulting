import type { Metadata } from "next";
import { Hero } from "@/components/sections/about/hero";
import { Positioning } from "@/components/sections/about/positioning";
import { Principles } from "@/components/sections/about/principles";
import { Process } from "@/components/sections/about/process";
import { Proof } from "@/components/sections/about/proof";
import { CallToAction } from "@/components/sections/shared/cta";

export const metadata: Metadata = {
	title: "About | Bronze Lake Consulting",
	description:
		"Learn about Bronze Lake Consulting: our approach, principles, and how we help organisations navigate complexity.",
};

export default function AboutPage() {
	return (
		<main className="min-h-screen pt-24 bg-background">
			<Hero />
			<Positioning />
			<Principles />
			<Process />
			<Proof />
			<CallToAction />
		</main>
	);
}
