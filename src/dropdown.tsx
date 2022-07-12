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
                "flex flex-col items-start w-full px-2 mx-2 border-b",
                { ["bg-slate-200"]: open, ["bg-slate-100"]: !open }
            )}
        >
            <div
                className={
                    (classNames({}),
                    "flex items-center justify-between w-full px-2 py-3")
                }
            >
                <p className="w-full text-left" onClick={() => setOpen(!open)}>
                    {title}
                </p>
                <ChevronIvon
                    className={classNames(
                        { ["rotate-180"]: open },
                        "transition duration-200"
                    )}
                />
            </div>
            <div
                className={classNames(
                    "transition-height duration-200 ease-in-out",
                    {
                        "visible max-h-[99999px]": open,
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
