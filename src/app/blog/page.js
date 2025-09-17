import Link from "next/link";
import blogs from "./blogsData";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Photography Blogs | RDigitalCraft",
  description:
    "Explore blogs on wedding photography, videography, and tips to choose the best photographer in Lucknow.",
};

export default function BlogPage() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <div className="max-w-6xl container mx-auto px-6 py-10 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Photography Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.slug}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded mb-4 w-full h-60 object-cover"
              />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{blog.date}</p>
              <p className="mt-2">{blog.description}</p>
              <Link href={`/blog/${blog.slug}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
