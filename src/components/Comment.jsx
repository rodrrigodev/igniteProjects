import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function deleteComments(){
        onDeleteComment(content)
    }

    function likeComment(){
        setLikeCount((state)=>{
            return state + 1
        })
    }

    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="data:image/jpeg;base64,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"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Keanu Reeves</strong>
                            <time title='01 de maio ás 08:00h' dateTime='2022/05/01 08:00:00'>Cerca de 1h atrás</time>

                        </div>

                        <button onClick={deleteComments} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>

                </div>

                <footer>
                    <button onClick={likeComment}>
                     <ThumbsUp/>
                     Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>

    )
}