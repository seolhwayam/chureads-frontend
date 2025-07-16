import React from 'react'
import Greeting from '../components/Sample/Greeting'



//함수형 컴포넌트 -> html 리턴
const Sample = () => {

const handleButtonClick = (data) =>{
    console.log("click",data);
}

  return (
    <div>sample
        <Greeting name="김설화" onButtonClick={handleButtonClick}/>
        <Greeting name="코코볼" onButtonClick={handleButtonClick}/>
        <Greeting onButtonClick={handleButtonClick} />

    </div>
  )
}

export default Sample