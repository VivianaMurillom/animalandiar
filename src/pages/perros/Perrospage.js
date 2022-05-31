import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {getAllPerros} from '../../components/perros/Perros';
import Razas from "../../components/perros/Razas";
import './Perros.css'

function Perrospage(){

    const perros=getAllPerros();

    return(
        <section>
            <Header/>
            <Navbar/>
            <div className='container'>
                <h1>La página de perros</h1>
                <p>A continuación te enseñaremos datos curiosos de algunos de los más reconocidos perros en el mundo:</p>
                    <div class="row row-cols-1 row-cols-md-3 g-4 dogs">
                        {
                            perros.map(p=>(
                                <Razas 
                                p1={p.id}
                                p2={p.thumbnail}
                                p3={p.raza}
                                p4={p.descripcion}
                                p5={p.acercade}
                                p6={p.imagen}
                                p7={p.pais}
                                p8={p.vida}
                                p9={p.tamaño}/>
                            ))
                        }
                    </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Perrospage;