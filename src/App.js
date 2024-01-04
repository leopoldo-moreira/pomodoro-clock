import './App.css';
import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';
import Loading from './components/Loading'

function App() {
  // paleta cores background body azul? -> #397097, amarelo -> #876D43, rosa? -> #744c71
  document.documentElement.style.backgroundColor = '#397097';

  const [quotes, setQuotes] = useState(false)

  useEffect(()=>{

    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational',{
      method: 'GET',
      headers: {'X-Api-Key':'iB1kGEe7Wg31uDHCkug0tg==PDUfnYxVEtuIRweq'}
    })
    .then(resp => resp.json())
    .then((data) => {
      setQuotes(data)
    })
    .catch(err => console.log(err))

  },[])

  return (
    <div className="App">

      <MainContainer
       type="greeting"
       time="13:39"
       temp="26"   
       greetingMsg="Good Evening"   
       city="Santana de Parnaiba" 
       />
           
    </div>
  );
}

export default App;
