import { Meal } from "diet/meal";
import { Dropdown } from "dropdown";

export default function Monique() {
    return (
        <main>
            <Dropdown title="Café da manhã">
                <Meal
                    ingredients={[
                        "1 ovo ou 40g de frango ou 30g de queijo ou 32g de atum",
                        "40g de creme de ricota ou 111g de queijo cottage ou 30g de cream cheese light",
                        "3 unidades de torrada ou 2 fatias de pão ou 45g de tapioca",
                        "vitamina de morango com aveia ou iogurte integral com morango ou smoothie proteico de morango com chia",
                    ]}
                />
            </Dropdown>
            <Dropdown title="Colação">
                <Meal
                    ingredients={[
                        "mamão 120g ou morango 100g ou 1 maçã ou 115g de melão",
                        "8g de chia",
                    ]}
                />
            </Dropdown>
            <Dropdown title="Almoço">
                <Meal
                    ingredients={[
                        "125g de frango ou 165g de maminha ou omelete 3 ovos ou 80g de porco",
                        "140g de arroz integral ou 125g macarrão",
                        "35g de feijão ou 25g de grão de bico",
                        "1 laranja ou 1 tangerina ou 190g de abacaxi",
                        "salada a vontade",
                    ]}
                />
            </Dropdown>
            <Dropdown title="Lanche">
                <Meal
                    ingredients={[
                        "tapioca 45g ou 2 fatias de pão",
                        "16g pasta de amendoim",
                    ]}
                    suggestion="Crepioca (3 colh de goma 1 ovo) - 1 porção (121g) - ou - Tapioca de frango - 80g - ou - Panqueca de frango -
100g - ou - Sanduiche de pão integral com 1 fatia queijo minas - 80g"
                />
            </Dropdown>
            <Dropdown title="Pré-treino">
                <Meal
                    ingredients={[
                        "100g de iogurte ou 200ml de leite desnatado",
                        "30g de whey",
                        "55g de banana ou 48g de morango ou 50g de manga",
                    ]}
                />
            </Dropdown>
            <Dropdown title="Jantar">
                <Meal
                    ingredients={[
                        "110g de frango ou 3 ovos ou 100g de carne ou 90g de carne de porco",
                        "240g de batata ou 160g de batata doce ou 120g de mandioca ou 165g de arroz",
                        "55g de banana ou 48g de morango ou 50g de manga",
                        "54g de lentilha ou 85g de feijão branco ou 140g de feijão preto",
                    ]}
                />
            </Dropdown>
        </main>
    );
}
