// import styles from "../styles/globals.css";
import Link from "next/link";
import { client } from "../../libs/client";
//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    // <div className={styles.container}>
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link legacyBehavior href={`blog/${blog.id}`}>
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
};
