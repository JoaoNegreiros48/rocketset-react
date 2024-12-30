import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react';

export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    })

    const isNewCommentEmpty = newCommentText.length === 0

    function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete){
        const newCommentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        
        setComments(newCommentsWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={ publishedAt }>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === 'paragraph'){
                            return <p key={line.content}>{line.content}</p>
                        } else if (line.type === 'link'){
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixei um comentário'
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return( 
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    ) 
}