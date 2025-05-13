import './home.css';

function Home() {
    return (
        <>
            <div className='lienso'> {/* Esta es la pagina principal el home donde puede acceder cualquier persona */}
                {/* los registros seran para resivir notificaciones de si se suben nuevos productos a la pagina */}
                <header>
                    <h1> "logo" Estudio Salvaje</h1>
                    <button>Explorar</button> {/* esto envia a la regresa al home o lo recargas */}
                    <search>
                        <form action="https://www.google.com/search">
                            <label>
                                <input id='inputlavel' type="search" name='q' autoComplete='off' />
                            </label>
                            <input id='inputsubmit' type="submit" value="Buscar" />
                        </form>
                    </search>
                    <button>log in</button> {/* esto envia a la pagina de login */}
                    <button>sign in</button> {/* esto envia a la pagina de registro */}
                </header>
                <main>
                    <h2>Productos</h2>
                    <p>aqui colocamos los productos cargados</p>
                    <section>
                        <button>imagen 1</button> {/* cada imagen redirige ala cuenta de whatsap con una pregunta por el producto deseado y una imagen */}
                        <button>imagen 2</button>
                        <button>imagen 3</button>
                        <button>imagen 4</button>
                    </section>
                </main>
            </div>
        </>
    )
}
export default Home;