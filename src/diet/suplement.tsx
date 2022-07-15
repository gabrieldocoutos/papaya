interface SuplementProps {
    name: string;
    quantity: string;
    description: string;
}

const Suplement = (props: SuplementProps) => {
    return (
        <div className="my-2">
            <div className="flex">
                <p className="mb-0">
                    <span className="font-medium">{props.name}</span> -{" "}
                    {props.quantity}
                </p>
            </div>
            <p>{props.description}</p>
        </div>
    );
};

export { Suplement };
