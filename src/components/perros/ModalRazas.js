import './Razas.css';

function Modalrazas(props){
    return(
        <div className="modal fade" id={props.pm1} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={props.pm1}>{props.pm3}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.pm6} className="card-img-top" alt={props.pm3}/>
                        <p className="sobre">Acerca de:</p>
                        <p className='acerca'>{props.pm5}</p>
                        <p className="sobre">Tamaño:</p>
                        <p>{props.pm9}</p>
                        <p className="sobre">País de origen:</p>
                        <p>{props.pm7}</p>
                        <p className="sobre">Longevidad:</p>
                        <p>{props.pm8}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modalrazas;