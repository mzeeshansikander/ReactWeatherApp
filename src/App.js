import React from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';

const API_KEY = '7e4f67b05d28700c940580b07d87a429';
class App extends React.Component{

  getWeather = () => {

  }


  render(){
    return(
      <div>

        <Titles />
        <Forms />
        <Weather />
      </div>



    );

  }
}
export default App;