import { getField, updateField } from 'vuex-map-fields';

export default {
  state() {
    return {
      text: '',
      placeholder: 'Enter...',
      notes: [],
    };
  },

  mutations: {
    updateField,

    add(state) {
      state.notes.push(state.text);
      state.text = '';
      console.log(state.notes);
    },
    remove(state, index) {
      state.notes.splice(index, 1);
    },
  },

  //   actions: {
  //     async post(context, state) {
  //       const res = await fetch(
  //         'https://knew-it-database-default-rtdb.europe-west1.firebasedatabase.app/person.json',
  //         {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({
  //             firstName: state.text,
  //           }),
  //         }
  //       );

  //       const firebase = await res.json();

  //       context.commit('addPost', firebase);

  //       console.log(firebase);
  //     },
  //   },

  getters: {
    getField,

    notes(state) {
      return state.notes;
    },
  },
};
