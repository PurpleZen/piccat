<template>
  <router-view />
</template>

<style>
html, body {
  color: #eee;
  background-color: #202020;
  background: url("chrome://global/skin/media/imagedoc-darknoise.png") fixed;
  display: grid;
  justify-items: center;
  align-content: space-evenly;
  font-family: monospace;
  margin: 0;
  height: 100vh;
}

.body, .footer {
  display: grid;
  justify-items: center;
  align-content: center;
}

img {
  position: absolute;
  inset: 0;
  margin: auto;
  max-width: 99vw;
}

h1 {
  margin: 0;
  font-size: 80px;
}

input {
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  text-align: center;
  background-color: darkseagreen;
  width: 100%;
}

a {
  color: coral;
}
</style>