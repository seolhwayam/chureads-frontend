import React, { useEffect, useState } from 'react'
import Greeting from '../components/Sample/Greeting'



//함수형 컴포넌트 -> html 리턴
const Sample = () => {

const handleButtonClick = (data) =>{
    console.log("click",data);
}

const [userNames, setUserNames] = useState({});

useEffect(() => {
    //컴포넌트 실행 시 딱 한번만 실행
    const nameDatas = ["코코볼","첵스초코","콘프로스트"]
    setUserNames(nameDatas);

},[]) //useEffect(() => {},[]) 기본 구문

//view
  return (
    <div>sample
        {userNames.map((userName)=> <Greeting key={`userName`} name={userName} onButtonClick={handleButtonClick}/>)}

        <Greeting name="김설화" onButtonClick={handleButtonClick}/>
        <Greeting name="코코볼" onButtonClick={handleButtonClick}/>
        <Greeting name="코코" onButtonClick={handleButtonClick} />

    </div>
  )
}

export default Sample