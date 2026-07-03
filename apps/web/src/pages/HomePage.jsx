import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HeartPulse, Stethoscope, Baby, Heart, Bone, Brain, Droplets, Droplet,
  PersonStanding, Scissors, Slice, Radiation, Dna, Bandage, House, Ribbon,
  Phone, MapPin, Clock, ArrowRight, ShieldCheck, Users, Award, CheckCircle2,
  ChevronDown, Building2, ClipboardCheck, Microscope, GraduationCap, Settings2,
  BookOpen, Quote, Landmark, HeartHandshake,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { services, categories } from '@/data/services';
import { projects } from '@/data/projects';

const iconMap = {
  HeartPulse, Stethoscope, Baby, Heart, Bone, Brain, Droplets, Droplet,
  PersonStanding, Scissors, Slice, Radiation, Dna, Bandage, House, Ribbon,
  Landmark,
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?w=1344&h=768&fit=crop&q=80';

/* ---------------- Hero ---------------- */
function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl opacity-70 animate-floaty" />
      <div className="mx-auto max-w-[80rem] px-5 grid lg:grid-cols-2 gap-12 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            <ShieldCheck className="h-4 w-4" /> {t.hero.badge}
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
            {t.hero.titleLine1}<br /> {t.hero.titlePre} <span className="text-primary">{t.hero.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servicios" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground hover:brightness-110 transition active:scale-[0.98]">
              {t.hero.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-bold hover:border-primary transition">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {t.hero.stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-bold text-primary">{n}</div>
                <div className="text-sm text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20">
            <img src={HERO_IMAGE} alt={t.hero.imgAlt} className="w-full h-[440px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 sm:left-6 bg-card rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-xl bg-secondary text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <div className="font-bold text-sm">{t.hero.cardTitle}</div>
              <div className="text-xs text-muted-foreground">{t.hero.cardText}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const { t } = useLanguage();
  const loop = [...t.marquee, ...t.marquee];
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-primary-foreground/90 font-semibold text-sm uppercase tracking-wider">
            {w} <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Consorcio ---------------- */
function Consorcio() {
  const { t } = useLanguage();
  const pilarIcons = [Stethoscope, Building2, ClipboardCheck, Microscope, GraduationCap, Settings2, BookOpen];
  return (
    <section id="consorcio" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.consorcio.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.consorcio.title}</h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{t.consorcio.p1}</p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{t.consorcio.p2}</p>
        </div>
        <div className="flex flex-wrap gap-3 content-start lg:pt-2">
          {t.consorcio.pilares.map((label, i) => {
            const Icon = pilarIcons[i];
            return (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold">
                <Icon className="h-4 w-4 text-primary shrink-0" /> {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- A quién servimos ---------------- */
function AQuienServimos() {
  const { t } = useLanguage();
  const icons = [Landmark, Building2, ShieldCheck, HeartHandshake];
  return (
    <section className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.aQuienServimos.eyebrow}</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.aQuienServimos.title}</h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.aQuienServimos.items.map((it, i) => {
          const Icon = icons[i];
          return (
            <div key={it.title} className="rounded-3xl border border-border bg-card p-7">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary text-primary">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Philosophy ---------------- */
function Philosophy() {
  const { t } = useLanguage();
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Quote className="mx-auto h-9 w-9 text-primary-foreground/50" />
        <p className="mt-6 font-display text-2xl sm:text-3xl font-bold text-primary-foreground leading-snug">{t.philosophy.quote}</p>
        <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">{t.philosophy.text}</p>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function ServiceCard({ s, i, lang, t }) {
  const Icon = iconMap[s.icon] || HeartPulse;
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
      className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img src={s.image} alt={s.name[lang]} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">
          {categories.find((c) => c.id === s.category)?.[lang]}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary shrink-0">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <h3 className="font-display text-lg font-bold leading-tight">{s.name[lang]}</h3>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.description[lang]}</p>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-secondary/60 px-4 py-2.5 text-sm font-bold text-secondary-foreground hover:bg-secondary transition"
        >
          <span>{s.subservices[lang].length} {t.services.subserviceSuffix}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {s.subservices[lang].map((sub) => (
              <li key={sub} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {sub}
              </li>
            ))}
          </ul>
        </motion.div>

        <a href="#contacto" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
          {t.services.requestInfo} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function Services() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('todos');
  const list = filter === 'todos' ? services : services.filter((s) => s.category === filter);
  return (
    <section id="servicios" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.services.eyebrow}</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.services.title}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t.services.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              filter === c.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {c[lang]}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">{t.services.emptyMsg}</p>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {list.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} lang={lang} t={t} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------- Why us ---------------- */
function WhyUs() {
  const { t } = useLanguage();
  const icons = [Award, ShieldCheck, Users, Clock];
  return (
    <section id="nosotros" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-[80rem] px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.whyUs.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.whyUs.title}</h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyUs.items.map((it, i) => {
            const Icon = icons[i];
            return (
              <div key={it.title} className="rounded-3xl bg-card border border-border p-7">
                <span className="grid place-items-center h-12 w-12 rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Proyectos ---------------- */
function ProjectCard({ p, lang, t }) {
  const Icon = iconMap[p.icon] || HeartPulse;
  return (
    <div className="flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
      <div className="relative h-44 overflow-hidden">
        <img src={p.image} alt={p.title[lang]} className="h-full w-full object-cover" />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">{p.country[lang]}</span>
      </div>
      <div className="flex flex-col flex-1 p-7">
        <span className="grid place-items-center h-11 w-11 rounded-2xl bg-secondary text-primary">
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <h3 className="mt-4 font-display text-lg font-bold leading-tight">{p.title[lang]}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.summary[lang]}</p>
        <Link
          to={`/proyectos/${p.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-3 transition-all"
        >
          {t.proyectos.viewProject} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function Proyectos() {
  const { lang, t } = useLanguage();
  return (
    <section id="proyectos" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.proyectos.eyebrow}</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.proyectos.title}</h2>
        <p className="mt-4 text-muted-foreground text-lg">{t.proyectos.subtitle}</p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} lang={lang} t={t} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const { lang, t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [who, setWho] = useState(t.contact.whoOptions[0].value);
  const isPatient = who === 'paciente';

  return (
    <section id="contacto" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">{t.contact.eyebrow}</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">{t.contact.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">{t.contact.subtitle}</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><Phone className="h-5 w-5" /></span> {t.contact.phone}</li>
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span> {t.contact.address}</li>
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><Clock className="h-5 w-5" /></span> {t.contact.hours}</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-primary/5">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold">{t.contact.thanksTitle}</h3>
              <p className="mt-2 text-muted-foreground">{t.contact.thanksText}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">{t.contact.formWho}</label>
                <select
                  value={who}
                  onChange={(e) => setWho(e.target.value)}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                >
                  {t.contact.whoOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              {[
                [t.contact.formName, 'text', t.contact.formNamePh],
                [t.contact.formEmail, 'email', t.contact.formEmailPh],
                [t.contact.formPhone, 'tel', t.contact.formPhonePh],
              ].map(([label, type, ph]) => (
                <div key={label} className="flex flex-col gap-2">
                  <label className="text-sm font-bold">{label}</label>
                  <input required type={type} placeholder={ph} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">{isPatient ? t.contact.formService : t.contact.formOrg}</label>
                {isPatient ? (
                  <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                    {services.map((s) => <option key={s.id}>{s.name[lang]}</option>)}
                  </select>
                ) : (
                  <input type="text" placeholder={t.contact.formOrgPh} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                )}
              </div>
              <button type="submit" className="w-full rounded-full bg-primary py-3.5 font-bold text-primary-foreground hover:brightness-110 transition active:scale-[0.99]">
                {t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const HomePage = () => (
  <div className="bg-background text-foreground">
    <Header />
    <main>
      <Hero />
      <Marquee />
      <Consorcio />
      <Services />
      <AQuienServimos />
      <Philosophy />
      <WhyUs />
      <Proyectos />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default HomePage;
