<template>
  <img v-if="this.$route.params.type !== 'mp4'" :src="'https://assets.scratch.mit.edu/' + this.$route.params.id.replace(/[G-P]/g, (n) => n.codePointAt(0) - 71) + '.' + this.$route.params.type">
  <video controls v-if="this.$route.params.type == 'mp4'">
    <source :src="'https://assets.scratch.mit.edu/' + this.$route.params.id.replace(/[G-P]/g, (n) => n.codePointAt(0) - 71) + '.' + this.$route.params.type"/>
  </video>
</template>
