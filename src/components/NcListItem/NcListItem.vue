<!--
  - @copyright Copyright (c) 2021 Marco Ambrosini <marcoambrosini@icloud.com>
  -
  - @author Marco Ambrosini <marcoambrosini@icloud.com>
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
<docs>

### Default Usage

```vue
<template>
	<ul>
		<NcListItem
			:name="'This is an active element with highlighted counter'"
			:bold="false"
			:active="true"
			:details="'1h'"
			:counter-number="44"
			counterType="highlighted">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #indicator>
				<!-- Color dot -->
				<CheckboxBlankCircle :size="16" fill-color="#fff" />
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'This is an active element with outlined counter'"
			:bold="false"
			:active="true"
			:details="'1h'"
			:counter-number="44"
			counterType="outlined">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #indicator>
				<!-- Color dot -->
				<CheckboxBlankCircle :size="16" fill-color="#fff" />
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'This is an active element with normal counter'"
			:bold="false"
			:active="true"
			:counter-number="44">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #details>
				<LinkIcon :size="16"/>
			</template>
			<template #indicator>
				<!-- Color dot -->
				<CheckboxBlankCircle :size="16" fill-color="#fff" />
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element with highlighted counter'"
			:bold="false"
			:force-display-actions="true"
			:details="'1h'"
			:counter-number="44"
			counterType="highlighted">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element with outlined counter'"
			:bold="false"
			:force-display-actions="true"
			:details="'1h'"
			:counter-number="44"
			counterType="outlined">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element with normal counter'"
			:bold="false"
			:force-display-actions="true"
			:details="'1h'"
			:counter-number="44">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element'"
			:bold="false">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #subname>
				In this slot you can put both text and other components such as icons
			</template>
			<template #details>
				<LinkIcon :size="16"/>
			</template>
			<template #indicator>
				<!-- Color dot -->
				<CheckboxBlankCircle :size="16" fill-color="#0082c9"/>
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
				<NcActionButton>
					Button three
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Without subname, Name of the element'"
			:bold="false"
			:details="'1h'">
			<template #icon>
				<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
			</template>
			<template #indicator>
				<!-- Color dot -->
				<CheckboxBlankCircle :size="16" fill-color="#0082c9"/>
			</template>
		</NcListItem>
	</ul>
</template>

<script>
	import CheckboxBlankCircle from 'vue-material-design-icons/CheckboxBlankCircle'
	import LinkIcon from 'vue-material-design-icons/Link'

	export default {
		components: {
			CheckboxBlankCircle,
			LinkIcon,
		}
	}
</script>

```

### NcListItem one line mode
```vue
<NcListItem
	:name="'This is an active element with highlighted counter'"
	:bold="false"
	:active="true"
	:details="'1h'"
	:counter-number="44"
	one-line
	counterType="highlighted">
	<template #icon>
		<NcAvatar disable-menu :size="44" user="janedoe" display-name="Jane Doe" />
	</template>
	<template #subname>
		In this slot you can put both text and other components such as icons
	</template>
	<template #indicator>
		<!-- Color dot -->
		<CheckboxBlankCircle :size="16" fill-color="#fff" />
	</template>
	<template #actions>
		<NcActionButton>
			Button one
		</NcActionButton>
		<NcActionButton>
			Button two
		</NcActionButton>
		<NcActionButton>
			Button three
		</NcActionButton>
	</template>
</NcListItem>
```
### NcListItem compact mode
```vue
<template>
	<ul style="width: 350px;">
		<NcListItem
			:name="'Name of the element'"
			:counter-number="1"
			:compact="true" >
			<template #icon>
				<IconNoteText :size="20" />
			</template>
			<template #subname>
				This one is with subname
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element'"
			:compact="true" >
			<template #icon>
				<IconNoteText :size="20" />
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element'"
			:counter-number="3"
			:compact="true" >
			<template #icon>
				<IconNoteText :size="20" />
			</template>
			<template #subname>
				This one is with subname
			</template>
			<template #actions>
				<NcActionButton>
					Button one
				</NcActionButton>
				<NcActionButton>
					Button two
				</NcActionButton>
			</template>
		</NcListItem>
		<NcListItem
			:name="'Name of the element'"
			:compact="true"
			:counter-number="4"
			href="https://nextcloud.com">
			<template #icon>
				<IconNoteText :size="20" />
			</template>
			<template #subname>
				This one is with an external link
			</template>
		</NcListItem>
	</ul>
</template>
<script>
	import IconNoteText from 'vue-material-design-icons/NoteText.vue'

	export default {
		components: {
			IconNoteText,
		},
	}
</script>
```
</docs>

