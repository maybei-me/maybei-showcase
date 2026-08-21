import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  CircleUserRound,
  Clock3,
  Handshake,
  Search,
  ShieldCheck,
  Sparkles,
  TimerReset,
  UsersRound,
  Video,
} from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { type Language, useLanguage } from "@/contexts/LanguageContext";
import "./talio-v2.css";

type V2Copy = {
  edition: string;
  original: string;
  heroBefore: string;
  heroAccent: string;
  heroAfter: string;
  heroCopy: string;
  heroPeopleAlt: string;
  primaryCta: string;
  secondaryCta: string;
  versionNavLabel: string;
  problemEyebrow: string;
  problemTitle: string;
  candidate: string;
  employer: string;
  candidatePain: string[];
  employerPain: string[];
  timeNote: string;
  workflowEyebrow: string;
  workflowTitle: string;
  workflowNote: string;
  workflow: Array<{ title: string; copy: string }>;
  principleEyebrow: string;
  principleTitle: string;
  principleCopy: string;
  principleBand: string;
  principleClose: string;
  responsibleEyebrow: string;
  responsibleTitle: string;
  responsibleCopy: string;
  safeguards: Array<{ title: string; copy: string }>;
  assessmentEyebrow: string;
  assessmentTitle: string;
  assessmentCopy: string;
  assessment: Array<{ title: string; copy: string }>;
  assessmentBand: string;
  trustEyebrow: string;
  trustTitle: string;
  trustCopy: string;
  trustItems: Array<{ title: string; copy: string }>;
  impactEyebrow: string;
  impactTitle: string;
  impactItems: string[];
  closingEyebrow: string;
  closingTitle: string;
  closingCopy: string;
  closingCta: string;
  footer: string;
};

