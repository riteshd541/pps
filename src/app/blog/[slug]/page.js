import blogs from "../../blog/blogsData";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export async function generateMetadata({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found | RDigitalCraft",
      description: "The blog you are looking for does not exist.",
    };
  }
  return {
    title: `${blog.title} | Photography Blog`,
    description: blog.description,
  };
}

export default function BlogDetail({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center py-10">❌ Blog not found!</p>;

  return (
    <>
      <Header backgroundColor="bg-black" />
      <div className="max-w-6xl container mx-auto px-6 py-10 mt-16">
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 text-sm mb-6">{blog.date}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded mb-6 w-full max-h-[500px] object-cover"
        />
        <div
          className="prose prose-lg max-w-none prose-headings:mt-6 prose-headings:mb-4 prose-p:my-4 prose-ul:my-4 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
      <Footer />
    </>
  );
}
