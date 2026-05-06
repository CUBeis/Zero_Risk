import { Locale } from "./i18n";

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
        "يهدف ZERO RISK إلى رفع الوعي وتسهيل الوصول إلى المعلومات الحيوية خلال حالات الطوارئ عبر محتوى واضح ومتعدد اللغات.",
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
      aboutTitle: "About Us & Our Mission",
      aboutText:
        "ZERO RISK provides practical emergency knowledge and accessible guidance so communities can respond faster and safer.",
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
        "ZERO RISK facilita información crítica para emergencias en formatos claros para mejorar la preparación y reducir riesgos.",
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
