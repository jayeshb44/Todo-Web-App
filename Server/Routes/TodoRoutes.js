const router = require('express').Router();
//import todo module
const TodoitemsModel = require('../Models/ItemsSchema');

router.post('/api/item', async (req,res)=>{
    try {
        const newItem = new TodoitemsModel({
            item: req.body.item
        })
        //save this item to DB
        const saveItem = await newItem.save()
        res.status(200).json(saveItem)
    } catch (error) {
        res.json(error);
    }
})

// Route for Get Data
router.get('/api/items', async (req,res)=>{
    try {
        const allTodoItems = await TodoitemsModel.find({})
        res.status(200).json(allTodoItems)
        
    } catch (error) {
        res.json(error);
    }
})

// Update Item by put method

router.put('/api/item/:id', async (req,res)=>{
    try {
        //Find item by its id and update it
        const updateItem = await TodoitemsModel.findByIdAndUpdate(req.params.id, {$set:req.body});
        res.status(200).json(req.body)
    } catch (error) {
        res.json(error);
    }
})

/// Delete 
router.delete('/api/item/:id', async (req,res)=>{
    try {
         //Find item by its id and delete it
        const deleteItem = await TodoitemsModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Is Deleted Successfully.')
    } catch (error) {
        res.json(error);
    }
})
 // export router
 module.exports = router;