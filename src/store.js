import { createStore } from 'vuex';
import cartoons from './modules/cartoons';

export default createStore({
  modules: {
    cartoons,
  },
});
