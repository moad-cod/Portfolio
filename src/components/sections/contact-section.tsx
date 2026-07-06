import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { profile } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section className="section-band pb-28" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mx-auto">Get In Touch</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="glass-card">
            <h3 className="text-3xl font-bold text-cream">Get In Touch</h3>
            <p className="mt-5 leading-7 text-muted">
              Ready to start a conversation? I&apos;m always open to discussing
              new opportunities, creative projects, data platforms, AI systems,
              and innovative ideas.
            </p>
            <div className="mt-8 grid gap-4 text-muted">
              <p>
                <span className="text-amber">Location:</span> {profile.location}
              </p>
              <p>
                <span className="text-amber">Phone:</span> {profile.phone}
              </p>
              <p>
                <span className="text-amber">Email:</span>{" "}
                <a className="hover:text-amber" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>
            <a className="button-primary mt-9" href={`mailto:${profile.email}`}>
              Let&apos;s connect
            </a>
          </Reveal>

          <Reveal className="glass-card" delay={0.1}>
            <h3 className="text-3xl font-bold text-cream">Contact Me</h3>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
