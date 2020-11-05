<template>
  <c-box w="full" mx="auto" max-w="container" v-bind="mainStyles[colorMode]">
    <slot />
  </c-box>
</template>

<script lang="ts">
import { ColorMode, GetColorModeFn } from '@/types'
import { computed, defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Container',
  setup() {
    const mainStyles = {
      dark: {
        bg: 'gray.800',
        color: 'whiteAlpha.900',
      },
      light: {
        bg: 'white',
        color: 'gray.700',
      },
    }

    const getColorMode: GetColorModeFn = inject('$chakraColorMode', () => 'light')
    return {
      colorMode: computed<ColorMode>(getColorMode),
      toggleColorMode: inject('$toggleColorMode'),
      mainStyles,
    }
  },
})
</script>