const V2_COPY: Record<Language, V2Copy> = {
  en: {
    edition: "Presentation edition · v2",
    original: "View original product page",
    heroBefore: "AI should",
    heroAccent: "open doors",
    heroAfter: "— not close them.",
    heroCopy: "Talio is building more transparent infrastructure for access to work. Human hiring. Intelligent technology.",
    heroPeopleAlt: "Talio visual featuring people",
    primaryCta: "Explore Talio for your team",
    secondaryCta: "See the original product page",
    versionNavLabel: "Talio page versions",
    problemEyebrow: "The problem",
    problemTitle: "Hiring is opaque for candidates — and overloaded for employers.",
    candidate: "Candidate",
    employer: "Employer",
    candidatePain: ["Repeated applications and forms.", "Automated screening with no clear status.", "Silence instead of useful feedback."],
    employerPain: ["Hundreds of applications per role.", "Hours spent on first-round screening.", "Strong candidates lost in the noise."],
    timeNote: "Both sides lose what matters most: time.",
    workflowEyebrow: "The platform",
    workflowTitle: "One transparent path to hire.",
    workflowNote: "Transparency lives at every step — for both sides.",
    workflow: [
      { title: "Discover", copy: "One profile. No repeated forms." },
      { title: "Match", copy: "Skills, experience and preferences." },
      { title: "Chat & Video", copy: "Start in chat. Continue on video." },
      { title: "Hire", copy: "Clear status. No months of silence." },
    ],
    principleEyebrow: "Our principle",
    principleTitle: "Speed without fairness is not progress.",
    principleCopy: "AI can find matches faster. But faster does not mean fairer.",
    principleBand: "AI should open doors — not close them.",
    principleClose: "AI helps people find a fit. People make the final decision.",
    responsibleEyebrow: "Responsible AI",
    responsibleTitle: "AI should support decisions — not silently make them.",
    responsibleCopy: "Opaque automation can screen out qualified people. Talio safeguards access.",
    safeguards: [
      { title: "No automated rejection", copy: "AI can recommend. People decide." },
      { title: "Explainable matching", copy: "Both sides see the reasons behind a match." },
      { title: "Fairness and access checks", copy: "Test job skills — not disability-linked traits." },
      { title: "Human review and appeal", copy: "People can challenge an AI-led outcome." },
    ],
    assessmentEyebrow: "Expert assessment",
    assessmentTitle: "Talent is more than a score.",
    assessmentCopy: "Skills should be verified, not inferred.",
    assessment: [
      { title: "Select expertise", copy: "Candidate chooses a professional track." },
      { title: "Three experts", copy: "Talio appoints independent assessors." },
      { title: "Independent review", copy: "Each assessor reviews independently." },
      { title: "Verified Badge", copy: "One independently validated competency profile." },
    ],
    assessmentBand: "Not “AI says you are good.” — “Your skills are independently verified.”",
    trustEyebrow: "What stays visible",
    trustTitle: "A clearer path for people on both sides.",
    trustCopy: "Talio makes skills, match reasons, progress and response visible throughout the hiring journey.",
    trustItems: [
      { title: "Verified skills", copy: "Independent expert assessment and badge." },
      { title: "Explainable match", copy: "Clear reasons behind every match." },
      { title: "One hiring flow", copy: "AI Match → Chat + Video → Hire." },
      { title: "Response timer", copy: "Visible employer accountability." },
    ],
    impactEyebrow: "Measure what matters",
    impactTitle: "More efficient — and more human.",
    impactItems: ["Candidate time saved", "Employer screening hours saved", "Shorter time-to-hire", "Less ghosting", "Skills-first access to work"],
    closingEyebrow: "The human side of hiring",
    closingTitle: "Behind every resume is a person. Behind every role is a team.",
    closingCopy: "Help prove that AI can make hiring more effective — without making it less human.",
    closingCta: "Talk about a Talio pilot",
    footer: "Talio presentation edition · Human hiring. Intelligent technology.",
  },
  ru: {
    edition: "Версия по презентации · v2",
    original: "Открыть исходную страницу продукта",
    heroBefore: "AI должен",
    heroAccent: "открывать двери",
    heroAfter: "— а не закрывать их.",
    heroCopy: "Talio формирует прозрачную инфраструктуру найма. Человеческие решения. Интеллектуальные технологии.",
    heroPeopleAlt: "Визуал Talio с людьми",
    primaryCta: "Посмотреть Talio для вашей команды",
    secondaryCta: "Посмотреть исходную страницу продукта",
    versionNavLabel: "Версии страниц Talio",
    problemEyebrow: "Проблема",
    problemTitle: "Процесс найма непрозрачен для кандидатов и перегружен для работодателей.",
    candidate: "Кандидат",
    employer: "Работодатель",
    candidatePain: ["Повторные отклики и анкеты.", "Автоматический отбор без понятного статуса.", "Отсутствие обратной связи вместо ясного решения."],
    employerPain: ["Сотни откликов на одну вакансию.", "Часы на первичный отбор.", "Сильные кандидаты теряются в потоке откликов."],
    timeNote: "В результате обе стороны теряют самое ценное — время.",
    workflowEyebrow: "Платформа",
    workflowTitle: "Единый прозрачный процесс найма.",
    workflowNote: "Прозрачность на каждом этапе — для кандидата и работодателя.",
    workflow: [
      { title: "Поиск", copy: "Единый профиль. Без повторных анкет." },
      { title: "Сопоставление", copy: "Навыки, опыт и ожидания." },
      { title: "Чат и видео", copy: "Начните диалог в чате. Продолжите видеовстречей." },
      { title: "Найм", copy: "Понятный статус. Без месяцев ожидания." },
    ],
    principleEyebrow: "Наш принцип",
    principleTitle: "Скорость без справедливости — это не прогресс.",
    principleCopy: "AI ускоряет поиск релевантных совпадений. Но скорость не гарантирует справедливость.",
    principleBand: "AI должен открывать двери — а не закрывать их.",
    principleClose: "AI помогает находить релевантные совпадения. Окончательное решение остаётся за людьми.",
    responsibleEyebrow: "Ответственный AI",
    responsibleTitle: "AI должен усиливать решения, а не принимать их незаметно.",
    responsibleCopy: "Непрозрачная автоматизация может отсечь квалифицированных кандидатов. Talio сохраняет доступ к возможностям.",
    safeguards: [
      { title: "Без автоматических отказов", copy: "AI рекомендует, а решение принимает человек." },
      { title: "Объяснимое сопоставление", copy: "Кандидат и работодатель видят, почему возникло совпадение." },
      { title: "Проверки справедливости и доступа", copy: "Проверяем профессиональные навыки, а не признаки, связанные с инвалидностью." },
      { title: "Проверка человеком и апелляция", copy: "Можно запросить проверку решения человеком." },
    ],
    assessmentEyebrow: "Экспертная оценка",
    assessmentTitle: "Талант — не только оценка.",
    assessmentCopy: "Навыки нужно подтверждать фактами, а не предполагать.",
    assessment: [
      { title: "Профессиональное направление", copy: "Кандидат выбирает область экспертизы." },
      { title: "Три эксперта", copy: "Talio назначает трёх независимых экспертов." },
      { title: "Независимая оценка", copy: "Каждый эксперт даёт независимую оценку." },
      { title: "Подтверждённый профиль", copy: "Профиль компетенций, подтверждённый независимой оценкой." },
    ],
    assessmentBand: "Не «AI считает вас хорошим», а «Ваши навыки подтверждены независимой оценкой».",
    trustEyebrow: "Прозрачность на всём пути",
    trustTitle: "Понятный процесс для обеих сторон.",
    trustCopy: "Talio показывает навыки, основания для совпадения, этапы процесса и скорость ответа на всём пути найма.",
    trustItems: [
      { title: "Подтверждённые компетенции", copy: "Независимая оценка и подтверждённый профиль." },
      { title: "Объяснимое сопоставление", copy: "Прозрачные основания для каждого совпадения." },
      { title: "Сквозной процесс", copy: "AI-сопоставление → чат и видео → найм." },
      { title: "Контроль ответа", copy: "Видимый срок ответа работодателя." },
    ],
    impactEyebrow: "Измеряем то, что важно",
    impactTitle: "Быстрее — без потери человечности.",
    impactItems: ["Время, возвращённое кандидатам", "Часы, сэкономленные на первичном отборе", "Сокращение срока найма", "Меньше откликов без ответа", "Доступ к работе через подтверждённые навыки"],
    closingEyebrow: "Человеческая сторона найма",
    closingTitle: "За каждым резюме — человек. За каждой ролью — команда.",
    closingCopy: "Помогите показать, что AI может сделать процесс найма эффективнее — сохранив уважение к людям.",
    closingCta: "Обсудить пилот Talio",
    footer: "Talio · Версия по презентации. Человеческие решения. Интеллектуальные технологии.",
  },
  ar: {
    edition: "نسخة العرض التقديمي · v2",
    original: "عرض صفحة المنتج الأصلية",
    heroBefore: "ينبغي للذكاء الاصطناعي أن",
    heroAccent: "يفتح الأبواب",
    heroAfter: "— لا أن يغلقها.",
    heroCopy: "تبني Talio بنية تحتية أكثر شفافية للوصول إلى العمل. توظيف إنساني. تكنولوجيا ذكية.",
    heroPeopleAlt: "صورة Talio لأشخاص",
    primaryCta: "اكتشفوا Talio لفريقكم",
    secondaryCta: "عرض صفحة المنتج الأصلية",
    versionNavLabel: "إصدارات صفحات Talio",
    problemEyebrow: "المشكلة",
    problemTitle: "التوظيف غامض للمرشحين — ومثقل بالعبء لأصحاب العمل.",
    candidate: "المرشح",
    employer: "صاحب العمل",
    candidatePain: ["طلبات ونماذج متكررة.", "فرز آلي بلا حالة واضحة.", "صمت بدلاً من تغذية راجعة مفيدة."],
    employerPain: ["مئات الطلبات لكل وظيفة.", "ساعات تُنفق في الفرز الأولي.", "مرشحون أقوياء يضيعون وسط الضوضاء."],
    timeNote: "يخسر الطرفان ما يهم أكثر: الوقت.",
    workflowEyebrow: "المنصة",
    workflowTitle: "مسار واحد شفاف نحو التوظيف.",
    workflowNote: "الشفافية حاضرة في كل خطوة — لكلا الطرفين.",
    workflow: [
      { title: "اكتشاف", copy: "ملف واحد. بلا نماذج متكررة." },
      { title: "مطابقة", copy: "المهارات والخبرة والتفضيلات." },
      { title: "محادثة وفيديو", copy: "ابدأ في المحادثة. تابع بالفيديو." },
      { title: "توظيف", copy: "حالة واضحة. بلا أشهر من الصمت." },
    ],
    principleEyebrow: "مبدؤنا",
    principleTitle: "السرعة بلا عدالة ليست تقدماً.",
    principleCopy: "يمكن للذكاء الاصطناعي أن يجد المطابقات بسرعة أكبر. لكن الأسرع لا يعني الأعدل.",
    principleBand: "ينبغي للذكاء الاصطناعي أن يفتح الأبواب — لا أن يغلقها.",
    principleClose: "يساعد الذكاء الاصطناعي الناس على إيجاد الملاءمة. البشر يتخذون القرار النهائي.",
    responsibleEyebrow: "ذكاء اصطناعي مسؤول",
    responsibleTitle: "ينبغي للذكاء الاصطناعي أن يدعم القرارات — لا أن يتخذها بصمت.",
    responsibleCopy: "قد تستبعد الأتمتة الغامضة أشخاصاً مؤهلين. تحمي Talio إمكانية الوصول.",
    safeguards: [
      { title: "لا رفض آلي", copy: "يمكن للذكاء الاصطناعي أن يوصي. البشر يقررون." },
      { title: "مطابقة قابلة للتفسير", copy: "يرى الطرفان أسباب المطابقة." },
      { title: "فحوص العدالة والوصول", copy: "اختبار مهارات العمل لا السمات المرتبطة بالإعاقة." },
      { title: "مراجعة بشرية واستئناف", copy: "يمكن للناس الطعن في نتيجة يقودها الذكاء الاصطناعي." },
    ],
    assessmentEyebrow: "تقييم الخبراء",
    assessmentTitle: "الموهبة أكثر من مجرد درجة.",
    assessmentCopy: "ينبغي التحقق من المهارات، لا استنتاجها.",
    assessment: [
      { title: "اختيار الخبرة", copy: "يختار المرشح مساراً مهنياً." },
      { title: "ثلاثة خبراء", copy: "تعيّن Talio مقيّمين مستقلين." },
      { title: "مراجعة مستقلة", copy: "يراجع كل مقيّم بصورة مستقلة." },
      { title: "شارة موثقة", copy: "ملف كفاءة واحد تم التحقق منه بشكل مستقل." },
    ],
    assessmentBand: "ليس «الذكاء الاصطناعي يقول إنك جيد». — «مهاراتك تحققت منها جهة مستقلة».",
    trustEyebrow: "ما يبقى ظاهراً",
    trustTitle: "مسار أوضح للناس على جانبي التوظيف.",
    trustCopy: "تجعل Talio المهارات وأسباب المطابقة والتقدم والاستجابة ظاهرة عبر رحلة التوظيف.",
    trustItems: [
      { title: "مهارات موثقة", copy: "تقييم مستقل من خبراء وشارة." },
      { title: "مطابقة قابلة للتفسير", copy: "أسباب واضحة وراء كل مطابقة." },
      { title: "مسار توظيف واحد", copy: "مطابقة AI → محادثة وفيديو → توظيف." },
      { title: "مؤقت الرد", copy: "مساءلة مرئية لصاحب العمل." },
    ],
    impactEyebrow: "قياس ما يهم",
    impactTitle: "أكثر كفاءة — وأكثر إنسانية.",
    impactItems: ["وقت المرشح الذي تم توفيره", "ساعات فرز صاحب العمل التي تم توفيرها", "وقت توظيف أقصر", "قدر أقل من التجاهل", "وصول إلى العمل قائم على المهارات"],
    closingEyebrow: "الجانب الإنساني من التوظيف",
    closingTitle: "خلف كل سيرة ذاتية شخص. وخلف كل وظيفة فريق.",
    closingCopy: "ساعدوا في إثبات أن AI يمكن أن يجعل التوظيف أكثر فاعلية — من دون أن يجعله أقل إنسانية.",
    closingCta: "التحدث عن تجربة Talio الأولية",
    footer: "نسخة Talio من العرض التقديمي · توظيف إنساني. تكنولوجيا ذكية.",
  },
};

