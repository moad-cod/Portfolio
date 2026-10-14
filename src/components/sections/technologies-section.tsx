import { Reveal } from "@/components/animations/reveal";

const skillGroups = [
  { name: "Data Engineering", href: "#project-operational-intelligence", skills: ["Python", "SQL", "Apache Airflow", "dbt", "ETL / ELT", "PostgreSQL"], detail: "PySpark, Apache Spark, Hadoop, MinIO, Medallion Architecture" },
  { name: "Python Backend", href: "#project-ccsr", skills: ["FastAPI", "REST APIs", "Celery", "Redis", "PostgreSQL", "Docker", "SSE"], detail: "Java, Spring Boot, MySQL, authentication, audit logging" },
  { name: "AI & Machine Learning", href: "#project-qwen-medquad", skills: ["PyTorch", "QLoRA", "RAG", "Scikit-learn", "XGBoost", "Model evaluation"], detail: "Qwen3, BM25, Qdrant, FAISS, hybrid retrieval, Pandas, NumPy" },
];

export function TechnologiesSection() {
  return (
    <section className="section-band" id="technologies">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="section-eyebrow">Capabilities</p>
          <h2 className="section-title">Skills in practice</h2>
          <p className="section-copy mt-5">Explore the tools through the projects where I have used them.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal className="glass-card" key={group.name}>
              <h3 className="text-2xl font-bold text-cream">{group.name}</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => <li className="rounded-md border border-border px-3 py-2 text-sm text-muted" key={skill}>{skill}</li>)}
              </ul>
              <details className="mt-6 text-sm text-muted">
                <summary className="cursor-pointer font-semibold text-amber">More tools</summary>
                <p className="mt-3 leading-6">{group.detail}</p>
              </details>
              <a className="mt-6 inline-block text-sm font-semibold text-amber underline underline-offset-4" href={group.href}>See related project</a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
