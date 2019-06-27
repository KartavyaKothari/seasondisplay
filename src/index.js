import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component{
    state = {
        lat: null,
        err: null
    }

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         lat: null,
    //         err: null
    //     }
    // }

    conditionalRender = ()=>{
        if(this.state.err) return <Spinner/>
        else if(this.state.lat) return <div><SeasonDisplay latOfMyPosition={this.state.lat}/></div>
        else return (
            <Spinner text="Please accept location access"/>
        );
    }

    componentDidMount(){
        // console.log("Component has rendered");
        window.navigator.geolocation.getCurrentPosition(
            (position)=> {
                this.setState({lat: position.coords.latitude});
            },
            (error)=>{
                this.setState({err: error.message});
            }
        );
    }

    componentDidUpdate(){
        console.log("Component has re rendered");
    }

    render(){
        return (
            <div>
                {this.conditionalRender()}
            </div>
        );


        // return (
        //     <div>
        //         Latitude: {this.state.lat}<br/>
        //         Error: {this.state.err}
        //         {/* <SeasonDisplay/> */}
        //     </div>
        // );
    }
}


// const App = ()=>{
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> {console.log(position)},
//         (error)=>{console.log(error)} 
//     );

//     return (
//         <div>
//             <SeasonDisplay/>
//         </div>
//     );
// }

ReactDOM.render(<App/>,document.querySelector('#root'));