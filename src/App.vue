<template>
  <b-container id="app">
    <b-row>
      <b-col cols="12" class="mb-3">
        <nav class="m-3">
          <b-nav tabs fill>
            <router-link to="/">
              <b-nav-item>
                <b-icon-house />
              </b-nav-item>
            </router-link>
            <router-link to="/about">
              <b-nav-item>
                <b-icon-archive />
              </b-nav-item>
            </router-link>
            <router-link to="/todo">
              <b-nav-item>
                <b-icon-arrow-down-left />
              </b-nav-item>
            </router-link>
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
