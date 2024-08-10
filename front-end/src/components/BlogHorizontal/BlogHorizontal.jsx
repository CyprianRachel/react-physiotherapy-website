import { Link } from "react-router-dom";
import { BLOG } from "../../constants/blog";
import styles from "./BlogHorizontal.module.css";
import { scrollToTop } from "../../hooks/scrollToTop";

export function BlogHorizontal() {
  return (
    <>
      <h2 className={styles.h2}>Blog</h2>
      <div className={styles.wrapperAll}>
        {BLOG.map((e) => (
          <Link onClick={scrollToTop} to={`/blog/${e.id}`} key={e.id}>
            <div className={styles.singlePost}>
              <div className={styles.wrapper}>
                <img className={styles.img} src={e.postImage} />
                <span className={styles.category}>{e.category}</span>
              </div>
              <h3 className={styles.h3}>{e.postName}</h3>
              <div className={styles.wrapperDate}>
                <p>{e.data}</p>
                <span className={styles.point}>•</span>
                <p>{e.postAuthor}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
