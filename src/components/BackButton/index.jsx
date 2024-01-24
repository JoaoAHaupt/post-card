import { Component } from "react";
import './styles.css';

export class BackButton extends Component{
    render(){
        
        const {onClick} = this.props;
        return(
            <div className="button-container-back">
                <button onClick={onClick}>BACK</button>
            </div>
            
        );
    }
}