# Park Ouest UX/UI Audit and Redesign Plan

## Scope and evidence

This audit covers the repository at branch `big-reworks`, commit `1dccc96` (`Replace site photos with supplied gallery`), and the rendered site at <https://www.parkouest.be/> (which resolves to `https://parkouest.be/`). Source-level findings are marked **Code-verified**; live layout and behavior observations are **Rendered-verified**; recommendations that require user testing are marked **Hypothesis**.

The live site was inspected at desktop width (1361 px) and mobile width (390 px). No user testing or assistive-technology audit was performed. The current branch is not the deployment branch, and the live site does not match all content in this checkout; treat that difference as an important verification constraint, not as evidence that the checked-out source is what visitors currently see.

## Current site and architecture

- **Code-verified:** The site is a Nuxt/Vue single-page experience assembled in [app/pages/index.vue](./app/pages/index.vue). Its five hero tiles jump to section anchors; the evolution section embeds Radio Park Ouest and the Architecten subsection.
- **Code-verified:** Shared copy is split between [app/data/content.ts](./app/data/content.ts) and [app/i18n/ui.ts](./app/i18n/ui.ts). Dutch and French are selected in [app/composables/useLocale.ts](./app/composables/useLocale.ts), with the choice stored in local storage.
- **Code-verified:** Nuxt SSR and Tailwind CSS v4 are used without a component framework. Styling and tokens are in [app/assets/css/main.css](./app/assets/css/main.css). Section reveal behavior, including a reduced-motion bypass, is in [app/plugins/reveal.ts](./app/plugins/reveal.ts).
- **Code-verified:** Publications, photo and infographic carousels, audio playback, PDF rendering, and press cards are separate components under `app/components/`. The large PDF reader uses PDF.js and PageFlip in [app/components/PdfZineViewer.vue](./app/components/PdfZineViewer.vue).
- **Source-verified:** The existing [2026 annual report](./public/pdfs/ParkOuest_jaarverslag2026.pdf) records five preliminary design teams based on *Key Elements 1.0*, the summer 2024 selection of Studio Paola Viganò and Plant en Houtgoed, 2025 meetings with residents/designers/Leefmilieu Brussel, and subsequent adaptation of the design with the city and its users. It also documents Quick Wins 2.0. This provides reliable narrative material, although no separate proposal rendering was identified in the checked-out image assets.
- **Code-verified:** [nuxt.config.ts](./nuxt.config.ts) sets GitHub Pages output and a root base URL. [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) generates and deploys the static site on pushes to `main`. The current branch `big-reworks` does not itself trigger that workflow.
- **Code-verified:** The package scripts provide build, development, generation and preview commands, but no dedicated test or lint script. The checked-out asset directories are large (approximately 219 MB in `public/audio`, 138 MB in `public/pdfs`, and 24 MB in `public/images`); audio and documents are interaction-loaded, but their download sizes still merit review.

## What is working well

- **Code-verified:** A recognizable identity is already present: the hand-drawn wordmark, project photography, green/amber palette, PT Serif headings and Inter body text. The implementation uses shared design tokens rather than introducing a different visual system per section.
- **Code-verified:** The hero offers a useful set of section anchors, and publications expose both an online reader and a PDF download. The *Key Elements* document is already available in the publications content.
- **Code-verified:** The evolution section already expresses the intended parent-child structure, with Radio Park Ouest and Architecten embedded under the parent. Photo and infographic controls include labels, touch gestures and keyboard handling; focus-visible styling and reduced-motion accommodations also exist.
- **Rendered-verified:** At 390 px, the page has no horizontal overflow. The desktop layout uses three columns for the press cards, while the mobile layout stacks them.
- **Rendered-verified:** The live design retains a strong, memorable photographic first impression. Its cream surfaces and green/amber accents make the content legible over a full-bleed background image.

## Prioritized findings

