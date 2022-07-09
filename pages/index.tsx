import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Dropdown } from '../src/dropdown'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <main>
      <Dropdown title='Suplementação de uso diário'>
        <div className={styles.flex}>
          <p>Ômega 3</p>
          <p>1g/dia</p>
        </div>
          <p>Utilizar uma vez ao dia junto com a primeira ou com a última refeição.</p>
        <div className={styles.flex}>
          <p>Creatina</p>  
          <p>5g/dia</p>
        </div>
        <p>Utilizar todos os dias, dias de treino utilizar na refeição pós-treino.</p>

        <div className={styles.flex}>
          <p>Beta alanina</p>  
          <p>6g/dia</p>
        </div>
        <p>Utilizar todos os dias, inclusive em dias de descanso, caso sintas efeito de parestesia (formigamento) podes dividir a dose em 3x de 2g ao longo do dia.</p>



      </Dropdown>
      <Dropdown title='Refeição 1'>
        <p>20g de whey protein</p>
        <p>1 porção de fruta – variar as opções ao longo da semana</p>
        <p>170g de iogurte natural desnatado (1 unidade) OU 130ml de iogurte natural piá OU 200ml de leite desnatado</p>
        <p>Obs.: Iogurte natural: 2 ingredientes: leite e fermento lácteo Sugestões de marcas: Nestlé, Batavo, Vigor etc.
Sugestão de preparo: misture o iogurte com a dose de whey indicada, disponha a porção de fruta por cima. Uma segunda sugestão é bater o iogurte OU leite com whey no mixer ou liquidificador e consumir as frutas separadamente.</p>
      </Dropdown>
      <Dropdown title='Refeição 2'>
        <p>200g de frango OU 290g de peixes brancos OU 150g de carnes (magras) OU 130g de sobrecoxa assada sem pele OU 150g de lombo de porco
O ideal é variar as opções de proteína entre as carnes vermelhas e brancas ao longo da semana, sempre evitando preparos com molhos e frituras.</p>
<p>120g de aipim ou 270g de abóbora ou 120g de arroz integral ou 150g de batata doce ou 270g de batata inglesa
Valores equivalentes ao preparo cozido. Em caso de alimentos feitos no airfryer ou assados é necessário reduzir de 50 a 70g.</p>
<p></p>
      <p>Saladas e legumes</p>
      <p>É importante que as cores sejam variadas e que estejam presentes no mínimo 3 diferentes
tipos no prato, entre vegetais crus e cozidos.
A quantidade deve ser equivalente à metade do prato, sempre caprichando nas porções e lembrando, especialmente, do consumo dos verdes escuros folhosos como: agrião, alface, couve, espinafre, mostarda, rúcula.
Evitar temperar a saladas com azeite de oliva e outros molhos fonte de gorduras (molho pesto, chimichurri, molhos de queijo, etc.)
 </p>
<p>Suco de 1 limão espremido ou limonada</p>
      </Dropdown>
      <Dropdown title='Refeição 3'>
      <p>15g de requeijão light</p>
      <p>45g de frango (peito) OU 30g de carnes magras OU 1 ovo 2 porções de frutas – variar as opções ao longo da semana</p>
      <p>20g de whey protein</p>
      <p>50g de pão integral (2 fatias)</p>
      <p>Sugestão de marcas: Nutrella 100% integral ou 7 grãos; Pullman zero%; Entre outras.</p>
      <p>Sugestão de preparo: fazer um sanduiche recheado com requeijão, porção de proteína e adicionar vegetais e/ou legumes (alface, tomate, cenoura etc.).
Consumir as frutas com uma “cobertura” de whey, para fazer a cobertura basta misturar a dose de whey com 1 colher de sopa de água e dispor por cima das frutas OU consumir como cappuccino proteico, batendo o café (passado/solúvel) já quente com a dose de whey com auxílio de mixer ou liquidificador.</p>
      </Dropdown>
      <Dropdown title='Refeição 4'>
        <p>200g de frango OU 290g de peixes brancos OU 150g de carnes (magras) OU 130g de sobrecoxa assada sem pele OU 150g de lombo de porco
