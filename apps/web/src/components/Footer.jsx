import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { services } from '@/data/services';

const NAV_ITEMS = [
  { key: 'about', hash: '#consorcio' },
  { key: 'services', hash: '#servicios' },
  { key: 'why', hash: '#nosotros' },
  { key: 'projects', hash: '#proyectos' },
  { key: 'contact', hash: '#contacto' },
];

function Footer() {
  const { lang, t } = useLanguage();
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
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-12 text-sm">
          <div>
            <div className="font-bold mb-3">{t.footer.servicesHeading}</div>
            <ul className="space-y-2 text-muted-foreground">
              {services.slice(0, 4).map((s) => (
                <li key={s.id}><Link to="/#servicios" className="hover:text-primary">{s.name[lang]}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold mb-3">{t.footer.companyHeading}</div>
            <ul className="space-y-2 text-muted-foreground">
              {NAV_ITEMS.map((n) => (
                <li key={n.hash}><Link to={`/${n.hash}`} className="hover:text-primary">{t.nav[n.key]}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Health Services One. {t.footer.rights}
      </div>
    </footer>
  );
}

export default Footer;
