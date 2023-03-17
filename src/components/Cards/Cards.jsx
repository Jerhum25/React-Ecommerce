import { Card } from "../Card/Card";
import s from "./style.module.scss";
import dataBase from "../../Base/db";

export function Cards() {
  console.log(dataBase);
  return (
    <div className={s.container}>
      {dataBase.map((article) => (
        <Card key={article.index} src={article.img}title={article.title} price={article.price} alt={article.title}/>
      ))}
    </div>
  );
}
