import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}){

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className={styles.comment}> 
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/50158723?v=4"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>João Negreiros</strong>
                            <time title='14 de dezembro as 08:00' dateTime="2024-12-14 08:00:00">Cerca há 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}