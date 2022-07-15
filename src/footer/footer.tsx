import { HomeIcon, WaterIcon } from "icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Footer() {
    const router = useRouter();

    console.log(router);

    return (
        <footer className="fixed bottom-0 left-0 w-full p-2 bg-neutral-50 flex items-center">
            <Link href={"/"}>
                <a>
                    <div className="flex flex-col items-center justify-end px-2">
                        <HomeIcon className="stroke-neutral-500" />
                        <p className="text-xs">Início</p>
                    </div>
                </a>
            </Link>
            <Link href={"/water"}>
                <a>
                    <div className="flex flex-col items-center justify-end px-2">
                        <WaterIcon className="fill-neutral-500" />
                        <p className="text-xs">Água</p>
                    </div>
                </a>
            </Link>
        </footer>
    );
}

export { Footer };
