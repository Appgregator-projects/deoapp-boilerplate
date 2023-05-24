import { Logo } from "../Layouts/Components/Logo";

const themeConfig = {
  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/INDOSIAR_Logo.png/2560px-INDOSIAR_Logo.png",
  layout: {
    type: "vertical-horizontal", // vertical, horizontal, vertical-horizontal
    navbar: "",
    sidebar: "",
    footer: "",
    userProfile: "sidebar", // sidebar, navbar **choose when using vertical-horizontal type**
  },
  contentWidth: "full", // full, boxed
};

export default themeConfig;
