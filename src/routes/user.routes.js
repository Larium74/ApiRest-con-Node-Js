const {Router} = require ("express")
const router = Router ()
const userControllers = require ("../controllers/user.controller")
const { constrainedMemory } = require("process")


router.get ("/showU", userControllers.showU)
router.get ("/showOnlyU/:id", userControllers.showOnlyU)
router.post ("/createU", userControllers.createU)
router.put ("/updateU/:id", userControllers.updateU)
router.delete ("/deleteU/:id", userControllers.deleteU)


module.exports = router