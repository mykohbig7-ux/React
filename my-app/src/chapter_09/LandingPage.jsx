// my-app/src/chapter_09/LandingPage.jsx
// 조건부 렌더링 + 부모가 state 소유
import { useState } from "react";
import Toolbar from "./Toolbar";
// Toolbar 는 자기 state가 없고, 이 컴포넌트가 내려주는 props만 보고 화면을 표현

function LandingPage(props) {
    // isLoggedIn : 로그인 여부 state, 처음에는 false 상태(로그아웃 상태)
    // setIsLoggedIn : 값을 바꾸는 함수 (부모인 LandingPage와 그 자식들이 다시 그려진다.)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 50 }}>즐거운 리액트 공부!!!</div>
        </div>
    );
}

export default LandingPage