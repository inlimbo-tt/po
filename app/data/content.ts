export interface HeroTile {
  id: string
  pill: string
  title: string
  description: string
  image: string
  color: string
}

export interface Publication {
  id: string
  title: string
  description: string
  pdfUrl: string
  coverColor: string
}

export interface PodcastEpisode {
  id: string
  title: string
  description: string
  duration: string
  audioUrl: string
}

export interface MediaItem {
  id: string
  title: string
  source: string
  url: string
  thumbnail: string
}

function mshotsThumbnail(url: string): string {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1000&h=750`
}

// A handful of publishers (Le Soir, NYT) block the mshots screenshot bot,
// so those items fall back to the live (occasionally blocked) endpoint
// instead of a locally cached image.
const NO_LOCAL_SCREENSHOT = new Set(['m2', 'm4', 'm17', 'm27'])

export const heroTiles: HeroTile[] = [
  {
    id: 'publications',
    pill: 'READ',
    title: 'PDF Zine',
    description: 'Blader door onze publicaties en jaarverslagen als een digitaal boekje.',
    image: '/images/assets/zine-placeholder.webp',
    color: '#2f6b4a',
  },
  {
    id: 'park-in-cijfers',
    pill: 'COUNT',
    title: 'Park Ouest in Numbers',
    description: 'Een visueel overzicht van de belangrijkste statistieken en kengetallen van het park.',
    image: '/images/infographic.svg',
    color: '#1a6b8a',
  },
  {
    id: 'podcasts',
    pill: 'LISTEN',
    title: 'Podcasts',
    description: 'Beluister gesprekken over de toekomst en het verhaal van het park.',
    image: '/images/assets/podcasts-placeholder.webp',
    color: '#d99a35',
  },
  {
    id: 'fotos',
    pill: 'LOOK',
    title: 'Image Gallery',
    description: "Bekijk foto's van het park doorheen de seizoenen.",
    image: '/images/assets/gallery-placeholder.webp',
    color: '#92bb62',
  },
  {
    id: 'media',
    pill: 'FOLLOW',
    title: 'Media Links',
    description: 'Volg het parkverhaal in de pers en op sociale media.',
    image: '/images/assets/media-links-placeholder.webp',
    color: '#1f4a37',
  },
]

export const publications: Publication[] = [
  {
    id: 'jaarrapport',
    title: 'Jaarrapport',
    description: 'Het volledige jaarverslag van Park Ouest met ontwikkelingen, cijfers en visie voor de toekomst.',
    pdfUrl: '/pdfs/jaarrapport.pdf',
    coverColor: '#1a6b8a',
  },
  {
    id: 'key-elements',
    title: 'Key Elements',
    description: 'Een compact overzicht van de kernpunten en belangrijkste elementen van het park.',
    pdfUrl: '/pdfs/key-elements.pdf',
    coverColor: '#2d8a6b',
  },
]

export const parkInfographic = {
  title: 'Park Ouest in cijfers',
  description: 'Een visueel overzicht van de belangrijkste statistieken en kengetallen van Park Ouest.',
}

export const parkInfographics: string[] = [
  '/images/infographics/stats-1.jpg',
  '/images/infographics/stats-2.jpg',
  '/images/infographics/stats-3.jpg',
]

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: 'ep1',
    title: 'De toekomst van Park Ouest',
    description: 'Een gesprek over de visie en plannen voor de komende jaren.',
    duration: '24 min',
    audioUrl: '/audio/episode-1.mp3',
  },
  {
    id: 'ep2',
    title: 'Groen in de stad',
    description: 'Hoe Park Ouest bijdraagt aan stedelijke vergroening en biodiversiteit.',
    duration: '18 min',
    audioUrl: '/audio/episode-2.mp3',
  },
  {
    id: 'ep3',
    title: 'Buurt en gemeenschap',
    description: 'Bewoners en ondernemers delen hun ervaringen met het park.',
    duration: '31 min',
    audioUrl: '/audio/episode-3.mp3',
  },
]

const photoFilenames = [
  '20251219 - LR - parcouest - cc - DECLERCK Tine -002.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -004.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -005.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -020.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -022.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -036.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -037.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -039.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -041.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -060.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -063.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -066.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -069.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -096.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -118.jpg',
  '20251219 - LR - parcouest - cc - DECLERCK Tine -120.jpg',
  'IMG_0927.JPG',
  'IMG_8178.JPG',
]

export const photos: string[] = photoFilenames.map((f) => `/images/photos/${encodeURIComponent(f)}`)

const rawMediaItems: { title: string; source: string; url: string }[] = [
  { title: "Bruxelles M'habite", source: 'Radio Panik', url: 'https://www.radiopanik.org/media/sounds/bruxelles-m-habite/67_18362__0.mp3' },
  { title: 'Parc Ouest, jardin de Molenbeek', source: 'Le Soir', url: 'https://www.lesoir.be/626202/article/2024-10-01/molenbeek-le-parc-ouest-est-le-jardin-des-habitants-du-quartier' },
  { title: 'Zwangere Guy zoekt speelgoed park', source: 'VRT NWS', url: 'https://www.vrt.be/vrtnws/nl/2023/12/29/oproep-zwangere-guy-iemand-een-vliegtuig-op-overschot/' },
  { title: 'Les communes les plus vertes', source: 'Le Soir', url: 'https://www.lesoir.be/626205/article/2024-10-01/quelles-sont-les-communes-les-plus-vertes-de-belgique-carte-interactive' },
  { title: 'Park Ouest, Molenbeek, en sursis', source: 'Bruxelles Today', url: 'https://www.bruxellestoday.be/quartiers/parc-ouest-sursis-fermeture.html' },
  { title: 'We moeten opstaan voor elkaar', source: 'De Groene Amsterdammer', url: 'https://www.groene.nl/artikel/we-moeten-opstaan-voor-elkaar' },
  { title: 'Nieuwe Graanmarkt wordt vrouwvriendelijker', source: 'VRT', url: 'https://www.vrt.be/vrtnws/nl/2025/07/03/stad-brussel-wil-nieuwe-graanmarkt-vrouwvriendelijker-maken/' },
  { title: 'Nieuwe Graanmarkt wordt vrouwvriendelijker', source: 'Bruzz', url: 'https://www.bruzz.be/actua/stedenbouw/stad-brussel-wil-nieuwe-graanmarkt-vrouwvriendelijker-maken-2025-07-03' },
  { title: 'Park Ouest blijft open tot februari', source: 'DH', url: 'https://www.dhnet.be/regions/bruxelles/2025/12/24/bonne-nouvelle-pour-le-park-ouest-a-molenbeek-le-parc-reste-ouvert-jusqua-fin-fevrier-EOMAVG2DI5EQVK6ZT7O4JZ73YI/' },
  { title: 'Park West bedreigd met sluiting', source: 'Bruzz', url: 'https://www.bruzz.be/actua/stedenbouw/molenbeeks-park-west-met-sluiting-bedreigd-door-regeringscrisis-2025-12-11' },
  { title: 'Parc Ouest menacé de fermeture', source: 'Brussels Today', url: 'https://www.bruxellestoday.be/quartiers/parc-ouest-molenbeek-menace-fermeture.html' },
  { title: 'Parc Ouest menacé sans gouvernement', source: 'BX1', url: 'https://bx1.be/categories/news/molenbeek-sans-gouvernement-bruxellois-le-projet-parc-ouest-menace/' },
  { title: 'Le salon du quartier menacé', source: 'DH', url: 'https://www.dhnet.be/regions/bruxelles/2025/12/13/park-ouest-cest-le-salon-de-la-moitie-du-quartier-un-projet-socioculturel-etale-sur-3-hectares-menace-de-fermeture-U727XYG3KJD6HLIEOLHDF6LGEM/' },
  { title: 'Parc Ouest en sursis, peur', source: 'Brussels Today', url: 'https://www.bruxellestoday.be/quartiers/parc-ouest-sursis-fermeture.html' },
  { title: 'Park West blijft toch open', source: 'Nieuwsblad', url: 'https://www.nieuwsblad.be/regio/brussel/brussel/park-west-blijft-open-het-loont-om-als-buurt-op-te-komen-voor-wat-belangrijk-is/124520236.html' },
  { title: "Molenbeek's Park West blijft open", source: 'Bruzz', url: 'https://www.bruzz.be/actua/stedenbouw/park-west-molenbeek-blijft-dan-toch-open-2026-01-17' },
  { title: 'Parc menacé restera finalement ouvert', source: 'Le Soir', url: 'https://www.lesoir.be/723004/article/2026-01-17/cest-un-signal-tres-fort-un-parc-bruxellois-menace-de-fermeture-va-finalement' },
  { title: 'Parc Ouest reste ouvert finalement', source: 'BX1', url: 'https://bx1.be/categories/news/le-parc-ouest-de-molenbeek-menace-de-fermeture-restera-ouvert-un-grand-merci-a-tous-ceux-qui-se-sont-mobilises/' },
  { title: 'Ouvert grâce à mobilisation citoyenne', source: 'Brussels Today', url: 'https://www.bruxellestoday.be/actualite/parc-ouest-molenbeek-ouvert.html' },
  { title: 'Buurtbewoners houden Park West open', source: 'VRT', url: 'https://www.vrt.be/vrtnws/nl/2026/01/17/park-west-in-molenbeek-blijft-dan-toch-open/' },
  { title: 'Park West blijft toch open', source: 'Bruzzket', url: 'https://www.bruzzket.be/nieuws/park-west-molenbeek-blijft-toch-open-na-veel-protest-2026-01-19' },
  { title: 'Groene ontmoetingsruimte in drukke wijk', source: 'Visie', url: 'https://visie.net/artikel/parc-ouest-groene-ontmoetingsruimte-in-drukbevolkte-wijk' },
  { title: 'Tijdelijk gebruik leegstand wint belang', source: 'Bruzz', url: 'https://www.bruzz.be/actua/stedenbouw/tijdelijk-gebruik-van-leegstaande-gebouwen-steeds-belangrijker-brussel-2026-03-02' },
  { title: 'Kinderen bouwen zelf hun park', source: 'Jint', url: 'https://www.jint.be/verhalen/park-ouest-bouwen-kinderen-zelf-aan-hun-park' },
  { title: 'Occupation temporaire, nouvel outil urbain', source: 'Brussels Today', url: 'https://www.bruxellestoday.be/environnement/bruxelles-occupation-temporaire-transformation.html' },
  { title: 'Tijdelijk gebruik leegstand wint belang', source: 'Nieuwsblad', url: 'https://www.nieuwsblad.be/regio/brussel/brussel/tijdelijk-gebruik-van-leegstaande-gebouwen-steeds-belangrijker-in-brussel/138380217.html' },
  { title: 'Molenbeek moves on from terror', source: 'The New York Times', url: 'https://www.nytimes.com/2026/03/22/world/europe/brussels-terror-molenbeek.html' },
]

export const mediaItems: MediaItem[] = rawMediaItems.map((item, i) => {
  const id = `m${i + 1}`
  return {
    id,
    title: item.title,
    source: item.source,
    url: item.url,
    thumbnail: NO_LOCAL_SCREENSHOT.has(id)
      ? mshotsThumbnail(item.url)
      : `/images/media-screenshots/${id}.jpg`,
  }
})

export const heroImage = '/images/hero.jpg'

export const publicationsBlurb =
  'Ontdek onze publicaties over Park Ouest. Kies een document om te downloaden of blader er doorheen als een digitaal boekje.'