<template>
	<!-- This wrapper can be either a router link or a `<li>` -->
	<component :is="to ? 'router-link' : 'NcVNodes'"
		v-slot="{ href: routerLinkHref, navigate, isActive }"
		:custom="to ? true : null"
		:to="to"
		:exact="to ? exact : null">
		<li class="list-item__wrapper"
			:class="{ 'list-item__wrapper--active' : isActive || active }">
			<div ref="list-item"
				class="list-item"
				:class="{
					'list-item--compact': compact,
					'list-item--one-line': oneLine,
				}"
				@mouseover="handleMouseover"
				@mouseleave="handleMouseleave">
				<a :id="anchorId || undefined"
					:aria-label="linkAriaLabel"
					class="list-item__anchor"
					:href="routerLinkHref || href"
					:target="target || (href === '#' ? undefined : '_blank')"
					:rel="href === '#' ? undefined : 'noopener noreferrer'"
					@focus="showActions"
					@focusout="handleBlur"
					@click="onClick($event, navigate, routerLinkHref)"
					@keydown.esc="hideActions">
					<!-- @slot This slot is used for the NcAvatar or icon, the content of this slot must not be interactive -->
					<slot name="icon" />

					<!-- Main content -->
					<div class="list-item-content">
						<div class="list-item-content__main">
							<div class="list-item-content__name">
								{{ name }}
							</div>
							<div v-if="hasSubname"
								class="list-item-content__subname"
								:class="{'line-two--bold': bold}">
								<!-- @slot Slot for the second line of the component -->
								<slot name="subname" />
							</div>
						</div>
						<div class="list-item-content__details">
							<div v-if="showDetails" class="list-item-details__details">
								<!-- @slot This slot is used for some details in form of icon (prop `details` as a fallback) -->
								<slot name="details">{{ details }}</slot>
							</div>
							<!-- Counter and indicator -->
							<div v-if="counterNumber != 0 || hasIndicator"
								v-show="showAdditionalElements"
								class="list-item-details__extra">
								<NcCounterBubble v-if="counterNumber != 0"
									:active="isActive || active"
									class="list-item-details__counter"
									:type="counterType">
									{{ counterNumber }}
								</NcCounterBubble>

								<span v-if="hasIndicator" class="list-item-details__indicator">
									<!-- @slot This slot is used for some indicator in form of icon -->
									<slot name="indicator" />
								</span>
							</div>
						</div>
					</div>
				</a>

				<!-- Actions -->
				<div v-show="forceDisplayActions || displayActionsOnHoverFocus"
					class="list-item-content__actions"
					@focusout="handleBlur">
					<NcActions ref="actions"
						:primary="isActive || active"
						:aria-label="computedActionsAriaLabel"
						@update:open="handleActionsUpdateOpen">
						<!-- @slot Provide the actions for the right side quick menu -->
						<slot name="actions" />
					</NcActions>
				</div>

				<!-- @slot Extra elements below the item -->
				<div v-if="$slots.extra" class="list-item__extra">
					<slot name="extra" />
				</div>
			</div>
		</li>
	</component>
</template>

<script>
import NcActions from '../NcActions/index.js'
import NcCounterBubble from '../NcCounterBubble/index.js'
import NcVNodes from '../NcVNodes/index.js'
import { t } from '../../l10n.js'

