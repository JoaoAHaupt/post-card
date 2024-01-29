import { Component } from 'react';
import './styles.css'

export const Input = ({handleChange, searchValue}) =>{
    return(      
        <div className="text-input">
            <input type='search' onChange={handleChange} value={searchValue} placeholder='type your search'></input>
        </div>  
        
    );
    
}