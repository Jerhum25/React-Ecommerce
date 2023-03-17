import s from "./style.module.scss";

export function Slogan() {
  return (
    <div className={s.container}>
            <h1>Bienvenue sur ma boutique <span>en ligne</span></h1>
            <p>Vous ne ferez que des <span>bonnes</span> affaires</p>
    </div>
  );
}
