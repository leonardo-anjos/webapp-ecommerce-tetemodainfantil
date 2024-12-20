import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";

export const metadata = {
	title: "Tetê Moda Infantil",
	description: "",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
		</main>
	);
}
