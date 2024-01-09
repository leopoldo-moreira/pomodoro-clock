import './App.css';
import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';

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

  const generalData = {
    type: 'PomodoroSection',
    time: '21:59:52',
    temp: '26',
    greetingMsg: 'Boa Noite',
    city: 'Santana de Parnaiba',
    author: 'Leopoldo',
    quote: 'pra morrer basta estar vivo'
  }

  return (
    <div className="App">

      <MainContainer data={generalData} />
           
    </div>
  );
}

export default App;
