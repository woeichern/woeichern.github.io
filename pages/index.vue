<template>
  <b-container fluid="sm">
    <b-row>
      <b-col>
        <!--
        <b-avatar variant="info" src="https://avatars.githubusercontent.com/u/7297413?v=4"></b-avatar>
        -->
        <Avatar />
      </b-col>
      <b-col id="cover">
        <h1>William's CV</h1>
        <div>
          <span>
          Hi! I'm William, and I also am
          </span>
          <ul>
            <li>a Web Developer</li>
            <li>a LINE Bot Developer</li>
            <li>a Photographer</li>
          </ul>
          <span>
          Welcome to my Github Page!
          </span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style>
#cover {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
  font-size: 2rem;
  font-weight: bolder;
}
.container {
  max-width: 80vw;
  display: flex;
  flex-direction: column;
}

</style>
