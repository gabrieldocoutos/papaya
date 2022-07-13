import { ChevronIvon } from "chevron";
import classNames from "classnames";
import { ReactNode, useState } from "react";

interface DropdownProps {
    children: ReactNode;
    title: string;
}

function Dropdown({ children, title }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div
            className={classNames(
                "flex flex-col items-start w-full mx-2 border-b border-slate-300",
                {
                    ["bg-slate-200"]: open,
                    ["bg-slate-100"]: !open,
                }
            )}
        >
            <div
                className={classNames(
                    { ["border-b border-slate-300"]: open },
                    "flex items-center justify-between px-2 w-full"
                )}
                onClick={() => setOpen(!open)}
            >
                <p className="w-full py-3 font-semibold text-left">{title}</p>
                <ChevronIvon
                    className={classNames(
                        { ["rotate-180"]: open },
                        "transition duration-200"
                    )}
                />
            </div>
            <div
                className={classNames(
                    "transition-height duration-200 ease-in-out px-2",
                    {
                        "visible max-h-[99999px] my-3": open,
                        "invisible opacity-0 max-h-0	": !open,
                    }
                )}
            >
                {children}
            </div>
        </div>
    );
}

export { Dropdown };
