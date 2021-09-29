import logo from './logo.svg';
import './App.css';
import './Widget.css';

function Widget(props) {
  return (
        <div class="card shadow-lg m-3" data-target="#collapseExample" style={{
            border: 'none',
            borderRadius: '10px',
            padding: 0
        }} onClick={props.onClick}>
            <div class="card-body" style={{textAlign: 'left'}} data-toggle="collapse" data-target="#collapseExample">
                    <div class='row'>
                        <div class='col-8'>
                            <h1 class='widget-title'>{props.title}</h1>
                            <p class='widget-subtitle'>{props.subtitle}</p>
                        </div>
                        <div class='col'>
                            <h1 class='trailing'><img class='trailing-image' src={props.trailing}></img></h1>
                        </div>
                    </div>
                </div>
            <div class="collapse" id="collapseExample">
            {props.children}
            </div>
            {/* {props.children} */}
        </div>
  );
}

export default Widget;
