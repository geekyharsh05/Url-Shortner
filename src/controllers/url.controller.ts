import { Request, Response } from 'express';

import URL, { IUrl } from '../models/url.models';
import { generateRandomString } from '../utils/genToken';

export const handleGenerateNewShortURL = async (
  req: Request,
  res: Response
) => {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: 'url is required' });
  }

  const shortID = generateRandomString();

  await URL.create({
    shortID,
    redirectURL: body.url,
    visitHistory: [],
  } as IUrl);

  return res.json({ id: shortID });
};

export const redirectShortUrl = async (req: Request, res: Response) => {
  try {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate(
      { shortID },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );
    console.log('Database Entry:', entry);

    if (!entry || !entry.redirectURL) {
      return res.status(404).send('URL not found');
    }
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
  }
};

export const handleGetAnalytics = async (req: Request, res: Response) => {
  try {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });

    if (!result) {
      return res.status(404).json({ error: 'URL not found' });
    }

    const visitHistory = result.visitHistory || [];
    return res.json({
      totalClicks: visitHistory.length,
      analytics: visitHistory,
    });
  } catch (error) {
    console.error(error);
  }
};



