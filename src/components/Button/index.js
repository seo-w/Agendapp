import { StyleButton } from "./styles";

export const Button = ({text, color, bgColor, onPress}) => (
    <StyleButton onClick={onPress}>{text}</StyleButton>
);
