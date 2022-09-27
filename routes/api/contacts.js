const express = require("express");

const contactSchema = require("../../schemas/contactSchema");
const { contactsControllers: ctrl } = require("../../controllers");
const { validation, controllerWrapper } = require("../../middlewares");

const Contact = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Contact.find({});
  res.json({ status: "success", data });
});

router.post("/", async (req, res) => {
  const result = await Contact.create(req.body);
  res.json({ status: "success", data: result });
});

// router.get("/", controllerWrapper(ctrl.getAll));
router.get("/:contactId", controllerWrapper(ctrl.getById));
// router.post("/", validation(contactSchema), controllerWrapper(ctrl.add));
router.delete("/:contactId", controllerWrapper(ctrl.remove));
router.put(
  "/:contactId",
  validation(contactSchema),
  controllerWrapper(ctrl.updateById)
);

module.exports = router;
