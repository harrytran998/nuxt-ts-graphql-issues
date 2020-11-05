<template>
  <container>
    <div>{{ profile }}</div>
  </container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useQuery } from '@vue/apollo-composable'
import queryUserProfile from '@/graphql/user.profile.query.gql'
import { MyProfile } from '@/graphql/types/GraphTypes'

export default defineComponent({
  name: 'ZZZZ',
  setup() {
    const number = ref(0)
    const profile = ref({})
    const { onResult } = useQuery<MyProfile>(queryUserProfile)
    onResult((result) => {
      if (result.data) {
        profile.value = result.data.myProfile
      }
    })

    return {
      number,
      profile,
    }
  },
})
</script>
