import Image from "next/image";
import { resume } from "@/data/resume";
import { LineIcon, SolidIcon } from "@/components/Icon";
import { SectionTitle } from "@/components/SectionTitle";
import { CopyButton } from "@/components/CopyButton";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";

export default function Home() {
  const r = resume;
  return (
    <main className="sheet">
      <aside className="side">
        <div className="photo">
          <Image src={r.photo.src} alt={r.photo.alt} width={404} height={404} priority sizes="236px" />
        </div>

        <section aria-labelledby="h-contact">
          <SectionTitle id="h-contact" icon="user" compact>Contact</SectionTitle>
          <ul className="contact">
            {r.contact.map((c) => (
              <li key={c.label}>
                <span className="ci"><SolidIcon name={c.icon} /></span>
                {c.href ? (
                  <a href={c.href} {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
                {"copy" in c && c.copy ? <CopyButton value={c.copy} label="Copy email address" /> : null}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="h-skills">
          <SectionTitle id="h-skills" icon="gear" compact>Skills</SectionTitle>
          {r.skills.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <ul className="dots">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="h-lang">
          <SectionTitle id="h-lang" icon="language" compact>Languages</SectionTitle>
          <ul className="dots langs">
            {r.languages.map((l) => (
              <li key={l.name}><span>{l.name}</span><span>({l.level})</span></li>
            ))}
          </ul>
        </section>
      </aside>

      <div className="right">
        <header className="hero">
          <h1>{r.name}</h1>
          <p className="titles">
            <span>{r.titles[0]}</span>
            <span className="bar" aria-hidden="true">|</span>
            <span>{r.titles[1]}</span>
          </p>
          <ul className="tags">{r.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <p className="intro">{r.intro}</p>
        </header>

        <div className="content">
          <section aria-labelledby="h-sum">
            <SectionTitle id="h-sum" icon="user">Professional Summary</SectionTitle>
            <p className="summary">
              {r.summary[0]}
              <br />
              {r.summary[1]}
            </p>
          </section>

          <section aria-labelledby="h-work">
            <SectionTitle id="h-work" icon="briefcase">Work Experience</SectionTitle>
            {r.experience.map((job) => (
              <article className="job" key={job.company}>
                <header>
                  <h3>{job.company}</h3>
                  <span className="when">{job.period}</span>
                  <p className="role">{job.role}</p>
                </header>
                <ul className="dots">{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </section>

          <section aria-labelledby="h-edu">
            <SectionTitle id="h-edu" icon="graduationCap">Education</SectionTitle>
            {r.education.map((e) => (
              <div className="edu" key={e.degree}>
                <h3>{e.degree}</h3>
                <span className="when">{e.period}</span>
                <p>{e.school}</p>
                <span className="gpa"><b>GPA:</b> {e.gpa}</span>
              </div>
            ))}
          </section>

          <section aria-labelledby="h-ach">
            <SectionTitle id="h-ach" icon="star">Key Achievements</SectionTitle>
            <ul className="ach">
              {r.achievements.map((a) => (
                <li key={a.icon}>
                  <span className="ai"><LineIcon name={a.icon} /></span>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <DownloadPdfButton fileName={`${r.name.replace(/\s*\(.*?\)\s*/g, " ").trim().replace(/\s+/g, "-")}-CV`} />
    </main>
  );
}
