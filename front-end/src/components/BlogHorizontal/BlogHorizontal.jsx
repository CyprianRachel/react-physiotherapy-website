import React from "react";
import { Link } from "react-router-dom";
import { BLOG } from "../../constants/blog";
import styles from "./BlogHorizontal.module.css";
import { scrollToTop } from "../../hooks/scrollToTop";
import { CenteredContent } from "../CenteredContent/CenteredContent";

export function BlogHorizontal({ postId }) {
  // Jeśli postId jest przekazane, filtrujemy posty; w przeciwnym razie zwracamy wszystkie posty
  const filteredPosts = postId
    ? BLOG.filter((post) => post.postId == postId)
    : BLOG;

  return (
    <CenteredContent>
      <h2 className={styles.h2}>Blog</h2>
      <div className={styles.wrapperAll}>
        {filteredPosts.map((post) => (
          <Link onClick={scrollToTop} to={`/blog/${post.id}`} key={post.id}>
            <div className={styles.singlePost}>
              <div className={styles.wrapper}>
                <img
                  className={styles.img}
                  src={post.postImage}
                  alt={post.postName}
                />
                <span className={styles.category}>{post.category}</span>
              </div>
              <h3 className={styles.h3}>{post.postName}</h3>
              <div className={styles.wrapperDate}>
                <p>{post.data}</p>
                <span className={styles.point}>•</span>
                <p>{post.postAuthor}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </CenteredContent>
  );
}
