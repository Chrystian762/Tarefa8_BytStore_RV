<<<<<<< HEAD
function home(){
    return(

            <div>

            </div>


    )
}

export default home;
=======
import styles from '../../styles/styles-pages/home.module.css'
import LogoMini from '../../assets/imgHome/LogoMinimalista.png'

function Home(){
    return(
        <div className={styles.ContainerHome}>
            <div className={styles.Titulo}>
                <h2 className={styles.SaudacaoHome}>Bem-vindo a BytStore!</h2>
                <img src={LogoMini} alt="Logo empresa"  className={styles.ImgEmpresa}/>
            </div>
            <div className={styles.ContentHome}>
                
            </div>
        </div>
    )
}
export default Home
>>>>>>> 5fe1e92fe0fba72ccfb321210d09e2a67093a2de
