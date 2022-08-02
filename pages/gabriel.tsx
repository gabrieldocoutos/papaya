import type { NextPage } from "next";
import { Dropdown } from "dropdown";
import { Suplement } from "diet/suplement";
import { Meal } from "diet/meal";

const Home: NextPage = () => {
    return (
        <main className="flex flex-col items-center">
            <Dropdown title="Suplementação de uso diário">
                <Suplement
                    name="Ômega 3"
                    quantity="1g/dia"
                    description="Utilizar uma vez ao dia junto com a primeira ou com a última
                         refeição."
                />
                <Suplement
                    name="Creatina"
                    quantity="5g/dia"
                    description="Utilizar todos os dias, dias de treino utilizar na refeição pós-treino."
                />
                <Suplement
                    name="Beta alanina"
                    quantity="6g/dia"
                    description="Utilizar todos os dias, inclusive em dias de descanso, caso sintas efeito de parestesia (formigamento) podes dividir a dose em 3x de 2g ao longo do dia."
                />
            </Dropdown>
            <Dropdown title="Refeição 1">
                <Meal
                    ingredients={[
                        "20g de whey protein",
                        "1 porcão de fruta",
                        "170g de iogurte natural desnatado (1 unidade) OU 130ml de iogurte natural piá OU 200ml de leite desnatado",
                    ]}
                    description=" Obs.: Iogurte natural: 2 ingredientes: leite e fermento
                    lácteo Sugestões de marcas: Nestlé, Batavo, Vigor etc."
                    suggestion="misture o iogurte com a dose de whey
                    indicada, disponha a porção de fruta por cima. Uma segunda
                    sugestão é bater o iogurte OU leite com whey no mixer ou
                    liquidificador e consumir as frutas separadamente."
                />
            </Dropdown>
            <Dropdown title="Refeição 2">
                <Meal
                    ingredients={[
                        "200g de frango/290g de peixes brancos/150g de carnes (magras)/130g de sobrecoxa assada sem pele/150g de lombo de porco.",
                        "120g de aipim/270g de abóbora/120g de arroz integral/150g de batata doce ou 270g de batata inglesa Valores equivalentes ao preparo cozido. Em caso de alimentos feitos no airfryer ou assados é necessário reduzir de 50 a 70g.",
                        "Suco de 1 limão espremido ou limonada",
                    ]}
                    description="Saladas e legumes: É importante que as cores sejam variadas e que estejam
                    presentes no mínimo 3 diferentes tipos no prato, entre
                    vegetais crus e cozidos. A quantidade deve ser equivalente à
                    metade do prato, sempre caprichando nas porções e lembrando,
                    especialmente, do consumo dos verdes escuros folhosos como:
                    agrião, alface, couve, espinafre, mostarda, rúcula. Evitar
                    temperar a saladas com azeite de oliva e outros molhos fonte
                    de gorduras (molho pesto, chimichurri, molhos de queijo,
                    etc.)"
                />
            </Dropdown>
            <Dropdown title="Refeição 3">
                <Meal
                    ingredients={[
                        "15g de requeijão light",
                        "45g de frango (peito)/30g de carnes magras/1 ovo",
                        "2 porções de frutas",
                        "50g de pão integral (2 fatias)",
                    ]}
                    suggestion="fazer um sanduiche recheado com
                    requeijão, porção de proteína e adicionar vegetais e/ou
                    legumes (alface, tomate, cenoura etc.). Consumir as frutas
                    com uma “cobertura” de whey, para fazer a cobertura basta
                    misturar a dose de whey com 1 colher de sopa de água e
                    dispor por cima das frutas OU consumir como cappuccino
                    proteico, batendo o café (passado/solúvel) já quente com a
                    dose de whey com auxílio de mixer ou liquidificador."
                />
            </Dropdown>
            <Dropdown title="Refeição 4">
                <Meal
                    ingredients={[
                        "20g de whey protein",
                        "1 porcão de fruta",
                        "170g de iogurte natural desnatado (1 unidade) OU 130ml de iogurte natural piá OU 200ml de leite desnatado",
                    ]}
                    description=" Obs.: Iogurte natural: 2 ingredientes: leite e fermento
                    lácteo Sugestões de marcas: Nestlé, Batavo, Vigor etc."
                    suggestion="misture o iogurte com a dose de whey
                    indicada, disponha a porção de fruta por cima. Uma segunda
                    sugestão é bater o iogurte OU leite com whey no mixer ou
                    liquidificador e consumir as frutas separadamente."
                />
            </Dropdown>
            <Dropdown title="Orientações Gerais">
                <p className="mb-2 text-sm">
                    Os horários das refeições podem e devem ser adaptados de
                    acordo com a necessidade.
                </p>
                <p className="mb-2 text-sm">
                    Atentar à ingestão de água (2,8– 4,5L). Café preto, chás,
                    chimarrão – sem açúcar – podem ser consumidos, porém não
                    substituem a ingestão de água.{" "}
                </p>
                <p className="mb-2 text-sm">
                    Evitar o consumo de bebidas alcoólicas.
                </p>
                <p className="mb-2 text-sm">
                    Evitar o consumo de alimentos industrializados e
                    ultraprocessados como: enlatados, embutidos, conservas,
                    temperos prontos e alimentos prontos para consumo.
                </p>
                <p className="mb-2 text-sm">
                    Evitar o consumo de alimentos industrializados e
                    ultraprocessados como: enlatados, embutidos, conservas,
                    temperos prontos e alimentos prontos para consumo. Temperos
                    naturais e especiarias podem ser utilizados a gosto.
                </p>
                <p className="mb-2 text-sm">
                    Gordura aconselhada para o preparo de refeições: azeite de
                    oliva extra virgem (já contabilizadas além das descritas).
                </p>
                <p className="mb-2 text-sm">
                    No momento das refeições você deve prestar atenção nas
                    quantidades e na qualidade do alimento que está sendo
                    escolhido. É importante mastigar devagar para que o sinal de
                    saciedade seja percebido. Uma dica é descansar os talheres
                    entre uma garfada e outra. Atenção! O açúcar possui diversas
                    denominações nas listas de ingredientes. Por isso é
                    importante sempre ler os rótulos. Na lista de ingredientes é
                    onde podemos identificar se o alimento tem ou não açúcares.
                    Se você encontrar açúcar e/ou suas diversas denominações
                    (glucose de milho, – xarope de malte, glicose, frutose,
                    sacarose, açúcar invertido, mascavo, mel, melaço/melado,
                    maltose, xarope de milho, maltodextrina) deve ser EVITADO.
                </p>
            </Dropdown>

            <Dropdown title="1 PORÇÃO DE FRUTAS EQUIVALE A:">
                <p className="text-sm">Abacaxi 🍍 - 2 fatias finas (150g)</p>
                <p className="text-sm">Ameixa 🍑 - 2 unidades (140g)</p>
                <p className="text-sm">Amora 🫐 - 1 xícara (130g)</p>
                <p className="text-sm">Banana 🍌 - 1 unidade média (70g)</p>
                <p className="text-sm">Bergamota 🍊 - 1 unidade média (170g)</p>
                <p className="text-sm">Caqui 🍅 - 1 unidade pequena (110g)</p>
                <p className="text-sm">Cereja 🍒 - 15 unidades (110g)</p>
                <p className="text-sm">Figo 🍋 - 2 unidades pequenas (150g)</p>
                <p className="text-sm">Goiaba 🍏 - 1 unidade grande(140g)</p>
                <p className="text-sm">Kiwi 🥝 - 2 unidades médias (130g)</p>
                <p className="text-sm">Laranja 🍊 - 1 unidade média (160g)</p>
                <p className="text-sm">
                    Maçã (vermelha/verde) 🍎 - 1 unidade média (120g)
                </p>
                <p className="text-sm">
                    Mamão (formosa/papaia) 🥭 - 3 fatias médias ou 1⁄2 papaia
                    (160g) 1⁄2 unidade média (110g)
                </p>
                <p className="text-sm">Manga 🥭 - 2 unidades (100g)</p>
                <p className="text-sm">Maracujá ❤️‍🔥 - 1 fatia grossa (230g)</p>
                <p className="text-sm">Melancia 🍉 - 3 fatias finas (260g)</p>
                <p className="text-sm">Melão 🍈 - 15 unidades médias (240g)</p>
                <p className="text-sm">Morango 🍓 - 1 xícara (120g)</p>
                <p className="text-sm">
                    Mirtilo Nectarina 🍑 - 2 unidades médias (150g)
                </p>
                <p className="text-sm">Pera 🍐 - 1 unidade média (130g)</p>
                <p className="text-sm">
                    Pêssego 🍑 - 2 unidades pequenas (180g)
                </p>
                <p className="text-sm">Uvas 🍇 - 11 unidades (130g)</p>
            </Dropdown>
        </main>
    );
};

export default Home;
