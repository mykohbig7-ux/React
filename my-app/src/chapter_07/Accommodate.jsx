// my-app/src/chapter_07/Accommodate.jsx
//      --> 입장 인원 관리 화면 (입장 버튼 클릭 -> 인원 + 1, 퇴장 버튼 클릭 -> 인원 - 1)
//          정원(10명)이 차면 입장 버튼을 잠그고 빨간 안내 문구가 보여지도록
//      함수 컴포넌트 + 훅 (useState, useEffect, useCounter(커스텀 훅))
import { useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

// 함수 컴포넌트 : JSX를 reture 하는 함수, 이름은 반드시 대문자로 시작한다.
function Accommodate(props) {
    // isFull : 정원이 가득 찼는가? --> true / false
    // [현재 값, 값을 바꾸는 함수]
    const [isFull, setIsFull] = useState(false);

    // [현재 인원, 인원 늘리는 함수, 인원 줄이는 함수]
    const [count, increaseCount, decreaeCount] = useCounter(0);

    // useEffect : 언제, 몇 번 실행되는지 눈으로 확인하려고 로그를 찍는 관찰용
    useEffect(() => {
        console.log('========================================'); // 로그를 구분하기 위해서
        console.log('useEffect() is called.');
        console.log(`isFull: ${isFull}`); // 실행되는 순간의 isFull값을 출력
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); 
        console.log(`Current count value: ${count}`);
    }, [count]); // <- 의존성 배열 : count를 감시하다가 바뀌면 위 코드를 다시 실행해줘.

    // 화면 그리기 (state가 바뀔 때 마다 이 함수 전체가 다시 실행된다.)
    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaeCount}>퇴장</button>

            {isFull && <p sryle={{ color: 'red'}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;