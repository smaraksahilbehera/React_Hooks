import React from 'react';
import './App.css';
import StateTutorial from './StateTutorial';
import StateTutorial2 from './StateTutorial2';
import ReducerTutorial from './ReducerTutorial';
import EffectTutorial from './UseEffectTutorial';
import RefTutorial from './UseRefTutorial';
import LayoutEffectTutorial from './LayoutEffectTutorial';
import ImperativeHandle from './ImperativeHandle';
import ContextTutorial from './ContextTutorial';
import MemoTutorial from './MemoTutorial ';
import CallBackTutorial from './CallbackTutorial';

class App extends React.Component {
  styles={
    fontStyle: "bold",
    color: "teal"
  }
  render() {
    return (
      <div className='App'>
        <h1 style={this.styles}> Welcome </h1>
        <StateTutorial />
        <br />
        <StateTutorial2 />
        <br/>
        <br/>
        <ReducerTutorial />
        <br />
        <br />
        <EffectTutorial />
        <br />
        <br />
        <RefTutorial />
        <br />
        <br />
        <LayoutEffectTutorial />
        <br />
        <br /> 
        <ImperativeHandle />
        <br />
        <br />
        <ContextTutorial /> 
        <br />
        <br />
        <MemoTutorial />
        <br />
        <br />
        <CallBackTutorial />
      </div>
    );
  }
}
export default App;


