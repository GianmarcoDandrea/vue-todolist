const { createApp } = Vue

createApp({
  // DATA SECTION
  data() {
    return {

      toDoListElem: {

        text: "",
        done: false,

      },

      toDoList: [],

    }
  },



  // METHODS SECTION
  methods: {
    addItem: function () {

      if (this.toDoListElem.text === "") {

        alert("Inserisci un testo")

      } else {

        this.toDoList.push({ ...this.toDoListElem });
        this.toDoListElem.text = "";

      }
    },

    deleteItem: function (clickedIndex) {
      this.toDoList.splice(clickedIndex, 1)
    },

    doneNotDone: function (index) {
      if (this.toDoList[index].done === false) {

        this.toDoList[index].done = true;

      } else {

        this.toDoList[index].done = false;

      }
    },
  },
}).mount('#app')