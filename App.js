import './App.css';
import img from './imgs/6.jpg';

export default function App(props){
  console.log(props);
  return(
    <div className="card">
      <div className="content">

        <img src={props.img}/>
        <div className="text">
          <h2 className="title">{props.title}</h2>
          <h3 className="date">{props.date}</h3>
          <p className="paragraph">
              {props.description}
          </p>
          <h3 className="state">{props.state}</h3>
        </div>

      </div>
    </div>
  )
}