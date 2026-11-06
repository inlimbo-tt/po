import type { Locale } from '~/composables/useLocale'
import { moreContent } from '~/i18n/content.more'

type AdditionalLocale = Exclude<Locale, 'nl' | 'fr'>

export interface LocalizedContent {
  hero: Record<string, { title: string; description: string }>
  publications: Record<string, { title: string; description: string }>
  infographic: { title: string; description: string }
  episodes: Record<string, { description: string; duration: string }>
  publicationsBlurb: string
}

export const additionalContent: Record<AdditionalLocale, LocalizedContent> = {
  en: {
    hero: {
      publications: { title: 'Publications', description: 'Explore our annual report and Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest in numbers', description: 'A visual overview of key figures about the park.' },
      'park-in-evolutie': { title: 'Participation', description: 'How are we moving towards the future park?' },
      fotos: { title: 'Photos', description: 'See the park through the seasons.' },
      media: { title: 'Press', description: 'Follow the park’s story in the press and on social media.' },
      bezoek: { title: 'Visit', description: 'Address and opening hours.' },
    },
    publications: {
      jaarrapport: { title: 'Annual report', description: 'Park Ouest’s full annual report: developments, figures and a vision for the future.' },
      'key-elements': { title: 'Key Elements', description: 'A concise overview of our analysis of the park, its visitors and the neighbourhood.' },
    },
    infographic: { title: 'Park Ouest in numbers', description: 'A visual overview of key figures about Park Ouest.' },
    episodes: {
      ep1: { description: 'What does the park mean to its visitors? And what are they looking for?', duration: '28 min' },
      ep2: { description: 'Fences, hills, doors and windows: how open should the park be?', duration: '52 min' },
      ep3: { description: 'Dreaming about the park…', duration: '1 hr 13 min' },
      ep5: { description: '', duration: '1 hr 25 min' },
    },
    publicationsBlurb: 'Discover our publications about Park Ouest. Download a document or browse it as a digital book.',
  },
  ar: {
    hero: {
      publications: { title: 'المنشورات', description: 'تصفحوا التقرير السنوي وKey Elements.' },
      'park-in-cijfers': { title: 'أرقام بارك ويست', description: 'عرض مرئي لأهم أرقام الحديقة.' },
      'park-in-evolutie': { title: 'المشاركة', description: 'كيف نصل إلى الحديقة المستقبلية؟' },
      fotos: { title: 'صور', description: 'اكتشفوا الحديقة عبر فصول السنة.' },
      media: { title: 'الصحافة', description: 'تابعوا قصة الحديقة في الصحافة ووسائل التواصل.' },
      bezoek: { title: 'زيارة', description: 'العنوان وساعات العمل.' },
    },
    publications: {
      jaarrapport: { title: 'التقرير السنوي', description: 'التقرير السنوي الكامل لبارك ويست: التطورات والأرقام والرؤية المستقبلية.' },
      'key-elements': { title: 'Key Elements', description: 'عرض موجز لتحليلنا للحديقة وزوارها والحي.' },
    },
    infographic: { title: 'أرقام بارك ويست', description: 'عرض مرئي لأهم أرقام بارك ويست.' },
    episodes: {
      ep1: { description: 'ماذا تعني الحديقة لزوارها؟ وما الذي يبحثون عنه؟', duration: '28 دقيقة' },
      ep2: { description: 'أسوار وتلال وأبواب ونوافذ: ما مدى انفتاح الحديقة؟', duration: '52 دقيقة' },
      ep3: { description: 'أحلام عن الحديقة…', duration: 'ساعة و13 دقيقة' },
      ep5: { description: '', duration: 'ساعة و25 دقيقة' },
    },
    publicationsBlurb: 'اكتشفوا منشوراتنا عن بارك ويست. اختاروا وثيقة للتحميل أو تصفحوها ككتاب رقمي.',
  },
  ary: {
    hero: {
      publications: { title: 'المنشورات', description: 'تصفحو التقرير السنوي وKey Elements.' },
      'park-in-cijfers': { title: 'أرقام بارك ويست', description: 'نظرة بالصور على أهم أرقام البارك.' },
      'park-in-evolutie': { title: 'المشاركة', description: 'كيفاش غادي نوصلو للبارك ديال المستقبل؟' },
      fotos: { title: 'تصاور', description: 'شوفو البارك فالفصول كاملين.' },
      media: { title: 'الصحافة', description: 'تبعو قصة البارك فالصحافة ومواقع التواصل.' },
      bezoek: { title: 'زيارة', description: 'العنوان وتوقيت الفتح.' },
    },
    publications: {
      jaarrapport: { title: 'التقرير السنوي', description: 'التقرير السنوي ديال بارك ويست: التطورات والأرقام والرؤية ديال المستقبل.' },
      'key-elements': { title: 'Key Elements', description: 'ملخص لتحليلنا للبارك والزوار ديالو والحومة.' },
    },
    infographic: { title: 'أرقام بارك ويست', description: 'نظرة بالصور على أهم أرقام بارك ويست.' },
    episodes: {
      ep1: { description: 'شنو كيعني البارك للزوار ديالو؟ وشنو كيقلبو عليه؟', duration: '28 دقيقة' },
      ep2: { description: 'السياج والتلال والبيبان والشراجم: شحال خاص البارك يكون محلول؟', duration: '52 دقيقة' },
      ep3: { description: 'كنحلمو بالبارك…', duration: 'ساعة و13 دقيقة' },
      ep5: { description: '', duration: 'ساعة و25 دقيقة' },
    },
    publicationsBlurb: 'كتشفو المنشورات ديالنا على بارك ويست. اختارو وثيقة وحملوها ولا تصفحوها بحال كتاب رقمي.',
  },
  es: {
    hero: {
      publications: { title: 'Publicaciones', description: 'Explora nuestro informe anual y Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest en cifras', description: 'Un resumen visual de las cifras clave del parque.' },
      'park-in-evolutie': { title: 'Participación', description: '¿Cómo avanzamos hacia el parque del futuro?' },
      fotos: { title: 'Fotos', description: 'Descubre el parque a través de las estaciones.' },
      media: { title: 'Prensa', description: 'Sigue la historia del parque en la prensa y las redes sociales.' },
      bezoek: { title: 'Visita', description: 'Dirección y horarios.' },
    },
    publications: {
      jaarrapport: { title: 'Informe anual', description: 'El informe anual completo de Park Ouest: novedades, cifras y visión de futuro.' },
      'key-elements': { title: 'Key Elements', description: 'Un resumen de nuestro análisis del parque, sus visitantes y el barrio.' },
    },
    infographic: { title: 'Park Ouest en cifras', description: 'Un resumen visual de las cifras clave de Park Ouest.' },
    episodes: {
      ep1: { description: '¿Qué significa el parque para quienes lo visitan? ¿Y qué buscan?', duration: '28 min' },
      ep2: { description: 'Vallas, colinas, puertas y ventanas: ¿cuán abierto debe ser el parque?', duration: '52 min' },
      ep3: { description: 'Soñar con el parque…', duration: '1 h 13 min' },
      ep5: { description: '', duration: '1 h 25 min' },
    },
    publicationsBlurb: 'Descubre nuestras publicaciones sobre Park Ouest. Descarga un documento o léelo como un libro digital.',
  },
  sq: {
    hero: {
      publications: { title: 'Botime', description: 'Shfletoni raportin vjetor dhe Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest në shifra', description: 'Një paraqitje vizuale e shifrave kryesore të parkut.' },
      'park-in-evolutie': { title: 'Pjesëmarrja', description: 'Si po shkojmë drejt parkut të së ardhmes?' },
      fotos: { title: 'Fotot', description: 'Zbuloni parkun gjatë stinëve.' },
      media: { title: 'Shtypi', description: 'Ndiqni historinë e parkut në shtyp dhe rrjetet sociale.' },
      bezoek: { title: 'Vizitë', description: 'Adresa dhe orari.' },
    },
    publications: {
      jaarrapport: { title: 'Raporti vjetor', description: 'Raporti i plotë vjetor i Park Ouest me zhvillimet, shifrat dhe vizionin për të ardhmen.' },
      'key-elements': { title: 'Key Elements', description: 'Një përmbledhje e analizës sonë për parkun, vizitorët dhe lagjen.' },
    },
    infographic: { title: 'Park Ouest në shifra', description: 'Një paraqitje vizuale e shifrave kryesore të Park Ouest.' },
    episodes: {
      ep1: { description: 'Çfarë do të thotë parku për vizitorët? Dhe çfarë kërkojnë ata?', duration: '28 min' },
      ep2: { description: 'Gardhe, kodra, dyer dhe dritare: sa i hapur duhet të jetë parku?', duration: '52 min' },
      ep3: { description: 'Të ëndërrosh për parkun…', duration: '1 orë 13 min' },
      ep5: { description: '', duration: '1 orë 25 min' },
    },
    publicationsBlurb: 'Zbuloni botimet tona për Park Ouest. Shkarkoni një dokument ose shfletojeni si libër digjital.',
  },
  wo: {
    hero: {
      publications: { title: 'Kayit yi', description: 'Jàng raportu at mi ak Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest ci lim', description: 'Nataal ci lim yi am solo ci parc bi.' },
      'park-in-evolutie': { title: 'Bokk', description: 'Naka lanu di dox ba parc bu ëllëg?' },
      fotos: { title: 'Nataal yi', description: 'Xool parc bi ci jamono yi.' },
      media: { title: 'Xibaar yi', description: 'Topp nettali parc bi ci xibaar ak media soxna yi.' },
      bezoek: { title: 'Ganesi', description: 'Màkkaanu ak waxtu yi.' },
    },
    publications: {
      jaarrapport: { title: 'Raportu at mi', description: 'Rapportu at mi bu mat sëkk ci Park Ouest: yokkute yi, lim yi ak xalaat ci ëllëg.' },
      'key-elements': { title: 'Key Elements', description: 'Résumé bu gàtt ci seetlu parc bi, gane yi ak dëkk bi.' },
    },
    infographic: { title: 'Park Ouest ci lim', description: 'Nataal ci lim yi am solo ci Park Ouest.' },
    episodes: {
      ep1: { description: 'Lan la parc bi tek ci gane yi? Te lan lañuy seet?', duration: '28 min' },
      ep2: { description: 'Mbet mi, tund yi, bunt yi ak palanteer yi: parc bi war na ubbeeku naka?', duration: '52 min' },
      ep3: { description: 'Xalaat ci parc bi…', duration: '1 waxtu 13 min' },
      ep5: { description: '', duration: '1 waxtu 25 min' },
    },
    publicationsBlurb: 'Xoolal kayit yi ci Park Ouest. Tànnal dencukaay ngir yeb ko walla jàng ko ni téere numérique.',
  },
  ru: {
    hero: {
      publications: { title: 'Публикации', description: 'Читайте годовой отчёт и Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest в цифрах', description: 'Наглядный обзор основных показателей парка.' },
      'park-in-evolutie': { title: 'Участие', description: 'Как мы движемся к парку будущего?' },
      fotos: { title: 'Фото', description: 'Парк в разные времена года.' },
      media: { title: 'Пресса', description: 'Следите за историей парка в прессе и соцсетях.' },
      bezoek: { title: 'Визит', description: 'Адрес и часы работы.' },
    },
    publications: {
      jaarrapport: { title: 'Годовой отчёт', description: 'Полный годовой отчёт Park Ouest: события, цифры и взгляд в будущее.' },
      'key-elements': { title: 'Key Elements', description: 'Краткий обзор нашего анализа парка, его посетителей и района.' },
    },
    infographic: { title: 'Park Ouest в цифрах', description: 'Наглядный обзор основных показателей Park Ouest.' },
    episodes: {
      ep1: { description: 'Что парк значит для посетителей? И что они ищут?', duration: '28 мин' },
      ep2: { description: 'Заборы, холмы, двери и окна: насколько открытым должен быть парк?', duration: '52 мин' },
      ep3: { description: 'Мечты о парке…', duration: '1 ч 13 мин' },
      ep5: { description: '', duration: '1 ч 25 мин' },
    },
    publicationsBlurb: 'Откройте публикации о Park Ouest. Скачайте документ или листайте его как цифровую книгу.',
  },
  uk: {
    hero: {
      publications: { title: 'Публікації', description: 'Перегляньте річний звіт і Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest у цифрах', description: 'Наочний огляд головних показників парку.' },
      'park-in-evolutie': { title: 'Участь', description: 'Як ми рухаємося до парку майбутнього?' },
      fotos: { title: 'Фото', description: 'Парк у різні пори року.' },
      media: { title: 'Преса', description: 'Стежте за історією парку в пресі та соцмережах.' },
      bezoek: { title: 'Візит', description: 'Адреса та години роботи.' },
    },
    publications: {
      jaarrapport: { title: 'Річний звіт', description: 'Повний річний звіт Park Ouest: події, цифри та бачення майбутнього.' },
      'key-elements': { title: 'Key Elements', description: 'Стислий огляд нашого аналізу парку, його відвідувачів і району.' },
    },
    infographic: { title: 'Park Ouest у цифрах', description: 'Наочний огляд головних показників Park Ouest.' },
    episodes: {
      ep1: { description: 'Що парк означає для відвідувачів? І чого вони шукають?', duration: '28 хв' },
      ep2: { description: 'Огорожі, пагорби, двері й вікна: наскільки відкритим має бути парк?', duration: '52 хв' },
      ep3: { description: 'Мрії про парк…', duration: '1 год 13 хв' },
      ep5: { description: '', duration: '1 год 25 хв' },
    },
    publicationsBlurb: 'Відкрийте публікації про Park Ouest. Завантажте документ або перегляньте його як цифрову книжку.',
  },
  ...moreContent,
}
