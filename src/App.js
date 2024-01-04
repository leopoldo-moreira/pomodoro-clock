import './App.css';
import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';
import Loading from './img/loading.svg'

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
      {quotes ?
       <MainContainer
        type="quote"
        quote={quotes[0]['quote']}
        author={quotes[0]['author']}/>
      : <h1>leo</h1>}

      <Loading/>
    </div>
  );
}

export default App;
