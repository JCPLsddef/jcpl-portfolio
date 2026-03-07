/* ─── Centralized translations for EN/FR ─── */

export type Locale = "en" | "fr";

export type FAQItem = {
  question: string;
  answer: string;
  featured: boolean;
};

const faqEn: FAQItem[] = [
  {
    question: "I ran Google Ads before and lost money. Why would this be different?",
    answer:
      "Because ads without a conversion system are just expensive traffic. You got clicks. The website that received them was not built to close. The targeting was not built around purchase intent. The landing page was probably your home page.\n\nI've seen this exact story more times than I can count. A business owner spends $500 to $1,000, gets clicks, gets zero calls, and concludes ads don't work in their industry.\n\nThe clicks were real. Everything behind them was not built. I build it first. Then the ads run. When the funnel exists before the traffic, the calls come. The difference between losing money on ads and 46x return on ad spend is the infrastructure that receives the traffic.",
    featured: true,
  },
  {
    question: "What exactly is the Growth Architecture?",
    answer:
      "It's a complete acquisition system. Not just a website, not just ads. All of it, built together so each part makes the others stronger. Positioning, conversion website, Google Ads, AI automation, lead qualification, monthly optimization. Built once. Improved every month. It's the last marketing system you will need to think about.",
    featured: false,
  },
  {
    question: "How fast will I see results?",
    answer:
      "Most clients receive their first booked call within 11 days of going live. The full system reaches peak efficiency at 60 to 90 days as the SEO compounds and the ad campaigns optimize. The tracking dashboard shows you every call, every cost, and every source from day one. You see exactly what is working before the first monthly review.",
    featured: false,
  },
  {
    question: "How is this different from hiring a regular agency?",
    answer:
      "An agency delivers a project and moves to the next client. I measure my success by one number: qualified calls on your calendar. If that number is not growing every month, I have not done my job. I own the full system, which means nothing falls through the gaps between vendors. And I have never sent a report full of impressions as a substitute for actual results.",
    featured: false,
  },
  {
    question: "What if it doesn't work?",
    answer:
      "If I can't move the needle in the first 90 days, I keep working until I do. I don't take clients I don't believe I can help. That's why there's an application. I review your business before agreeing to work with you, not after you have paid.",
    featured: false,
  },
  {
    question: "What does this cost?",
    answer:
      "Foundation Architecture is $2,500 to build, then $1,200 per month to maintain and optimize. Performance Engine is $2,500 per month plus ad spend minimum $500. Market Ownership is $6,000 per month plus ad spend minimum $1,500. Ad spend goes directly to Google, not to me. No long-term contracts. No hidden fees. No retainers for work not done.",
    featured: false,
  },
  {
    question: "Who is NOT a good fit?",
    answer:
      "Businesses under $5K per month in revenue. Businesses wanting a logo, a brochure site, or a one-off project. Anyone not ready to commit to a 90-day initial run. Anyone who wants to test the waters with no real system behind it.",
    featured: false,
  },
  {
    question: "Who is this built for?",
    answer:
      "Service businesses generating $5K or more per month that rely too heavily on referrals and want a predictable, scalable way to get new clients from the internet. Painters, barbershops, RV rental companies, dental clinics, and any local service where the phone needs to ring with qualified buyers.",
    featured: false,
  },
];

