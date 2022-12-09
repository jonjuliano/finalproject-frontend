import { Link } from "react-router-dom"
import "../index.css"

export default function Header(props) {
    return <div className="header">
        <Link to={`/`} className="text-decoration-none text-white" onClick={props.onClick}>
        <h1 className="page-header">this project made me need a drink</h1>
        </Link>
        <div>{props.children}</div>
    </div>
}