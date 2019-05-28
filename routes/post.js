const router = require("express").Router();
const verify = require("./vevifyToken");

router.get('/', verify, (req, res) => {
    res.json({ 
                posts: { 
                    title: "my first post", 
                    description: "random data you shouldnt access" 
                } 
            })
    // res.send(rq.user);
})

module.exports = router;