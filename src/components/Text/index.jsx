import style from "./Text.module.css"

export default function Text({ word, litereAlese, gresit }) {
  return (
    <>
      {gresit < 7 ? (
        <div className={style.div}>
          {word.split("").map((litera, index) => (
            <span className={style.root} key={index}>
              {litereAlese.includes(litera) ? litera : "_"}
            </span>
          ))}
        </div>
      ) : (    
        <div className={style.div}>
          {word.split("").map((litera, index) => (
            <span 
              className={style.root} 
              key={index}
              style={{
                color: litereAlese.includes(litera) ? "black" : "red"
              }}
            >
              {litera}
            </span>
          ))}
        </div>
      )}
    </>
  )
}