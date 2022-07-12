import classNames from "classnames";

interface ChevronIvonProps {
    className?: string;
}
function ChevronIvon({ className }: ChevronIvonProps) {
    return (
        <svg
            className={classNames(className, "w-6 h-6")}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

export { ChevronIvon };
