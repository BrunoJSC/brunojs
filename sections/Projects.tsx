import { Card } from "@/components/Card";
import { data } from "@/data";

export function Project() {
  return (
    <section id="projects" className="w-full min-h-screen mt-5">
      <h3 className="font-kalam text-[16px] text-primary text-center">
        Projects
      </h3>

      <p className="text-[24px] lg:text-[32px] font-bold mt-4 text-center">
        Take a look at my highlighted projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {data.map((project) => (
          <Card
            key={project.id}
            date={project.date}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