| Priority | Finding and evidence | User impact | Effort |
|---|---|---|---|
| **P0 — establish baseline** | **Rendered-verified:** The live photo carousel reports `1 / 18` and uses a timestamp-named image. **Code-verified:** this branch's [app/data/content.ts](./app/data/content.ts) generates 37 `photo-##.jpg` paths. The current browser view therefore differs from this branch. The workflow in [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) deploys `main`, not `big-reworks`. | Prevents reviewing or approving against an assumed build. Confirm which version is intended to be the production baseline before any merge or release. | Low |
| **P1 — complete the project story** | **Code-verified:** [app/components/ParkEvolutionSection.vue](./app/components/ParkEvolutionSection.vue) has only the title and question; [app/components/PodcastsSection.vue](./app/components/PodcastsSection.vue) mainly explains the radio recordings; [app/components/ArchitectsSection.vue](./app/components/ArchitectsSection.vue) explicitly says more information is coming and uses placeholder images/text. The four stages, proposal presentation, Quick Wins and pavilion story are absent from this content. | Visitors cannot yet follow how the project developed, how participation influenced the proposal, or what happens next. | Medium |
| **P1 — make visiting practical** | **Code-verified:** no address, map, or seasonal opening hours were found in the page components or localized UI copy. The footer in [app/components/FooterSection.vue](./app/components/FooterSection.vue) currently contains partner logos and a general project statement. | People interested in visiting lack essential planning information, especially on mobile. | Low |
| **P1 — resolve external credit links** | **Rendered/source research:** Skope's official site is `https://skope.be/`; its [Gare de l'Ouest pavilion page](https://skope.be/index.php/2022/02/24/projet-gare-de-louest-skope/) credits “SKOPE et LE COLLECTIF DALLAS.” The official Collectif Dallas website URL could not be verified. The architect cards in [app/components/ArchitectsSection.vue](./app/components/ArchitectsSection.vue) link to their organizations, but there is no pavilion credit. | Adding an assumed Dallas URL risks a broken or misdirected link and weakens the credibility of a new project credit. Confirm the organization's official URL before implementation. | Low |
| **P1 — make the hierarchy and next steps legible** | **Code-verified:** the evolution parent heading is smaller than the nested radio heading, while the architect subheading and its cards use the same `h3` level. The architects' actual proposals are not surfaced in the current placeholder cards. **Hypothesis:** readers may understand the parent/child relationship more quickly with numbered story stages, clear nesting and proposal material. | The requested story could otherwise read as unrelated sections or a linear “temporary park → finished park” process. | Medium |
| **P1 — improve document and non-text access** | **Code-verified:** [app/components/PdfZineViewer.vue](./app/components/PdfZineViewer.vue) renders PDF pages as canvas-derived images; the download button in [app/components/PublicationsSection.vue](./app/components/PublicationsSection.vue) is the text-accessible alternative. The current carousel alt text in [app/i18n/ui.ts](./app/i18n/ui.ts) identifies only a photo or infographic number, not its content. The participatory summary URL in [app/components/PodcastsSection.vue](./app/components/PodcastsSection.vue) is hard-coded to the Dutch PDF even though a French PDF is present under `public/pdfs/`. | Screen-reader users and people unable to use the flipbook need direct document alternatives and meaningful image descriptions; French readers should receive the French summary. | Low–medium |
| **P2 — reduce the mobile first-screen cost** | **Rendered-verified:** at 390 px, the header, wordmark, tagline and CTA take up most of the first viewport; the first section tile begins below that content and is only partly visible. **Code-verified:** the hero uses generous vertical padding and large logo/tagline backdrops in [app/components/HeroSection.vue](./app/components/HeroSection.vue). | The hero is distinctive but pushes the actual section choices down, delaying the first useful navigation action on phones. | Medium |
| **P2 — improve wayfinding and research discovery** | **Code-verified:** the header in [app/components/SiteHeader.vue](./app/components/SiteHeader.vue) contains a home link and language switcher but no section navigation. The press section in [app/components/MediaSection.vue](./app/components/MediaSection.vue) renders 27 links as a long card grid with no grouping or filtering. **Rendered-verified:** the desktop media section alone is about 3,750 px tall. | It is possible to reach the main sections from the hero, but returning or finding a specific press item later takes effort. Research users must scan a large ungrouped collection. | Medium |
| **P2 — make interactive overlays more robust** | **Code-verified:** the photo and infographic lightboxes in [app/components/FotosSection.vue](./app/components/FotosSection.vue) and [app/components/ParkInCijfersSection.vue](./app/components/ParkInCijfersSection.vue) are clickable overlays without dialog semantics or focus management. The PDF modal in [app/components/PdfZineViewer.vue](./app/components/PdfZineViewer.vue) likewise has no dialog role or documented focus handling. Audio playback failures are silently ignored in [app/components/PodcastsSection.vue](./app/components/PodcastsSection.vue). | Keyboard and screen-reader users may lose context when an overlay opens; a playback failure gives no useful feedback. | Medium |
| **P3 — tune localization and metadata** | **Code-verified:** hero tile labels are English (“READ”, “COUNT”, “LISTEN”, “LOOK”, “FOLLOW”) in both locales in [app/data/content.ts](./app/data/content.ts). [nuxt.config.ts](./nuxt.config.ts) has one static page title/description, including “podcasts,” rather than the new evolution framing. | Mixed-language controls and outdated metadata make the bilingual experience feel unfinished and reduce clarity in search previews. | Low |

## Audience journeys

- **Two-minute overview:** The hero tagline gives a concise introduction and the annual-report CTA is visible. The page does not yet summarize the four-stage development or show practical visiting information at this depth.
- **Ten-minute exploration:** The anchored single-page layout supports browsing the numbers, evolution story, photos and press. The evolution section currently lacks the requested narrative, while the first-screen height and long press grid add friction.
- **Detailed research:** Publications, audio and press links are available, but resources are spread across sections; the flipbook is not a replacement for accessible PDF text, the press collection is not grouped, and content about architects/proposals is still placeholder copy.

## Recommended information architecture

Keep this as a landing page with a small number of clear, stable anchors. Do not split Park in Evolution, Radio Park Ouest or Architecten into new routes.

1. **Introduction:** a concise project explanation and clear anchor tiles, with a direct route to the story, publications and visitor information.
2. **Park in Evolution:** one parent section containing four visibly connected stages. Use the annual report's selection and design-process account in stage 2, link to the report and the architects' official sites, and do not imply that generic park photos are proposal renderings. Embed the radio episodes and participation explanation in stage 3; connect *Key Elements* to stage 1; explain Quick Wins and continued adaptation in stage 4.
3. **Park Ouest in cijfers / physical park:** retain the existing infographic imagery and add an accessible text summary for its key content. Do not create or infer statistics.
4. **Publications and documentation:** retain the annual report and *Key Elements*, with direct read/download options. Link *Key Elements* from the evolution narrative rather than hiding it in this section alone.
5. **Photos and press:** preserve the photo carousel and press resources. Consider grouping press coverage by topic or year only if the existing source data supports those labels.
6. **Visit Park Ouest:** provide the supplied map, address and two seasonal schedules in a compact, mobile-friendly block discoverable from the hero and near the page end.

This structure supports browsing at different depths without adding routes. Keep all navigation labels, stage text, resource actions and practical details in Dutch and French.

## Visual and interaction direction

- Keep the wordmark, photography, restrained green/amber palette and two-font typographic system. Shorten the hero vertically on small screens so visitors reach its navigation sooner without losing its distinctive composition.
- Render the four evolution stages as a legible editorial sequence—numbered chapters or a simple connected timeline are good starting points. Use a visual cue that the park keeps evolving after stage 4, rather than a “completed” endpoint. **Hypothesis:** test this story treatment with visitors; do not prefer novelty over comprehension.
- Make nested content visibly subordinate to the evolution parent, while preserving the previous user-approved embedding of Radio Park Ouest and Architecten. Use spacing, type scale and restrained surface changes, not separate top-level pages.
- Keep photography and documents prominent, but pair image-led information with text alternatives. Add captions or credits only when verified information is available.
- Keep motion purposeful, optional and reduced-motion aware. Ensure focus remains visible, overlays behave as dialogs for keyboard/screen-reader users, and every audio or document action gives clear status and failure feedback.
- Keep the existing section-card language, but vary composition where it helps distinguish storytelling, practical information and archival resources. Avoid repeating a uniform grid of rounded cards for every content type.

## External links and source verification

- **Skope:** `https://skope.be/` is the organization's website. Its project page is titled “Pavillon gare de l'Ouest” and credits SKOPE and Le Collectif Dallas.
- **Collectif Dallas:** no official website URL could be verified in this audit. Ask the project team or organization for the canonical URL before adding a link. The user-provided design/build roles can be incorporated, but the cited project page's credit alone does not establish a separate official domain or independently spell out that role split.
- Studio Paola Viganò and Plant en Houtgoed already have links in [app/components/ArchitectsSection.vue](./app/components/ArchitectsSection.vue). Before reusing those URLs in redesigned content, check that they still resolve.

## Implementation sequence after approval

| Stage | Work | Expected impact | Effort |
|---|---|---|---|
| 0. Confirm baseline and sources | Confirm which branch/content should be production baseline; verify the Dallas URL, proposal imagery/material, pavilion credit roles and any photo-credit requirements. | Avoids documenting or deploying the wrong version and prevents fabricated details or broken links. | Low |
| 1. Editorial and bilingual content | Draft and review Dutch/French copy for the four stages, pavilion, Key Elements links and visitor schedules; determine which existing assets support the architect proposals. | Gives the redesign an accurate, complete story before layout decisions harden. | Medium |
| 2. Information structure and mobile hierarchy | Adjust hero density and anchor labels; build the embedded four-stage evolution narrative; place visitor information in a highly discoverable position. | Improves the two-minute overview, wayfinding and story comprehension. | Medium |
| 3. Resource and access improvements | Add proposal/resource links; ensure language-specific summaries; add text alternatives and captions only from verified data; improve overlay semantics and audio error feedback. | Makes research materials and interactive content usable across languages and input/access needs. | Medium |
| 4. Visual refinement and content QA | Apply the approved playful editorial direction, review all images/links/copy, and compare Dutch and French at phone, tablet and desktop widths. | Unifies the design while protecting the site's identity and content accuracy. | Medium |
| 5. Static build and deployment check | Generate and preview the GitHub Pages output, verify asset paths and anchor navigation, then merge through the normal `main` deployment workflow only after approval. | Reduces the risk of a successful local design failing on the deployed custom domain. | Low |

## Branch and local testing recommendation

Do not develop this redesign directly on `main`. After approval, create `redesign/ux-2026` from the agreed production baseline (currently the checked-out branch is `big-reworks`, so confirm the intended base before branching). The existing GitHub Pages workflow only deploys pushes to `main`; feature-branch pushes should be treated as previews, not production deployments.

Use the existing project commands and Node 20 deployment environment:

1. Install dependencies using the repository's existing lockfile and deployment-compatible command (`npm install --legacy-peer-deps` is what the workflow currently runs).
2. Start `npm run dev` and inspect the Dutch and French pages at approximately 390 px, tablet width and desktop width. Test section anchors, language switching, touch controls, keyboard-only navigation, reduced motion, audio, document download/read, external links and the visitor map.
3. Run `npm run generate` and preview the generated `.output/public` site with `npm run preview` (or an equivalent local static server). Verify root-relative asset URLs, direct anchor loads, PDF/audio paths and all images in the generated site.
4. Run `npm run build` as a production build check. The repository currently defines no test or lint script; add no tooling unless implementation work demonstrates a need.
5. Compare the preview against the agreed production baseline before merging. Verify the GitHub Pages action succeeds after the approved merge to `main`.

## Review notes before publication

1. **Collectif Dallas URL:** its name is included in the pavilion credit, but remains unlinked because an official URL could not be verified. Add a link only after confirming the canonical website.
2. **Architect proposal visuals:** the stage uses source-backed text from the annual report and links to both studios. No final proposal rendering was identified in the checked-out assets; add one only if an approved asset is supplied.
3. **Production baseline:** this implementation branches from `big-reworks` as the available working baseline. The live site's 18-photo carousel differs from the branch's 37-photo data, and the workflow deploys `main` only. Resolve that discrepancy before publishing.
4. **Impact content:** the existing numbers infographic is retained; no additional statistics or outcomes were invented.
5. **Story presentation:** the implementation uses four numbered, connected stages and a loop cue for continued evolution. Treat this as a design hypothesis until tested with visitors.

## Stop point

The user approved implementation after reviewing the plan. The initial redesign is available on branch `redesign/ux-2026`, based on `big-reworks`; it has not been committed or deployed. A local development preview is running at `http://127.0.0.1:3000/`. Review the implementation and resolve the publication notes above before any production merge.
