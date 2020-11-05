<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" d="flex" w="full" h="full" flex-dir="column" justify-content="center">
      <CHeading text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="cyan.500" text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="orange.500" text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="pink.500" text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="gray.600" text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="violet.300" text-align="left" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CButton left-icon="info" variant-color="blue"> Show Toast </CButton>
          <CButton right-icon="email" variant-color="cyan.400"> Show Toast </CButton>
          <CButton right-icon="email" variant-color="cyan.400"> Show Toast </CButton>
        </CBox>
        <CAvatarGroup>
          <CAvatar name="Evan You" alt="Evan You" src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg">
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar name="Evan You" alt="Nhat" src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg">
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar name="Evan You" alt="Evan You" src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg">
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar name="Jonathan Bakebwa" alt="Jonathan Bakebwa" src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg">
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar name="Segun Adebayo" alt="Segun Adebayo" src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg">
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar src="pop">
            <CAvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
          </CAvatar>
        </CAvatarGroup>
        <CButton left-icon="close" variant-color="red" mt="3"> Delete Account </CButton>
        <CButton left-icon="close" variant-color="red" mt="3"> Delete Account </CButton>
        <CButton right-icon="close" variant-color="blue" mt="3"> Delete Account </CButton>
        <CButton right-icon="close" variant-color="blue" mt="3"> Delete Account </CButton>
        <CModal>
          <CModalOverlay />
          <CModalContent>
            <CModalHeader>Are you sure?</CModalHeader>
            <CModalBody>Deleting user cannot be undone</CModalBody>
            <CModalFooter>
              <CButton> Cancel </CButton>
              <CButton margin-left="3" variant-color="red"> Delete User </CButton>
            </CModalFooter>
            <CModalCloseButton />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="ts">
import { ColorMode, GetColorModeFn } from '@/types'
import { computed, defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const mainStyles: Object = {
      dark: {
        bg: 'black',
      },
      light: {
        bg: 'white',
      },
    }
    const getColorMode: GetColorModeFn = inject('$chakraColorMode', () => 'light')
    return {
      mainStyles,
      colorMode: computed<ColorMode>(getColorMode),
    }
  },
})
</script>
