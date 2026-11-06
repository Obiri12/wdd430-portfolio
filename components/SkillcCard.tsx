interface SkillCardProps {
  title: string;
  skills: string[];
  description: string;
}

export default function SkillCard({
  title,
  skills,
  description,
}: SkillCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}