import React from 'react';
import {connect} from "react-redux"
import Smurf from "./Smurf"

export class SmurfDisplay extends React.Component {
    componentDidUpdate(){
        
        if (this.props.state.Error){
            alert(this.props.state.Error)

     }   
}




    render() {
     if (this.props.state){console.log("smurfdisplay",this.props.state)}

    if (this.props.state && this.props.state.loading===true){
        return <h1>LOADING...</h1>
    }
    else if (this.props.state && this.props.state.smurfs){    return(<div>

{this.props.state.smurfs.map(smurf => (
				<Smurf
					name={smurf.name}
					position={smurf.position}
                    nickname={smurf.nickname}
                    description={smurf.description}
                    key={smurf.id}
				/>))}
        

           
            
            
        </div>)
        
        }
    else{return (null)}
    }
    
}



//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.


const mapStateToProps=state=>{
    return {
        state:state
    }
}

export default connect(mapStateToProps)(SmurfDisplay)