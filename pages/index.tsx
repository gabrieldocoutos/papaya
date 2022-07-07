import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Dropdown } from '../src/dropdown'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <Dropdown title='Suplementação de uso diário'>
        <p>Ômega 3 ....................1g/dia
Utilizar uma vez ao dia junto com a primeira ou com a última refeição.
Creatina .................... 5g/dia
Utilizar todos os dias, dias de treino utilizar na refeição pós-treino.
Beta alanina...........6g/dia
Utilizar todos os dias, inclusive em dias de descanso, caso sintas efeito de parestesia (formigamento) podes dividir a dose em 3x de 2g ao longo do dia.</p>
      </Dropdown>
      <Dropdown title='Refeição 1'>
        <p>20g de whey protein
  1 porção de fruta – variar as opções ao longo da semana
170g de iogurte natural desnatado (1 unidade) OU 130ml de iogurte natural piá OU 200ml de leite desnatado
Obs.: Iogurte natural: 2 ingredientes: leite e fermento lácteo Sugestões de marcas: Nestlé, Batavo, Vigor etc.
Sugestão de preparo: misture o iogurte com a dose de whey indicada, disponha a porção de fruta por cima. Uma segunda sugestão é bater o iogurte OU leite com whey no mixer ou liquidificador e consumir as frutas separadamente.</p>
      </Dropdown>
      <Dropdown title='Refeição 2'>
        <p>200g de frango OU 290g de peixes brancos OU 150g de carnes (magras) OU 130g de sobrecoxa assada sem pele OU 150g de lombo de porco
O ideal é variar as opções de proteína entre as carnes vermelhas e brancas ao longo da semana, sempre evitando preparos com molhos e frituras.
120g de aipim ou
270g de abóbora ou 120g de arroz integral ou 150g de batata doce ou 270g de batata inglesa
Valores equivalentes ao preparo cozido. Em caso de alimentos feitos no airfryer ou assados é necessário reduzir de 50 a 70g.
 
Saladas e legumes
É importante que as cores sejam variadas e que estejam presentes no mínimo 3 diferentes
tipos no prato, entre vegetais crus e cozidos.
A quantidade deve ser equivalente à metade do prato, sempre caprichando nas porções e lembrando, especialmente, do consumo dos verdes escuros folhosos como: agrião, alface, couve, espinafre, mostarda, rúcula.
Evitar temperar a saladas com azeite de oliva e outros molhos fonte de gorduras (molho pesto, chimichurri, molhos de queijo, etc.)
 
Suco de 1 limão espremido ou limonada</p>
      </Dropdown>
      <Dropdown title='Refeição 3'>
      <p>Refeição 3
15g de requeijão light
45g de frango (peito) OU 30g de carnes magras OU 1 ovo 2 porções de frutas – variar as opções ao longo da semana 20g de whey protein
50g de pão integral (2 fatias)
Sugestão de marcas:
- Nutrella 100% integral ou 7 grãos; Pullman zero%; Entre outras.
   
Sugestão de preparo: fazer um sanduiche recheado com requeijão, porção de proteína e adicionar vegetais e/ou legumes (alface, tomate, cenoura etc.).
Consumir as frutas com uma “cobertura” de whey, para fazer a cobertura basta misturar a dose de whey com 1 colher de sopa de água e dispor por cima das frutas OU consumir como cappuccino proteico, batendo o café (passado/solúvel) já quente com a dose de whey com auxílio de mixer ou liquidificador.</p>
      </Dropdown>
      <Dropdown title='Refeição 4'>
    <p>200g de frango OU 290g de peixes brancos OU 150g de carnes (magras) OU 130g de sobrecoxa assada sem pele OU 150g de lombo de porco
O ideal é variar as opções de proteína entre as carnes vermelhas e brancas ao longo da semana, sempre evitando preparos com molhos e frituras.
120g de aipim ou
270g de abóbora ou 120g de arroz integral ou 150g de batata doce ou 270g de batata inglesa
Valores equivalentes ao preparo cozido. Em caso de alimentos feitos no airfryer ou assados é necessário reduzir de 50 a 70g.
 
Saladas e legumes
É importante que as cores sejam variadas e que estejam presentes no mínimo 3 diferentes
tipos no prato, entre vegetais crus e cozidos.
A quantidade deve ser equivalente à metade do prato, sempre caprichando nas porções e lembrando, especialmente, do consumo dos verdes escuros folhosos como: agrião, alface, couve, espinafre, mostarda, rúcula.
Evitar temperar a saladas com azeite de oliva e outros molhos fonte de gorduras (molho pesto, chimichurri, molhos de queijo, etc.)</p>
      </Dropdown> 
      <Dropdown title='Orientações Gerais'>
        <p> Os horários das refeições podem e devem ser adaptados de acordo com a necessidade.
 Atentar à ingestão de água (2,8– 4,5L).
 Café preto, chás, chimarrão – sem açúcar – podem ser consumidos, porém não substituem
a ingestão de água.
 Evitar o consumo de bebidas alcoólicas.
Evitar o consumo de alimentos industrializados e ultraprocessados como: enlatados,
embutidos, conservas, temperos prontos e alimentos prontos para consumo.
 Temperos naturais e especiarias podem ser utilizados a gosto.
Gordura aconselhada para o preparo de refeições: azeite de oliva extra virgem (já
contabilizadas além das descritas).
 No momento das refeições você deve prestar atenção nas quantidades e na qualidade do alimento que está sendo escolhido. É importante mastigar devagar para que o sinal de saciedade seja percebido. Uma dica é descansar os talheres entre uma garfada e outra.
 Atenção! O açúcar possui diversas denominações nas listas de ingredientes. Por isso é importante sempre ler os rótulos. Na lista de ingredientes é onde podemos identificar se o alimento tem ou não açúcares.
Se você encontrar açúcar e/ou suas diversas denominações (glucose de milho, – xarope de malte, glicose, frutose, sacarose, açúcar invertido, mascavo, mel, melaço/melado, maltose, xarope de milho, maltodextrina) deve ser EVITADO.</p>
      </Dropdown>

      <Dropdown title='1 PORÇÃO DE FRUTAS EQUIVALE A:'>
        <p>Abacaxi
Ameixa
Amora
Banana Bergamota
Caqui
Cereja
Figo
Goiaba
Kiwi
Laranja
Maçã (vermelha/verde) Mamão (formosa/papaia) Manga Maracujá Melancia
Melão
Morango
Mirtilo Nectarina
Pera
Pêssego
Uvas
2 fatias finas (150g)
2 unidades (140g)
1 xícara (130g)
1 unidade média (70g)
1 unidade média (170g)
1 unidade pequena (110g)
15 unidades (110g)
2 unidades pequenas (150g)
1 unidade grande(140g)
2 unidades médias (130g)
1 unidade média (160g)
1 unidade média (120g)
3 fatias médias ou 1⁄2 papaia (160g) 1⁄2 unidade média (110g)
2 unidades (100g)
1 fatia grossa (230g)
3 fatias finas (260g)
15 unidades médias (240g)
1 xícara (120g)
2 unidades médias (150g)
1 unidade média (130g)
2 unidades pequenas (180g)
11 unidades (130g)</p>
      </Dropdown>
    </main>
  )
}

export default Home
