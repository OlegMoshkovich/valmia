"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConceptOverlay from "@/components/ConceptOverlay";

const dark = "#2c2b28";
const mid = "#4a4845";
const divider = "#c8c4b4";
const font = "var(--font-cormorant)";

const translations = {
  en: {
    hero: {
      welcome: "Welcome to ValMia",
      subline: "A calm companion for Residents and Visitors",
    },
    mission: {
      headline: "Strengthening the Connection Between Visitors and Village Life",
      subheadline: "Helping alpine destinations create meaningful connections between guests, residents, and local culture.",
      intro: [
        "Across many alpine regions, tourism is evolving.",
        "Visitors are increasingly looking for authentic experiences and a deeper connection to the places they visit. At the same time, villages are exploring how tourism can support local life and community vitality.",
        "We believe that small, voluntary connections between visitors and residents can create lasting value — socially, culturally, and economically.",
        "Our initiative explores how destinations can gently support these connections through a simple digital and community-based platform.",
      ],
    },
    opportunity: {
      title: "The Opportunity for Alpine Destinations",
      subheading: "Tourism and Village Life — A Shared Opportunity",
      intro: "Many mountain destinations are currently navigating similar questions:",
      bullets: [
        "How can visitors experience authentic village life?",
        "How can local residents benefit more directly from tourism?",
        "How can destinations strengthen year-round vitality?",
        "How can second-home owners feel more connected to the places they love?",
      ],
      closing: "Destinations that successfully connect tourism and community often create stronger identity, higher visitor satisfaction, and more resilient local economies.",
    },
    concept: {
      title: "The Concept",
      leftHeading: "A Social Layer for the Village",
      leftIntro: "We are exploring a concept that helps connect:",
      leftBullets: ["Visitors", "Residents", "Second-home owners", "Local knowledge, activities, and experiences"],
      rightGoal: "The goal is simple:",
      rightGoalDetail: "To create small opportunities for meaningful interaction and participation in village life.",
      rightExamplesLabel: "Examples might include:",
      rightBullets: [
        "Discovering local experiences and informal activities",
        "Sharing local knowledge and traditions",
        "Connecting guests with people who love their village",
        "Weather overview and local conditions",
        "Community events and local gatherings",
        "Neighbourhood support and everyday help",
        "Digital pinboard and local marketplace",
      ],
      rightClosing: "Participation is always voluntary and designed to complement existing local structures.",
      conceptLink: "Explore all features",
    },
    howItWorks: {
      title: "How It Works",
      subheading: "Simple, Voluntary, Community-Oriented",
      intro: "The platform provides a gentle digital layer that helps people discover opportunities to connect.",
      principlesLabel: "Key principles:",
      principles: [
        { title: "Voluntary participation", desc: "Residents choose if and how they want to be involved." },
        { title: "Support for existing initiatives", desc: "Local businesses, activities, and traditions can gain additional visibility." },
        { title: "Low threshold for guests", desc: "Visitors can discover authentic experiences beyond typical tourism offerings." },
      ],
      closing: "Technology simply supports discovery — the real value comes from people and place.",
    },
    whyItMatters: {
      title: "Why It Matters",
      subheading: "Strengthening the Village Ecosystem",
      intro: "When visitors feel connected to a place, several positive effects can emerge:",
      bullets: [
        "Guests stay longer and return more often",
        "Local culture and traditions gain visibility",
        "Tourism revenue spreads more widely within the community",
        "Visitors feel more integrated into village life",
        "Residents experience tourism as more inclusive",
      ],
      closing: "Ultimately, the goal is to support destinations where tourism and local life strengthen each other.",
    },
    whoWeAre: {
      title: "Who We Are",
      aboutHeading: "About Us",
      aboutParagraphs: [
        "We are passionate about alpine destinations and the communities that shape them.",
        "Our interest lies in exploring how tourism can support vibrant village life while preserving the authenticity and character that make these places special.",
        "We believe that thoughtful collaboration between visitors, residents, and local institutions can help alpine villages remain both welcoming destinations and thriving communities.",
      ],
      contactHeading: "Explore the Idea Together",
      contactParagraphs: [
        "We are always interested in exchanging ideas with municipalities, tourism organizations, and local stakeholders who are thinking about the future of their destinations.",
        "If this concept resonates with you, we would be happy to continue the conversation.",
      ],
      contactLabel: "Contact:",
      contactName: null as string | null,
      contactEmail: "jasmin@valmia.ch",
      form: {
        namePlaceholder: "Your name",
        emailPlaceholder: "Your email",
        messagePlaceholder: "Your message",
        submit: "Send message",
        success: "Thank you — we'll be in touch.",
        error: "Something went wrong. Please try again.",
      },
    },
  },
  de: {
    hero: {
      welcome: "Willkommen bei ValMia",
      subline: "Ein ruhiger Begleiter für Einheimische und Gäste",
    },
    mission: {
      headline: "Tourismus und Dorfleben stärker verbinden",
      subheadline: "Eine Initiative für alpine Destinationen, die Gäste, Einheimische und lokale Kultur näher zusammenbringen möchte.",
      intro: [
        "In vielen alpinen Regionen verändert sich der Tourismus.",
        "Gäste suchen zunehmend nach authentischen Erlebnissen und einer tieferen Verbindung zu den Orten, die sie besuchen. Gleichzeitig stellen sich viele Dörfer die Frage, wie Tourismus das lokale Leben stärken kann – statt nur parallel dazu zu existieren.",
        "Wir glauben, dass kleine, freiwillige Begegnungen zwischen Gästen und Einheimischen einen nachhaltigen Mehrwert schaffen können – sozial, kulturell und wirtschaftlich.",
        "Unsere Initiative untersucht, wie Destinationen solche Begegnungen durch eine einfache digitale und gemeinschaftsorientierte Plattform unterstützen können.",
      ],
    },
    opportunity: {
      title: "Die Chance für Alpine Destinationen",
      subheading: "Tourismus und Dorfleben – eine gemeinsame Chance",
      intro: "Viele Bergdestinationen beschäftigen sich heute mit ähnlichen Fragen:",
      bullets: [
        "Wie können Gäste das authentische Dorfleben erleben?",
        "Wie können Einheimische stärker vom Tourismus profitieren?",
        "Wie lässt sich die ganzjährige Lebendigkeit eines Dorfes stärken?",
        "Wie können sich Zweitwohnungsbesitzer stärker mit ihrem Ort verbunden fühlen?",
      ],
      closing: "Destinationen, denen es gelingt, Tourismus und Gemeinschaft miteinander zu verbinden, entwickeln oft eine stärkere Identität, zufriedenere Gäste und eine widerstandsfähigere lokale Wirtschaft.",
    },
    concept: {
      title: "Das Konzept",
      leftHeading: "Eine soziale Ebene für das Dorf",
      leftIntro: "Wir untersuchen ein Konzept, das Menschen innerhalb einer Destination besser miteinander verbindet:",
      leftBullets: ["Gäste", "Einheimische", "Zweitwohnungsbesitzer", "Lokales Wissen, Aktivitäten und Erfahrungen"],
      rightGoal: "Das Ziel ist einfach:",
      rightGoalDetail: "Kleine Möglichkeiten schaffen, damit Gäste am Dorfleben teilhaben können.",
      rightExamplesLabel: "Beispiele könnten sein:",
      rightBullets: [
        "Lokale Aktivitäten oder informelle Begegnungen entdecken",
        "Wissen, Traditionen und Geschichten teilen",
        "Gäste mit Menschen verbinden, die ihre Region gerne weitergeben",
        "Wetterübersicht und lokale Verhältnisse",
        "Gemeinschaftsveranstaltungen und lokale Treffen",
        "Nachbarschaftshilfe im Alltag",
        "Digitales Schwarzes Brett und lokaler Marktplatz",
      ],
      rightClosing: "Die Teilnahme ist freiwillig und soll bestehende Strukturen ergänzen – nicht ersetzen.",
      conceptLink: "Alle Funktionen erkunden",
    },
    howItWorks: {
      title: "Wie es funktioniert",
      subheading: "Einfach, freiwillig und gemeinschaftsorientiert",
      intro: "Die Plattform schafft eine digitale Ebene, die Menschen dabei hilft, Möglichkeiten zur Begegnung zu entdecken.",
      principlesLabel: "Wichtige Grundprinzipien:",
      principles: [
        { title: "Freiwillige Teilnahme", desc: "Einheimische entscheiden selbst, ob und wie sie teilnehmen möchten." },
        { title: "Unterstützung bestehender Angebote", desc: "Lokale Initiativen, Betriebe und Aktivitäten können zusätzliche Sichtbarkeit erhalten." },
        { title: "Authentischer Zugang für Gäste", desc: "Besucher entdecken authentische Möglichkeiten, das Dorf jenseits klassischer Tourismusangebote zu erleben." },
      ],
      closing: "Die Technologie unterstützt lediglich die Vermittlung – der eigentliche Wert entsteht durch die Menschen vor Ort.",
    },
    whyItMatters: {
      title: "Wieso das wichtig ist",
      subheading: "Das lokale Ökosystem stärken",
      intro: "Wenn Gäste eine stärkere Verbindung zu einem Ort aufbauen, können sich verschiedene positive Effekte ergeben:",
      bullets: [
        "Gäste bleiben länger und kommen häufiger zurück",
        "Lokale Kultur und Traditionen erhalten mehr Sichtbarkeit",
        "Tourismuseinnahmen verteilen sich breiter innerhalb der Gemeinde",
        "Besucher fühlen sich stärker als Teil des Dorfes",
        "Einheimische erleben Tourismus als integrativer",
      ],
      closing: "Langfristig geht es darum, Destinationen zu stärken, in denen Tourismus und lokales Leben sich gegenseitig unterstützen.",
    },
    whoWeAre: {
      title: "Über uns",
      aboutHeading: "Wer wir sind",
      aboutParagraphs: [
        "Wir interessieren uns leidenschaftlich für alpine Destinationen und die Gemeinschaften, die sie prägen.",
        "Unser Anliegen ist es zu erforschen, wie Tourismus lebendige Dorfstrukturen unterstützen kann, ohne die Authentizität und den Charakter dieser Orte zu verlieren.",
        "Wir sind überzeugt, dass eine sorgfältige Zusammenarbeit zwischen Gästen, Einheimischen und lokalen Institutionen dazu beitragen kann, alpine Dörfer als attraktive Lebensräume und Destinationen zu erhalten.",
      ],
      contactHeading: "Gemeinsam die Idee erkunden",
      contactParagraphs: [
        "Wir freuen uns über den Austausch mit Gemeinden, Tourismusorganisationen und lokalen Akteuren, die sich mit der zukünftigen Entwicklung ihrer Destination beschäftigen.",
        "Wenn dieser Ansatz für Sie interessant klingt, freuen wir uns über ein Gespräch.",
      ],
      contactLabel: "Kontakt:",
      contactName: "Jasmin zu Sayn-Wittgenstein" as string | null,
      contactEmail: "jasmin@valmia.ch",
      form: {
        namePlaceholder: "Ihr Name",
        emailPlaceholder: "Ihre E-Mail",
        messagePlaceholder: "Ihre Nachricht",
        submit: "Nachricht senden",
        success: "Vielen Dank — wir melden uns.",
        error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      },
    },
  },
};

