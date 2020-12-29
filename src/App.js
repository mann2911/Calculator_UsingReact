import React,{Component} from 'react';
import './App.css';
import CalBody from './CalBody';
import CalScreen from './CalScreen';
import './CalBody.css';

class App extends Component{
  state={
    result:''
  }
 
  buttonPressed=(buttonName)=>{
    
    if(buttonName==='='){
      this.calculate();
    }
    else if(buttonName==='X'){
      this.delete();
    }
    else if(buttonName==='CE'){
      console.log('mann');
      this.cancel();
    }
    else if(buttonName==='sq'){
     
      let num=Number(this.state.result);
      let ans=String(Math.pow(num,2));
      this.setState({result:ans})
    }
    else if(buttonName==='cube'){
     
      let num=Number(this.state.result);
      let ans=String(Math.pow(num,3));
      this.setState({result:ans})
    }
    else if(buttonName==='sqrt'){
     
      let num=Number(this.state.result);
      let ans=String(Math.sqrt(num));
      this.setState({result:ans})
    }

    else{
    this.setState({
      result:this.state.result+buttonName
    })
    }
  }
  cancel=()=>{
    this.setState({result:''})
  }
  delete=()=>{
    let results=this.state.result;
    let finalResult=results.slice(0, -1);
    this.setState({
      result: finalResult 
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
        <CalBody buttonPressed={this.buttonPressed}/>
        </div>
      </div>
    );
  }
}


export default App;
