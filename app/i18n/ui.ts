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
    hero: {
      tagline: 'Een tijdelijk park in Molenbeek, gemaakt door en voor de buurt — ruimte voor ontmoeting, groen en verhalen.',
      cta: 'Lees het jaarrapport',
    },
    publications: {
      title: 'Publicaties',
      readOnline: 'Lees online',
      download: 'Download PDF',
      jaarrapportFrNotice: '',
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
      title: 'Radio Park Ouest',
      lead: 'De radioshows brengen verhalen en ideeën uit de buurt samen. Ze voeden het participatieve traject en helpen de architecten het definitieve park vorm te geven.',
      episodeLabel: 'Aflevering',
      summaryTitle: 'Samenvatting in PDF',
      summaryDesc: 'Een korte samenvatting van de podcastreeks.',
      playPauseAria: 'Afspelen/pauzeren',
      closePlayerAria: 'Speler sluiten',
    },
    parkEvolution: {
      title: 'Park in evolutie',
      subtitle: 'Hoe groeien we toe naar het definitieve park?',
      architectsTitle: 'Architecten',
      architectsLead: 'Binnenkort lees je hier meer over de architecten en hun plannen voor het definitieve park.',
      architectPlaceholder: 'Meer informatie volgt binnenkort.',
      architectImageAlt: 'Illustratie van een parkontwerp.',
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
      title: 'Pers',
      lead: 'Persberichten, artikelen en reportages over Park Ouest in de media.',
      readArticle: 'Lees artikel',
      altTemplate: (title: string, source: string) => `Screenshot van het artikel '${title}' op ${source}`,
    },
    footer: {
      text: 'Een project van en voor de buurt, in samenwerking met',
      photoCredit: 'Foto\'s van Park Ouest',
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
    hero: {
      tagline: 'Un parc temporaire à Molenbeek, conçu par et pour le quartier — un lieu de rencontre, de verdure et d\'histoires.',
      cta: 'Lire le rapport annuel',
    },
    publications: {
      title: 'Publications',
      readOnline: 'Lire en ligne',
      download: 'Télécharger le PDF',
      jaarrapportFrNotice: "Nous n'avons malheureusement pas encore traduit le rapport annuel en français — en attendant, vous pouvez consulter la version néerlandaise ci-dessous.",
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
      title: 'Radio Park Ouest',
      lead: 'Les émissions de radio rassemblent les récits et les idées du quartier. Elles nourrissent le processus participatif et aident les architectes à concevoir le parc définitif.',
      episodeLabel: 'Épisode',
      summaryTitle: 'Résumé en PDF',
      summaryDesc: 'Un bref résumé de la série de podcasts.',
      playPauseAria: 'Lecture/Pause',
      closePlayerAria: 'Fermer le lecteur',
    },
    parkEvolution: {
      title: 'Le parc en évolution',
      subtitle: 'Comment avançons-nous vers le parc définitif ?',
      architectsTitle: 'Architectes',
      architectsLead: 'Vous trouverez bientôt ici plus d’informations sur les architectes et leurs projets pour le parc définitif.',
      architectPlaceholder: 'Plus d’informations prochainement.',
      architectImageAlt: 'Illustration d’un projet de parc.',
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
      title: 'Presse',
      lead: 'Communiqués de presse, articles et reportages sur Park Ouest dans les médias.',
      readArticle: 'Lire l\'article',
      altTemplate: (title: string, source: string) => `Capture d'écran de l'article « ${title} » sur ${source}`,
    },
    footer: {
      text: 'Un projet par et pour le quartier, en collaboration avec',
      photoCredit: 'Photos de Park Ouest',
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
