import { nextTick } from 'vue'
import { vi } from 'vitest'

/**
 * Resize the window to a given width and wait for re-render
 *
 * @param {number} width - The width of the window
 */
export async function resizeWindowWidth(width) {
	vi.spyOn(document.documentElement, 'clientWidth', 'get').mockReturnValue(width)
	window.dispatchEvent(new window.Event('resize'))
	await nextTick()
}
