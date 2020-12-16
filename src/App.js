import React,{Component} from 'react';
import './App.css';
import CalBody from './CalBody';
import CalScreen from './CalScreen';
import './CalBody.css';

class App extends Component{
  state={
    result:''
  }
 
  buttonpressed=(buttonname)=>{
    
    if(buttonname==='='){
      this.calculate();
    }
    else if(buttonname==='X'){
      this.delete();
    }
    else if(buttonname==='CE'){
      this.cancel();
    }
    else{
    this.setState({
      result:this.state.result+buttonname
    })
    }
  }
  cancel=()=>{
    this.setState({result:''})
  }
  delete=()=>{
    let results=this.state.result;
    let finalresult=results.slice(0, -1);
    this.setState({
      result: finalresult
  })
  }
  calculate=()=>{
    var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
  }
  render(){
    return(
      <div className='App'>
        <h1>Calculator</h1>
        <br/>
        <div className='calculator-body'>
        <CalScreen result={this.state.result}/>
        <CalBody buttonpressed={this.buttonpressed}/>
        </div>
      </div>
    );
  }
}


export default App;
