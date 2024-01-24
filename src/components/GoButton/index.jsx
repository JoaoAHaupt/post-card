import { Component } from "react";
import './styles.css';

export class GoButton extends Component{
    render(){

        const {onClick} = this.props;
        return(
            <div className="button-container">
                <button onClick={onClick}>GO</button>
            </div>
        );
    }
}