export default {
	name: 'NcListItem',

	components: {
		NcActions,
		NcCounterBubble,
		NcVNodes,
	},

	props: {
		/**
		 * The details text displayed in the upper right part of the component
		 */
		details: {
			type: String,
			default: '',
		},

		/**
		 * Name (first line of text)
		 */
		name: {
			type: String,
			required: true,
		},

		/**
		 * Pass in `true` if you want the matching behavior to
		 * be non-inclusive: https://router.vuejs.org/api/#exact
		 */
		exact: {
			type: Boolean,
			default: false,
		},

		/**
		 * The route for the router link.
		 */
		to: {
			type: [String, Object],
			default: null,
		},

		/**
		 * The value for the external link
		 */
		href: {
			type: String,
			default: '#',
		},

		target: {
			type: String,
			default: '',
		},

		/**
		 * Id for the `<a>` element
		 */
		anchorId: {
			type: String,
			default: '',
		},

		/**
		 * Make subname bold
		 */
		bold: {
			type: Boolean,
			default: false,
		},

		/**
		 * Show the NcListItem in compact design
		 */
		compact: {
			type: Boolean,
			default: false,
		},

		/**
		 * Toggle the active state of the component
		 */
		active: {
			type: Boolean,
			default: false,
		},

		/**
		 * Aria label for the wrapper element
		 */
		linkAriaLabel: {
			type: String,
			default: '',
		},

		/**
		 * Aria label for the actions toggle
		 */
		actionsAriaLabel: {
			type: String,
			default: '',
		},

		/**
		 * If different from 0 this component will display the
		 * NcCounterBubble component
		 */
		 counterNumber: {
			 type: [Number, String],
			 default: 0,
		 },

		/**
		 * Outlined or highlighted state of the counter
		 */
		counterType: {
			type: String,
			default: '',
			validator(value) {
				return ['highlighted', 'outlined', ''].indexOf(value) !== -1
			},
		},

		/**
		 * To be used only when the elements in the actions menu are very important
		 */
		forceDisplayActions: {
			type: Boolean,
			default: false,
		},
		/**
		 * Show the list component layout
		 */
		oneLine: {
			type: Boolean,
			default: false,
		},
	},

	emits: [
		'click',
		'update:menuOpen',
	],

	data() {
		return {
			hovered: false,
			hasActions: false,
			hasSubname: false,
			displayActionsOnHoverFocus: false,
			menuOpen: false,
			hasIndicator: false,
			hasDetails: false,
		}
	},

	computed: {
		showAdditionalElements() {
			return !this.displayActionsOnHoverFocus || this.forceDisplayActions
		},

		showDetails() {
			return (this.details !== '' || this.hasDetails)
				&& (!this.displayActionsOnHoverFocus || this.forceDisplayActions)
		},

		computedActionsAriaLabel() {
			return this.actionsAriaLabel || t('Actions for item with name "{name}"', { name: this.name })
		},
	},

	watch: {

		menuOpen(newValue) {
			// A click outside both the menu and the root element hides the actions again
			if (!newValue && !this.hovered) {
				this.displayActionsOnHoverFocus = false
			}
		},
	},

	mounted() {
		this.checkSlots()
	},

	updated() {
		this.checkSlots()
	},

	methods: {
		/**
		 * Handle link click
		 *
		 * @param {MouseEvent|KeyboardEvent} event - Native click or keydown event
		 * @param {Function} [navigate] - VueRouter link's navigate if any
		 * @param {string} [routerLinkHref] - VueRouter link's href
		 */
		onClick(event, navigate, routerLinkHref) {
			// Always forward native event
			this.$emit('click', event)
			// Do not navigate with control keys - it is opening in a new tab
			if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
				return
			}
			// Prevent default link behaviour if it's a router-link and navigate manually
			if (routerLinkHref) {
				navigate?.(event)
				event.preventDefault()
			}
		},

		showActions() {
			if (this.hasActions) {
				this.displayActionsOnHoverFocus = true
			}
			this.hovered = false
		},

		hideActions() {
			this.displayActionsOnHoverFocus = false
		},

		/**
		 * @param {FocusEvent} event UI event
		 */
		handleBlur(event) {
			// do not hide if open
			if (this.menuOpen) {
				return
			}
			// do not hide if focus is kept within
			if (this.$refs['list-item'].contains(event.relatedTarget)) {
				return
			}
			this.hideActions()
		},

		/**
		 * Hide the actions on mouseleave unless the menu is open
		 */
		handleMouseleave() {
			if (!this.menuOpen) {
				this.displayActionsOnHoverFocus = false
			}
			this.hovered = false
		},

		handleMouseover() {
			this.showActions()
			this.hovered = true
		},

		handleActionsUpdateOpen(e) {
			this.menuOpen = e
			this.$emit('update:menuOpen', e)
		},

		// Check if subname and actions slots are populated
		checkSlots() {
			if (this.hasActions !== !!this.$slots.actions) {
				this.hasActions = !!this.$slots.actions
			}
			if (this.hasSubname !== !!this.$slots.subname) {
				this.hasSubname = !!this.$slots.subname
			}
			if (this.hasIndicator !== !!this.$slots.indicator) {
				this.hasIndicator = !!this.$slots.indicator
			}
			if (this.hasDetails !== !!this.$slots.details) {
				this.hasDetails = !!this.$slots.details
			}
		},
	},
}
</script>

