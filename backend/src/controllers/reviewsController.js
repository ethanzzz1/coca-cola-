const reviewController ={}

import reviewsModel from "../models/Reviews.js";


///Select
reviewController.getReviews = async (req, res)=>{
const reviews = await reviewsModel.find().populate("idLCiente")
res.json(reviews)
}

///Insert
reviewController.insertReview = async (req, res)=>{
    const {comment, rating, idClient} = req.body;
    const newReview = new reviewsModel(
        {comment, rating, idClient}
    )
    await mewReview.save()
    res.json({message:"review saved"})
}

///delete
reviewController.deleteReview = async (req, res)=>{
    await reviewsModel.findByIdAndDelete(req.params.id)
    res.json({message:"review delete"})
}

///Update
reviewController.updateReview = async (req, res)=>{
    const {comment, rating, idClient} = req.body;
    await reviewsModel.findByIdAndUpdate(req.params.id,{
        comment, rating, idClient,
    },{new: true});
};

export default reviewController;