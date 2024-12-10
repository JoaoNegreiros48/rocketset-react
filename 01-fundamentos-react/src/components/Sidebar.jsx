import styles from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.pexels.com/photos/29704575/pexels-photo-29704575.jpeg?auto=compress&cs=tinysrgb&w=500&q=50&dpr=1" 
            />
        
            <div className={styles.profile}>
                <strong>João Negreiros</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">Editar Perfil</a>
            </footer>
        </aside>
    );
}