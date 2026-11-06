
import ProjectList from "../components/ProjectList";

const projects = [
  {
    title: "Local Volunteer Opportunities",
    description:
      "A web application designed to help users discover local volunteering opportunities. It connects people with community service activities and makes it easier to find ways to contribute to their communities.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Mapbox"],
    link: "https://github.com/Obiri12/Local-Volunteer-Opportunities",
  },
  {
    title: "CSE 340 Service Network",
    description:
      "A full-stack web application that connects organizations with community service projects. Users can explore organizations, browse projects, and manage volunteer activities.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/Obiri12/cse340-course",
  },
  {
    title: "Accra Chamber of Commerce Website",
    description:
      "A responsive website designed to showcase local businesses, provide community information, and help visitors discover business opportunities in Accra.",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    link: "https://github.com/Obiri12/wdd230",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Hello, I'm Obiri Bempa Asiedu
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am a Software Development student at BYU-Idaho
          with an interest in web development and programming.
          I enjoy building practical applications and
          continuously developing my technical skills.
        </p>
      </section>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
