import type { IconType } from "react-icons";
import { SiApacheairflow, SiApachespark, SiDocker, SiFastapi, SiPostgresql, SiPython, SiPytorch, SiQdrant } from "react-icons/si";
import { priorityTechnologies } from "@/lib/portfolio-data";

const icons: Record<string, IconType> = {
  Python: SiPython, "Apache Airflow": SiApacheairflow,
  "Apache Spark": SiApachespark, FastAPI: SiFastapi, PostgreSQL: SiPostgresql,
  Qdrant: SiQdrant, Docker: SiDocker, PyTorch: SiPytorch,
};

export function TechMarquee() {
  return (
    <div className="tech-marquee" tabIndex={0} role="region" aria-label="Core technologies">
      <div className="tech-marquee-row">
        {[0, 1].map((copy) => (
          <ul className="flex gap-4" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {priorityTechnologies.map((name) => {
              const Icon = icons[name];
              return <li className="tech-marquee-card" key={name}>
                {Icon ? <Icon aria-hidden="true" className="tech-marquee-icon text-amber" /> : <span aria-hidden="true" className="font-mono text-amber">{name === "dbt" ? "dbt" : "QL"}</span>}
                <span>{name}</span>
              </li>;
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
