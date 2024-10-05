import express from 'express'
import { addReview, reviewList} from '../controller/reviewControler.js'


const reviewRouter = express.Router();



reviewRouter.post('/addreview',addReview)
reviewRouter.get('/reviewlist',reviewList)


export default reviewRouter;