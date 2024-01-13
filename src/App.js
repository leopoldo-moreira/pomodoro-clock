import './App.css';

import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';

function App() {
  // paleta cores background body azul? -> #397097, amarelo -> #876D43, rosa? -> #744c71
  document.documentElement.style.backgroundColor = '#397097';

  const [quotes, setQuotes] = useState(false)
  const [data, setData] = useState({
    page: 1,
    time: '21:59:52',
    temp: '26',
    greetingMsg: 'Boa Noite',
    city: 'Santana de Parnaiba',
    author: 'Leopoldo',
    quote: 'pra morrer basta estar vivo',
    functions: {
      nextPage: nextPage,
      previouslyPage: previouslyPage
    }
  })

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
  

  function nextPage(e) {
    setData((prevData) => {
      const newPage = prevData.page === 9 ? 1 : prevData.page + 1;

      return {
        ...prevData,
        page: newPage,
      };
    });
  }

  function previouslyPage(){
    setData((prevData) => {
      return {...prevData, page: prevData.page -1}
    })    
  }

  
  console.log(data.page)

  return (
    <div className="App">

      <MainContainer data={data} />
      <button id="teste" onClick={data.functions.nextPage}>change</button>
      
    </div>
  );
}

export default App;
