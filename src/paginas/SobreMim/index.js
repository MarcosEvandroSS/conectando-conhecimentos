import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marcos!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Marcos Evandro"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou  estudante do ONE Front-end na Alura e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Análise e Desenvolvimento de Sistemas .
            </p>

            <p className={styles.paragrafo}>
                Com isso, tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>

            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras.
            </p>

        </PostModelo>
    )
}
