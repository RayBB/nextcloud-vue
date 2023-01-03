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
			cursorOffset: null,
			cursorNode: null,
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
			this.extraOffset = link.length
			this.$emit('update:value', this.value + ' ' + link)
			this.hideLinkPicker()
			// this.$refs.contenteditable.$el.focus()
			// this.restoreCursor(link.length)
		},
		onUpdateValue(value) {
			this.$emit('update:value', value)
		},
		onHashKeydown(e) {
			console.debug('hash key down', e)
			if (e.key === '#') {
				e.preventDefault()
				e.stopPropagation()
				// this.cursorOffset = window.getSelection().getRangeAt(0).startOffset
				this.cursorOffset = window.getSelection().anchorOffset
				this.cursorNode = window.getSelection().anchorNode
				console.debug('start offset', this.cursorOffset)
				this.showLinkPicker()
			}
		},
		onPickerHide() {
			console.debug('picker was hidden')
			// this.restoreCursor()
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
