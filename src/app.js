import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  console.log("yo")
  new Vue({
    el:"#app",
    data: {
      tasks: [
        {name:"Make dinner", isCompleted:true, priority:"Low" },
        {name:"Do homework", isCompleted:false, priority:"Urgent" }
      ],
      newTask: { name: "", isCompleted:false, priority: "" }
    },
    methods: {
      saveNewTask: function() {
        this.tasks.push(this.newTask);
        this.newTask = { task: "", isCompleted: false, priority: ""};
      },
    completeTask: function(index) {
      this.tasks[index].isCompleted = true;
      }
    }
  });
});
