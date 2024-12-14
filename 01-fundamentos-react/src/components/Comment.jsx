import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}> 
            <img src="https://avatars.githubusercontent.com/u/50158723?v=4" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>João Negreiros</strong>
                            <time title='14 de dezembro as 08:00' dateTime="2024-12-14 08:00:00">Cerca há 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Content</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20}/> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}