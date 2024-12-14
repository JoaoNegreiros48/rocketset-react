import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://images.pexels.com/photos/29704575/pexels-photo-29704575.jpeg?auto=compress&cs=tinysrgb&w=500&q=50&dpr=1"
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
                <p>👉 <a href="#"> jane.design/doctorcare </a></p>
                <p> <a href="#"> #novoprojeto #nlw #rocketseat </a></p>
            </div>
        </article>
    ) 
}