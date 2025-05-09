const properties = {
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "Card Title",
  },
  imgSrc: {
    type: String,
    default: "",
  },
  imgAlt: {
    type: String,
    default: "Image",
  },
  imgTop: {
    type: Boolean,
    default: true,
  },
  tag: {
    type: String,
    default: "article",
  },

  cardClicked: {
    type: String,
    default: "cardClicked",
  },
  description: {
    type: String,
    default:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
};

export default properties;
