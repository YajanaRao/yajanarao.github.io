import Typography from "typography";
import vueTheme from "typography-theme-vue";

const typography = new Typography(vueTheme);


// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;