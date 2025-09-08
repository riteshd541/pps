"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";

const milestones = [
  {
    year: "2015",
    title: "Sulok & Alok begin their filmmaking dream",
    description: "Passionate about storytelling and capturing moments",
    image: "/about/2015.jpg",
  },
  {
    year: "2016",
    title: "First office established",
    description:
      "Shailendra working in bob joins Our team. We Focus on song productions and fashion shoots",
    image: "/about/2016.jpg",
  },
  {
    year: "2017",
    title:
      "We moved to Mumbai — Alok began his journey as an Assistant Director, while I stepped in as a DOP Assistant",
    description:
      "Gained hands-on experience in the heart of the film industry. Learned new skills, Overcame challenges, Discovered the magic behind the lens",
    image: "/about/2017.jpg",
  },
  {
    year: "2019",
    title:
      "In 2019 , we came back from Mumbai with 1 year good experience in film making",
    description:
      "Nitesh, Himanshu, and Divyanshu joined the team, bringing fresh energy and perspective to the group. Young & versatile : focus on films and wedding photography . Creating lasting memories through lenses.",
    image: "/about/2019.jpg",
  },
  {
    year: "2020",
    title: " Second office set up at Alok’s home",
    description: " A space filled with dreams and creativity",
    image: "/about/2020.jpg",
  },
  {
    year: "2022",
    title: " Dream office set up at Alok’s home",
    description:
      "2022, fueled by hard work and support, we made a bold investment and launched our innovative third workspace.",
    image: "/about/2022.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header backgroundColor="bg-black" />
      <main className="min-h-screen bg-gray-50 py-16 px-6 mt-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Journey of Picture Perfect Studio
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
            {milestones.map((item, index) => {
              // Split description into bullet points
              const points = item.description
                .split(".")
                .map((point) => point.trim())
                .filter((point) => point.length > 0);

              return (
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
                    <span className="text-sm uppercase tracking-widest text-indigo-600 font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      {item.title}
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                      {points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <hr className="block md:hidden border-t-2 border-gray-300 my-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center mt-16">
          2024 -Today: Team of 30+ members
        </h1>
      </main>
      <Footer />
    </>
  );
}
