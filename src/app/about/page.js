// app/about/page.js
"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

const milestones = [
  {
    year: "2019",
    title: "Humble Beginnings",
    description:
      "We started our journey in a small rented room with just one camera and two passionate photographers.",
    image: "/main-2.jpg",
  },
  {
    year: "2021",
    title: "First Studio Space",
    description:
      "We moved into our first official studio, built a small creative team, and expanded our services.",
    image: "/main-2.jpg",
  },
  {
    year: "2023",
    title: "Modern Creative Hub",
    description:
      "Our current office reflects our growth – a modern space where creativity and technology come together.",
    image: "/main-2.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <main className="min-h-screen bg-gray-50 py-16 px-6">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Our Journey
          </h1>
          <p className="text-lg text-gray-600">
            From a single room to a modern creative studio – here’s how we
            evolved year by year.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="relative max-w-5xl mx-auto">
          {/* Center Line for Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 rounded-full hidden md:block" />

          <div className="space-y-16">
            {milestones.map((item, index) => (
              <div
                key={item.year}
                className={`md:flex md:items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
                  <span className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">
                    {item.year}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-3">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
