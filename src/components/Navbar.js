import "./styles/Navbar.scss";
import {Link} from "react-router-dom";

export const Navbar = ()=>{
    return (
        <div className="navbar-container">
            <Link to="/">My Diary</Link>
            <ul>
                <li>회원가입</li>
                <li>로그인</li>
            </ul>
        </div>
    )
};