function SectionDivider() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <hr style={{ borderColor: divider }} />
    </div>
  );
}

function BulletItem({ text }: { text: string }) {
  return (
    <li
      className="flex items-start gap-3 text-base md:text-lg font-light leading-relaxed"
      style={{ fontFamily: font, color: mid }}
    >
      <span
        className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: mid }}
      />
      {text}
    </li>
  );
}

export default function Home() {
  const [lang, setLang] = useState<"en" | "de">("de");
  const [scrolled, setScrolled] = useState(false);
  const [showConcept, setShowConcept] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});

    const handleEnded = () => {
      let lastTime = performance.now();
      const step = (now: number) => {
        const v = videoRef.current;
        if (!v) return;
        const delta = (now - lastTime) / 1000;
        lastTime = now;
        v.currentTime = Math.max(0, v.currentTime - delta);
        if (v.currentTime <= 0) {
          v.play().catch(() => {});
          return;
        }
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  const t = translations[lang];

  return (
    <div id="top" style={{ backgroundColor: "#efede1" }}>
      <Navbar lang={lang} onToggle={() => setLang(lang === "en" ? "de" : "en")} transparent={!scrolled} />

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Background video (desktop) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="hidden md:block absolute top-0 left-0 w-full object-cover"
          style={{ height: "110%" }}
          src="/background.mp4"
        />
        {/* Background image (mobile) */}
        <img
          src="/background.jpeg"
          alt=""
          className="md:hidden absolute inset-0 w-full h-full object-cover"
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-[30px] px-6 text-center">
          <h1
            className="text-3xl md:text-6xl font-normal leading-tight mb-3 text-white drop-shadow"
            style={{ fontFamily: font }}
          >
            {t.hero.welcome}
          </h1>
          <p
            className="text-base md:text-2xl font-normal tracking-wide text-white drop-shadow opacity-100 mb-12"
            style={{ fontFamily: font }}
          >
            {t.hero.subline}
          </p>
          <img
            src="/MockUp.png"
            alt="MockUp"
            className="max-h-[45vh] w-[90vw] md:max-w-[50vw] md:w-auto object-contain"
          />
        </div>
      </section>

      <SectionDivider />

      {/* Mission */}
      <section id="mission" className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <h1
          className="text-3xl md:text-5xl font-light leading-tight mb-8"
          style={{ fontFamily: font, color: dark }}
        >
          {t.mission.headline}
        </h1>
        <p
          className="text-base md:text-xl font-light leading-relaxed mb-10"
          style={{ fontFamily: font, color: mid }}
        >
          {t.mission.subheadline}
        </p>
        <div className="space-y-6">
          {t.mission.intro.map((text, i) => (
            <p
              key={i}
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ fontFamily: font, color: mid }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* The Opportunity */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: font, color: mid, fontWeight: 600 }}
        >
          {t.opportunity.title}
        </h2>
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: font, color: dark }}
        >
          {t.opportunity.subheading}
        </h3>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-6"
          style={{ fontFamily: font, color: mid }}
        >
          {t.opportunity.intro}
        </p>
        <ul className="space-y-4 mb-10">
          {t.opportunity.bullets.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: font, color: mid }}
        >
          {t.opportunity.closing}
        </p>
      </section>

      <SectionDivider />

      {/* The Concept */}
      <section id="concept" className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        {/* Label */}
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: font, color: mid, fontWeight: 600 }}
        >
          {t.concept.title}
        </h2>
        {/* Full-width heading */}
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-6"
          style={{ fontFamily: font, color: dark }}
        >
          {t.concept.leftHeading}
        </h3>
        {/* Goal text under heading, full width */}
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-2"
          style={{ fontFamily: font, color: mid }}
        >
          {t.concept.rightGoal}
        </p>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-10"
          style={{ fontFamily: font, color: mid }}
        >
          {t.concept.rightGoalDetail}
        </p>
        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <div
            className="pb-10 md:pb-0 md:pr-12 border-b md:border-b-0 md:border-r"
            style={{ borderColor: divider }}
          >
            <p
              className="text-base md:text-lg font-light leading-relaxed mb-6"
              style={{ fontFamily: font, color: mid }}
            >
              {t.concept.leftIntro}
            </p>
            <ul className="space-y-4">
              {t.concept.leftBullets.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
          </div>
          <div className="pt-10 md:pt-0 md:pl-12">
            <p
              className="text-base md:text-lg font-light leading-relaxed mb-4"
              style={{ fontFamily: font, color: mid }}
            >
              {t.concept.rightExamplesLabel}
            </p>
            <ul className="space-y-4 mb-6">
              {t.concept.rightBullets.map((item) => (
                <BulletItem key={item} text={item} />
              ))}
            </ul>
            <button
              onClick={() => setShowConcept(true)}
              className="text-base font-semibold tracking-wide underline underline-offset-4 hover:opacity-60 transition-opacity"
              style={{ fontFamily: font, color: dark }}
            >
              {t.concept.conceptLink} →
            </button>
          </div>
        </div>
        {/* Closing text after both columns */}
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: font, color: mid }}
        >
          {t.concept.rightClosing}
        </p>
      </section>

      <SectionDivider />

      {/* How It Works */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: font, color: mid, fontWeight: 600 }}
        >
          {t.howItWorks.title}
        </h2>
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: font, color: dark }}
        >
          {t.howItWorks.subheading}
        </h3>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-4"
          style={{ fontFamily: font, color: mid }}
        >
          {t.howItWorks.intro}
        </p>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-8"
          style={{ fontFamily: font, color: mid }}
        >
          {t.howItWorks.principlesLabel}
        </p>
        <div className="space-y-6 mb-10">
          {t.howItWorks.principles.map(({ title, desc }) => (
            <div key={title}>
              <h4
                className="text-base md:text-lg leading-snug mb-1"
                style={{ fontFamily: font, color: dark, fontWeight: 600 }}
              >
                {title}
              </h4>
              <p
                className="text-base md:text-lg font-light leading-relaxed"
                style={{ fontFamily: font, color: mid }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: font, color: mid }}
        >
          {t.howItWorks.closing}
        </p>
      </section>

      <SectionDivider />

      {/* Why It Matters */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: font, color: mid, fontWeight: 600 }}
        >
          {t.whyItMatters.title}
        </h2>
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: font, color: dark }}
        >
          {t.whyItMatters.subheading}
        </h3>
        <p
          className="text-base md:text-lg font-light leading-relaxed mb-6"
          style={{ fontFamily: font, color: mid }}
        >
          {t.whyItMatters.intro}
        </p>
        <ul className="space-y-4 mb-10">
          {t.whyItMatters.bullets.map((item) => (
            <BulletItem key={item} text={item} />
          ))}
        </ul>
        <p
          className="text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: font, color: mid }}
        >
          {t.whyItMatters.closing}
        </p>
      </section>

      <SectionDivider />

      {/* Who We Are */}
      <section id="about" className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <h2
          className="text-sm tracking-widest uppercase mb-3"
          style={{ fontFamily: font, color: mid, fontWeight: 600 }}
        >
          {t.whoWeAre.title}
        </h2>
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: font, color: dark }}
        >
          {t.whoWeAre.aboutHeading}
        </h3>
        <div className="space-y-6 mb-12">
          {t.whoWeAre.aboutParagraphs.map((text, i) => (
            <p
              key={i}
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ fontFamily: font, color: mid }}
            >
              {text}
            </p>
          ))}
        </div>
        <h3
          className="text-3xl md:text-5xl font-light leading-tight mb-10"
          style={{ fontFamily: font, color: dark }}
        >
          {t.whoWeAre.contactHeading}
        </h3>
        <div className="space-y-6">
          {t.whoWeAre.contactParagraphs.map((text, i) => (
            <p
              key={i}
              className="text-base md:text-lg font-light leading-relaxed"
              style={{ fontFamily: font, color: mid }}
            >
              {text}
            </p>
          ))}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              setFormStatus("sending");
              try {
                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
                });
                setFormStatus(res.ok ? "success" : "error");
              } catch {
                setFormStatus("error");
              }
            }}
            className="space-y-4 pt-2"
          >
            <input
              type="text"
              required
              placeholder={t.whoWeAre.form.namePlaceholder}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-transparent border-b py-2 text-base font-light outline-none focus:border-opacity-100 transition-colors"
              style={{ fontFamily: font, color: dark, borderColor: divider }}
            />
            <input
              type="email"
              required
              placeholder={t.whoWeAre.form.emailPlaceholder}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b py-2 text-base font-light outline-none transition-colors"
              style={{ fontFamily: font, color: dark, borderColor: divider }}
            />
            <textarea
              required
              rows={4}
              placeholder={t.whoWeAre.form.messagePlaceholder}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-transparent border-b py-2 text-base font-light outline-none resize-none transition-colors"
              style={{ fontFamily: font, color: dark, borderColor: divider }}
            />
            {formStatus === "success" ? (
              <p className="text-base font-light" style={{ fontFamily: font, color: mid }}>
                {t.whoWeAre.form.success}
              </p>
            ) : (
              <div className="flex items-center gap-6">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="text-base font-semibold tracking-wide underline underline-offset-4 hover:opacity-60 transition-opacity disabled:opacity-40"
                  style={{ fontFamily: font, color: dark }}
                >
                  {formStatus === "sending" ? "..." : t.whoWeAre.form.submit}
                </button>
                {formStatus === "error" && (
                  <p className="text-sm font-light" style={{ fontFamily: font, color: mid }}>
                    {t.whoWeAre.form.error}
                  </p>
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />

      {showConcept && <ConceptOverlay onClose={() => setShowConcept(false)} lang={lang} />}
    </div>
  );
}
