<script setup lang="ts">
import { useT } from '~/i18n/ui'

const t = useT()
const keyElementsUrl = useAsset('/pdfs/key-elements.pdf')
</script>

<template>
  <section id="park-in-evolutie" class="site-section surface-accent-green" aria-labelledby="park-evolution-title">
    <div v-reveal class="section-inner">
      <p class="eyebrow bg-park-green/10 text-park-green-dark">{{ t.parkEvolution.subtitle }}</p>
      <h2 id="park-evolution-title" class="section-title mt-3">{{ t.parkEvolution.title }}</h2>

      <ol class="evolution-timeline mt-8 space-y-5 sm:space-y-6" :aria-label="t.parkEvolution.title">
        <li class="evolution-stage" :aria-label="t.parkEvolution.stageOneTitle">
          <span class="evolution-stage-number">01</span>
          <article class="evolution-stage-content">
            <h3 class="font-heading text-xl font-bold text-park-ink sm:text-2xl">{{ t.parkEvolution.stageOneTitle }}</h3>
            <p class="mt-3 max-w-3xl leading-relaxed text-park-ink/80">{{ t.parkEvolution.stageOneText }}</p>

            <div class="mt-5 grid gap-4 rounded-2xl bg-park-cream/85 p-4 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] sm:items-center sm:p-5">
              <img
                :src="useAsset('/images/assets/parkouest-pavilion.jpeg')"
                :alt="t.parkEvolution.pavilionImageAlt"
                class="aspect-[4/3] w-full rounded-xl object-cover"
                loading="lazy"
              >
              <div>
                <h4 class="font-heading text-lg font-bold text-park-ink">{{ t.parkEvolution.pavilionTitle }}</h4>
                <p class="mt-1 text-sm leading-relaxed text-park-ink/75">
                  {{ t.parkEvolution.pavilionText }}
                </p>
                <div class="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  <a
                    href="https://skope.be/index.php/2022/02/24/projet-gare-de-louest-skope/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-park-green-dark underline decoration-park-green/40 underline-offset-4 hover:decoration-park-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
                  >
                    Skope <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://collectifdallas.eu/park-Ouest-West-parc"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-park-green-dark underline decoration-park-green/40 underline-offset-4 hover:decoration-park-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
                  >
                    Collectif Dallas <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <a
              :href="keyElementsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-park-green px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-park-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
            >
              {{ t.parkEvolution.keyElementsLink }}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        </li>

        <li class="evolution-stage" :aria-label="t.parkEvolution.stageTwoTitle">
          <span class="evolution-stage-number">02</span>
          <article class="evolution-stage-content">
            <h3 class="font-heading text-xl font-bold text-park-ink sm:text-2xl">{{ t.parkEvolution.stageTwoTitle }}</h3>
            <p class="mt-3 max-w-3xl leading-relaxed text-park-ink/80">{{ t.parkEvolution.stageTwoText }}</p>
            <a
              href="#publications"
              class="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-park-green-dark underline decoration-park-green/40 underline-offset-4 hover:decoration-park-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
            >
              {{ t.parkEvolution.annualReportLink }}
              <span aria-hidden="true">↓</span>
            </a>
            <ArchitectsSection />
          </article>
        </li>

        <li class="evolution-stage" :aria-label="t.parkEvolution.stageThreeTitle">
          <span class="evolution-stage-number">03</span>
          <article class="evolution-stage-content">
            <h3 class="font-heading text-xl font-bold text-park-ink sm:text-2xl">{{ t.parkEvolution.stageThreeTitle }}</h3>
            <p class="mt-3 max-w-3xl leading-relaxed text-park-ink/80">{{ t.parkEvolution.stageThreeText }}</p>
            <PodcastsSection />
          </article>
        </li>

        <li class="evolution-stage" :aria-label="t.parkEvolution.stageFourTitle">
          <span class="evolution-stage-number">04</span>
          <article class="evolution-stage-content evolution-stage-ongoing">
            <h3 class="font-heading text-xl font-bold text-park-ink sm:text-2xl">{{ t.parkEvolution.stageFourTitle }}</h3>
            <p class="mt-3 max-w-3xl leading-relaxed text-park-ink/80">{{ t.parkEvolution.stageFourText }}</p>
            <div class="mt-5 border-t border-park-green/15 pt-4">
              <h4 class="flex items-center gap-2 font-heading text-lg font-bold text-park-green-dark">
                <span aria-hidden="true" class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-park-green text-white">↻</span>
                {{ t.parkEvolution.ongoingTitle }}
              </h4>
              <p class="mt-1 max-w-3xl leading-relaxed text-park-ink/75">{{ t.parkEvolution.ongoingText }}</p>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.evolution-timeline {
  position: relative;
}

.evolution-timeline::before {
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  left: 1rem;
  width: 1px;
  background: rgba(47, 107, 74, 0.22);
  content: '';
}

.evolution-stage {
  position: relative;
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  align-items: start;
  gap: 0.5rem;
}

.evolution-stage-number {
  z-index: 1;
  display: flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(47, 107, 74, 0.22);
  border-radius: 999px;
  background: #fbf7f0;
  color: #1f4a37;
  font-size: 0.75rem;
  font-weight: 800;
}

.evolution-stage-content {
  min-width: 0;
  border: 1px solid rgba(22, 40, 31, 0.07);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.78);
  padding: 1rem;
  box-shadow: 0 8px 26px rgba(22, 40, 31, 0.05);
}

.evolution-stage-ongoing {
  background: rgba(217, 154, 53, 0.12);
}

@media (min-width: 640px) {
  .evolution-timeline::before {
    left: 1.75rem;
  }

  .evolution-stage {
    grid-template-columns: 3.5rem minmax(0, 1fr);
    gap: 1rem;
  }

  .evolution-stage-number {
    width: 3.5rem;
    height: 3.5rem;
  }

  .evolution-stage-content {
    padding: 1.5rem;
  }
}
</style>
