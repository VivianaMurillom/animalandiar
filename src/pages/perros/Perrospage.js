import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {getAllPerros} from '../../components/perros/Perros';
import Razas from "../../components/perros/Razas";

function Perrospage(){

    const perros=getAllPerros();

    return(
        <section>
            <Header/>
            <Navbar/>
            <div className='container'>
                <h1>Listado de perros</h1>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
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
                                p8={p.vida}/>
                            ))
                        }
                    </div>
            </div>
            <Footer/>
        </section>
    )
}

export default Perrospage;