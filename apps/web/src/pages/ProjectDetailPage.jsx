import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartPulse, Stethoscope, Radiation, Landmark, ArrowLeft, ArrowRight, CheckCircle2,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { projects } from '@/data/projects';

const iconMap = { HeartPulse, Stethoscope, Radiation, Landmark };

function NotFound({ t }) {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="min-h-[70dvh] flex items-center justify-center pt-16">
        <div className="text-center px-5">
          <h1 className="font-display text-3xl font-bold">{t.projectDetail.notFoundTitle}</h1>
          <p className="mt-3 text-muted-foreground">{t.projectDetail.notFoundText}</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> {t.projectDetail.notFoundBack}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function SectionBlock({ block, lang }) {
  const heading = block.heading?.[lang] || block.heading?.es;
  if (block.type === 'list') {
    return (
      <div className="mt-12">
        {heading && <h2 className="font-display text-2xl font-bold tracking-tight">{heading}</h2>}
        <ul className="mt-5 grid sm:grid-cols-2 gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 rounded-2xl border border-border bg-card p-4 text-sm text-foreground/85">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {item[lang] || item.es}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="mt-12">
      {heading && <h2 className="font-display text-2xl font-bold tracking-tight">{heading}</h2>}
      <div className="mt-4 space-y-4">
        {block.items.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p[lang] || p.es}</p>
        ))}
      </div>
    </div>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound t={t} />;

  const Icon = iconMap[project.icon] || Landmark;
  const detail = project.detail[lang] || project.detail.es;

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <section className="relative h-[46vh] min-h-[320px] overflow-hidden">
          <img src={project.image} alt={project.title[lang]} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </section>

        <div className="mx-auto max-w-4xl px-5 -mt-16 relative pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-8 shadow-xl"
          >
            <Link to="/#proyectos" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary">
              <ArrowLeft className="h-4 w-4" /> {t.projectDetail.back}
            </Link>

            <div className="mt-4 flex items-center gap-3">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary text-primary shrink-0">
                <Icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{project.country[lang]}</span>
                <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight leading-tight">{project.title[lang]}</h1>
              </div>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-secondary-foreground">
              {t.projectDetail.status}: {project.status[lang]}
            </div>

            <div className="mt-6 space-y-4">
              {detail.intro.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
              ))}
            </div>

            {detail.sections.map((block, i) => (
              <SectionBlock key={i} block={block} lang={lang} />
            ))}

            {project.gallery?.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold tracking-tight">{t.projectDetail.gallery}</h2>
                <div className="mt-5 grid sm:grid-cols-3 gap-4">
                  {project.gallery.map((src, i) => (
                    <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl">
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Link
              to="/#contacto"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground hover:brightness-110 transition active:scale-[0.98]"
            >
              {t.projectDetail.contactCta} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectDetailPage;
