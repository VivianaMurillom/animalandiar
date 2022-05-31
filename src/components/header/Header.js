/*componentes de clase class o comomponentes de función*/
/* function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);*/


/*class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}*/
import './Header.css';
import Logo from './logo.jpg';



function Header(){
return (
    /*caracteristicas del componente*/
    <header>
        <div class="logo">
          <img src={Logo}></img>
        </div>
        <div>
        <button class="btn-azul"><i class="fas fa-power-off"></i>Ingresar</button>
        <button class="btn-morado"><i class="fas fa-user-plus"></i>Registrar</button>
        </div>
    </header>
    );
}
export default Header;
