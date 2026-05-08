import { Locale } from "./i18n";

type AboutBlock = {
  label: string;
  title?: string;
  summary?: string;
  projectTitle?: string;
  projectText?: string;
  missionTitle?: string;
  missionText?: string;
  dir: "rtl" | "ltr";
};

type Dictionary = {
  nav: {
    home: string;
    about: string;
    guidelines: string;
    authorities: string;
    mistakes: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  search: {
    title: string;
    placeholder: string;
    noResults: string;
    arabic: string;
    english: string;
    spanish: string;
  };
  sections: {
    aboutTitle: string;
    aboutText: string;
    aboutIntroBlocks: AboutBlock[];
    aboutDetailBlocks: AboutBlock[];
    quickLinks: string;
  };
  cards: {
    guidelines: string;
    authorities: string;
    mistakes: string;
  };
  placeholders: {
    comingSoon: string;
  };
};

const aboutIntroBlocks: AboutBlock[] = [
  {
    label: "🇸🇦 العربية",
    summary:
      "منصة متخصصة في الطوارئ والصحة وإدارة المخاطر، تقدم معجم مصطلحات، وإرشادات الأمن والسلامة، ودليل الجهات المختصة بالطوارئ.",
    dir: "rtl",
  },
  {
    label: "🇬🇧 English",
    summary:
      "A platform for emergency, health, and risk management, offering a terminology dictionary, safety guidelines, and an emergency contacts directory.",
    dir: "ltr",
  },
  {
    label: "🇪🇸 Español",
    summary:
      "Una plataforma de emergencias, salud y gestión de riesgos, que ofrece un diccionario de términos, guías de seguridad y un directorio de contactos de emergencia.",
    dir: "ltr",
  },
];

const aboutDetailBlocks: AboutBlock[] = [
  {
    label: "🇸🇦 العربية",
    projectTitle: "عن المشروع",
    projectText:
      "يهدف هذا المشروع إلى إنشاء منصة رقمية متخصصة في مجال الطوارئ والصحة وإدارة المخاطر والكوارث، تقدم محتوى موثوقًا ومتكاملًا يجمع بين معجم دقيق للمصطلحات بثلاث لغات (العربية، الإسبانية، الإنجليزية)، وإرشادات الأمن والسلامة، بالإضافة إلى دليل شامل للجهات المختصة بالطوارئ. يسعى المشروع إلى دعم الطلاب والمتخصصين وتعزيز القدرة على التواصل الفعّال وفهم المصطلحات في هذا المجال الحيوي.",
    missionTitle: "رسالتنا",
    missionText:
      "نسعى إلى تقديم مصدر معرفي موثوق ومتاح، يساهم في تعزيز الوعي، وتوحيد استخدام المصطلحات، ودعم الاستجابة الفعّالة في حالات الطوارئ، وفقًا لأفضل الممارسات والمعايير المهنية.",
    dir: "rtl",
  },
  {
    label: "🇬🇧 English",
    projectTitle: "About the Project",
    projectText:
      "This project aims to develop a specialized digital platform in the fields of emergency, health, and disaster risk management. It provides reliable and integrated content, combining a trilingual terminology dictionary (Arabic, Spanish, English), safety and security guidelines, and a comprehensive directory of emergency services. The platform is designed to support students and professionals while enhancing effective communication and understanding of key terminology in this critical field.",
    missionTitle: "Our Mission",
    missionText:
      "Our mission is to provide a reliable and accessible source of knowledge that raises awareness, improves the use of terminology, and promotes proper response in emergency situations.",
    dir: "ltr",
  },
  {
    label: "🇪🇸 Español",
    projectTitle: "Sobre el proyecto",
    projectText:
      "Este proyecto tiene como objetivo desarrollar una plataforma digital especializada en emergencias, salud y gestión de riesgos y desastres. Ofrece contenido fiable e integrado que incluye un diccionario trilingüe de terminología (árabe, español y inglés), guías de seguridad y protección, y un directorio completo de contactos de emergencia. La plataforma está diseñada para apoyar a estudiantes y profesionales, mejorando la comunicación efectiva y la comprensión de la terminología en este ámbito esencial.",
    missionTitle: "Nuestra misión",
    missionText:
      "Nuestra misión es proporcionar una fuente de conocimiento fiable y accesible que contribuya a aumentar la concienciación, mejorar el uso de la terminología y fomentar una respuesta adecuada en situaciones de emergencia.",
    dir: "ltr",
  },
];

export const translations: Record<Locale, Dictionary> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      guidelines: "الإرشادات",
      authorities: "الجهات المختصة",
      mistakes: "الأخطاء الشائعة",
    },
    hero: {
      title: "ZERO RISK",
      subtitle: "منصة للتوعية بالطوارئ وإدارة المخاطر والإرشادات الوقائية",
    },
    search: {
      title: "ابحث في القاموس متعدد اللغات",
      placeholder: "اكتب المصطلح بالعربية...",
      noResults: "لا توجد نتائج مطابقة.",
      arabic: "العربية",
      english: "الإنجليزية",
      spanish: "الإسبانية",
    },
    sections: {
      aboutTitle: "عن المشروع ورسالتنا",
      aboutText:
        "منصة متخصصة في الطوارئ والصحة وإدارة المخاطر، تقدم معجم مصطلحات، وإرشادات الأمن والسلامة، ودليل الجهات المختصة بالطوارئ.",
      aboutIntroBlocks,
      aboutDetailBlocks,
      quickLinks: "روابط سريعة",
    },
    cards: {
      guidelines: "إرشادات الطوارئ",
      authorities: "الجهات المختصة بالطوارئ",
      mistakes: "الأخطاء الشائعة",
    },
    placeholders: {
      comingSoon: "سيتم إضافة المحتوى قريبًا.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      guidelines: "Guidelines",
      authorities: "Authorities",
      mistakes: "Common Mistakes",
    },
    hero: {
      title: "ZERO RISK",
      subtitle:
        "Emergency awareness, safety guidelines, and risk management in one multilingual platform.",
    },
    search: {
      title: "Search the multilingual dictionary",
      placeholder: "Type an Arabic emergency term...",
      noResults: "No matching terms found.",
      arabic: "Arabic",
      english: "English",
      spanish: "Spanish",
    },
    sections: {
      aboutTitle: "About the Project & Our Mission",
      aboutText:
        "A platform for emergency, health, and risk management, offering a terminology dictionary, safety guidelines, and an emergency contacts directory.",
      aboutIntroBlocks,
      aboutDetailBlocks,
      quickLinks: "Quick Links",
    },
    cards: {
      guidelines: "Emergency Guidelines",
      authorities: "Emergency Authorities",
      mistakes: "Common Mistakes",
    },
    placeholders: {
      comingSoon: "Content will be added soon.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      guidelines: "Guías",
      authorities: "Autoridades",
      mistakes: "Errores Comunes",
    },
    hero: {
      title: "ZERO RISK",
      subtitle:
        "Concienciación en emergencias, guías de seguridad y gestión de riesgos en una sola plataforma multilingüe.",
    },
    search: {
      title: "Buscar en el diccionario multilingüe",
      placeholder: "Escribe un término árabe...",
      noResults: "No se encontraron resultados.",
      arabic: "Árabe",
      english: "Inglés",
      spanish: "Español",
    },
    sections: {
      aboutTitle: "Sobre el proyecto y nuestra misión",
      aboutText:
        "Una plataforma de emergencias, salud y gestión de riesgos, que ofrece un diccionario de términos, guías de seguridad y un directorio de contactos de emergencia.",
      aboutIntroBlocks,
      aboutDetailBlocks,
      quickLinks: "Enlaces Rápidos",
    },
    cards: {
      guidelines: "Guías de Emergencia",
      authorities: "Autoridades de Emergencia",
      mistakes: "Errores Comunes",
    },
    placeholders: {
      comingSoon: "El contenido se añadirá pronto.",
    },
  },
};
