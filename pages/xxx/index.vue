<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]" d="flex" w="full" h="full" flex-dir="column" justify-content="center">
      <c-box :class="image" />
      <c-text v-if="varis">{{ varis }}</c-text
      >AA
      <CHeading color="gray.600" text-align="center" mb="4"> ⚡️ Hello chakra-ui/vue </CHeading>
      <CHeading color="violet.300" text-align="left" mb="4"> ⚡️ Hello zxczxc-ui/vue </CHeading>
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
import { computed, defineComponent, inject, onMounted, ref } from '@nuxtjs/composition-api'
import { css } from 'emotion'
import { userProfileQuery } from '@/graphql/user'

export default defineComponent({
  setup(_, { root }) {
    const varis = ref({})
    const mainStyles: Object = {
      dark: {
        bg: 'black',
      },
      light: {
        bg: 'white',
      },
    }
    const getColorMode: GetColorModeFn = inject('$chakraColorMode', () => 'light')

    // @ts-ignore
    // const result = await root.$apolloProvider.defaultClient.query({ query: userProfileQuery })

    onMounted(async () => {
      // @ts-ignore
      const result = await root.$apolloProvider.defaultClient.query({ query: userProfileQuery })
      if (result) {
        console.log(': ----------------------')
        console.log('setup -> result', result)
        console.log(': ----------------------')
        varis.value = result.data.myProfile
      }
    })

    return {
      varis,
      mainStyles,
      colorMode: computed<ColorMode>(getColorMode),
      image: css`
        background-position: 50%;
        background-size: cover;
        background-image: url('https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F97898904%2F232138391026%2F1%2Foriginal.20200402-212243?w=1024&auto=format%2Ccompress&q=75&sharp=10&s=256a8d7c62afa43e3e7a984d43687892');
        height: 360px;
      `,
    }
  },
})
</script>
