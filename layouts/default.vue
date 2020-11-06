<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import { injectGlobal } from 'emotion'

export default defineComponent({
  name: 'ChakraTheme',
  setup() {
    /* Nuxt Page transition */
    const globalCss = injectGlobal`
      .page-enter-active,
      .page-leave-active {
        transition: all 0.5s;
      }
      .page-enter,
      .page-leave-active {
        opacity: 0;
        transform: translateX(30px);
      }
      .layout-enter-active,
      .layout-leave-active {
        transition: all 0.5s;
      }
      .layout-enter,
      .layout-leave-active {
        opacity: 0;
        transform: translateX(30px);
      }
    `
    return {
      globalCss,
    }
  },
})
</script>
