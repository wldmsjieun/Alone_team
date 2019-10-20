var express= require("express");
var router=express.Router();
var Itemboard=require("../models/itemboard");
const errorCatcher = require('../lib/async-error');
var multer = require('multer');   // express에 multer모듈 적용 (for 파일업로드)
var upload = multer({ dest: 'picture/' }); //img를 올리기 위한 module 정의

// 기본 베이스 router 이거 복사해서 사용해요
// router.get("/", errorCatcher(async(req, res, next) => {
//     res.render("itemboard");
// }));

//commit 재시도를 위한 주석
// itemboard 에서 지금까지 받은 목록을 보여주는 부분
router.get("/", errorCatcher(async(req, res, next) => {
    var items = await Itemboard.find();
    // console.log(items);
    res.render("itemboard/index",{items : items});
}));

router.get("/index",function(req,res){
    res.render("itemboard/index", { title: '물건이네' });
});

// New
router.get("/new",function(req,res){
    res.render("itemboard/new", { title: '공동구매방개설' });
});

// /new부분에서 받은 정보들을 올려주고 Database에 올려주는 부분
router.post("/new", upload.single('picture'),errorCatcher(async(req,res,next) => {
    // try {
    //     console.log(req.file);
    //     // res.json(req.body);
    // } catch (e) {
    //     res.redirect("/itemboard");
    // }
    var new_post = new Itemboard({
        room_maker : req.body.room_maker, 
        date : req.body.date, 
        deadline : req.body.deadline, 
        category : req.body.category, 
        item : req.body.item, 
        members : req.body.members, 
        title : req.body.title,
        comment : req.body.comment,
        picture_url : "picture/"+req.file.filename
    });
    await new_post.save();
    res.redirect("/itemboard");
}));

module.exports = router;