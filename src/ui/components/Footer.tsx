import Image from "next/image";
import Link from "next/link";

export async function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 lg:px-8">
				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-sm text-neutral-500">Copyright &copy; {currentYear} Tetê Moda Infantil</p>
					<p className="flex gap-1 text-sm text-neutral-500">
						Powered by{" "}
						<Link target={"_blank"} href={"https://github.com/leonardo-anjos"}>
							leonardo-anjos
						</Link>{" "}
						<Link href={"https://github.com/saleor/saleor"} target={"_blank"} className={"opacity-30"}>
							<Image alt="Saleor github repository" height={20} width={20} src={"/github-mark.svg"} />
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
