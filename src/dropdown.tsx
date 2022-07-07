import {  ReactElement, useState } from "react";

interface DropdownProps {
    children: ReactElement
    title: string
}

function Dropdown({ children, title }: DropdownProps) {
    const [open, setOpen] = useState(false)

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} >
            <p onClick={() => setOpen(!open)} >{title}</p>
            {open && children}
        </div>
    )
}

export { Dropdown }