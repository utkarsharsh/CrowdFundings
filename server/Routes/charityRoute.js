const express = require("express")
const router = express.Router()

const {createCharityMaterial,getAllCharityMaterial} = require("../Controller/crarityMaterial")
const {createMessageAndUpdateCharityMaterial} = require("../Controller/createMessage")
router.post("/create",createCharityMaterial)
router.get("/all",getAllCharityMaterial)
router.post("/create-message",createMessageAndUpdateCharityMaterial)


module.exports=router