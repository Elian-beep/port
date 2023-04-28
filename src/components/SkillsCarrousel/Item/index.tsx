import { H2SD } from "styles/index.style";
import { DivContainerRowS } from "./Item.style";
import { ISkill } from 'interfaces/skill';

interface Props {
    skillItem: ISkill
}

export default function Item(props: Props) {
    return (
        <DivContainerRowS>
            <div key={props.skillItem._id} className='item'>
                <img style={{
                    width: '50px',
                    height: '50px'
                }} src={props.skillItem.urlImage} alt="tecnologia" />
                <H2SD>
                    {props.skillItem.tecTitle},
                </H2SD>
                <H2SD>
                    {props.skillItem.desc}
                </H2SD>
                <H2SD>
                    {props.skillItem.category},
                </H2SD>
            </div>
        </DivContainerRowS>
    );
}