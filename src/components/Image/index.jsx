import stages from "../../constants/stages.js";
import style from "../Image/Image.module.css";

export default function Image({ gresit}) {
  return (
    <>{gresit>=7 &&<h1 className={style.final}>Ai Pierdut !!!</h1>}
      <div className={style.container}>
        <img className={style.Image} src={stages[gresit<7?gresit:7] + "?1"} alt="IMAGINI" />
        </div>
    </>)
}
