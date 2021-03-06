import './Doorboard.scss';
import React from 'react';
import Doorinfo from './doorinfo/Doorinfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function Doorboard(props) {
    return(
        <div id="door-board" className={`bor ${props.bor ? "bor-tra" : ""}`}>
            <div className={`toggle-2 ${props.bor ? "togg-tra" : ""}`} onClick={() => props.toggle()}>
                <FontAwesomeIcon onClick={() => props.toggle()} icon = {faAngleRight} />
            </div>
            
            <Doorinfo isOpen = {true} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {true} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {true} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {false} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {false} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {false} door={1} point={300} bor={props.bor} />
            <Doorinfo isOpen = {false} door={1} point={300} bor={props.bor} />
        </div>
    );
}

export default Doorboard;