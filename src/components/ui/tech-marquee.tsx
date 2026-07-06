import type { IconType } from "react-icons";
import {
  SiApacheairflow,
  SiApachehadoop,
  SiApachehbase,
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiFastapi,
  SiGit,
  SiLinux,
  SiMeta,
  SiMysql,
  SiNextdotjs,
  SiNumpy,
  SiOpencv,
  SiOpenjdk,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiQdrant,
  SiRedis,
  SiScikitlearn,
} from "react-icons/si";

import { cn } from "@/lib/cn";

type TechnologyIcon = {
  name: string;
  icon: IconType;
  color: string;
};

const technologies: TechnologyIcon[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "SQL / PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
  { name: "Apache Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
  { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "dbt", icon: SiDatabricks, color: "#FF694B" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "HBase", icon: SiApachehbase, color: "#BE160C" },
  { name: "Qdrant", icon: SiQdrant, color: "#DC244C" },
  { name: "FAISS", icon: SiMeta, color: "#C67424" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Next.js", icon: SiNextdotjs, color: "#EADFCD" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "XGBoost", icon: SiDatabricks, color: "#E18B29" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
];

function TechCard({ technology }: { technology: TechnologyIcon }) {
  const Icon = technology.icon;

  return (
    <li className="tech-marquee-card">
      <Icon
        aria-hidden="true"
        className="tech-marquee-icon"
        style={{ color: technology.color }}
      />
      <span>{technology.name}</span>
    </li>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  slow = false,
}: {
  items: TechnologyIcon[];
  reverse?: boolean;
  slow?: boolean;
}) {
  return (
    <div
      className={cn(
        "tech-marquee-row",
        reverse && "tech-marquee-row-reverse",
        slow && "tech-marquee-row-slow",
      )}
    >
      {[...items, ...items].map((technology, index) => (
        <TechCard key={`${technology.name}-${index}`} technology={technology} />
      ))}
    </div>
  );
}

export function TechMarquee() {
  const firstRow = technologies.slice(0, 12);
  const secondRow = technologies.slice(12);

  return (
    <div className="tech-marquee" aria-label="Technology stack logo marquee">
      <MarqueeRow items={firstRow} />
      <MarqueeRow items={secondRow} reverse slow />
    </div>
  );
}
