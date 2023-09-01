<template>
  <div class="body">
    <h1>😿</h1>
    <h1>Piccat</h1>
    <h2>Scratch Image Viewer</h2>
    <span>Due to project image links <a href="https://scratch.mit.edu/discuss/topic/706966/?page=1#post-7475947">being blocked</a>, I have decided to shut down Piccat to prevent users from getting around the Filterbot.<br>My apologies.</span>
  </div>
</template>

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
      window.location.pathname = url.pathname.split('.')[1] + "/" + url.pathname.split('.')[0].replace(/[0-9]/g, (n) => String.fromCharCode(71 + Number(n)))
    }
  }
}
  
</script>