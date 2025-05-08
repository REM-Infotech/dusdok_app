import { useRouter } from "vue-router";

const Reactive = {
  setup() {
    const router = useRouter();
    /**
     *
     * @param {Event} e
     */
    function submit(e) {
      e.preventDefault();
      router.push({ name: "dashboard" });
    }
    return {
      submit,
    };
  },

  render() {
    return <form onSubmit={this.submit}>{this.$slots.default()}</form>;
  },
};

export default Reactive;
