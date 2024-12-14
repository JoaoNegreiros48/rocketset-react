import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/50158723?v=4"
                    />
                    <div className={styles.authorInfo}>
                        <strong>João Negreiros</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='14 de dezembro as 08:00' dateTime="2024-12-14 08:00:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#"> jane.design/doctorcare </a></p>
                <p> 
                    <a href="#"> #novoprojeto </a> {' '}
                    <a href="#"> #nlw </a>{' '}
                    <a href="#"> #rocketseat </a></p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixei um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    ) 
}