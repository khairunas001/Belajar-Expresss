class TodoController {
    static getTodos(req,res){
        res.send('Page todos utama');
    }

    static addTodos (req,res){
        res.send("Page todos add")
    }

}

module.exports = TodoController; 