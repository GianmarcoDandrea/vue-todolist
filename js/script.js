const { createApp } = Vue

createApp({
  // DATA SECTION
  data() {
    return {
      toDoListElem: "",


      toDoList:[],

        
    }
  },


  // METHODS SECTION
  methods: {
    addItem: function() {

      if( this.toDoListElem === "") {

        alert("Inserisci un testo")

      } else {

        this.toDoList.push(this.toDoListElem)
        this.toDoListElem = "";

      }
        

    },
    deleteItem: function (index) {
      this.toDoList.splice(index, 1)
    }

  },





}).mount('#app')