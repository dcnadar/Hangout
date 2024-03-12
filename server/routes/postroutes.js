import {getFeedPosts, getUserPosts, likePost} from '../controller/createpost.js'
import express from 'express'
import verifyjwt from '../middleware/verifyjwt.js'

const router= express.Router()
// read routes

router.get('/', verifyjwt, getFeedPosts)
router.get('/:userId', verifyjwt, getUserPosts)

// update routes .. for the backend this is for the banckend update

router.patch('/:id/like', verifyjwt, likePost)

export default router