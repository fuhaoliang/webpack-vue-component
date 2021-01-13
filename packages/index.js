import VButton from "./components/VButton";
import VInput from "./components/VInput";

const components = [VInput, VButton];

const install = function(Vue) {
  if (install.instaned) return;
  install.instaned = true;
  components.forEach(component => Vue.use(component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
