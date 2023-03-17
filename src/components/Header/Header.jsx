import s from "./style.module.scss";

export function Header() {
  return (
    <div className={s.container}>
        <div className="logo">
            <h1>Ma Boutique <span>en ligne</span></h1>
        </div>
        <nav>
            <a href="#" className="link">Accueil</a>
            <a href="#" className="link">Femme</a>
            <a href="#" className="link">Homme</a>
            <a href="#" className="link">Enfant</a>
            <input type="search" placeholder="Rechercher" />
            <a href="#">Mon compte</a>
            <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </nav>
    </div>
  );
}
