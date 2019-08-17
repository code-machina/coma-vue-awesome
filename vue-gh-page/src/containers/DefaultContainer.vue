<template>
  <div class="app">
    <h2>{{ $t('message') }}</h2>
    <main class="main">
        <Breadcrumb :list="items"></Breadcrumb>
        <locale-changer></locale-changer>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script>
import nav from '@/_nav'

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb"
import LocaleChanger from "@/components/LocaleChanger.vue"

export default {
  name: 'DefaultContainer',
  components: {
    Breadcrumb,
    LocaleChanger
  },
  data () {
    return {
      nav: nav.items,
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    items () {
      return this.$route.matched.filter((route) => route.name || route.meta.label )
    },
  }
}
</script>