import skills from 'data/skills.json';
import { useState } from 'react';
import Item from './Item';
import { DivButtonLeft, DivButtonRight, DivListAreaS, DivListS } from './SkillsCarrousel.style';
import { H1SD, H2SD } from 'styles/index.style';

export default function SkillsCarrousel() {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {//Ação que fará a lista se movimentar para a esquerda
        let x = scrollX + Math.round(window.innerWidth / 2); //Valor a ser mandao pro scroll X dependendo do tamanho da tela, metade da tela (para não ser lento e nem rapido)
        if (x > 0) {//Se o scroll passar de 0
            x = 0;//Retorna pra 0 pois é o limite
        }
        // eslint-disable-next-line
        setScrollX(x);
    }

    const handleRightArrow = () => {//Ação que fará a lista se movimentar para a direita (Calcular o limite de intes comparado com a tela)
        let x = scrollX - Math.round(window.innerWidth / 2);//O valor mandado é do 0 até o limite da lista
        let listW = skills.length * 350;//Largura total dos itens
        if ((window.innerWidth - listW) > x) {//Se O tamanho da tela menos o total de itens for maior que a posição X
            x = (window.innerWidth - listW) - 60;//Retornar para o limite incluindo o espaçamento do padding da lista
        }
        setScrollX(x);
    }

    return (
        <div className='movieRow'>

            <DivButtonLeft onClick={handleLeftArrow}>
                <H1SD>{'<'}</H1SD>
            </DivButtonLeft>
            <DivButtonRight onClick={handleRightArrow}>
                <H2SD>{'>'}</H2SD>
            </DivButtonRight>
            <DivListAreaS>
                <div style={{
                    marginLeft: scrollX - 22,
                    width: skills.length * 350,
                    transition: 'all ease .3s',
                    display: 'flex',
                    gap: '1em',
                    alignItems: 'center',
                    justifyContent: 'center'    
                }}>
                    {skills.map((skill) => (
                        <Item key={skill._id} skillItem={skill} />
                    ))}
                </div>
                <DivListS marginLeft={scrollX} width={skills.length * 150} >
                </DivListS>
            </DivListAreaS>
        </div>
    );
}