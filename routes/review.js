const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReivew,isLoggedIn,isReviewAuthor} = require("../middleware.js")
const reviewContoller = require("../controllers/reviews.js");

// Post route
router.post("/",
    isLoggedIn, 
    validateReivew,
    wrapAsync(reviewContoller.createReview)
);

//Delete route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewContoller.destroyReview)
);
module.exports = router;