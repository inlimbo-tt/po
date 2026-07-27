<script setup lang="ts">
import { ref } from 'vue'
import { mediaItems } from '~/data/content'
import type { MediaItem } from '~/data/content'

const activeItem = ref<MediaItem | null>(null)

function openItem(item: MediaItem) {
  activeItem.value = item
}

function closeModal() {
  activeItem.value = null
}
</script>

<template>
  <section id="media" class="site-section">
    <div class="section-inner">
      <h2 class="section-title">Media</h2>
      <p class="section-lead">
        Persberichten, artikelen en reportages over Park Ouest in de media.
      </p>

      <div class="media-grid">
        <button
          v-for="item in mediaItems"
          :key="item.id"
          class="media-card"
          @click="openItem(item)"
        >
          <img
            :src="item.thumbnail ?? item.url"
            :alt="item.title"
            class="media-thumb"
          />
          <div class="media-content">
            <span class="media-source">{{ item.source }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.blurb }}</p>
            <span class="media-type">{{ item.type === 'pdf' ? 'PDF' : 'Afbeelding' }}</span>
          </div>
        </button>
      </div>
    </div>

    <div v-if="activeItem" class="media-modal" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close" @click="closeModal">✕</button>
        <h3>{{ activeItem.title }}</h3>
        <p class="modal-source">{{ activeItem.source }}</p>

        <img
          v-if="activeItem.type === 'image'"
          :src="activeItem.url"
          :alt="activeItem.title"
          class="modal-image"
        />

        <div v-else class="modal-pdf">
          <iframe :src="activeItem.url" title="PDF viewer" />
          <a :href="activeItem.url" download class="pdf-download">Download PDF</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.media-card {
  text-align: left;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.media-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.media-thumb {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
}

.media-content {
  padding: 1.25rem;
}

.media-source {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #2f6b4a;
}

.media-content h3 {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0.35rem 0 0.5rem;
}

.media-content p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.media-type {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #999;
}

.media-modal {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-content {
  background: #fff;
  border-radius: 16px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  padding: 2rem;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.25rem;
  color: #999;
  transition: color 0.2s;
}

.modal-close:hover {
  color: #1a1a1a;
}

.modal-content h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
  padding-right: 2rem;
}

.modal-source {
  color: #2f6b4a;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
}

.modal-pdf iframe {
  width: 100%;
  height: 60vh;
  border: none;
  border-radius: 8px;
}

.pdf-download {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #2f6b4a;
  color: #fff;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.pdf-download:hover {
  background: #1f4a37;
}
</style>
