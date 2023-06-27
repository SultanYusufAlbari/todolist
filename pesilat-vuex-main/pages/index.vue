<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
}
</script>
<template>
  <div>
    <Header />
    <div class="content">
      <section class="hero py-4">
        <div class="text-center">
          <h1 class="title mb-4">Welcome to Tasklist</h1>
          <div>
            <a href="/app" class="btn btn-primary" v-if="isAuthenticated">Mari Masuk</a>
            <a href="/login" class="btn btn-primary" v-else>Mari Login Dahulu!</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

