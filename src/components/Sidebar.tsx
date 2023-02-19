import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import perfilImg from '../../assets/perfil.png';
import { Avatar } from './Avatar';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://www.freecodecamp.org/news/content/images/size/w600/2020/08/cover.png"
        alt="TSX E REACT"
      />

      <div className={styles.profile}>
        <Avatar src={perfilImg} />
        <strong>Manoel Dias</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
};
