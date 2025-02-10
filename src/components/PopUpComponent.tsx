import { PropsWithChildren, useContext } from "react";
import ModalContext from "../utils/ModalContext";
import { Popup } from "pixel-retroui";

export default function PopUpComponent(props: PropsWithChildren) {
    const modalCtx = useContext(ModalContext);

    return (
        <Popup
            isOpen={modalCtx.isOpen}
            onClose={() => modalCtx.setState(false)}
            baseBg="#256bdb"
            bg="#f5f0a9"
        >
            {props.children}
        </Popup>
    );
}
