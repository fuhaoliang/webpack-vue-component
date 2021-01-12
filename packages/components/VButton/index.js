import VButton from "./src/VButton.vue";

VButton.install = vue => {
  vue.component(VButton.name, VButton);
};

export default VButton;
