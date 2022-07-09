import { ReactElement, useState } from "react";

interface DropdownProps {
    children: JSX.Element | Array<JSX.Element>;
    title: string;
}

function Dropdown({ children, title }: DropdownProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col items-center mb-3 w-full p-2">
            <p className="text-left" onClick={() => setOpen(!open)}>
                {title}
            </p>
            {open && children}
        </div>
    );
}

export { Dropdown };