const ISSUE_ICONS = [CircleUserRound, BriefcaseBusiness];
const WORKFLOW_ICONS = [Search, Sparkles, Video, Handshake];
const SAFEGUARD_ICONS = [CheckCircle2, Search, ShieldCheck, UsersRound];
const ASSESSMENT_ICONS = [Sparkles, UsersRound, CheckCircle2, BadgeCheck];
const TRUST_ICONS = [BadgeCheck, Search, Video, TimerReset];

export default function TalioV2() {
  const { language } = useLanguage();
  const copy = V2_COPY[language];

  return (
    <div className="talio-v2">
      <SiteHeader />
      <main data-no-translate>
        <section className="talio-v2__hero">
          <div className="talio-v2__hero-orb talio-v2__hero-orb--one" aria-hidden="true" />
          <div className="talio-v2__hero-orb talio-v2__hero-orb--two" aria-hidden="true" />
          <div className="talio-v2__wrap talio-v2__hero-grid">
            <div className="talio-v2__hero-copy">
              <Link className="talio-v2__back" href="/talio"><ArrowLeft size={16} /> {copy.original}</Link>
              <img className="talio-v2__logo" src="/manus-storage/talio-logo-light_2b15328e.webp" alt="talio" />
              <span className="talio-v2__eyebrow">{copy.edition}</span>
              <h1>{copy.heroBefore} <em>{copy.heroAccent}</em> <span>{copy.heroAfter}</span></h1>
              <p>{copy.heroCopy}</p>
              <div className="talio-v2__actions">
                <Link className="talio-v2__button talio-v2__button--lime" href="/contact">{copy.primaryCta}<ArrowUpRight size={17} /></Link>
                <Link className="talio-v2__text-link" href="/talio">{copy.secondaryCta}<ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="talio-v2__hero-proof">
              <img className="talio-v2__hero-people" src="/manus-storage/talio-built-for-people_59ee58a8.png" alt={copy.heroPeopleAlt} />
            </div>
          </div>
        </section>

        <nav className="talio-v2__version-nav" aria-label={copy.versionNavLabel}>
          <div className="talio-v2__wrap">
            <span>{copy.edition}</span>
            <Link href="/talio">{copy.original} <ArrowRight size={14} /></Link>
          </div>
        </nav>

        <section className="talio-v2__section talio-v2__section--cream">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow talio-v2__eyebrow--green">{copy.problemEyebrow}</span>
            <h2>{copy.problemTitle}</h2>
            <div className="talio-v2__issue-grid">
              {[copy.candidatePain, copy.employerPain].map((points, index) => {
                const Icon = ISSUE_ICONS[index];
                const label = index === 0 ? copy.candidate : copy.employer;
                return <article className="talio-v2__issue-card" key={label}><Icon size={28} /><h3>{label}</h3><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></article>;
              })}
            </div>
            <div className="talio-v2__time-note"><Clock3 size={20} /><p>{copy.timeNote}</p></div>
          </div>
        </section>

        <section className="talio-v2__section talio-v2__section--cream">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow talio-v2__eyebrow--green">{copy.workflowEyebrow}</span>
            <h2>{copy.workflowTitle}</h2>
            <div className="talio-v2__workflow">
              {copy.workflow.map((item, index) => {
                const Icon = WORKFLOW_ICONS[index];
                return <div className="talio-v2__workflow-wrap" key={item.title}><article className={`talio-v2__workflow-card ${index === 1 ? "talio-v2__workflow-card--dark" : ""}`}><Icon size={27} /><h3>{item.title}</h3><p>{item.copy}</p></article>{index < copy.workflow.length - 1 && <ArrowRight className="talio-v2__workflow-arrow" size={22} />}</div>;
              })}
            </div>
            <p className="talio-v2__workflow-note">{copy.workflowNote}</p>
          </div>
        </section>

        <section className="talio-v2__principle">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow">{copy.principleEyebrow}</span>
            <h2>{copy.principleTitle}</h2>
            <p className="talio-v2__principle-copy">{copy.principleCopy}</p>
            <div className="talio-v2__principle-band"><span>{copy.principleBand}</span><Sparkles size={30} /></div>
            <p className="talio-v2__principle-close">{copy.principleClose}</p>
          </div>
        </section>

        <section className="talio-v2__section talio-v2__section--green">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow">{copy.responsibleEyebrow}</span>
            <div className="talio-v2__split-heading talio-v2__split-heading--light"><h2>{copy.responsibleTitle}</h2><p>{copy.responsibleCopy}</p></div>
            <div className="talio-v2__safeguard-grid">
              {copy.safeguards.map((item, index) => { const Icon = SAFEGUARD_ICONS[index]; return <article key={item.title}><span>0{index + 1}</span><Icon size={26} /><h3>{item.title}</h3><p>{item.copy}</p></article>; })}
            </div>
          </div>
        </section>

        <section className="talio-v2__section talio-v2__section--cream">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow talio-v2__eyebrow--green">{copy.assessmentEyebrow}</span>
            <h2>{copy.assessmentTitle}</h2>
            <p className="talio-v2__section-lead">{copy.assessmentCopy}</p>
            <div className="talio-v2__assessment-flow">
              {copy.assessment.map((item, index) => { const Icon = ASSESSMENT_ICONS[index]; return <div className="talio-v2__assessment-wrap" key={item.title}><article><span>0{index + 1}</span><Icon size={26} /><h3>{item.title}</h3><p>{item.copy}</p></article>{index < copy.assessment.length - 1 && <ArrowRight size={20} />}</div>; })}
            </div>
            <div className="talio-v2__dark-band">{copy.assessmentBand}</div>
          </div>
        </section>

        <section className="talio-v2__section talio-v2__section--paper">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow talio-v2__eyebrow--green">{copy.trustEyebrow}</span>
            <div className="talio-v2__split-heading"><h2>{copy.trustTitle}</h2><p>{copy.trustCopy}</p></div>
            <div className="talio-v2__trust-layout">
              <article className="talio-v2__trust-layer talio-v2__trust-layer--wide"><span>{copy.trustEyebrow}</span><h3>{copy.trustCopy}</h3>{copy.trustItems.map((item, index) => { const Icon = TRUST_ICONS[index]; return <p key={item.title}><Icon size={20} /><strong>{item.title}</strong> {item.copy}</p>; })}</article>
            </div>
          </div>
        </section>

        <section className="talio-v2__impact">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow">{copy.impactEyebrow}</span>
            <h2>{copy.impactTitle}</h2>
            <div>{copy.impactItems.map(item => <span key={item}><CheckCircle2 size={18} />{item}</span>)}</div>
          </div>
        </section>

        <section className="talio-v2__closing">
          <div className="talio-v2__wrap">
            <span className="talio-v2__eyebrow">{copy.closingEyebrow}</span>
            <h2>{copy.closingTitle}</h2>
            <p>{copy.closingCopy}</p>
            <Link className="talio-v2__button talio-v2__button--lime" href="/contact">{copy.closingCta}<ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </main>
      <footer className="talio-v2__footer"><img src="/manus-storage/talio-logo-light_2b15328e.webp" alt="talio" /><span>{copy.footer}</span><Link href="/talio">{copy.original}</Link></footer>
    </div>
  );
}
