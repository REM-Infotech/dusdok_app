import { RouterLink, RouterView } from "vue-router";
import "./App.css";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  render() {
    return (
      <>
        <header>
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

          <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
            </nav>
          </div>
        </header>
        <RouterView />
      </>
    );
  },
};
