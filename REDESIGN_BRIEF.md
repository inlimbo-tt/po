# Park Ouest Website Redesign Brief

## Purpose

Improve the existing Park Ouest website's visual design, interactions, information architecture and editorial clarity while retaining the project's distinctive, collective identity. The site should explain the project to people who need either a quick overview or a deeper research resource, and make the case for continued public support through clear evidence and storytelling rather than institutional fundraising language.

This brief records the requested scope. The user approved implementation after reviewing the audit and plan; approval does not imply deployment.

## Design philosophy

Combine the efficiency and clarity of Apple-style information design with the unruly, experimental energy of a children's playground. The result should feel accessible, unconventional and alive: clean and legible, but not corporate, institutional or generic.

Preserve the DIY, collective character of Park Ouest. Use the existing photography, illustrations, wordmark, archival material and color identity as meaningful content, not decoration. Make navigation predictable and interactions playful only when they help people understand or use the site.

## Audiences and outcomes

Primary audiences include politicians, public administrations, academics, students, researchers, project partners and people interested in the project.

Visitors should be able to:

1. Understand Park Ouest in about two minutes: what it is, where it is and why it matters.
2. Explore the project's development and participatory approach in about ten minutes.
3. Find publications, audio, press coverage, project material and practical visiting information for detailed research.
4. See a credible case for continued public support without being presented with an invented impact claim or funding pitch.

## Editorial requirements

### Pavilion

Explain naturally within the project story that the Park Ouest pavilion was designed by Skope and built by Collectif Dallas. Link to each organisation's verified website. Skope's website is `https://skope.be/`; its Gare de l'Ouest pavilion project page credits SKOPE and Le Collectif Dallas. Collectif Dallas's official website URL still needs confirmation before implementation; do not guess a URL.

### Park in Evolution

Replace Podcasts as the main organizing idea with a broader account of Park Ouest's development from an empty former industrial space into a park that continues to evolve. Keep the existing radio recordings, but place them within the participation story. Keep this on the landing page as one major section, with the radio and architect content embedded in it rather than creating separate pages.

Organize the narrative around four connected stages. The sequence should be clear, but must not suggest that the park simply moves from unfinished to finished:

1. **A park in the making.** The neighbourhood begins using an empty former industrial site as a park. Everyday use, observation, experimentation and collective construction inform what is added, changed or removed. Link the observations and lessons to the existing *Key Elements* publication.
2. **Selection of the architects.** Introduce Studio Paola Viganò and Plant en Houtgoed, selected with their proposal for the future park. The 2026 annual report documents that five teams submitted preliminary designs based on *Key Elements 1.0*, that the Park Ouest steering committee selected the two studios in summer 2024, and that meetings in 2025 led to a design further adapted with the city and its users. Use this existing project material and link to the report; do not use placeholder content as if it were final. No proposal rendering has been identified in the checked-out assets.
3. **Participation and collective reflection.** Explain how the architects engage with existing park dynamics and how thematic radio recordings bring people together. The recordings and conversations become input for the architects; their revised plans are presented to the public. Keep the existing podcasts as usable audio resources in this stage.
4. **The future park and Quick Wins.** Explain that the final plan draws on the participation process, that some elements are being implemented as Quick Wins, and that others belong to the future permanent park. Emphasize that the park continues to change through use, observation, construction and adaptation.

The Dutch source description supplied in the redesign request begins: “Park Ouest is een park in opbouw. In molenbeek. Er zijn al een paar bomen, een paviljoen, kippen en een speelboot. Maar hoe zal het park er definitief gaan uitzien. Dat wordt beslist met een participatietraject. En dat doen door samen radio te maken.” The editorial treatment should retain its meaning while improving readability and integrating the four stages.

### Practical visitor information

Make the following information easy to discover and readable on mobile:

**Address:** Rue Alphonse Vandenpeereboom 31, 1080 Molenbeek-Saint-Jean, Belgium.

**Google Maps:** <https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3c394ea10480b:0xc4939de254c522ab>

| Season | Days and hours |
|---|---|
| Winter | Wednesday–Saturday, 10:00–18:00; Sunday, 10:00–16:30 (opened by park guardians) |
| Summer | Tuesday–Saturday, 10:00–20:00; Sunday, 10:00–19:30 (opened by park guardians) |

Do not invent dates for the seasonal schedule change.

## Information architecture and visual direction

Prefer one coherent landing page with a small set of clear section anchors over unnecessary pages or deep navigation. It should support a quick overview, an exploratory visit and a research-oriented visit without forcing everyone through the same depth.

Use a clear four-stage sequence or another equally understandable visual narrative for Park in Evolution. Preserve the parent/child hierarchy: the evolution story is the main section; its architect and radio material are embedded parts of the story. Make their distinct role visible with restrained differences in typography, spacing, labels or background—not a separate competing navigation system.

Keep the visual identity playful and specific to Park Ouest: legible typography, strong photography and archival material, lively but controlled composition, clear wayfinding, purposeful microinteractions, and touch- and keyboard-accessible controls. Support responsive layouts and reduced-motion preferences.

## Constraints and acceptance criteria

- Work within the existing Nuxt/Vue architecture and current multilingual Dutch/French functionality.
- Preserve existing project content and assets; retain the background image, annual-report image and Park Ouest in cijfers imagery.
- Remain compatible with the current GitHub Pages static deployment and custom-domain root path.
- Avoid unnecessary dependencies.
- Do not invent statistics, history, participation outcomes, schedule dates or proposal details.
- Verify external URLs before adding them. If an official URL cannot be verified, leave it unresolved rather than linking to an assumed domain.
- Keep usable text and download alternatives for documents and other non-text content.
- Make changes only after the user approves the audit and plan.
