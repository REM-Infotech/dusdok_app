export default {
  props: ["modelValue"],

  render() {
    return (
      <>
        <div class="form-check text-start my-3">
          <input
            class="form-check-input"
            type="checkbox"
            value={this.modelValue}
            id="checkDefault"
          />
          <label class="form-check-label" for="checkDefault">
            Remember me
          </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2025</p>
      </>
    );
  },
};
