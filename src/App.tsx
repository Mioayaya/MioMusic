import { useEffect, useState } from 'react'

function App() {  

  useEffect(() => {
    assessPage();
  },[])

  // methods
  const assessPage = ():void => {
    const ua = window.navigator.userAgent.toLocaleLowerCase();
    const reg = /iphone|android|symbianos|windows\sphone/g;
    if(reg.test(ua)) {
      console.log('手机打开');
    }else {
      console.log('pc打开');      
    }    
  }

  return (
    <div className="App">      
    </div>
  )
}

export default App
