import { DivContainerS} from "./Insignia.style";

interface Props {
    text: string
}

export default function Insignia(props: Props) {
    return (
        <DivContainerS>
            {props.text}
        </DivContainerS>
    );
}