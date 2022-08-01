(express = require("express")), (router = express.Router());

// Content Model
let contentSchema = require("../models/Content");

const CREATE_CONTENT_ROUTE = "/create-content";
const RETRIEVE_CONTENT_ROUTE = "/retrieve-content";

// CREATE Content
router.route(CREATE_CONTENT_ROUTE).post((req, res, next) => {
  contentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Content
router.route(RETRIEVE_CONTENT_ROUTE).get((req, res) => {
  contentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// // Get Single Student
// router.route('/edit-student/:id').get((req, res) => {
//   studentSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update Student
// router.route('/update-student/:id').put((req, res, next) => {
//   studentSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student updated successfully !')
//     }
//   })
// })

// // Delete Student
// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = router;
