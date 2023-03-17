import s from "./style.module.scss";

export function Footer() {
  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p>Contactez nous au : 06 07 08 09 10</p>
      </div>
      <div className={s.social_media}>
        <p>Suivez-nous sur les réseaux</p>
        <div className={s.logo_social_media}>
          <a href="https://www.facebook.com/amazon.fr/" target="blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/amazon?lang=fr" target="blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/amazon.fr" target="blank">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="https://www.youtube.com/amazonfr" target="blank">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
