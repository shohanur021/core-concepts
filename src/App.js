import './App.css';

function App() {
  const names=['Sajib',"Samina","Nobonee","Shafa"];  
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a person.</p>  
        <Person></Person>
      </header>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
       <br></br><br></br><br></br>
      <PersonDetails name={names[0]} occupation="Doctor"></PersonDetails>
      <PersonDetails name={names[1]} occupation="Teacher"></PersonDetails>
      <PersonDetails name={names[2]} occupation="Nurse"></PersonDetails>
      <PersonDetails name={names[3]} occupation="Banker"></PersonDetails>
   </div>
  );
}

function Person(){
  const sty={
    border: '2px solid red',
    margin: '15px ',
    color: 'green'

  }

  return (
  <div style={sty}>
    <h1>Samina Mahjabeen</h1>
    <p>She is a good girl</p>
    <h4>Yo Yo baby</h4>
  </div>
  )
}


function PersonDetails(props){
  const sty={
    border: '10px solid blue',
    margin: '12px ',
    color: 'red'

  }

  return (
  <div style={sty}>
    <h1>My name is : {props.name}</h1>
    <h4>Profession : <span style={{color:"black"}}>{props.occupation}</span></h4>
    <p>Life is pianful</p>
  </div>
  )
}




export default App;
