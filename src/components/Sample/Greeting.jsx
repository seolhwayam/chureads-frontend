import React, { useState } from 'react'
/*
사용자의 이름을 입력받아서 인사 문구와 함께 메세지를 보여주는 컴포넌트
*/


const Greeting = ({name = ">>", onButtonClick}) => {
    //로직
    /*
    my data
    PascalCase : MyData
    camelCase : myData
    */
    //let userName = "kimseolhwa"
    
    // state반환값 : 첫번쨰 - 데이터 , 두번째 -함수
   // const [userName, setUserName] = useState(name);

    const handleClick = () =>{
        //데이터 수정
        //userName = userName.toUpperCase();
        //console.log("🚀 ~ handleClick ~ userName:", userName)

        //setUserName(userName.toUpperCase());
        onButtonClick();
    }

  return (
    <div>
        <p> {name}님! 반갑습니다!</p>    
        <p> 오늘도 좋은 하루되세요</p>  
        <button type='button' onClick={handleClick} className='border border-white'>대문자로 수정</button>  
    </div>
  )
}

export default Greeting