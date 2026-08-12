/**
 * Tracks whether the fixed podcast player bar (bottom of viewport) is
 * currently visible, so other fixed UI — like the back-to-top button —
 * can move out of its way instead of overlapping its controls.
 */
export function useAudioBarActive() {
  return useState<boolean>('audio-bar-active', () => false)
}
