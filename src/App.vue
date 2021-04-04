<template>
  <b-container id="app">
    <b-row>
      <b-col cols="12" class="mb-3">
        <nav class="m-3">
          <b-nav fill>
            <b-nav-item>
              <router-link to="/">
                <b-icon-house />
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/about">
                <b-icon-archive />
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/todo">
                <b-icon-arrow-down-left />
              </router-link>
            </b-nav-item>
          </b-nav>
        </nav>
      </b-col>
      <b-col>
        <main>
          <article>
            <router-view />
          </article>
        </main>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import '@/styles/main.scss'

export default {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
