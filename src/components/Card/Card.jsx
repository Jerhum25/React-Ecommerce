import s from "./style.module.scss";

export function Card({ title, price, src, alt }) {
  return (
    <div className={s.container}>
      <img src={src} alt={alt} />
      <div className={s.description}>
        <h2>{title}</h2>
        <h2>{price}€</h2>
      </div>
    </div>
  );
}
