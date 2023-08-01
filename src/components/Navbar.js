import "./styles/Navbar.scss";

export const Navbar = ()=>{
    return (
        <div className="navbar-container">
            <a>My Diary</a>
            <ul>
                <li>회원가입</li>
                <li>로그인</li>
            </ul>
        </div>
    )
};