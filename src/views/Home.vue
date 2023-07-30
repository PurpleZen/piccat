<template>
  <div class="body">
    <h1>😺</h1>
    <h1>Piccat</h1>
    <h2>Scratch Image Viewer</h2>
    <label>Project URL</label>
    <input @keyup.enter="project()" id="project" placeholder="https://scratch.mit.edu/projects/...">
    <label>Assests URL</label>
    <input @keyup.enter="assets()" id="assets" placeholder="https://assets.scratch.mit.edu/...">
  </div>
  <div class="footer">
    Piccat is not in any way associated with Scratch or the Scratch Foundation.<br><a href="https://github.com/PurpleZen/piccat/">Piccat is an open source project</a>
  </div>
</template>

<style scoped>
img {
  position: initial;
}
</style>

<script>
export default {
  methods: {
    project() {
      let projectURL = document.getElementById("project").value
      let url = new URL(projectURL)
      window.location.pathname = url.pathname.split('/')[2];
    },
    assets() {
      let projectURL = document.getElementById("assets").value
      let url = new URL(projectURL)
      window.location.pathname = url.pathname.split('.')[1] + "/" + url.pathname.split('.')[0]
    }
  }
}
  
</script>