import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse, Stethoscope, Baby, Heart, Bone, Brain, Droplets, Droplet,
  PersonStanding, Scissors, Slice, Radiation, Dna, Bandage, House, Ribbon,
  Phone, MapPin, Clock, ArrowRight, ShieldCheck, Users, Award, CheckCircle2, Menu, X,
  ChevronDown, Building2, ClipboardCheck, Microscope, GraduationCap, Settings2,
  BookOpen, Quote, Landmark, HeartHandshake,
} from 'lucide-react';
import { services, categories } from '@/data/services';

const iconMap = {
  HeartPulse, Stethoscope, Baby, Heart, Bone, Brain, Droplets, Droplet,
  PersonStanding, Scissors, Slice, Radiation, Dna, Bandage, House, Ribbon,
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?w=1344&h=768&fit=crop&q=80';

const nav = [
  { label: 'Quiénes somos', href: '#consorcio' },
  { label: 'Especialidades', href: '#servicios' },
  { label: 'Por qué elegirnos', href: '#nosotros' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

/* ---------------- Header ---------------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[80rem] px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold leading-none tracking-tight">
            Health Services <span className="text-primary">One</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary transition-colors">{n.label}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:brightness-95 transition">
          <Phone className="h-4 w-4" /> Pedir cita
        </a>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-4 text-sm font-semibold">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground">{n.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground">
            <Phone className="h-4 w-4" /> Pedir cita
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl opacity-70 animate-floaty" />
      <div className="mx-auto max-w-[80rem] px-5 grid lg:grid-cols-2 gap-12 items-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
            <ShieldCheck className="h-4 w-4" /> Consorcio internacional de salud
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
            Tu salud,<br /> nuestro <span className="text-primary">compromiso</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Un consorcio internacional de organizaciones de salud, especialistas médicos
            y expertos en gestión hospitalaria, unidos por la excelencia clínica y el
            cuidado centrado en el paciente.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#servicios" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground hover:brightness-110 transition active:scale-[0.98]">
              Explorar servicios <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-bold hover:border-primary transition">
              Contactar
            </a>
          </div>
          <div className="mt-10 flex gap-8">
            {[['15', 'Especialidades'], ['90+', 'Subservicios'], ['24/7', 'Atención']].map(([n, l]) => (
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
            <img src={HERO_IMAGE} alt="Recepción de clínica moderna Health Services One" className="w-full h-[440px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 sm:left-6 bg-card rounded-2xl border border-border shadow-xl p-4 flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-xl bg-secondary text-primary">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <div className="font-bold text-sm">Personal certificado</div>
              <div className="text-xs text-muted-foreground">Profesionales acreditados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */
function Marquee() {
  const words = ['Neurocirugía', 'Oncología', 'Cirugía Cardiovascular', 'Trasplantes', 'Radioterapia', 'Cirugía de Columna', 'Nefrología', 'Atención Domiciliaria'];
  const loop = [...words, ...words];
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
  const pilares = [
    { icon: Stethoscope, label: 'Atención médica especializada' },
    { icon: Building2, label: 'Gestión hospitalaria' },
    { icon: ClipboardCheck, label: 'Auditoría clínica y de calidad' },
    { icon: Microscope, label: 'Tecnología biomédica' },
    { icon: GraduationCap, label: 'Desarrollo de talento humano' },
    { icon: Settings2, label: 'Optimización operativa' },
    { icon: BookOpen, label: 'Transferencia de conocimiento' },
  ];
  return (
    <section id="consorcio" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Quiénes somos</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Un consorcio internacional al servicio de la salud
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Health Services One reúne a organizaciones de salud, especialistas médicos,
            expertos en gestión hospitalaria, auditores clínicos, socios de tecnología
            biomédica y profesionales multidisciplinarios, unidos por la excelencia
            clínica, el cuidado centrado en el paciente y la innovación continua.
          </p>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Integramos experiencia médica, operación hospitalaria, gobernanza clínica,
            auditoría y gestión estratégica en una sola plataforma institucional, para
            ofrecer a gobiernos, instituciones de salud, aseguradoras y pacientes
            soluciones coordinadas, sostenibles y de alta calidad.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 content-start lg:pt-2">
          {pilares.map((p) => (
            <span key={p.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold">
              <p.icon className="h-4 w-4 text-primary shrink-0" /> {p.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- A quién servimos ---------------- */
function AQuienServimos() {
  const items = [
    { icon: Landmark, title: 'Gobiernos', text: 'Apoyo estratégico para fortalecer sistemas nacionales de salud.' },
    { icon: Building2, title: 'Hospitales e instituciones', text: 'Gestión, auditoría y optimización operativa para centros públicos y privados.' },
    { icon: ShieldCheck, title: 'Aseguradoras', text: 'Coordinación de redes de atención y gestión de calidad asistencial.' },
    { icon: HeartHandshake, title: 'Pacientes', text: 'Atención médica especializada, humana y centrada en cada persona.' },
  ];
  return (
    <section className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">A quién servimos</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Soluciones para cada actor del sistema de salud
        </h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-3xl border border-border bg-card p-7">
            <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary text-primary">
              <it.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Philosophy ---------------- */
function Philosophy() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Quote className="mx-auto h-9 w-9 text-primary-foreground/50" />
        <p className="mt-6 font-display text-2xl sm:text-3xl font-bold text-primary-foreground leading-snug">
          La calidad sin compasión está incompleta. La compasión sin calidad es insuficiente.
        </p>
        <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Nuestra cultura institucional integra la excelencia científica y la calidez
          humana, para que cada paciente reciba no solo el cuidado médico más adecuado,
          sino también un trato respetuoso, empático y compasivo en cada etapa de su
          proceso de salud.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function ServiceCard({ s, i }) {
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
        <img src={s.image} alt={s.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-primary">{s.category}</span>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary shrink-0">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <h3 className="font-display text-lg font-bold leading-tight">{s.name}</h3>
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.description}</p>

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="mt-5 flex items-center justify-between gap-2 rounded-xl bg-secondary/60 px-4 py-2.5 text-sm font-bold text-secondary-foreground hover:bg-secondary transition"
        >
          <span>{s.subservices.length} subespecialidades</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {s.subservices.map((sub) => (
              <li key={sub} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {sub}
              </li>
            ))}
          </ul>
        </motion.div>

        <a href="#contacto" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all">
          Solicitar información <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function Services() {
  const [filter, setFilter] = useState('Todos');
  const list = filter === 'Todos' ? services : services.filter((s) => s.category === filter);
  return (
    <section id="servicios" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Catálogo</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Especialidades de alta complejidad
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Filtra por área clínica y descubre nuestra capacidad técnica en cada especialidad.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2 text-sm font-bold transition ${
              filter === c
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">No hay servicios en esta categoría.</p>
      ) : (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {list.map((s, i) => (
            <ServiceCard key={s.id} s={s} i={i} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------- Why us ---------------- */
function WhyUs() {
  const items = [
    { icon: Award, title: 'Profesionales acreditados', text: 'Médicos y especialistas con amplia experiencia y certificaciones vigentes.' },
    { icon: ShieldCheck, title: 'Tecnología moderna', text: 'Equipos de diagnóstico de última generación para resultados precisos.' },
    { icon: Users, title: 'Atención cercana', text: 'Trato humano y personalizado en cada etapa de tu cuidado.' },
    { icon: Clock, title: 'Disponibilidad 24/7', text: 'Servicios de urgencia y agendamiento flexible todos los días.' },
  ];
  return (
    <section id="nosotros" className="bg-secondary/50 py-24">
      <div className="mx-auto max-w-[80rem] px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Por qué elegirnos</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Cuidado en el que puedes confiar
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-card border border-border p-7">
              <span className="grid place-items-center h-12 w-12 rounded-2xl bg-primary text-primary-foreground">
                <it.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Proyectos ---------------- */
function Proyectos() {
  const proyectos = [
    {
      title: 'Ampliación de Unidad de Cuidados Intensivos',
      text: 'Incorporación de 12 nuevas camas críticas equipadas con monitoreo avanzado y soporte vital.',
      icon: HeartPulse,
    },
    {
      title: 'Centro de Diagnóstico por Imágenes',
      text: 'Puesta en marcha de resonancia magnética 3T y tomografía de última generación.',
      icon: Radiation,
    },
    {
      title: 'Programa de Telemedicina',
      text: 'Consultas remotas y seguimiento de pacientes crónicos desde cualquier lugar.',
      icon: Stethoscope,
    },
  ];
  return (
    <section id="proyectos" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="max-w-2xl">
        <span className="text-sm font-bold uppercase tracking-wider text-primary">Proyectos</span>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
          Iniciativas en desarrollo
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Seguimos invirtiendo en infraestructura y tecnología para mejorar la atención de nuestros pacientes.
        </p>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((p) => (
          <div key={p.title} className="rounded-3xl bg-card border border-border p-7">
            <span className="grid place-items-center h-12 w-12 rounded-2xl bg-secondary text-primary">
              <p.icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="mx-auto max-w-[80rem] px-5 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Contacto</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Agenda tu cita hoy
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">
            Ya seas paciente, institución de salud o aliado estratégico, completa el
            formulario o comunícate directamente. Nuestro equipo te responderá a la brevedad.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><Phone className="h-5 w-5" /></span> +34 900 123 456</li>
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><MapPin className="h-5 w-5" /></span> Av. de la Salud 24, Madrid</li>
            <li className="flex items-center gap-3"><span className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-primary"><Clock className="h-5 w-5" /></span> Lun – Dom, 8:00 – 22:00</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-lg shadow-primary/5">
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-bold">¡Gracias!</h3>
              <p className="mt-2 text-muted-foreground">Hemos recibido tu solicitud. Te contactaremos pronto.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
              {[['Nombre completo', 'text', 'Tu nombre'], ['Correo electrónico', 'email', 'tucorreo@ejemplo.com'], ['Teléfono', 'tel', '+34 600 000 000']].map(([label, type, ph]) => (
                <div key={label} className="flex flex-col gap-2">
                  <label className="text-sm font-bold">{label}</label>
                  <input required type={type} placeholder={ph} className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Servicio de interés</label>
                <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                  {services.map((s) => <option key={s.id}>{s.name}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full rounded-full bg-primary py-3.5 font-bold text-primary-foreground hover:brightness-110 transition active:scale-[0.99]">
                Solicitar cita
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[80rem] px-5 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">Health Services One</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Consorcio internacional de organizaciones de salud comprometidas con la
            excelencia clínica y el cuidado centrado en el paciente.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <div className="font-bold mb-3">Servicios</div>
            <ul className="space-y-2 text-muted-foreground">
              {services.slice(0, 4).map((s) => <li key={s.id}><a href="#servicios" className="hover:text-primary">{s.name}</a></li>)}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3">Empresa</div>
            <ul className="space-y-2 text-muted-foreground">
              {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Health Services One. Todos los derechos reservados.
      </div>
    </footer>
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
