/*
  PROYECTOS — HEALTH SERVICES ONE
  --------------------------------
  Cada proyecto tiene: slug (usado en la URL /proyectos/:slug), icon (nombre de
  lucide-react), image (portada), gallery (imágenes de la página interna —
  actualmente de referencia, reemplazables), country, title, summary, status y
  detail.sections (bloques de contenido para la página interna), todo en {es,en}.

  Tipos de bloque en detail.sections:
    { type: 'paragraphs', heading: {es,en}, items: [{es,en}, ...] }
    { type: 'list',       heading: {es,en}, items: [{es,en}, ...] }
*/

export const projects = [
  {
    slug: 'guyana',
    icon: 'Landmark',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1600&h=1000&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?w=900&h=650&fit=crop&q=80',
      'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=900&h=650&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=900&h=650&fit=crop&q=80',
    ],
    country: { es: 'Guyana', en: 'Guyana' },
    title: {
      es: 'Alianza Estratégica en Salud — Guyana',
      en: 'Strategic Health Alliance — Guyana',
    },
    summary: {
      es: 'Programa Nacional de Fortalecimiento de la Cirugía Ortopédica y Traumatológica: primera fase de una alianza de largo plazo con el Gobierno y el sistema de salud de la República Cooperativa de Guyana.',
      en: 'National Program for Strengthening Orthopedic and Trauma Surgery: the first phase of a long-term alliance with the Government and healthcare system of the Co-operative Republic of Guyana.',
    },
    status: { es: 'En negociación institucional', en: 'Institutional negotiation' },
    detail: {
      es: {
        intro: [
          'Health Services One presentó formalmente ante el Gobierno de la República Cooperativa de Guyana, el Ministerio de Salud y la Georgetown Public Hospital Corporation una carta de intención para desarrollar una alianza estratégica de largo plazo orientada al fortalecimiento del sistema de salud del país mediante inversión, transferencia de conocimiento, incorporación de tecnología médica y desarrollo de programas especializados de alta complejidad.',
          'Tras una visita institucional a Georgetown —que incluyó reuniones con autoridades del sector salud, visitas a instituciones hospitalarias y un análisis preliminar de las necesidades asistenciales—, identificamos una demanda creciente de servicios ortopédicos y de atención al trauma, impulsada por el acelerado crecimiento económico, industrial y de infraestructura del país.',
        ],
        sections: [
          {
            type: 'list',
            heading: { es: 'Nuestra propuesta de valor' },
            items: [
              { es: 'Capital humano altamente especializado' },
              { es: 'Tecnología médica de última generación' },
              { es: 'Equipamiento biomédico e instrumental quirúrgico especializado' },
              { es: 'Sistemas de información y gestión hospitalaria' },
              { es: 'Modelos internacionales de organización clínica' },
              { es: 'Transferencia de conocimiento y capacitación permanente del talento local' },
              { es: 'Protocolos clínicos basados en evidencia' },
              { es: 'Gestión integral de programas de alta complejidad' },
            ],
          },
          {
            type: 'paragraphs',
            heading: { es: 'Primera fase: fortalecimiento de la cirugía ortopédica y traumatológica' },
            items: [
              { es: 'Proponemos que la primera fase de la alianza esté orientada al fortalecimiento de la capacidad quirúrgica en ortopedia y traumatología, mediante el despliegue de equipos multidisciplinarios especializados articulados directamente en las salas de cirugía disponibles en los hospitales públicos del país.' },
              { es: 'El modelo aprovecha la infraestructura hospitalaria ya existente —hospitales nacionales, regionales y centros quirúrgicos públicos—, evitando inversiones iniciales en nueva infraestructura y permitiendo iniciar la estrategia de manera inmediata una vez aprobada la propuesta.' },
            ],
          },
          {
            type: 'list',
            heading: { es: 'Equipo multidisciplinario a desplegar' },
            items: [
              { es: 'Cirujanos ortopedistas y traumatólogos' },
              { es: 'Neurocirujanos y neurocirujanos pediátricos' },
              { es: 'Anestesiólogos especializados' },
              { es: 'Enfermeras instrumentadoras y de recuperación' },
              { es: 'Coordinadores clínicos' },
              { es: 'Personal administrativo y técnico' },
            ],
          },
          {
            type: 'list',
            heading: { es: 'Beneficios esperados para el sistema de salud' },
            items: [
              { es: 'Incremento inmediato de la capacidad asistencial' },
              { es: 'Reducción de listas de espera quirúrgicas' },
              { es: 'Mayor productividad y mejor utilización de los quirófanos existentes' },
              { es: 'Transferencia de conocimiento y fortalecimiento institucional' },
              { es: 'Mejoramiento de indicadores de calidad y resultados clínicos' },
              { es: 'Desarrollo de capacidades sostenibles para el largo plazo' },
            ],
          },
          {
            type: 'paragraphs',
            heading: { es: 'Visión de largo plazo' },
            items: [
              { es: 'Esta primera fase se concibe como el punto de partida de una colaboración progresiva, que podrá ampliarse hacia otras especialidades médicas y programas de alta complejidad —cardiología, oncología, cuidados intensivos, diálisis y más— de acuerdo con las prioridades que defina el Gobierno de la República Cooperativa de Guyana.' },
            ],
          },
        ],
      },
      en: {
        intro: [
          'Health Services One formally presented a letter of intent to the Government of the Co-operative Republic of Guyana, the Ministry of Health and the Georgetown Public Hospital Corporation to develop a long-term strategic alliance aimed at strengthening the country’s health system through investment, knowledge transfer, medical technology adoption and the development of specialized high-complexity programs.',
          'Following an institutional visit to Georgetown — which included meetings with health sector authorities, visits to hospital institutions and a preliminary needs assessment — we identified growing demand for orthopedic and trauma care services, driven by the country’s accelerated economic, industrial and infrastructure growth.',
        ],
        sections: [
          {
            type: 'list',
            heading: { en: 'Our value proposition' },
            items: [
              { en: 'Highly specialized human capital' },
              { en: 'State-of-the-art medical technology' },
              { en: 'Biomedical equipment and specialized surgical instruments' },
              { en: 'Hospital information and management systems' },
              { en: 'International models of clinical organization' },
              { en: 'Knowledge transfer and ongoing training for local talent' },
              { en: 'Evidence-based clinical protocols' },
              { en: 'Comprehensive management of high-complexity programs' },
            ],
          },
          {
            type: 'paragraphs',
            heading: { en: 'Phase one: strengthening orthopedic and trauma surgery' },
            items: [
              { en: 'We propose that the first phase of the alliance focus on strengthening surgical capacity in orthopedics and traumatology, deploying specialized multidisciplinary teams directly into the operating rooms already available at the country’s public hospitals.' },
              { en: 'The model leverages existing hospital infrastructure — national hospitals, regional hospitals and public surgical centers — avoiding the need for upfront investment in new facilities and allowing the strategy to begin immediately once the proposal is approved.' },
            ],
          },
          {
            type: 'list',
            heading: { en: 'Multidisciplinary team to be deployed' },
            items: [
              { en: 'Orthopedic and trauma surgeons' },
              { en: 'Neurosurgeons and pediatric neurosurgeons' },
              { en: 'Specialized anesthesiologists' },
              { en: 'Surgical and recovery-room nurses' },
              { en: 'Clinical coordinators' },
              { en: 'Administrative and technical staff' },
            ],
          },
          {
            type: 'list',
            heading: { en: 'Expected benefits for the health system' },
            items: [
              { en: 'Immediate increase in care capacity' },
              { en: 'Reduced surgical waiting lists' },
              { en: 'Higher productivity and better use of existing operating rooms' },
              { en: 'Knowledge transfer and institutional strengthening' },
              { en: 'Improved quality indicators and clinical outcomes' },
              { en: 'Development of sustainable long-term capabilities' },
            ],
          },
          {
            type: 'paragraphs',
            heading: { en: 'Long-term vision' },
            items: [
              { en: 'This first phase is conceived as the starting point of a progressive collaboration that can expand into other medical specialties and high-complexity programs — cardiology, oncology, critical care, dialysis and more — according to the priorities set by the Government of the Co-operative Republic of Guyana.' },
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'ampliacion-uci',
    icon: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=1600&h=1000&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900&h=650&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=900&h=650&fit=crop&q=80',
    ],
    country: { es: 'Colombia', en: 'Colombia' },
    title: {
      es: 'Ampliación de Unidad de Cuidados Intensivos',
      en: 'Intensive Care Unit Expansion',
    },
    summary: {
      es: 'Incorporación de 12 nuevas camas críticas equipadas con monitoreo avanzado y soporte vital, en alianza con un hospital público de alta complejidad.',
      en: 'Twelve new critical-care beds equipped with advanced monitoring and life support, in partnership with a high-complexity public hospital.',
    },
    status: { es: 'En ejecución', en: 'In progress' },
    detail: {
      es: {
        intro: [
          'Este proyecto amplía la capacidad crítica de un hospital público aliado mediante la incorporación de 12 nuevas camas de cuidados intensivos, equipadas con monitoreo hemodinámico avanzado, ventilación mecánica de última generación y soporte vital integral.',
        ],
        sections: [
          {
            type: 'list',
            heading: { es: 'Alcance del proyecto' },
            items: [
              { es: 'Dotación de equipos biomédicos de monitoreo y soporte vital' },
              { es: 'Incorporación de personal médico y de enfermería especializado en cuidado crítico' },
              { es: 'Implementación de protocolos clínicos basados en evidencia' },
              { es: 'Capacitación continua del equipo asistencial local' },
            ],
          },
        ],
      },
      en: {
        intro: [
          'This project expands the critical-care capacity of a partner public hospital by adding 12 new intensive care beds, equipped with advanced hemodynamic monitoring, state-of-the-art mechanical ventilation and comprehensive life support.',
        ],
        sections: [
          {
            type: 'list',
            heading: { en: 'Project scope' },
            items: [
              { en: 'Biomedical monitoring and life-support equipment' },
              { en: 'Onboarding of physicians and nurses specialized in critical care' },
              { en: 'Implementation of evidence-based clinical protocols' },
              { en: 'Ongoing training for the local care team' },
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'centro-diagnostico-imagenes',
    icon: 'Radiation',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=1600&h=1000&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579165466991-467135ad3110?w=900&h=650&fit=crop&q=80',
      'https://images.unsplash.com/photo-1666886573452-9dc8ce8f5cc5?w=900&h=650&fit=crop&q=80',
    ],
    country: { es: 'Colombia', en: 'Colombia' },
    title: {
      es: 'Centro de Diagnóstico por Imágenes',
      en: 'Diagnostic Imaging Center',
    },
    summary: {
      es: 'Puesta en marcha de resonancia magnética 3T y tomografía de última generación para acelerar el diagnóstico de alta precisión.',
      en: 'Deployment of 3T MRI and next-generation CT scanning to accelerate high-precision diagnosis.',
    },
    status: { es: 'En ejecución', en: 'In progress' },
    detail: {
      es: {
        intro: [
          'Un nuevo centro de diagnóstico por imágenes que incorpora resonancia magnética 3T y tomografía computarizada de última generación, reduciendo los tiempos de espera para estudios de alta complejidad.',
        ],
        sections: [
          {
            type: 'list',
            heading: { es: 'Tecnología incorporada' },
            items: [
              { es: 'Resonancia magnética 3T' },
              { es: 'Tomografía computarizada multicorte' },
              { es: 'Sistemas de gestión y archivo de imágenes (PACS)' },
              { es: 'Telerradiología para lectura remota especializada' },
            ],
          },
        ],
      },
      en: {
        intro: [
          'A new diagnostic imaging center featuring 3T MRI and next-generation CT scanning, reducing wait times for high-complexity studies.',
        ],
        sections: [
          {
            type: 'list',
            heading: { en: 'Technology deployed' },
            items: [
              { en: '3T MRI scanner' },
              { en: 'Multi-slice CT scanner' },
              { en: 'Picture archiving and communication system (PACS)' },
              { en: 'Teleradiology for specialized remote reading' },
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'programa-telemedicina',
    icon: 'Stethoscope',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=1000&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?w=900&h=650&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=900&h=650&fit=crop&q=80',
    ],
    country: { es: 'Colombia', en: 'Colombia' },
    title: {
      es: 'Programa de Telemedicina',
      en: 'Telemedicine Program',
    },
    summary: {
      es: 'Consultas remotas y seguimiento de pacientes crónicos desde cualquier lugar, ampliando el acceso a especialistas en zonas apartadas.',
      en: 'Remote consultations and chronic-patient follow-up from anywhere, expanding access to specialists in remote areas.',
    },
    status: { es: 'En ejecución', en: 'In progress' },
    detail: {
      es: {
        intro: [
          'Un programa de telemedicina que conecta a pacientes en zonas apartadas con especialistas médicos, y permite el seguimiento continuo de pacientes crónicos sin necesidad de desplazamiento.',
        ],
        sections: [
          {
            type: 'list',
            heading: { es: 'Componentes del programa' },
            items: [
              { es: 'Plataforma de teleconsulta médica especializada' },
              { es: 'Telemonitoreo de pacientes con enfermedades crónicas' },
              { es: 'Interconsulta entre profesionales de la salud' },
              { es: 'Historia clínica electrónica interoperable' },
            ],
          },
        ],
      },
      en: {
        intro: [
          'A telemedicine program that connects patients in remote areas with medical specialists and enables continuous follow-up for chronic patients without the need to travel.',
        ],
        sections: [
          {
            type: 'list',
            heading: { en: 'Program components' },
            items: [
              { en: 'Specialized medical teleconsultation platform' },
              { en: 'Remote monitoring of chronic-disease patients' },
              { en: 'Inter-professional medical consultation' },
              { en: 'Interoperable electronic health records' },
            ],
          },
        ],
      },
    },
  },
];
