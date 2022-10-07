import { useEffect, useState } from 'react'
import MioCmNotFound from './components/404';
import { assessPage } from './utils'

function App() {  
  const [ pageType,setPageType ] = useState<boolean>(true);

  useEffect(() => {
    setPageType(assessPage.assessPage());
  },[])

  return (
    <div className="App">
      {
        pageType 
        ? "pc端"
        : "手机端"
      }      
      <MioCmNotFound />      
    </div>
  )
}

export default App
