var maandag = new Vue({
    el: "#maandag",
    data: {
        todos: [],
        message: '',
        counter: 0,
        seen: true
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
      
    }
},
deleteItem: function() {
  console.log("test");
  this.seen = false;
},
addId: function() {
  
}
  }
})

var dinsdag = new Vue({
    el: "#dinsdag",
    data: {
        todos: [],
        message: ''
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
    }
}
  }
})

var woensdag = new Vue({
    el: "#woensdag",
    data: {
        todos: [],
        message: ''
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
    }
}
  }
})

var donderdag = new Vue({
    el: "#donderdag",
    data: {
        todos: [],
        message: ''
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
    }
}
  }
})

var vrijdag = new Vue({
    el: "#vrijdag",
    data: {
        todos: [],
        message: ''
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
    }
}
  }
})

var zaterdag = new Vue({
    el: "#weekend",
    data: {
        todos: [],
        message: ''
    },
    methods: {
    addItem: function () {
        if (this.todos.length < 5) {
      this.todos.push(this.message);
      this.message = '';
    }
    else {
      this.todos.push(this.message);
      this.todos.shift(this.todos[0]);
      this.message = '';
    }
}
  }
})





