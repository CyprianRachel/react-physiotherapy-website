import { BLOG } from "../../constants/blog";
import styles from "./BlogSite.module.css";

export function BlogSite() {
  return (
    <div className={styles.wrapperAll}>
      {BLOG.map((e) => (
        <div className={styles.singlePost} key={e.id}>
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
      ))}
    </div>
  );
}
