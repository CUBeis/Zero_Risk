import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

type AuthorityContent = {
  name: string;
  number: string;
  contactInCaseOf: string[];
  responsibilities: string[];
};

type AuthorityItem = {
  ar: AuthorityContent;
  es: AuthorityContent;
  en: AuthorityContent;
};

export default async function AuthoritiesPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const typedLocale = locale as Locale;
  const t = translations[typedLocale];

  const authorities: AuthorityItem[] = [
    {
      ar: {
        name: "الحماية المدنية (الدفاع المدني / الإطفاء)",
        number: "180",
        contactInCaseOf: ["الحرائق", "تسرب الغاز أو المواد الخطرة", "انهيار المباني أو الحوادث الكبرى"],
        responsibilities: ["إطفاء الحرائق", "إنقاذ المحاصرين", "عزل موقع الخطر ومنع انتشاره"],
      },
      es: {
        name: "Defensa Civil / Bomberos",
        number: "112",
        contactInCaseOf: ["Incendios", "Fugas de gas o materiales peligrosos", "Derrumbes o accidentes graves"],
        responsibilities: ["Extinción de incendios", "Rescate de personas atrapadas", "Aislamiento de la zona de peligro"],
      },
      en: {
        name: "Civil Defense / Fire Department",
        number: "999",
        contactInCaseOf: ["Fires", "Gas leaks or hazardous materials", "Building collapses or major incidents"],
        responsibilities: ["Firefighting", "Rescue operations", "Securing and isolating danger areas"],
      },
    },
    {
      ar: {
        name: "الشرطة",
        number: "122",
        contactInCaseOf: ["تأمين مواقع الحوادث", "الفوضى أو التجمعات الخطرة", "الحوادث المرورية أو الجرائم"],
        responsibilities: ["تنظيم الموقع", "حماية المواطنين", "تسهيل عمل فرق الطوارئ"],
      },
      es: {
        name: "Policía",
        number: "091 / 092 / 062",
        contactInCaseOf: ["Asegurar escenas de accidentes", "Disturbios o تجمعات peligrosas", "Accidentes de tráfico o delitos"],
        responsibilities: ["Organización del lugar", "Protección de los ciudadanos", "Apoyo a los equipos de emergencia"],
      },
      en: {
        name: "Police",
        number: "999",
        contactInCaseOf: ["Securing incident scenes", "Public disorder or dangerous gatherings", "Traffic accidents or crimes"],
        responsibilities: ["Scene control", "Public safety", "Supporting emergency teams"],
      },
    },
    {
      ar: {
        name: "الإسعاف",
        number: "123",
        contactInCaseOf: ["الإصابات الخطيرة", "الإغماء أو الاختناق", "جميع أنواع الحوادث"],
        responsibilities: ["تقديم الإسعافات الأولية", "نقل المصابين للمستشفى", "إنقاذ الحالات الحرجة"],
      },
      es: {
        name: "Ambulancia / Servicios médicos de emergencia",
        number: "112",
        contactInCaseOf: ["Lesiones graves", "Desmayos o asfixia", "Todo tipo de accidentes"],
        responsibilities: ["Primeros auxilios", "Traslado al hospital", "Atención de casos críticos"],
      },
      en: {
        name: "Ambulance / Emergency Medical Services",
        number: "999 / 112",
        contactInCaseOf: ["Serious injuries", "Fainting or choking", "All types of accidents"],
        responsibilities: ["First aid", "Patient transport", "Critical care response"],
      },
    },
    {
      ar: {
        name: "المستشفيات ومراكز الطوارئ",
        number: "—",
        contactInCaseOf: ["الحالات الطبية الطارئة", "التسمم أو الحروق أو الإصابات الشديدة"],
        responsibilities: ["العلاج الفوري", "العمليات الجراحية الطارئة", "الرعاية المركزة"],
      },
      es: {
        name: "Hospitales y centros de emergencia",
        number: "—",
        contactInCaseOf: ["Emergencias médicas", "Intoxicaciones, quemaduras o lesiones graves"],
        responsibilities: ["Tratamiento inmediato", "Cirugías de emergencia", "Cuidados intensivos"],
      },
      en: {
        name: "Hospitals & Emergency Centers",
        number: "—",
        contactInCaseOf: ["Medical emergencies", "Poisoning, burns, or severe injuries"],
        responsibilities: ["Immediate treatment", "Emergency surgery", "Intensive care"],
      },
    },
    {
      ar: {
        name: "مراكز السموم",
        number: "—",
        contactInCaseOf: ["ابتلاع أو استنشاق مواد سامة", "التسمم بالأدوية أو المواد الكيميائية"],
        responsibilities: ["تحديد نوع السم", "تقديم العلاج المناسب", "متابعة الحالة"],
      },
      es: {
        name: "Centros de toxicología",
        number: "—",
        contactInCaseOf: ["Ingestión o inhalación de sustancias tóxicas", "Intoxicación por medicamentos o químicos"],
        responsibilities: ["Identificación del tóxico", "Tratamiento adecuado", "Seguimiento del paciente"],
      },
      en: {
        name: "Poison Control Centers",
        number: "—",
        contactInCaseOf: ["Poison ingestion or inhalation", "Drug or chemical poisoning"],
        responsibilities: ["Identify toxins", "Provide treatment", "Monitor condition"],
      },
    },
    {
      ar: {
        name: "شركات المرافق (غاز – كهرباء – مياه)",
        number: "—",
        contactInCaseOf: ["تسرب الغاز", "أعطال كهربائية خطيرة", "انفجارات أو شرر بالشبكات"],
        responsibilities: ["قطع الخدمة فورًا", "إصلاح الأعطال", "منع تكرار الخطر"],
      },
      es: {
        name: "Servicios públicos (gas, electricidad, agua)",
        number: "—",
        contactInCaseOf: ["Fugas de gas", "Fallas eléctricas graves", "Explosiones o chispas"],
        responsibilities: ["Corte del servicio", "Reparaciones", "Prevención de riesgos"],
      },
      en: {
        name: "Utility Companies (Gas, Electricity, Water)",
        number: "—",
        contactInCaseOf: ["Gas leaks", "Electrical failures", "Network hazards"],
        responsibilities: ["Shut down services", "Repair issues", "Prevent hazards"],
      },
    },
    {
      ar: {
        name: "جهاز شؤون البيئة",
        number: "—",
        contactInCaseOf: ["تسرب مواد كيميائية", "تلوث الهواء أو المياه أو التربة"],
        responsibilities: ["تقييم الخطر البيئي", "اتخاذ إجراءات الحماية", "منع انتشار التلوث"],
      },
      es: {
        name: "Autoridad ambiental",
        number: "—",
        contactInCaseOf: ["Derrames químicos", "Contaminación ambiental"],
        responsibilities: ["Evaluación del riesgo", "Medidas de protección", "Control de contaminación"],
      },
      en: {
        name: "Environmental Authority",
        number: "—",
        contactInCaseOf: ["Chemical spills", "Environmental pollution"],
        responsibilities: ["Risk assessment", "Protection measures", "Pollution control"],
      },
    },
    {
      ar: {
        name: "إدارة المنشأة / فرق السلامة",
        number: "—",
        contactInCaseOf: ["الحوادث داخل المنشآت أو المصانع"],
        responsibilities: ["الاستجابة الأولية", "تشغيل أنظمة الطوارئ", "التواصل مع الجهات الرسمية"],
      },
      es: {
        name: "Administración de la instalación / equipos de seguridad",
        number: "—",
        contactInCaseOf: ["Accidentes dentro de instalaciones"],
        responsibilities: ["Respuesta inicial", "Activación de sistemas de emergencia", "Coordinación con autoridades"],
      },
      en: {
        name: "Facility Management / Safety Teams",
        number: "—",
        contactInCaseOf: ["On-site incidents"],
        responsibilities: ["Initial response", "Activate emergency systems", "Coordinate with authorities"],
      },
    },
  ];

  const labels =
    typedLocale === "ar"
      ? { inCase: "نلجأ إليها في", duties: "تقوم بـ", phone: "رقم الطوارئ" }
      : typedLocale === "es"
        ? { inCase: "Se recurre en", duties: "Funciones", phone: "Número de emergencia" }
        : { inCase: "Contact in case of", duties: "Responsibilities", phone: "Emergency number" };

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">{t.nav.authorities}</h1>
      <p className="text-dark/80 dark:text-secondary/80">Emergency Authorities Guide</p>

      <div className="grid gap-4 md:grid-cols-2">
        {authorities.map((authority) => {
          const content = authority[typedLocale];
          return (
          <article key={content.name} className="rounded-xl border border-primary/20 bg-white p-5 dark:bg-zinc-900">
            <h2 className="text-lg font-semibold text-dark dark:text-secondary">{content.name}</h2>
            <p className="mt-2 text-sm font-medium text-dark/80 dark:text-secondary/80">{labels.phone}</p>
            <p className="mt-1 text-2xl font-bold text-primary">{content.number}</p>

            <h3 className="mt-4 font-semibold text-dark dark:text-secondary">{labels.inCase}</h3>
            <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-dark/85 dark:text-secondary/85">
              {content.contactInCaseOf.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-4 font-semibold text-dark dark:text-secondary">{labels.duties}</h3>
            <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-dark/85 dark:text-secondary/85">
              {content.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          );
        })}
      </div>
    </section>
  );
}
