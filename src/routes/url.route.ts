import express from 'express';
import { handleGenerateNewShortURL, redirectShortUrl, handleGetAnalytics } from '../controllers/url.controller';

const router = express.Router();

router.post('/generate', handleGenerateNewShortURL);
router.get('/:shortID', redirectShortUrl)
router.get("/analytics/:shortID", handleGetAnalytics);

export default router;
