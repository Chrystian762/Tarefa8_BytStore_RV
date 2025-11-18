
import styles from '../../styles/styles-pages/empresa.module.css'

function Empresa(){
    return(
        <div className={styles.ContainerEmpresa}>
            <div className={styles.Titulo}>
                <h2 className={styles.SaudacaoEmpresa}>Conheça sobre nós!</h2>
            </div>

            <div className={styles.ContentEmpresa}>
                <div className={styles.BoxEmpresa}>
                    <ul className={styles.List}>
                        <div className={styles.BtnEmpresa}>
                            <li className={styles.PerguntaEmpresa}>Quem foram seus fundadores?</li>
                        </div>
                        <div className={styles.BtnEmpresa}>
                            <li className={styles.PerguntaEmpresa}>Qual o intuito desse projeto?</li>
                        </div>
                        <div className={styles.BtnEmpresa}>
                            <li className={styles.PerguntaEmpresa}>Quais são seus valores?</li>
                        </div>
                    </ul>
                        <div className={styles.Descricao}>
                            <div className={styles.BoxDescricao}>
                                <div>
                                    <h5 className={styles.TituloDesc}>Fundadores:</h5>
                                    <p className={styles.TextoDesc}>
                                        Rodrigo dos Santos Pereira Junior
                                    </p>
                                    <p className={styles.TextoDesc}>
                                        Chrystian Gabriel da Silva
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Descricao}>
                            <div className={styles.BoxDescricao}>
                                <div>
                                    <h5 className={styles.TituloDesc}>Projeto:</h5>
                                    <p className={styles.TextoDesc}>
                                        Venda de utensilios tecnlogicos com foco ao lado gamer.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.Descricao}>
                            <div className={styles.BoxDescricao}>
                                <div>
                                    <h5 className={styles.TituloDesc}>Valores:</h5>
                                    <p className={styles.TextoDesc}>
                                        Produtos de qualidade e com garantia de suas funcionalidades 100%
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Empresa