O ideal é variar as opções de proteína entre as carnes vermelhas e brancas ao longo da semana, sempre evitando preparos com molhos e frituras.</p>
<p>120g de aipim ou
270g de abóbora ou 120g de arroz integral ou 150g de batata doce ou 270g de batata inglesa
Valores equivalentes ao preparo cozido. Em caso de alimentos feitos no airfryer ou assados é necessário reduzir de 50 a 70g.</p>
<p>Saladas e legumes</p>
    <p>É importante que as cores sejam variadas e que estejam presentes no mínimo 3 diferentes
tipos no prato, entre vegetais crus e cozidos.
A quantidade deve ser equivalente à metade do prato, sempre caprichando nas porções e lembrando, especialmente, do consumo dos verdes escuros folhosos como: agrião, alface, couve, espinafre, mostarda, rúcula.
Evitar temperar a saladas com azeite de oliva e outros molhos fonte de gorduras (molho pesto, chimichurri, molhos de queijo, etc.)</p>
      </Dropdown> 
      <Dropdown title='Orientações Gerais'>
        <p>Os horários das refeições podem e devem ser adaptados de acordo com a necessidade.</p>
        <p>Atentar à ingestão de água (2,8– 4,5L). Café preto, chás, chimarrão – sem açúcar – podem ser consumidos, porém não substituem
a ingestão de água. </p>
<p>Evitar o consumo de bebidas alcoólicas.</p>
<p>Evitar o consumo de alimentos industrializados e ultraprocessados como: enlatados,
embutidos, conservas, temperos prontos e alimentos prontos para consumo.
</p>
<p>Evitar o consumo de alimentos industrializados e ultraprocessados como: enlatados,
embutidos, conservas, temperos prontos e alimentos prontos para consumo.
 Temperos naturais e especiarias podem ser utilizados a gosto.</p>
 <p>Gordura aconselhada para o preparo de refeições: azeite de oliva extra virgem (já
contabilizadas além das descritas).</p>
        <p> 
 
No momento das refeições você deve prestar atenção nas quantidades e na qualidade do alimento que está sendo escolhido. É importante mastigar devagar para que o sinal de saciedade seja percebido. Uma dica é descansar os talheres entre uma garfada e outra.
 Atenção! O açúcar possui diversas denominações nas listas de ingredientes. Por isso é importante sempre ler os rótulos. Na lista de ingredientes é onde podemos identificar se o alimento tem ou não açúcares.
Se você encontrar açúcar e/ou suas diversas denominações (glucose de milho, – xarope de malte, glicose, frutose, sacarose, açúcar invertido, mascavo, mel, melaço/melado, maltose, xarope de milho, maltodextrina) deve ser EVITADO.</p>
      </Dropdown>

      <Dropdown title='1 PORÇÃO DE FRUTAS EQUIVALE A:'>

<p>Abacaxi - 2 fatias finas (150g)</p>
<p>Ameixa - 2 unidades (140g)</p>
<p>Amora - 1 xícara (130g)</p>
<p>Banana  - 1 unidade média (70g)</p>
<p>Bergamota - 1 unidade média (170g)</p>
<p>Caqui - 1 unidade pequena (110g)</p>
<p>Cereja - 15 unidades (110g)</p>
<p>Figo - 2 unidades pequenas (150g)</p>
<p>Goiaba - 1 unidade grande(140g)</p>
<p>Kiwi - 2 unidades médias (130g)</p>
<p>Laranja - 1 unidade média (160g)</p>
<p>Maçã (vermelha/verde)  - 1 unidade média (120g)</p>
<p>Mamão (formosa/papaia)  - 3 fatias médias ou 1⁄2 papaia (160g) 1⁄2 unidade média (110g)</p>
<p>Manga  - 2 unidades (100g)</p>
<p>Maracujá  - 1 fatia grossa (230g)</p>
<p>Melancia - 3 fatias finas (260g)</p>
<p>Melão - 15 unidades médias (240g)</p>
<p>Morango - 1 xícara (120g)</p>
<p>Mirtilo Nectarina - 2 unidades médias (150g)</p>
<p>Pera - 1 unidade média (130g)</p>
<p>Pêssego - 2 unidades pequenas (180g)</p>
<p>Uvas - 11 unidades (130g)</p>
      </Dropdown>
    </main>
  )
}

export default Home
