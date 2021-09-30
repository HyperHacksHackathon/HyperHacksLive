import React, { useState } from 'react';
import './App.css';
import './Widget.css';

function Widget(props) {
  const [open, setOpen] = useState(false)

  return (
    <div class='py-2'>
        <div class="card shadow-lg pointer" data-target="#collapseExample" style={{
            border: 'none',
            borderRadius: '10px',
            padding: 0
        }} onClick={() =>{
            setOpen(!open);
            if ('onClick' in props) {
                props.onClick()
            }
        }}>
            <div class="card-body" style={{textAlign: 'left'}} data-toggle="collapse" data-target={"#" + props.title}>
                <div class='row'>
                    <div class='col-8'>
                        <h1 class='widget-title'>{props.title}</h1>
                        <p class='widget-subtitle'>{props.subtitle}</p>
                    </div>
                    <div class='col'>
                        <h1 class='trailing'><img class='trailing-image' src={props.trailing} style={{
                            transitionDuration: '0.3s',
                            transitionProperty: 'transform',
                            transform: (open && props.children != undefined) ? 'rotate(90deg)' : ''
                        }}></img></h1>
                    </div>
                    </div>
                </div>
            <div class={"collapse" + (props.children == undefined ? '' : ' p-1')} id={props.title}>
            {props.children}
            </div>
            {/* {props.children} */}
        </div>
    </div>
  );
}

export default Widget;
