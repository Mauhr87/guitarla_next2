import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, GuitarLA, tienda de música'}
    >
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>
          <div>

            <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" alt="Imagen sobre nosotros" width={1000} height={800} />
              <div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec nisi vel dolor mattis rhoncus. Nunc quis nisi id nulla pulvinar malesuada et nec neque. Integer blandit tellus sit amet vehicula ullamcorper. Sed suscipit nisi ut sapien aliquet, sit amet accumsan leo pulvinar. Quisque vel orci magna.</p>
                <p>Duis tempor massa ac sem dictum congue. Cras nisl nunc, pretium eget feugiat nec, scelerisque vel turpis. Fusce porta vel tellus vel efficitur. Sed suscipit nibh vel lobortis consectetur. Sed lorem lacus, pulvinar ut consequat in, porta id ex. Pellentesque at enim purus. Maecenas eget nunc in tortor consequat imperdiet. Nam ultricies ex a urna vulputate, ut venenatis risus viverra.</p>
              </div>
            </div>
          </div>
        </main>
    </Layout>
  )
}
