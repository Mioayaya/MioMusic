import { useEffect, useState } from 'react'

import { assessPageMethods } from './utils'

import MioCmNotFound from './components/404';
import MioCmPageLoading from './components/loading/page-loading';
import MioMobile from './page-mobile';
import MioWeb from './page-web';

function App() {  
  const [ pageType,setPageType ] = useState<boolean>(true);

  useEffect(() => {
    setPageType(assessPageMethods.assessPage());
  },[])

  return (
    <div className="App">
      {
        pageType 
        ? <MioWeb />
        : <MioMobile />
      }
    </div>
  )
}

export default App