const faqFr: FAQItem[] = [
  {
    question: "J'ai fait du Google Ads avant et j'ai perdu de l'argent. Pourquoi ce serait différent?",
    answer:
      "Parce que les annonces sans système de conversion ne sont que du trafic coûteux. Vous avez eu des clics. Le site qui les a reçus n'était pas conçu pour convertir. Le ciblage n'était pas axé sur l'intention d'achat. La page d'atterrissage était probablement votre page d'accueil.\n\nJ'ai vu cette histoire plus de fois que je ne peux compter. Un propriétaire d'entreprise dépense 500 à 1000 $, obtient des clics, zéro appel, et conclut que les annonces ne fonctionnent pas dans son secteur.\n\nLes clics étaient réels. Tout ce qui les suivait n'était pas construit. Je le construis d'abord. Ensuite les annonces tournent. Quand l'entonnoir existe avant le trafic, les appels arrivent. La différence entre perdre de l'argent en annonces et un retour de 46x sur l'investissement publicitaire, c'est l'infrastructure qui reçoit le trafic.",
    featured: true,
  },
  {
    question: "Qu'est-ce que la Growth Architecture exactement?",
    answer:
      "C'est un système d'acquisition complet. Pas seulement un site web, pas seulement des annonces. Tout cela, construit ensemble pour que chaque partie renforce les autres. Positionnement, site de conversion, Google Ads, automatisation IA, qualification des leads, optimisation mensuelle. Construit une fois. Amélioré chaque mois. C'est le dernier système marketing dont vous aurez besoin de penser.",
    featured: false,
  },
  {
    question: "En combien de temps verrai-je des résultats?",
    answer:
      "La plupart des clients reçoivent leur premier appel réservé dans les 11 jours suivant le lancement. Le système atteint son efficacité maximale en 60 à 90 jours, au fur et à mesure que le SEO se développe et que les campagnes s'optimisent. Le tableau de bord vous montre chaque appel, chaque coût et chaque source dès le premier jour. Vous voyez exactement ce qui fonctionne avant la première revue mensuelle.",
    featured: false,
  },
  {
    question: "En quoi est-ce différent d'embaucher une agence classique?",
    answer:
      "Une agence livre un projet et passe au client suivant. Je mesure mon succès par un seul chiffre: les appels qualifiés dans votre calendrier. Si ce nombre ne croît pas chaque mois, je n'ai pas fait mon travail. Je possède le système entier, donc rien ne tombe entre les mailles des prestataires. Et je n'ai jamais envoyé un rapport plein d'impressions en guise de résultats concrets.",
    featured: false,
  },
  {
    question: "Et si ça ne fonctionne pas?",
    answer:
      "Si je ne peux pas faire bouger les choses dans les 90 premiers jours, je continue jusqu'à y arriver. Je ne prends pas de clients que je ne crois pas pouvoir aider. C'est pourquoi il y a une candidature. J'examine votre entreprise avant de m'engager, pas après que vous ayez payé.",
    featured: false,
  },
  {
    question: "Combien ça coûte?",
    answer:
      "Foundation Architecture: 2 500 $ pour construire, puis 1 200 $ par mois pour maintenir et optimiser. Performance Engine: 2 500 $ par mois plus un budget pub minimum de 500 $. Market Ownership: 6 000 $ par mois plus un budget pub minimum de 1 500 $. Le budget pub va directement à Google, pas à moi. Pas de contrats à long terme. Pas de frais cachés. Pas de honoraires pour du travail non fait.",
    featured: false,
  },
  {
    question: "Qui n'est PAS un bon fit?",
    answer:
      "Les entreprises à moins de 5 000 $ de revenus par mois. Celles qui veulent un logo, un site vitrine ou un projet ponctuel. Toute personne pas prête à s'engager pour une période initiale de 90 jours. Toute personne qui veut tester sans réel système derrière.",
    featured: false,
  },
  {
    question: "Pour qui est-ce conçu?",
    answer:
      "Les entreprises de services générant 5 000 $ ou plus par mois qui comptent trop sur les références et veulent une manière prévisible et évolutive d'obtenir de nouveaux clients sur Internet. Peintres, barbiers, sociétés de location de VR, cliniques dentaires, et tout service local où le téléphone doit sonner avec des acheteurs qualifiés.",
    featured: false,
  },
];

