import "./404.css";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="main">
                <div className="main">
                    <h1>404: Page not Found</h1>
                    <Link to="/">return to home</Link>
                </div>
            </div>

        </>
    )
}

export default NotFound;