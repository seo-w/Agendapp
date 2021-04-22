import { Link } from "react-router-dom";

export const LinkTo = ({url, text}) => (
    <Link to={url}>{text}</Link>
);