export type TranslationsShape = {
  nav: {
    home: string;
    services: string;
    results: string;
    about: string;
    apply: string;
    seeResults: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    subheading: string;
    mostCommon: string;
    stillQuestion: string;
    applyCta: string;
    items: FAQItem[];
  };
  spots: {
    heading: string;
    paragraph: string;
    lastThree: string;
    proof1: string;
    proof2: string;
    proof3: string;
    oneSpot: string;
    applyParagraph: string;
    applyCta: string;
    seeResults: string;
    reply24: string;
    noContracts: string;
    threeSpots: string;
  };
  finalCta: {
    button: string;
  };
  footer: {
    navigation: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  common: {
    skipToContent: string;
    menu: string;
    close: string;
  };
  benefits: {
    eyebrow: string;
    headline: string;
    paragraph: string;
    card1Title: string;
    card1Stat: string;
    card2Title: string;
    card2Stat: string;
    card3Title: string;
    card3Stat: string;
    card4Title: string;
    card4Stat: string;
    card5Title: string;
    card5Stat: string;
    card6Title: string;
    card6Stat: string;
    card7Title: string;
    card7Stat: string;
  };
  faqBooking: {
    heading: string;
    headlineItalic?: string;
    supportingLine: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
    ctaEmailLabel: string;
  };
  bookCall: {
    eyebrow: string;
    headline: string;
    italicSubline: string;
    body: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cta: string;
    notice: string;
  };
};

export const translations: Record<Locale, TranslationsShape> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      results: "Results",
      about: "About",
      apply: "Apply for Growth Partnership",
      seeResults: "See Results",
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Questions Serious Buyers Ask.",
      subheading: "I'd rather answer the hard ones here than waste your time on a call.",
      mostCommon: "Most common objection",
      stillQuestion: "Still have a question I didn't answer? Let's talk.",
      applyCta: "Apply for Growth Partnership →",
      items: faqEn,
    },
    spots: {
      heading: "I Run 3 Partnerships at a Time.",
      paragraph:
        "Not because of artificial scarcity. Because more than three active systems and I can't give each one the weekly attention it needs to compound. I will not dilute the work.",
      lastThree: "The last three clients who applied:",
      proof1: "One went live in 9 days.",
      proof2: "One booked their first qualified call on day 7.",
      proof3: "One hit $2,716 in revenue in month one.",
      oneSpot: "One spot is open right now.",
      applyParagraph:
        "Apply now and I will review your business within 24 hours. If I can't move the needle for you, I will tell you that on the review call, not after you have paid anything.",
      applyCta: "Apply for Growth Partnership →",
      seeResults: "See Results →",
      reply24: "Reply within 24 hours",
      noContracts: "No long-term contracts",
      threeSpots: "3 spots per quarter",
    },
    finalCta: {
      button: "Now Or Never",
    },
    footer: {
      navigation: "Navigation",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved",
    },
    common: {
      skipToContent: "Skip to content",
      menu: "Menu",
      close: "Close",
    },
    benefits: {
      eyebrow: "SYSTEM BENEFITS",
      headline: "Finally a System",
      paragraph:
        "Client Growth replaces scattered vendors and guesswork with one connected growth system built to turn attention into qualified calls.",
      card1Title: "One Partner. One Growth System.",
      card1Stat: "No vendor coordination. No hand-offs.",
      card2Title: "Engineered to Convert",
      card2Stat: "Average 3.1x lift in conversion rate vs. previous site.",
      card3Title: "Tracked From Click to Revenue",
      card3Stat: "Every call tracked to its source. Cost per call updated weekly.",
      card4Title: "Launch in Weeks, Not Months",
      card4Stat: "Median: 11 days from signed agreement to live system.",
      card5Title: "You Own Everything",
      card5Stat: "Site, data, and infrastructure stay yours.",
      card6Title: "Full Visibility",
      card6Stat: "SEO and conversion gains stack monthly.",
      card7Title: "Elite Execution",
      card7Stat: "Senior-level execution at your fingertips.",
    },
    faqBooking: {
      heading: "Questions I get every time.",
      headlineItalic: "asked",
      supportingLine: "Get clear answers before you apply.",
      items: [
        { question: "How fast can this go live?", answer: "Most clients are live within 2–4 weeks. I start with a quick audit, then build. No lengthy discovery phases." },
        { question: "What if I already have a website?", answer: "I can overhaul your existing site for conversion, or build a new one. The goal is the same: qualified calls." },
        { question: "Do you handle Google Ads?", answer: "Yes. Google Ads, conversion landing pages, and tracking are part of the system. Ad spend goes directly to Google." },
        { question: "Do you do SEO and AI search visibility?", answer: "Yes. Local SEO and GEO content for AI search (ChatGPT, etc.) are included where they make sense for your market." },
        { question: "What do I need to provide?", answer: "Basic business info, your offer clarity, and access to analytics/ads if I'm optimizing. I handle the heavy lifting." },
        { question: "Do I own the website and assets?", answer: "Yes. The site, data, and infrastructure are yours. No lock-in." },
        { question: "What happens after launch?", answer: "Weekly optimization, monthly review calls, and ongoing improvements. The system compounds over time." },
        { question: "How do you track results?", answer: "Calls, cost per call, and source attribution. You get a clear dashboard, not vanity metrics." },
        { question: "What's the minimum ad spend?", answer: "$500/month for Performance Engine, $1,500 for Market Ownership. Ad spend goes to Google, not to me." },
        { question: "Who is this best for?", answer: "Service businesses doing $5K+/month that want predictable leads from the internet instead of relying on referrals." },
      ],
      ctaTitle: "Book a 15-min strategy call",
      ctaBody: "I'll review your market in 24 hours and tell you directly whether this system can move the needle for you.",
      ctaButton: "Book a strategy call →",
      ctaEmail: "juan@clientgrowth.ca",
      ctaEmailLabel: "Prefer email?",
    },
    bookCall: {
      eyebrow: "BOOK A CALL",
      headline: "Apply for a 20-minute diagnostic call.",
      italicSubline: "",
      body: "I'll review your market, your current pipeline, and the fastest path to qualified calls. If I cannot move the needle, I will tell you that directly before you pay anything.",
      bullet1: "15 minutes",
      bullet2: "Clear next steps",
      bullet3: "No bloated sales process",
      cta: "Book a strategy call →",
      notice: "I run a limited number of diagnostic calls per week. For a faster response, email juan@clientgrowth.ca for a same-day reply.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      results: "Résultats",
      about: "À propos",
      apply: "Postuler pour un partenariat de croissance",
      seeResults: "Voir les résultats",
    },
    faq: {
      eyebrow: "QUESTIONS",
      heading: "Questions que posent les acheteurs sérieux.",
      subheading:
        "Je préfère répondre aux questions difficiles ici plutôt que de vous faire perdre du temps en appel.",
      mostCommon: "Objection la plus courante",
      stillQuestion: "Une question sans réponse? Parlons-en.",
      applyCta: "Postuler pour un partenariat de croissance →",
      items: faqFr,
    },
    spots: {
      heading: "Je gère 3 partenariats à la fois.",
      paragraph:
        "Pas par rareté artificielle. Parce qu'au-delà de trois systèmes actifs, je ne peux pas donner à chacun l'attention hebdomadaire dont il a besoin. Je ne dilue pas le travail.",
      lastThree: "Les trois derniers clients ayant postulé :",
      proof1: "Un en ligne en 9 jours.",
      proof2: "Un premier appel qualifié réservé au jour 7.",
      proof3: "2 716 $ de revenus le premier mois.",
      oneSpot: "Une place est ouverte en ce moment.",
      applyParagraph:
        "Postulez maintenant et j'examinerai votre entreprise sous 24 heures. Si je ne peux pas faire avancer les choses, je vous le dirai lors de l'appel de revue, pas après avoir payé.",
      applyCta: "Postuler pour un partenariat de croissance →",
      seeResults: "Voir les résultats →",
      reply24: "Réponse sous 24 heures",
      noContracts: "Pas de contrats à long terme",
      threeSpots: "3 places par trimestre",
    },
    finalCta: {
      button: "Maintenant ou jamais",
    },
    footer: {
      navigation: "Navigation",
      legal: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      rights: "Tous droits réservés",
    },
    common: {
      skipToContent: "Aller au contenu",
      menu: "Menu",
      close: "Fermer",
    },
    benefits: {
      eyebrow: "AVANTAGES DU SYSTÈME",
      headline: "Enfin un Système",
      paragraph:
        "Client Growth remplace les prestataires dispersés et les approximations par un système de croissance connecté, conçu pour transformer l'attention en appels qualifiés.",
      card1Title: "Un partenaire. Un système de croissance.",
      card1Stat: "Aucune coordination de prestataires. Aucun transfert.",
      card2Title: "Conçu pour convertir",
      card2Stat: "En moyenne 3,1x d'augmentation du taux de conversion vs. site précédent.",
      card3Title: "Traçabilité du clic au revenu",
      card3Stat: "Chaque appel tracé à sa source. Coût par appel mis à jour chaque semaine.",
      card4Title: "Lancement en semaines, pas en mois",
      card4Stat: "Médiane: 11 jours entre la signature et le système en ligne.",
      card5Title: "Vous possédez tout",
      card5Stat: "Site, données et infrastructure restent à vous.",
      card6Title: "Visibilité complète",
      card6Stat: "SEO et conversion progressent chaque mois.",
      card7Title: "Exécution d'excellence",
      card7Stat: "Qualité de niveau senior à portée de main.",
    },
    faqBooking: {
      heading: "Questions que je reçois à chaque fois.",
      headlineItalic: "",
      supportingLine: "Obtenez des réponses claires avant de postuler.",
      items: [
        { question: "En combien de temps c'est en ligne?", answer: "La plupart des clients sont en ligne en 2 à 4 semaines. Je commence par un audit rapide, puis je construis." },
        { question: "Et si j'ai déjà un site web?", answer: "Je peux refondre votre site existant pour la conversion, ou en créer un nouveau. L'objectif reste le même: des appels qualifiés." },
        { question: "Vous gérez Google Ads?", answer: "Oui. Google Ads, pages d'atterrissage et suivi font partie du système. Le budget pub va directement à Google." },
        { question: "Vous faites du SEO et la visibilité sur les moteurs IA?", answer: "Oui. SEO local et contenu GEO pour la recherche IA (ChatGPT, etc.) sont inclus selon votre marché." },
        { question: "Qu'est-ce que je dois fournir?", answer: "Infos de base sur votre entreprise, clarté de votre offre, accès aux analytics/ads si j'optimise." },
        { question: "Est-ce que je possède le site et les actifs?", answer: "Oui. Le site, les données et l'infrastructure sont à vous. Pas de verrouillage." },
        { question: "Que se passe-t-il après le lancement?", answer: "Optimisation hebdomadaire, appels de revue mensuels, améliorations continues. Le système progresse." },
        { question: "Comment suivez-vous les résultats?", answer: "Appels, coût par appel, attribution des sources. Tableau de bord clair, pas de métriques vaines." },
        { question: "Quel est le budget pub minimum?", answer: "500 $/mois pour Performance Engine, 1 500 $ pour Market Ownership. Le budget pub va à Google." },
        { question: "Pour qui est-ce le mieux?", answer: "Entreprises de services à 5 000 $+/mois qui veulent des leads prévisibles sur Internet plutôt que les références." },
      ],
      ctaTitle: "Réservez un appel stratégie de 15 min",
      ctaBody: "J'examinerai votre marché sous 24 heures et vous dirai directement si ce système peut faire la différence pour vous.",
      ctaButton: "Réserver un appel stratégie →",
      ctaEmail: "juan@clientgrowth.ca",
      ctaEmailLabel: "Préférez le courriel?",
    },
    bookCall: {
      eyebrow: "RÉSERVER UN APPEL",
      headline: "Postulez pour un appel diagnostique de 20 minutes.",
      italicSubline: "",
      body: "J'examinerai votre marché, votre pipeline actuel et la voie la plus rapide vers des appels qualifiés. Si je ne peux pas faire la différence, je vous le dirai directement avant que vous ne payiez quoi que ce soit.",
      bullet1: "15 minutes",
      bullet2: "Prochaines étapes claires",
      bullet3: "Pas de processus commercial lourd",
      cta: "Réserver un appel stratégie →",
      notice: "J'offre un nombre limité d'appels diagnostiques par semaine. Pour une réponse plus rapide, écrivez à juan@clientgrowth.ca.",
    },
  },
};
