// app/about/page.js  (for Next.js App Router)
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function AboutPage() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-black-50">
        <section className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to <span className="font-semibold">Our Company</span>! We
            are passionate about creating digital solutions that make life
            easier and businesses grow faster.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Our team of developers, designers, and innovators work together to
            deliver high-quality products tailored to your needs.
          </p>
          <p className="text-lg text-gray-600">
            At the heart of our mission is a simple idea: build with creativity,
            scale with technology, and support with care.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
