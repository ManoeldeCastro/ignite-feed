import { useState } from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import perfilImg from '../../assets/perfil.png';
import { Avatar } from './Avatar';


interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={perfilImg} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Manoel de Castro</strong>
              <time title="11 de maio às 8:13h" dateTime="2022-05-11 08:13:20">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Excluir Comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
