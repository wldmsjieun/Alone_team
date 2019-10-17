var express= require("express");
var router=express.Router();
var Itemboard=require("../models/itemboard");
const errorCatcher = require('../lib/async-error');

// 기본 베이스 router 이거 복사해서 사용하자~!
// router.get("/", errorCatcher(async(req, res, next) => {
//     res.render("itemboard/index");
// }));
router.get("/", errorCatcher(async(req, res, next) => {
    var items = await Itemboard.find();
    console.log(items);
    res.render("itemboard/index",{items : items});
}));


// New
router.get("/new",function(req,res){
    res.render("itemboard/new", { title: '공동구매방개설' });
});

router.post("/new", errorCatcher(async(req,res,next) => {
    var new_post = new Itemboard({
        room_maker : req.body.room_maker, 
        date : req.body.date, 
        item : req.body.item, 
        title : req.body.title
    });
    await new_post.save();
    res.redirect("/itemboard");
}));


// router.get('/new', errorCatcher(async(req, res, next) => {
//   var itemSchema = new itemboard({ 
//     room_maker : "test",
//     date : "test",
//     item : "test",
//     title : "test",
//   },{
//     toJSON:{virtuals:true} ,
//     toObject:{virtuals:true} 
//   });
//   var data = await itemSchema.save();
//   console.log(data);
//   res.redirect('/');
// })); 

// router.get('/', errorCatcher(async(req, res, next) => {
//     var test = new Itemboard({
//       room_maker : "test2",
//       date : "test",
//       item : "test",
//       title : "test"
//     });
  
//     var data = await test.save();
//     console.log(data);
//     res.redirect('/');
//   }));
module.exports = router;