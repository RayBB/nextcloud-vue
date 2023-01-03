<!--
  - @copyright Copyright (c) 2023 Julien Veyssier <eneiluj@posteo.net>
  -
  - @author Julien Veyssier <eneiluj@posteo.net>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
-->

<template>
	<div class="rich-content-editable-wrapper">
		<NcRichContenteditable
			ref="contenteditable"
			:value="value"
			v-bind="$attrs"
			v-on="$listeners"
			@keydown.hash="onHashKeydown"
			@update:value="onUpdateValue" />
		<!--
			// works
			:positioning-disabled="true"
			// this might only work if we directly use floating-vue's <Popper> like in
			// https://floating-vue.starpad.dev/guide/custom-component.html#full-example
			:reference-node="getReferenceNode"
		-->
		<NcPopover
			class="link-picker-popover"
			:shown.sync="showPopper"
			:auto-hide="false"
			@after-hide="onPickerHide">
			<ReferencePicker
				:focus-on-create="true"
				@submit="onSubmit"
				@cancel-provider-select="onPickerCancel" />
		</NcPopover>
	</div>
</template>

<script>
import NcPopover from '../NcPopover/index.js'
import { ReferencePicker } from '@nextcloud/vue-richtext'
import NcRichContenteditable from './NcRichContenteditable.vue'

import Vue from 'vue'
Vue.config.keyCodes.hash = 51

export default {
	name: 'NcRichContenteditableLink',

	components: {
		NcRichContenteditable,
		NcPopover,
		ReferencePicker,
	},

	props: {
		value: {
			type: String,
			default: '',
			required: true,
		},
	},

	data() {
		return {
			showPopper: false,
			cursorCoords: null,
			cursorIndex: null,
			extraOffset: 0,
		}
	},

	computed: {
	},

	methods: {
		showLinkPicker() {
			this.showPopper = true
		},
		hideLinkPicker() {
			this.showPopper = false
		},
		onPickerCancel() {
			this.hideLinkPicker()
		},
		onSubmit(link) {
			const currentValue = this.value
			// const newValue = this.value + ' ' + link
			const newValue = [currentValue.slice(0, this.cursorIndex), link, currentValue.slice(this.cursorIndex)].join('')
			this.$emit('update:value', newValue)
			this.hideLinkPicker()
			// this.$refs.contenteditable.$el.focus()
			// this.restoreCursor(link.length)
		},
		onUpdateValue(value) {
			this.$emit('update:value', value)
		},
		onPickerHide() {
			console.debug('picker was hidden')
			// this.restoreCursor()
		},
		onHashKeydown(e) {
			console.debug('hash key down', e)
			if (e.key === '#') {
				e.preventDefault()
				e.stopPropagation()
				this.storeCursorPosition()
				this.showLinkPicker()
			}
		},
		storeCursorPosition() {
			this.cursorCoords = this.getCaretCoordinates()
			this.cursorIndex = this.getCaretIndex(this.$refs.contenteditable.$el)
			console.debug('coords', this.cursorCoords)
			console.debug('index', this.cursorIndex)
		},
		getReferenceNode() {
			console.debug('getReferenceNode()')
		},
		getCaretCoordinates() {
			let x = 0
			let y = 0
			const isSupported = typeof window.getSelection !== 'undefined'
			if (isSupported) {
				const selection = window.getSelection()
				// Check if there is a selection (i.e. cursor in place)
				if (selection.rangeCount !== 0) {
					// Clone the range
					const range = selection.getRangeAt(0).cloneRange()
					// Collapse the range to the start, so there are not multiple chars selected
					range.collapse(true)
					// getClientRects returns all the positioning information we need
					const rect = range.getClientRects()[0]
					if (rect) {
						x = rect.left // since the caret is only 1px wide, left == right
						y = rect.top // top edge of the caret
					}
				}
			}
			return { x, y }
		},
		getCaretIndex(element) {
			let position = 0
			const isSupported = typeof window.getSelection !== 'undefined'
			if (isSupported) {
				const selection = window.getSelection()
				// Check if there is a selection (i.e. cursor in place)
				if (selection.rangeCount !== 0) {
					// Store the original range
					const range = window.getSelection().getRangeAt(0)
					// Clone the range
					const preCaretRange = range.cloneRange()
					// Select all textual contents from the contenteditable element
					preCaretRange.selectNodeContents(element)
					// And set the range end to the original clicked position
					preCaretRange.setEnd(range.endContainer, range.endOffset)
					// Return the text length from contenteditable start to the range end
					position = preCaretRange.toString().length
				}
			}
			return position
		},
		restoreCursor() {
			console.debug('restore cursor, extra:', this.extraOffset, 'current:', this.cursorOffset, 'final offset:', this.cursorOffset + this.extraOffset)
			// const el = this.$refs.contenteditable.$el
			// el.focus()
			const range = document.createRange()
			const sel = window.getSelection()

			range.setStart(this.cursorNode, this.cursorOffset + this.extraOffset)
			range.collapse(true)

			sel.removeAllRanges()
			sel.addRange(range)
			this.extraOffset = 0
		},
	},
}
</script>

<style lang="scss">
.v-popper__popper {
	// this puts the modal on top of the popover
	// the .modal-mask z-index is 9998
	// problem with this: all .v-popper__inner in the modal will be "behind" the modal mask...
	z-index: 9996 !important;
	.v-popper__inner {
		// this should be possible with the "prevent-overflow" prop of NcPopover passed to Dropdown but NcPopover's style is hardcoded
		overflow: visible !important;
	}
}
</style>
