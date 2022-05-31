import Modalrazas from "./ModalRazas";

function Razas(props){
    return(
        <div className="col">
            <div className="card perrito">
                <img src={props.p2} className="card-img-top" alt={props.p3}/>
                <div className="card-body">
                    <h5 className="card-title">{props.p3}</h5>
                    <p className="card-text">{props.p4}</p>
                    <button type="button" class="btn btn-primary buttonPerrito" data-bs-toggle="modal" data-bs-target={`#id${props.p1}`}>
                        Ver más
                    </button>
                 </div>
             </div>
             <Modalrazas 
             pm1={`id${props.p1}`}
             pm2={props.p2}
             pm3={props.p3}
             pm4={props.p4}
             pm5={props.p5}
             pm6={props.p6}
             pm7={props.p7}
             pm8={props.p8}
             pm9={props.p9}/>
        </div>
        
    );
}
export default Razas;
