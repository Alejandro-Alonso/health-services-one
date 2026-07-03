import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Phone, Menu, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const NAV_ITEMS = [
  { key: 'about', hash: '#consorcio' },
  { key: 'services', hash: '#servicios' },
  { key: 'why', hash: '#nosotros' },
  { key: 'projects', hash: '#proyectos' },
  { key: 'contact', hash: '#contacto' },
];

function LanguageToggle({ className = '' }) {
  const { lang, toggleLang } = useLanguage();
  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-bold ${className}`}
      aria-label="Toggle language"
    >
      <span className={`rounded-full px-2.5 py-1 transition ${lang === 'es' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>ES</span>
      <span className={`rounded-full px-2.5 py-1 transition ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>EN</span>
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[80rem] px-5 h-16 flex items-center justify-between gap-4">
        <Link to="/#top" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground">
            <HeartPulse className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="font-display text-lg font-bold leading-none tracking-tight">
            Health Services <span className="text-primary">One</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
          {NAV_ITEMS.map((n) => (
            <Link key={n.hash} to={`/${n.hash}`} className="hover:text-primary transition-colors whitespace-nowrap">{t.nav[n.key]}</Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <LanguageToggle />
          <Link to="/#contacto" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground hover:brightness-95 transition whitespace-nowrap">
            <Phone className="h-4 w-4" /> {t.nav.cta}
          </Link>
        </div>
        <button className="lg:hidden p-2 -mr-2" onClick={() => setOpen(!open)} aria-label={t.nav.menuLabel}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-5 py-4 flex flex-col gap-4 text-sm font-semibold">
          {NAV_ITEMS.map((n) => (
            <Link key={n.hash} to={`/${n.hash}`} onClick={() => setOpen(false)} className="text-muted-foreground">{t.nav[n.key]}</Link>
          ))}
          <LanguageToggle className="self-start" />
          <Link to="/#contacto" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground">
            <Phone className="h-4 w-4" /> {t.nav.cta}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
