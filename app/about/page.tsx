
type SkillCardProps = {
  title: string;
  icon: string;
  skills: string[];
};

function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <article className="rounded-xl bg-slate-700 p-6 text-white">
      <div className="mb-4 flex items-center gap-3">
        <span aria-hidden="true" className="text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-full bg-slate-600 px-3 py-1 text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      {/* About Me */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          My name is Obiri Bempa Asiedu. I am a Software Development
          student at Brigham Young University-Idaho with a strong
          interest in web development and computer programming.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I enjoy creating web applications, solving technical
          problems, and learning new technologies. My goal is to
          become a skilled software developer who builds useful
          and innovative digital solutions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          My technical interests include HTML, CSS, JavaScript,
          Python, Java, Node.js, React, Next.js, and database
          development.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="bg-slate-800 rounded-2xl p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          Technical Skills
        </h2>

        <div className="space-y-6">
          <SkillCard
            title="Languages"
            icon="</>"
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "Python",
              "Java",
              "C",
              "C++",
            ]}
          />

          <SkillCard
            title="Frameworks & Technologies"
            icon="⚙"
            skills={[
              "React",
              "Next.js",
              "Node.js",
              "Express",
            ]}
          />

          <SkillCard
            title="Databases & Tools"
            icon="☁"
            skills={[
              "MySQL",
              "PostgreSQL",
              "MongoDB",
              "Git",
              "GitHub",
              "VS Code",
            ]}
          />
        </div>
      </section>
    </main>
  );
}
