import { computed } from 'vue'
import { useLocale } from '~/composables/useLocale'
import type { Locale } from '~/composables/useLocale'

/**
 * Static UI copy (labels, buttons, aria-labels) that isn't part of the
 * content data in ~/data/content. Keyed by locale.
 */
export const ui = {
  nl: {
    nav: { ariaLabel: 'Hoofdnavigatie' },
    publications: {
      title: 'Publicaties',
      readOnline: 'Lees online',
      download: 'Download PDF',
    },
    parkInCijfers: {
      zoomAria: 'Klik om in te zoomen',
      prevAria: 'Vorige infographic',
      nextAria: 'Volgende infographic',
      goToAria: (i: number) => `Ga naar infographic ${i}`,
      altTemplate: (i: number) => `Infographic Park Ouest ${i}`,
    },
    podcasts: {
      pill: 'Beluister',
      title: 'Podcasts',
      lead: 'Radio Park Ouest verzamelt de verhalen van de buurt. Elke aflevering bespreken we een aspect van hoe Park Ouest eruit zou kunnen zien. Aan de hand van de inhoud van deze podcasts tekent het ontwerpbureau de plannen van het toekomstig park. Hieronder kan je de afleveringen beluisteren. Je kan ook een korte samenvatting lezen in pdf vorm.',
      episodeLabel: 'Aflevering',
      summaryTitle: 'Samenvatting in PDF',
      summaryDesc: 'Een korte samenvatting van de podcastreeks.',
      playPauseAria: 'Afspelen/pauzeren',
      closePlayerAria: 'Speler sluiten',
    },
    fotos: {
      pill: 'Galerij',
      title: 'Foto\'s',
      lead: 'Blader door foto\'s van Park Ouest — het groen, de paden en de mensen die er samenkomen.',
      zoomAria: 'Klik om in te zoomen',
      prevAria: 'Vorige foto',
      nextAria: 'Volgende foto',
      altTemplate: (i: number) => `Park Ouest foto ${i}`,
    },
    media: {
      title: 'In de pers',
      lead: 'Persberichten, artikelen en reportages over Park Ouest in de media.',
      readArticle: 'Lees artikel',
      altTemplate: (title: string, source: string) => `Screenshot van het artikel '${title}' op ${source}`,
    },
    footer: {
      text: 'Een project van en voor de buurt, in samenwerking met',
      photoCredit: 'Foto\'s door Tine Declerck, Wiebe Matthys',
    },
    backToTop: { ariaLabel: 'Terug naar boven' },
    pdfViewer: {
      closeAria: 'Sluiten',
      loadingPage: (loaded: number, total: number, pct: number) => `Pagina ${loaded} van ${total} laden… (${pct}%)`,
      opening: 'PDF openen…',
      error: 'Kon PDF niet laden. Controleer of het bestand bestaat.',
      prev: '← Vorige',
      next: 'Volgende →',
      hint: 'Sleep of klik om te bladeren',
      pageAlt: 'PDF pagina',
    },
    languageSwitcher: { ariaLabel: 'Kies taal' },
  },
  fr: {
    nav: { ariaLabel: 'Navigation principale' },
    publications: {
      title: 'Publications',
      readOnline: 'Lire en ligne',
      download: 'Télécharger le PDF',
    },
    parkInCijfers: {
      zoomAria: 'Cliquez pour zoomer',
      prevAria: 'Infographie précédente',
      nextAria: 'Infographie suivante',
      goToAria: (i: number) => `Aller à l'infographie ${i}`,
      altTemplate: (i: number) => `Infographie Park Ouest ${i}`,
    },
    podcasts: {
      pill: 'Écouter',
      title: 'Podcasts',
      lead: 'Radio Park Ouest rassemble les histoires du quartier. Chaque épisode aborde un aspect de ce à quoi Park Ouest pourrait ressembler. C\'est sur base du contenu de ces podcasts que le bureau d\'études dessine les plans du futur parc. Ci-dessous, vous pouvez écouter les épisodes. Vous pouvez également lire un court résumé au format pdf.',
      episodeLabel: 'Épisode',
      summaryTitle: 'Résumé en PDF',
      summaryDesc: 'Un bref résumé de la série de podcasts.',
      playPauseAria: 'Lecture/Pause',
      closePlayerAria: 'Fermer le lecteur',
    },
    fotos: {
      pill: 'Galerie',
      title: 'Photos',
      lead: 'Parcourez les photos de Park Ouest — la verdure, les chemins et les gens qui s\'y retrouvent.',
      zoomAria: 'Cliquez pour zoomer',
      prevAria: 'Photo précédente',
      nextAria: 'Photo suivante',
      altTemplate: (i: number) => `Photo Park Ouest ${i}`,
    },
    media: {
      title: 'Dans la presse',
      lead: 'Communiqués de presse, articles et reportages sur Park Ouest dans les médias.',
      readArticle: 'Lire l\'article',
      altTemplate: (title: string, source: string) => `Capture d'écran de l'article « ${title} » sur ${source}`,
    },
    footer: {
      text: 'Un projet par et pour le quartier, en collaboration avec',
      photoCredit: 'Photos par Tine Declerck, Wiebe Matthys',
    },
    backToTop: { ariaLabel: 'Retour en haut' },
    pdfViewer: {
      closeAria: 'Fermer',
      loadingPage: (loaded: number, total: number, pct: number) => `Chargement de la page ${loaded} sur ${total}… (${pct}%)`,
      opening: 'Ouverture du PDF…',
      error: 'Impossible de charger le PDF. Vérifiez que le fichier existe.',
      prev: '← Précédent',
      next: 'Suivant →',
      hint: 'Glissez ou cliquez pour tourner les pages',
      pageAlt: 'Page PDF',
    },
    languageSwitcher: { ariaLabel: 'Choisir la langue' },
  },
} as const satisfies Record<Locale, unknown>

export function useT() {
  const { locale } = useLocale()
  return computed(() => ui[locale.value])
}
