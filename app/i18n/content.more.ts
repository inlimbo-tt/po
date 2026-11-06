import type { Locale } from '~/composables/useLocale'
import type { LocalizedContent } from '~/i18n/content.extra'

type NewLocale = Extract<Locale, 'de' | 'sw' | 'ln' | 'ro' | 'zh-CN'>

export const moreContent: Record<NewLocale, LocalizedContent> = {
  de: {
    hero: {
      publications: { title: 'Publikationen', description: 'Entdecken Sie unseren Jahresbericht und Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest in Zahlen', description: 'Ein visueller Überblick über wichtige Parkdaten.' },
      'park-in-evolutie': { title: 'Beteiligung', description: 'Wie entsteht der Park der Zukunft?' },
      fotos: { title: 'Fotos', description: 'Entdecken Sie den Park im Wandel der Jahreszeiten.' },
      media: { title: 'Presse', description: 'Verfolgen Sie die Geschichte des Parks in Presse und sozialen Medien.' },
      bezoek: { title: 'Besuch', description: 'Adresse und Öffnungszeiten.' },
    },
    publications: {
      jaarrapport: { title: 'Jahresbericht', description: 'Der vollständige Jahresbericht von Park Ouest mit Entwicklungen, Zahlen und Zukunftsvision.' },
      'key-elements': { title: 'Key Elements', description: 'Ein kompakter Überblick über unsere Analyse des Parks, seiner Besucher und des Viertels.' },
    },
    infographic: { title: 'Park Ouest in Zahlen', description: 'Ein visueller Überblick über die wichtigsten Zahlen zu Park Ouest.' },
    episodes: {
      ep1: { description: 'Was bedeutet der Park für seine Besucher? Und wonach suchen sie?', duration: '28 Min.' },
      ep2: { description: 'Zäune, Hügel, Türen und Fenster: Wie offen soll der Park sein?', duration: '52 Min.' },
      ep3: { description: 'Von einem Park träumen…', duration: '1 Std. 13 Min.' },
      ep5: { description: '', duration: '1 Std. 25 Min.' },
    },
    publicationsBlurb: 'Entdecken Sie unsere Publikationen über Park Ouest. Laden Sie ein Dokument herunter oder blättern Sie darin wie in einem digitalen Buch.',
  },
  sw: {
    hero: {
      publications: { title: 'Machapisho', description: 'Gundua ripoti yetu ya mwaka na Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest kwa takwimu', description: 'Muhtasari wa kuona wa takwimu muhimu za bustani.' },
      'park-in-evolutie': { title: 'Ushiriki', description: 'Tunafikaje kwenye bustani ya baadaye?' },
      fotos: { title: 'Picha', description: 'Tazama bustani katika misimu mbalimbali.' },
      media: { title: 'Habari', description: 'Fuatilia hadithi ya bustani kwenye vyombo vya habari na mitandao ya kijamii.' },
      bezoek: { title: 'Ziara', description: 'Anwani na saa za kufunguliwa.' },
    },
    publications: {
      jaarrapport: { title: 'Ripoti ya mwaka', description: 'Ripoti kamili ya mwaka ya Park Ouest kuhusu maendeleo, takwimu na maono ya siku zijazo.' },
      'key-elements': { title: 'Key Elements', description: 'Muhtasari mfupi wa uchambuzi wetu wa bustani, wageni wake na kitongoji.' },
    },
    infographic: { title: 'Park Ouest kwa takwimu', description: 'Muhtasari wa kuona wa takwimu muhimu za Park Ouest.' },
    episodes: {
      ep1: { description: 'Bustani ina maana gani kwa wageni wake? Wanatafuta nini?', duration: 'Dakika 28' },
      ep2: { description: 'Uzio, vilima, milango na madirisha: bustani inapaswa kuwa wazi kiasi gani?', duration: 'Dakika 52' },
      ep3: { description: 'Kuota kuhusu bustani…', duration: 'Saa 1 dakika 13' },
      ep5: { description: '', duration: 'Saa 1 dakika 25' },
    },
    publicationsBlurb: 'Gundua machapisho yetu kuhusu Park Ouest. Pakua hati au isome kama kitabu cha kidijitali.',
  },
  ln: {
    hero: {
      publications: { title: 'Mikanda', description: 'Yeba lapolo ya mbula mpe Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest na mitango', description: 'Mitango ya ntina ya park na bilili.' },
      'park-in-evolutie': { title: 'Kosangana', description: 'Ndenge nini tokokóma na park ya mikolo ekoya?' },
      fotos: { title: 'Bafɔtɔ', description: 'Talá park na bileko nyonso ya mbula.' },
      media: { title: 'Bapanzi-nsango', description: 'Landela masolo ya park na bapanzi-nsango mpe na ba réseaux sociaux.' },
      bezoek: { title: 'Koya kotala', description: 'Adrɛsi mpe ngonga ya kofungwama.' },
    },
    publications: {
      jaarrapport: { title: 'Lapolo ya mbula', description: 'Lapolo mobimba ya Park Ouest: makambo ya sika, mitango mpe makanisi mpo na mikolo ekoya.' },
      'key-elements': { title: 'Key Elements', description: 'Mokuse ya botali na biso ya park, bapaya na yango mpe kartye.' },
    },
    infographic: { title: 'Park Ouest na mitango', description: 'Mitango ya ntina ya Park Ouest na bilili.' },
    episodes: {
      ep1: { description: 'Park ezali na ntina nini mpo na bapaya na yango? Bazali koluka nini?', duration: 'Miniti 28' },
      ep2: { description: 'Bipango, bangomba, bikuke mpe maninisa: park esengeli kofungwama ndenge nini?', duration: 'Miniti 52' },
      ep3: { description: 'Kokanisa park…', duration: 'Ngonga 1, miniti 13' },
      ep5: { description: '', duration: 'Ngonga 1, miniti 25' },
    },
    publicationsBlurb: 'Yeba mikanda na biso etali Park Ouest. Poná mokanda mpo na kozwa yango to kotánga yango lokola buku ya ordinatɛrɛ.',
  },
  ro: {
    hero: {
      publications: { title: 'Publicații', description: 'Descoperă raportul anual și Key Elements.' },
      'park-in-cijfers': { title: 'Park Ouest în cifre', description: 'O prezentare vizuală a cifrelor importante ale parcului.' },
      'park-in-evolutie': { title: 'Participare', description: 'Cum ajungem la parcul viitorului?' },
      fotos: { title: 'Fotografii', description: 'Descoperă parcul de-a lungul anotimpurilor.' },
      media: { title: 'Presă', description: 'Urmărește povestea parcului în presă și pe rețelele sociale.' },
      bezoek: { title: 'Vizită', description: 'Adresa și programul.' },
    },
    publications: {
      jaarrapport: { title: 'Raport anual', description: 'Raportul anual complet Park Ouest, cu evoluții, cifre și viziunea pentru viitor.' },
      'key-elements': { title: 'Key Elements', description: 'O prezentare concisă a analizei noastre despre parc, vizitatorii săi și cartier.' },
    },
    infographic: { title: 'Park Ouest în cifre', description: 'O prezentare vizuală a cifrelor importante despre Park Ouest.' },
    episodes: {
      ep1: { description: 'Ce înseamnă parcul pentru vizitatorii săi? Și ce caută ei?', duration: '28 min' },
      ep2: { description: 'Garduri, dealuri, uși și ferestre: cât de deschis ar trebui să fie parcul?', duration: '52 min' },
      ep3: { description: 'Visând la parc…', duration: '1 h 13 min' },
      ep5: { description: '', duration: '1 h 25 min' },
    },
    publicationsBlurb: 'Descoperă publicațiile noastre despre Park Ouest. Descarcă un document sau răsfoiește-l ca pe o carte digitală.',
  },
  'zh-CN': {
    hero: {
      publications: { title: '出版物', description: '浏览年度报告和 Key Elements。' },
      'park-in-cijfers': { title: 'Park Ouest 数据', description: '以图表了解公园的重要数据。' },
      'park-in-evolutie': { title: '居民参与', description: '我们如何走向未来的公园？' },
      fotos: { title: '照片', description: '看看公园在不同季节的样子。' },
      media: { title: '媒体报道', description: '通过媒体和社交平台了解公园的故事。' },
      bezoek: { title: '参观', description: '地址和开放时间。' },
    },
    publications: {
      jaarrapport: { title: '年度报告', description: 'Park Ouest 年度报告全文，介绍项目进展、数据和未来愿景。' },
      'key-elements': { title: 'Key Elements', description: '简要介绍我们对公园、访客和社区的观察与分析。' },
    },
    infographic: { title: 'Park Ouest 数据', description: '以图表了解 Park Ouest 的重要数据。' },
    episodes: {
      ep1: { description: '公园对访客意味着什么？他们又在寻找什么？', duration: '28 分钟' },
      ep2: { description: '围栏、山坡、门和窗：公园应该有多开放？', duration: '52 分钟' },
      ep3: { description: '想象公园的样子……', duration: '1 小时 13 分钟' },
      ep5: { description: '', duration: '1 小时 25 分钟' },
    },
    publicationsBlurb: '了解关于 Park Ouest 的出版物。下载文件，或像翻阅电子书一样在线阅读。',
  },
}
