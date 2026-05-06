import { notFound } from "next/navigation";
import { Locale, locales } from "@/lib/i18n";
import { translations } from "@/lib/translations";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GuidelinesPage({ params }: Props) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const t = translations[locale as Locale];

  const sections = [
    {
      arTitle: "الطوارئ العامة وإدارة الأزمات",
      esTitle: "Emergencias generales y gestión de crisis",
      enTitle: "General Emergency & Crisis Management",
      ar: [
        "اتبع تعليمات الجهات الرسمية فقط وقت الأزمات",
        "احتفظ بأرقام الطوارئ دائمًا",
        "جهّز حقيبة طوارئ (مياه، أدوية، بطاريات)",
        "تجنب الشائعات واعتمد على المعلومات الموثوقة",
      ],
      es: [
        "Siga únicamente la información y las instrucciones oficiales durante emergencias.",
        "Mantenga siempre los números de emergencia.",
        "Prepare un kit de emergencia básico (agua, medicamentos, baterías).",
        "Evite los rumores y comparte solo información verificada.",
      ],
      en: [
        "Follow official instructions only during emergencies.",
        "Keep emergency numbers saved at all times.",
        "Prepare an emergency kit (water, medicine, batteries).",
        "Avoid rumors and share verified information only.",
      ],
    },
    {
      arTitle: "الطوارئ والمخاطر البحرية",
      esTitle: "Emergencias y riesgos marítimos",
      enTitle: "Maritime Emergencies & Risks",
      ar: [
        "ارتداء سترة النجاة دائمًا على متن المركب.",
        "متابعة حالة البحر قبل وأثناء الرحلة.",
        "تجنب الإبحار في الظروف الجوية السيئة.",
        "الالتزام بتعليمات الطاقم.",
      ],
      es: [
        "Lleva siempre un chaleco salvavidas adecuado a bordo.",
        "Consulta las condiciones meteorológicas y del mar antes de salir.",
        "No salgas al mar con mal tiempo o condiciones adversas.",
        "Sigue siempre las instrucciones de la tripulación y seguridad.",
      ],
      en: [
        "Always wear a properly fitted life jacket while on board.",
        "Check weather and sea conditions before heading out.",
        "Do not go out on the water in rough or stormy weather.",
        "Follow all crew instructions and safety briefings.",
      ],
    },
    {
      arTitle: "الطوارئ النووية والإشعاعية",
      esTitle: "Emergencias nucleares y radiológicas",
      enTitle: "Nuclear & Radiological Emergencies",
      ar: [
        "ابتعد فورًا عن منطقة الخطر.",
        "لا تلمس أجسام مجهولة.",
        "ابقَ داخل المباني وأغلق النوافذ والأبواب.",
        "التزم دائمًا بتعليمات السلطات المحلية وخدمات الطوارئ.",
      ],
      es: [
        "Aléjese de la zona afectada.",
        "No toque objetos ni materiales que puedan estar contaminados radiológicamente.",
        "Permanezca en el interior de un edificio, cierre puertas y ventanas y reduzca la ventilación exterior.",
        "Siga en todo momento las instrucciones de las autoridades locales y de los servicios de emergencia.",
      ],
      en: [
        "Move away from the affected area immediately.",
        "Do not touch or handle unknown objects or potentially contaminated materials.",
        "Remain indoors, close all doors and windows, and reduce outside ventilation.",
        "Follow instructions issued by official authorities and emergency services at all times.",
      ],
    },
    {
      arTitle: "الطوارئ الصحية والطبية",
      esTitle: "Emergencias de salud y médicas",
      enTitle: "Health & Medical Emergencies",
      ar: [
        "غسل اليدين بانتظام بالماء والصابون أو استخدام المعقمات الكحولية.",
        "التوجه إلى الرعاية الطبية فورًا عند ظهور أعراض شديدة أو غير طبيعية وعدم إهمالها.",
        "يُمنع استخدام الأدوية دون استشارة مختص صحي.",
        "الالتزام بجدول التطعيمات المعتمد من الجهات الصحية الرسمية.",
      ],
      es: [
        "Lávese las manos con frecuencia con agua y jabón o utilice desinfectante a base de alcohol.",
        "No ignore los síntomas graves y busque atención médica de inmediato si aparecen.",
        "No se automedique y consulte a un profesional de la salud antes de tomar cualquier medicamento.",
        "Mantenga su calendario de vacunación actualizado según las recomendaciones sanitarias oficiales.",
      ],
      en: [
        "Wash your hands frequently with soap and water for at least 20 seconds or use an alcohol-based hand sanitizer.",
        "Seek medical attention immediately if you experience severe or concerning symptoms.",
        "Do not self-medicate; consult a qualified healthcare professional before taking any medication.",
        "Stay up to date with recommended vaccinations according to official public health guidelines.",
      ],
    },
    {
      arTitle: "الحرائق والسلامة الصناعية",
      esTitle: "Seguridad contra incendios y seguridad industrial",
      enTitle: "Fire Safety & Industrial Safety",
      ar: [
        "استخدام الأجهزة الكهربائية والغازية وفق تعليمات السلامة المعتمدة.",
        "عدم ترك الأجهزة الكهربائية أو مصادر الحرارة تعمل دون إشراف.",
        "التعرف مسبقًا على مخارج الطوارئ ومسارات الإخلاء في المباني.",
        "يُمنع استخدام المصاعد أثناء الحرائق.",
      ],
      es: [
        "Utilice los aparatos eléctricos y de gas siguiendo las normas de seguridad.",
        "No deje aparatos eléctricos o fuentes de calor encendidos sin supervisión.",
        "Conozca previamente las salidas de emergencia y las rutas de evacuación del edificio.",
        "En caso de incendio, no utilice los ascensores.",
      ],
      en: [
        "Use electrical and gas appliances safely and maintain them to prevent hazards.",
        "Do not leave operating electrical or heating devices unattended.",
        "Familiarize yourself with all emergency exits and evacuation routes in your building.",
        "Do not use elevators during fires.",
      ],
    },
    {
      arTitle: "الكوارث الطبيعية",
      esTitle: "Defensa civil y desastres naturales",
      enTitle: "Civil Defense & Natural Disasters",
      ar: [
        "في الزلازل: انخفض واحتمِ تحت طاولة متينة مع حماية الرأس والرقبة.",
        "في الفيضانات: توجّه فورًا إلى مناطق مرتفعة وابتعد عن المياه.",
        "احتفِظ مسبقًا بمصباح يدوي مع بطاريات إضافية ضمن حقيبة الطوارئ.",
        "بعد الكوارث: ابتعد عن المباني المتضررة أو غير الآمنة.",
      ],
      es: [
        "Durante terremotos: agáchese y protéjase bajo una mesa resistente.",
        "En inundaciones: diríjase inmediatamente a zonas más altas y evite el contacto con el agua.",
        "Mantenga preparada una linterna con baterías adicionales en su kit de emergencia.",
        "Después de desastres: aléjese de edificios dañados o inestables.",
      ],
      en: [
        "During earthquakes: take cover under sturdy furniture and stay away from windows.",
        "During floods: move immediately to higher ground and avoid floodwaters.",
        "Keep a flashlight with extra batteries as part of your emergency kit.",
        "After disasters: stay away from damaged or unstable buildings until cleared by authorities.",
      ],
    },
    {
      arTitle: "الطيران",
      esTitle: "Aviación",
      enTitle: "Aviation",
      ar: [
        "اتبع تعليمات الطاقم.",
        "اربط حزام الأمان أثناء الجلوس.",
        "خزّن الأمتعة بشكل آمن في الأماكن المخصصة لها.",
        "لا تفتح مخارج الطوارئ إلا عند الطلب من الطاقم.",
      ],
      es: [
        "Siga siempre las instrucciones de la tripulación.",
        "Mantenga el cinturón de seguridad abrochado mientras esté sentado.",
        "Guarde el equipaje de mano de forma segura en los compartimentos superiores o debajo del asiento.",
        "No abra las salidas de emergencia salvo indicación de la tripulación.",
      ],
      en: [
        "Follow crew instructions at all times during the flight.",
        "Fasten your seatbelt whenever seated.",
        "Store luggage securely in overhead bins or under the seat.",
        "Do not open emergency exits unless instructed by the crew.",
      ],
    },
    {
      arTitle: "قطاع الطاقة",
      esTitle: "Sector energético",
      enTitle: "Energy Sector",
      ar: [
        "لا تلمس الأسلاك الكهربائية المكشوفة أو التالفة.",
        "أوقف إمداد الغاز فورًا عند اكتشاف أي تسرب.",
        "لا تشعل أي مصادر نار أو لهب بالقرب من الوقود أو تسربات الغاز.",
        "أبلغ فورًا عن أي خطر أو حالة غير آمنة للجهات المختصة.",
      ],
      es: [
        "No toque cables eléctricos expuestos o dañados.",
        "Cierre la válvula de gas inmediatamente en caso de fuga.",
        "No encienda fuego ni fuentes de ignición cerca de combustibles o fugas de gas.",
        "Informe cualquier situación de peligro a las autoridades o servicios de emergencia correspondientes.",
      ],
      en: [
        "Do not touch exposed electrical wires or damaged electrical equipment.",
        "Shut off the gas supply immediately if a leak is detected.",
        "Do not ignite flames near fuel or gas leaks.",
        "Report any safety hazards or leaks to the responsible authority immediately.",
      ],
    },
    {
      arTitle: "النقل والبنية التحتية",
      esTitle: "Infraestructura y transporte",
      enTitle: "Infrastructure & Transportation",
      ar: [
        "استخدم ممرات المشاة المخصصة عند عبور الطرق.",
        "انتبه لحركة المرور قبل وأثناء عبور الطريق.",
        "لا تقفز من وسائل النقل أثناء الحركة.",
        "تجنب المناطق الخطرة أو المحظورة.",
      ],
      es: [
        "Utilice los cruces peatonales designados para cruzar la calle.",
        "Preste atención al tráfico antes y durante el cruce.",
        "No salte de vehículos en movimiento.",
        "Evite zonas peligrosas o restringidas.",
      ],
      en: [
        "Use designated pedestrian crossings when crossing roads.",
        "Stay alert and check both directions before crossing.",
        "Do not jump on or off moving vehicles.",
        "Avoid unsafe or restricted areas.",
      ],
    },
    {
      arTitle: "المواد الخطرة (HazMat)",
      esTitle: "Materiales peligrosos (HazMat)",
      enTitle: "Hazardous Materials (HazMat)",
      ar: [
        "ابتعد عن أي تسربات أو انسكابات كيميائية.",
        "لا تلمس أي مواد مجهولة الهوية.",
        "اغسل يديك فورًا بعد أي تعرض محتمل للمواد الكيميائية.",
        "أبلغ الجهات المختصة فورًا عن أي حادث أو تسرب.",
      ],
      es: [
        "Manténgase alejado de fugas o derrames químicos.",
        "No toque ni manipule sustancias desconocidas.",
        "Lávese las manos inmediatamente tras cualquier posible exposición.",
        "Informe de inmediato a las autoridades competentes sobre cualquier incidente.",
      ],
      en: [
        "Avoid contact with chemical spills or hazardous leaks.",
        "Do not touch or handle unknown substances.",
        "Wash hands thoroughly immediately after potential exposure.",
        "Report any hazardous material incident to the appropriate authorities.",
      ],
    },
    {
      arTitle: "الأمن السيبراني",
      esTitle: "Riesgos cibernéticos y emergencias digitales",
      enTitle: "Cyber Risks & Digital Emergencies",
      ar: [
        "لا تفتح الروابط أو الملفات المجهولة أو المشبوهة.",
        "استخدم كلمات مرور قوية وفريدة لكل حساب.",
        "لا تشارك بياناتك الشخصية عبر الإنترنت.",
        "فعّل برامج الحماية مثل مضاد الفيروسات والجدار الناري على جميع أجهزتك.",
      ],
      es: [
        "No abra enlaces o archivos desconocidos o sospechosos.",
        "Utilice contraseñas fuertes y únicas para cada cuenta.",
        "No comparta información personal o sensible en línea.",
        "Active programas de protección como antivirus y cortafuegos en todos los dispositivos.",
      ],
      en: [
        "Do not open unknown or suspicious links.",
        "Use strong, unique passwords for all accounts.",
        "Do not share personal or sensitive information online.",
        "Enable antivirus and security protection on all devices.",
      ],
    },
  ];

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">{t.nav.guidelines}</h1>
      <p className="text-dark/80 dark:text-secondary/80">
        Emergency & Safety Guidelines in Arabic, Spanish, and English.
      </p>

      <div className="space-y-4">
        {sections.map((section) => (
          <details
            key={section.enTitle}
            className="rounded-xl border border-primary/20 bg-white p-4 dark:bg-zinc-900"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-primary">
              {locale === "ar"
                ? section.arTitle
                : locale === "es"
                  ? section.esTitle
                  : section.enTitle}
            </summary>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <article className="rounded-lg bg-primary/5 p-3">
                <h3 className="mb-2 font-semibold text-dark dark:text-secondary">العربية</h3>
                <ol className="list-decimal space-y-1 ps-5 text-sm text-dark dark:text-secondary">
                  {section.ar.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
              <article className="rounded-lg bg-primary/5 p-3">
                <h3 className="mb-2 font-semibold text-dark dark:text-secondary">Español</h3>
                <ol className="list-decimal space-y-1 ps-5 text-sm text-dark dark:text-secondary">
                  {section.es.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
              <article className="rounded-lg bg-primary/5 p-3">
                <h3 className="mb-2 font-semibold text-dark dark:text-secondary">English</h3>
                <ol className="list-decimal space-y-1 ps-5 text-sm text-dark dark:text-secondary">
                  {section.en.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
