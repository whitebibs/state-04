
import {Component} from "react";
import { CounterDisplay } from "./CounterDisplay";
export class App extends Component{
  state={
 count: this.props.initial ?? 0
}
constructor(props){
super(props)

setInterval(()=>{
  this.setState((state)=>{
    return {
      count: state.count + (this.props.increment ?? 1),
    }
  })
},this.props.time ?? 1000)
}
render(){
  return(
    <div>
     <CounterDisplay count={this.state.count}/>
    </div>
  )
}
}
