import Styles from './index.module.css'
function Author( { author , img }) {
    return(
        <div className={Styles.author}>
        <div >
          <img
            className={Styles.author_img}
            src={"/img/blog/username.png"}
            alt=""
          />
        </div>
        <div className={Styles.author_name}>
          <p>{author}</p>
        </div>
      </div>
    )
}
export default Author;