import { header } from './Header.module.css';
import igniteLogoImg from '../../assets/ignite.svg';

export const Header = () => {
  return (
    <header className={header}>
      <img src={igniteLogoImg} alt="Logo Ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
};
