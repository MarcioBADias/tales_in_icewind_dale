import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='title'>
        Caçada ao invisivel
      </h1>

      <h2>
        Balsa de Easthaven
      </h2>

      <div>
        Uma carta encontrada em um posto avançado duergar secreto (veja “ O Invisível ”) pode levar os 
        personagens a este local. Entregar a carta ao Orador Waylen ou ao Capitão Arlaggath faz com que esses 
        NPCs se reúnam e determinem um curso de ação apropriado. Juntos, eles pedem aos personagens que 
        vasculhem a balsa e matem qualquer duergar que encontrarem a bordo. Se os personagens solicitarem 
        reforços, o Capitão Arlaggath os acompanhará.
        
        Use a seguinte caixa de texto para descrever a balsa para os jogadores:
        <p className='text-box'>
            A balsa de Easthaven, uma quilha, está presa no gelo na extremidade de um cais de madeira. 
            Uma pequena cabine está situada na extremidade traseira do casco.
        </p>
        
        Quando o lago não está congelado, este barco transporta pessoas e cargas para as cidades de Caer-Dineval 
        e Caer-Konig por uma taxa modesta. Mas o barco e grande parte do porto de Easthaven estão presos no gelo,
         e o Presidente Waylen declarou que o serviço de ferry deve cessar até que o gelo derreta – o que, dado o
        temperamento de Auril, parece improvável que aconteça em breve. O proprietário e operador tiefling da 
        balsa, <span className='blink-text'> Scython</span>, passa seu tempo ocioso no Wet Trout (descrito abaixo). 
        Na ausência de Scython, a balsa se tornou uma base de operações para um mestre mental duergar (veja 
        apêndice C ) chamado <span className='blink-text'> Durth Sunblight</span>. Ele e outros três duergars 
        chamados <span className='blink-text'> Klaska, Ossyl e Zublorr</span> estão usando a cabine de popa da 
        balsa como covil, mas apenas Durth está presente quando os personagens chegam pela primeira vez à balsa. 
        Os outros duergar estão procurando Chardalyn em Easthaven.
        
        Os duergar são cautelosos o suficiente para ficarem invisíveis enquanto se movem pela cidade e nas docas, 
        mas não são espertos o suficiente para cobrir os rastros que deixam na neve. Personagens que procurarem 
        por rastros no cais coberto de neve e obtiverem sucesso em um teste de Sabedoria ( Sobrevivência ) CD 10 
        podem discernir 1d4 conjuntos distintos de pegadas de anões indo e voltando da balsa. Essas faixas foram 
        feitas nas últimas 24 horas.
        
        <span className='blink-text'> Durth Sunblight</span>
        
      <h2>
          Cabine de popa
      </h2>
      <p className='text-box'>
          O gelo que cobre a porta da cabine foi arrancado e a porta não está trancada. O espaço tem 
          aproximadamente 3 metros quadrados e contém quatro sacos de dormir, pacotes de rações espalhados e 
          uma mesa com o que parece ser um mapa meio enrolado e amarrotado.
      </p>
        O mapa enrolado do Vale do Vento Gélido que marca a localização de cada assentamento de Dez Cidades, 
        bem como a localização do posto avançado duergar próximo ao Sepulcro de Kelvin. (veja " Locais de 
        postos avançados ") e Sunblight, a fortaleza escondida nas montanhas (descrita no capítulo 3 ). 
        Todos os nomes de lugares no mapa estão escritos em anão. À espreita na cabana está 
        <span className='blink-text'> Durth Sunblight</span>. Ele sabe quando alguém embarca no navio pelo 
        ranger do convés. Por precaução, ele fica invisível e fica em um canto vazio nos fundos da cabana. Se 
        um intruso o detectar ou tentar roubar seu mapa, ele ataca. Se ele for reduzido a 20 pontos de vida ou 
        menos, ele encolhe até o tamanho Minúsculo e foge através de um buraco de rato de 10 cm de diâmetro, 
        saindo do navio 1,5 metro acima do porto congelado e 1,5 metro de distância do cais. Se ele escapar, 
        <span className='blink-text'> Durth</span> retorna para a fortaleza de seu pai nas montanhas 
        (veja o capítulo 3 ), abandonando seus companheiros duergar.

        <h2>
          Desenvolvimento
        </h2>
        Os companheiros de Durth têm vasculhado Easthaven em busca de Chardalyn. Sua última busca não deu frutos 
        e eles retornam à balsa 30 minutos após os personagens embarcarem. Esses três duergar atacam qualquer 
        não-duergar que encontrarem a bordo da nave. Se encontrarem o cadáver de Durth ou nenhum sinal dele a 
        bordo da balsa, eles abandonam o navio e não voltam para ele.

        Se os personagens capturarem Durth, ele avisa seus captores que ele é filho de Xardorok Sunblight , que 
        em breve reivindicará o Vale do Vento Gélido como seu reino, e que seria imprudente para eles ganharem a 
        ira de uma figura tão poderosa. Durth não revela nenhuma outra informação. Seus companheiros são 
        igualmente calados; entretanto, ameaças à vida de Durth ou o uso inteligente de um feitiço de sugestão ou 
        magia semelhante podem persuadir um ou mais deles a revelar as seguintes informações adicionais:

        Xardorok tem uma fortaleza escondida nas montanhas. (A rota para esta fortaleza está marcada no mapa de 
        Durth a bordo da balsa.)
        A fortaleza de Xardorok possui uma forja alimentada pelo coração ainda pulsante de um dragão vermelho. 
        Nesta forja, Xardorok está criando um dragão feito de chardalyn, com o qual planeja destruir Dez Cidades. 
        O dragão chardalyn está perto de ser concluído.
        Xardorok tem outro filho, Nildar, que comanda um posto avançado secreto no lado nordeste do Cairn de 
        Kelvin (veja " O Invisível ").
      </div>


    </>
  )
}

export default App
