<template>
  <div class="main">
    <div class="card">
      <input
        class="input"
        type="text"
        :placeholder="placeholder"
        v-model="text"
        @keyup.enter="add"
      />
      <button
        class="btn primary"
        @click="add"
      >
        Добавить
      </button>
    </div>

    <div class="card-list">
      <h2 v-if="notes === []">empthy</h2>
      <ul
        class="list"
        v-for="(note, index) in notes"
        :key="index"
      >
        <li class="list-item">{{ note }}</li>
        <button
          class="btn danger"
          @click="remove(index)"
        >
          Удалить
        </button>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  computed: {
    ...mapFields(['text', 'placeholder']),
    ...mapGetters(['notes']),
  },
  methods: {
    ...mapMutations(['add', 'remove']),
  },
};
</script>

<style scoped>
.main {
  text-align: center;
  width: 500px;
  margin: 0 auto;
}
.card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.input {
  width: 320px;
  border: 1px solid #ccc;
  padding: 5px 10px;
}
.btn {
  width: 100px;
}
.primary {
  background: rgb(60, 183, 15);
  color: #fff;
  border: none;
}
.danger {
  background: red;
  color: #fff;
  border: none;
}
.card-list {
  border: 1px solid #ccc;
  padding: 20px 20px 0 20px;
}
.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.list-item {
  padding: 5px 10px;
}
</style>
