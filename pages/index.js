import Head from "next/head";
import { getAllPosts } from "../lib/data";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <div className="space-y-4">
        {posts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content }) {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded-md p-4 transition duration-200 ease-in">
      <div>
        <Link
          className="text-blue-600 hover:text-blue-500"
          href={`/blog/${slug}`}
        >
          {title}
        </Link>
      </div>
      <div className="text-gray-600 text-xs">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content.substr(0, 300)}</div>
    </div>
  );
}
