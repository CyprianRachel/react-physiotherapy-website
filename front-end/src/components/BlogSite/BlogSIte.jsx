import { Link } from "react-router-dom";
import { BLOG } from "../../constants/blog";
import styles from "./BlogSite.module.css";

export function BlogSite() {
  return (
    <div className={styles.wrapperAll}>
      {BLOG.map((e) => (
        <Link to={`/blog/${e.id}`} key={e.id}>
          <div className={styles.singlePost}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={e.postImage} />
              <span className={styles.category}>{e.category}</span>
            </div>
            <h2 className={styles.h2}>{e.postName}</h2>
            <div className={styles.wrapperDate}>
              <p>{e.data}</p>
              <span className={styles.point}>•</span>
              <p>{e.postAuthor}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
