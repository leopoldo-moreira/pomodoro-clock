import './App.css';
import MainContainer from './components/MainContainer';
import { useState, useEffect } from 'react';


function App() {
  // paleta cores background body azul? -> #397097, amarelo -> #876D43, rosa? -> #744c71
  document.documentElement.style.backgroundColor = '#397097';

  const [data, setData] = useState({
    page: 1,
    time: '21:59:52',
    temp: '26',
    greetingMsg: 'Temporize suas atividades!',
    city: 'Santana de Parnaiba',
    author: '',
    quote: '',
    currentActivity: '',
    pomodoroTimer: ['25', '5', '15', '4'], // ['pomodoro', 'short pause', 'long pause', 'how many sections']
    editMode: false,  
    progress: 0,  
    functions: {
      nextPage: nextPage,
      previouslyPage: previouslyPage,
      changeData: changeData,
      changePomodoro: changePomodoro,
      editMode: editMode,
      goodByeSection: goodByeSection,
      setProgress: setProgress
    }
  })

  function changePomodoro(index, value) {
    setData((prevData) => {
      return {
        ...prevData,
        pomodoroTimer: [
          ...prevData.pomodoroTimer,
          ...prevData.pomodoroTimer[index] = value
        ]
      };
    });
  }

  useEffect(() => {

    fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      method: 'GET',
      headers: { 'X-Api-Key': 'iB1kGEe7Wg31uDHCkug0tg==PDUfnYxVEtuIRweq' }
    })
      .then(resp => resp.json())
      .then((data) => {
        setData((prevData) => {
          return {
            ...prevData,
            'quote': data[0].quote,
            'author': data[0].author
          }
        })
      })
      .catch(err => console.log(err))

  }, [])


  function changeData(propToUpdate, data) {
    setData((prevData) => {
      return {
        ...prevData,
        [propToUpdate]: data
      }
    })
  }

  function editMode(finish) { 

    if (finish){      
       setData((prevData) => {
          return {
            ...prevData,
            'editMode': false,
            'page': 7
          }
        })
      }
    else{
      setData((prevData) => {
        return {
          ...prevData,
          'editMode': true,
          'page': 3
        }
      })
    }
    }

  function nextPage() {

    setData((prevData) => {
      const newPage = prevData.page >= 9 ? 1 : prevData.page + 1;
      return {
        ...prevData,
        page: newPage,
      };
    });
  }

  function previouslyPage() {
    setData((prevData) => {
      return { ...prevData, page: prevData.page - 1 }
    })
  }

  function goodByeSection(){
    setData((prevData) => {
        return {
          ...prevData,
          'editMode': false,
          'page': 1,
          pomodoroTimer: ['25', '5', '15', '4'], // ['pomodoro', 'short pause', 'long pause', 'how many sections']
        }
      })
    }  

  function setProgress(newProgress){
    setData((prevData) => {
      return{
        ...prevData,
        progress: newProgress
      }
    })
  }  

   return (
    <div className="App">

      <MainContainer data={data} />
      <button id="teste" onClick={data.functions.nextPage}>change</button>
      

    </div>
  );
}

export default App
