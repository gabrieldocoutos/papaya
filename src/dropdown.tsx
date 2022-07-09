import classNames from "classnames";
import { Children, ReactElement, ReactNode, useState } from "react";

interface DropdownProps {
    children: ReactNode;
    title: string;
}

function Dropdown({ children, title }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center mb-3 w-full p-2">
            <p className="text-left" onClick={() => setOpen(!open)}>
                {title}
            </p>
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
