<script setup lang="ts">
import { useT } from '~/i18n/ui'

const t = useT()
const mapUrl = 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c3c394ea10480b:0xc4939de254c522ab'
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent('Rue Alphonse Vandenpeereboom 31, 1080 Molenbeek-Saint-Jean, Belgium')}&output=embed`
</script>

<template>
  <section id="bezoek" class="site-section surface-accent-amber" aria-labelledby="visit-title">
    <div v-reveal class="section-inner">
      <p class="eyebrow bg-park-amber/15 text-park-ink">{{ t.visit.addressLabel }}</p>
      <h2 id="visit-title" class="section-title mt-3">{{ t.visit.title }}</h2>

      <div class="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <div class="rounded-3xl bg-white p-5 shadow-sm sm:p-7">
          <h3 class="font-heading text-xl font-bold text-park-ink">{{ t.visit.addressLabel }}</h3>
          <address class="mt-3 not-italic leading-relaxed text-park-ink/80">{{ t.visit.address }}</address>
          <a
            :href="mapUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-park-green px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-park-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-park-green"
          >
            {{ t.visit.mapLink }}
            <span aria-hidden="true">↗</span>
          </a>
          <p class="mt-4 text-sm text-park-ink/75">
            {{ t.visit.emailLabel }}
            <a class="font-bold text-park-green-dark underline underline-offset-4 hover:text-park-green" href="mailto:parkouest@toestand.be">parkouest@toestand.be</a>
          </p>
          <iframe
            class="mt-5 aspect-[16/9] w-full rounded-2xl border-0"
            :src="mapEmbedUrl"
            :title="t.visit.mapTitle"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <div class="grid gap-4 sm:grid-cols-2">
            <section class="rounded-3xl border border-park-green/10 bg-white/80 p-5 sm:p-6" :aria-label="t.visit.winter">
              <h3 class="font-heading text-xl font-bold text-park-green-dark">{{ t.visit.winter }}</h3>
              <dl class="mt-4 space-y-3">
                <div class="flex items-start justify-between gap-3 border-b border-park-ink/8 pb-3">
                  <dt class="text-sm text-park-ink/75">{{ t.visit.winterWeekdays }}</dt>
                  <dd class="shrink-0 text-sm font-bold text-park-ink">{{ t.visit.winterWeekdayHours }}</dd>
                </div>
                <div class="flex items-start justify-between gap-3">
                  <dt class="text-sm text-park-ink/75">{{ t.visit.winterSunday }}</dt>
                  <dd class="shrink-0 text-sm font-bold text-park-ink">{{ t.visit.winterSundayHours }}</dd>
                </div>
              </dl>
            </section>

            <section class="rounded-3xl border border-park-amber/20 bg-park-amber/10 p-5 sm:p-6" :aria-label="t.visit.summer">
              <h3 class="font-heading text-xl font-bold text-park-ink">{{ t.visit.summer }}</h3>
              <dl class="mt-4 space-y-3">
                <div class="flex items-start justify-between gap-3 border-b border-park-ink/8 pb-3">
                  <dt class="text-sm text-park-ink/75">{{ t.visit.summerWeekdays }}</dt>
                  <dd class="shrink-0 text-sm font-bold text-park-ink">{{ t.visit.summerWeekdayHours }}</dd>
                </div>
                <div class="flex items-start justify-between gap-3">
                  <dt class="text-sm text-park-ink/75">{{ t.visit.summerSunday }}</dt>
                  <dd class="shrink-0 text-sm font-bold text-park-ink">{{ t.visit.summerSundayHours }}</dd>
                </div>
              </dl>
            </section>
          </div>
          <FooterSection class="mt-6" />
        </div>
      </div>
    </div>
  </section>
</template>
