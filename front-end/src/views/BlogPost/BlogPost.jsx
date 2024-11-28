import { useParams } from "react-router-dom";
import { BLOG } from "../../constants/blog";
import { CenteredContent } from "../../components/CenteredContent/CenteredContent";
import { H1 } from "../../components/H1/H1";
import { Layout } from "../../components/Layout/Layout";
import styles from "./BlogPost.module.css";

export function BlogPost() {
  const singlePostPath = useParams();
  const post = BLOG.find((item) => item.path === singlePostPath.postId);

  if (!post) {
    return <div>Post nie został znaleziony</div>;
  }

  return (
    <Layout>
      <CenteredContent>
        <div className={styles.top}>
          <H1 text={post.postName}></H1>
          <div className={styles.wrapperDate}>
            <p>{post.data}</p>
            <span className={styles.point}>•</span>
            <p>{post.postAuthor}</p>
          </div>
        </div>
        <div className={styles.wrapperAll}>
          <div className={styles.singlePost}>
            <div className={styles.wrapper}>
              <img className={styles.img} src={post.postImage} />
              <span className={styles.category}>{post.category}</span>
            </div>
          </div>
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
      </CenteredContent>
    </Layout>
  );
}
