import "@/assets/css/dashboard.css";
import NavbarView from "@/components/NavbarView";
import { BButton, BCard, BCardText } from "bootstrap-vue-next";
const Reactive = {
  render() {
    return (
      <>
        <NavbarView />
        <main class="container px-4 mt-4">
          <BCard
            title="Card Title"
            img-src="./src/assets/25-600x300.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
          >
            <BCardText>
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </BCardText>
            <BButton href="#" variant="primary">
              Go somewhere
            </BButton>
          </BCard>
        </main>
      </>
    );
  },
};

export default Reactive;