<style lang="scss" scoped>

.list-item__wrapper {
	display: flex;
	position: relative;
	width: 100%;

	&--active,
	&.active {
		.list-item {
			background-color: var(--color-primary-element);
			&:hover,
			&:focus-within,
			&:has(:focus-visible),
			&:has(:active) {
				background-color: var(--color-primary-element-hover);
			}
		}

		.list-item-content__name,
		.list-item-content__subname,
		.list-item-content__details,
		.list-item-details__details {
			color: var(--color-primary-element-text) !important;
		}
	}
	.list-item-content__name,
	.list-item-content__subname,
	.list-item-content__details,
	.list-item-details__details {
		white-space: nowrap;
		margin: 0 auto 0 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

.list-item-content__name {
	min-width: 100px;
	max-width: 300px;
	flex: 1 1 10%;
	text-overflow: ellipsis;
}

.list-item-content__subname {
	flex: 1 0;
	min-width: 0;
}

// NcListItem
.list-item {
	box-sizing: border-box;
	display: flex;
	position: relative;
	flex: 0 0 auto;
	justify-content: flex-start;
	padding: 8px 10px;
	// 4px padding for the focus-visible styles. Width is reduced to compensate it
	margin: 4px;
	width: calc(100% - 8px);
	// Fix for border-radius being too large for 3-line entries like in Mail
	// 44px avatar size / 2 + 8px padding, and 2px for better visual quality
	border-radius: 32px;
	cursor: pointer;
	transition: background-color var(--animation-quick) ease-in-out;
	list-style: none;
	&:hover,
	&:focus-within,
	&:has(:active),
	&:has(:focus-visible) {
		background-color: var(--color-background-hover);
	}

	&:has(&__anchor:focus-visible) {
		outline: 2px solid var(--color-main-text);
		box-shadow: 0 0 0 4px var(--color-main-background);
	}

	&--compact {
		padding: 4px 10px;

		.list-item__anchor {
			.line-one, .line-two {
				margin-block: -4px;
			}
		}
	}
	.list-item-content__details {
		display: flex;
		flex-direction: row;
		justify-content: end;
	}
	&--one-line {
		padding: 10px;
		margin: 2px;
		.list-item-content__main {
			display: flex;
			justify-content: start;
			gap: 12px;
			min-width: 0;
		}
		.list-item-content__details {
			display: flex;
			flex-direction: row;
			justify-content: end;
		}
	}

	&__anchor {
		display: flex;
		flex: 1 0 auto;
		align-items: center;
		height: var(--default-clickable-area);
		min-width: 0;

		// This is handled by the parent container
		&:focus-visible {
			outline: none;
		}
	}

	&-content {
		display: flex;
		flex: 1 0;
		justify-content: space-between;
		padding-left: 8px;
		min-width: 0;
		&__main {
			flex: 1 0;
			width: 0;
			margin: auto 0;

			&--oneline {
				display: flex;
			}
		}

		&__actions {
			flex: 0 0 auto;
			align-self: center;
			justify-content: center;
			margin-left: 4px;
		}
	}

	&-details {
		&__details {
			color: var(--color-text-maxcontrast);
			margin: 0 9px;
			font-weight: normal;
		}
		&__extra {
			margin: 2px 4px 0 4px;
			display: flex;
			align-items: center;
		}
		&__indicator {
			margin: 0 5px;
		}
	}
	&__extra {
		margin-top: 4px;
	}
}

</style>
