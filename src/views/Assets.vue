<template>
  <img :src="'https://assets.scratch.mit.edu/' + this.$route.params.id.replace(/[G-P]/g, (n) => n.codePointAt(0) - 71) + '.' + this.$route.params.type">
</template>
