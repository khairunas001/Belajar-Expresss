class TodoController {
    static getTodos(req,res){
        const arrObjects = [
            {
                id:1,
                name:"laptop"
            },
            {
                id:2,
                name:"personal computer"
            }
        ]
        res.json(arrObjects);
    }

    static addTodos (req,res){
        res.json({
            message:"page todos app"
        })
    }

}

module.exports = TodoController; 