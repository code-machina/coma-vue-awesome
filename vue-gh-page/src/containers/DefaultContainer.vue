<template>
  <div class="app">
    <h2>{{ $t('message') }}</h2>
    <h2>Hellworld</h2>
    <main class="main">
        <!-- <Breadcrumb :list="list"/> -->
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script>

export default {
  name: 'DefaultContainer'
}
</script>