interface FoodProps {
    ingredients: Array<string>;
    description?: string;
    suggestion?: string;
}

function Meal(props: FoodProps) {
    return (
        <div>
            <div className="mb-3">
                <p className="font-semibold mb-2">Ingredientes: </p>
                {props.ingredients.map((ingredient) => (
                    <p className="pl-2 mb-2 text-sm" key={ingredient}>
                        {ingredient}
                    </p>
                ))}
            </div>
            {props.description && (
                <p className="text-sm mb-2">{props.description}</p>
            )}

            {props.suggestion && (
                <p className="text-sm">
                    <span className="font-semibold">Sugestão de preparo:</span>{" "}
                    {props.suggestion}
                </p>
            )}
        </div>
    );
}

export { Meal };
