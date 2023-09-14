import {Component} from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [
         {
          name: 'Linda',
          id: '1231e',
        },
         {
          name: 'Frank',
          id: '63648e',
        },
         {
          name: 'Jacky',
          id: '638e80e',
        },
        {
          name: 'Andrew',
          id: '7993e9e44',
        },
        
      ],
      
      
    };
  }

  render() {
    return (
      <div className="App">
        
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        
      </div>
    );

  }
  
}

export default App;
