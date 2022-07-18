import classNames from "classnames";
import { HomeIcon, WaterIcon } from "icons";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
    const router = useRouter();

    console.log(router?.pathname);

    return (
        <footer className="fixed bottom-0 left-0 w-full p-2 bg-neutral-50 shadow flex items-center">
            <Link href={"/"}>
                <a>
                    <div className="flex flex-col items-center justify-end px-2">
                        <HomeIcon
                            className={
                                router?.pathname === "/"
                                    ? "stroke-sky-500"
                                    : "stroke-neutral-600"
                            }
                        />
                        <p className="text-xs">Início</p>
                    </div>
                </a>
            </Link>
            <Link href={"/water"}>
                <a>
                    <div className="flex flex-col items-center justify-end px-2">
                        <WaterIcon className="fill-sky-500" />
                        <p className="text-xs">Água</p>
                    </div>
                </a>
            </Link>
        </footer>
    );
}

export { Footer };
