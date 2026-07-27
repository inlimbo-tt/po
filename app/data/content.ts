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
  blurb: string
  type: 'image' | 'pdf'
  url: string
  thumbnail?: string
}

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

export const mediaItems: MediaItem[] = [
  {
    id: 'm1',
    title: 'Nieuwe groene long voor de wijk',
    source: 'De Standaard',
    blurb: 'Park Ouest wordt gepresenteerd als voorbeeldproject voor duurzame stadsontwikkeling in Vlaanderen.',
    type: 'image',
    url: '/images/media/article-1.svg',
    thumbnail: '/images/media/article-1.svg',
  },
  {
    id: 'm2',
    title: 'Investering in publieke ruimte',
    source: 'Gazet van Antwerpen',
    blurb: 'Gemeente kondigt extra budget aan voor de verdere uitbouw van Park Ouest.',
    type: 'pdf',
    url: '/pdfs/media-gva.pdf',
    thumbnail: '/images/media/article-2.svg',
  },
  {
    id: 'm3',
    title: 'Architectuurprijs nominatie',
    source: 'Architectura',
    blurb: 'Het landschapsontwerp van Park Ouest is genomineerd voor de Vlaamse Architectuurprijs.',
    type: 'image',
    url: '/images/media/article-3.svg',
    thumbnail: '/images/media/article-3.svg',
  },
  {
    id: 'm4',
    title: 'Reportage: een dag in het park',
    source: 'VRT NWS',
    blurb: 'Televisiereportage over hoe bewoners Park Ouest ervaren als ontmoetingsplek.',
    type: 'image',
    url: '/images/media/article-4.svg',
    thumbnail: '/images/media/article-4.svg',
  },
]

export const heroImage = '/images/hero.jpg'

export const publicationsBlurb =
  'Ontdek onze publicaties over Park Ouest. Kies een document om te downloaden of blader er doorheen als een digitaal boekje.'
