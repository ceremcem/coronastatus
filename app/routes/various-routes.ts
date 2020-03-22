import express from 'express';
import { urls } from '../domain/urls';

const router = express.Router();

// When the government have their systems ready, this should be used on "/" instead.
router.get('/move-to-root-when-helsenorge-is-ready', async (req, res) => {
  return res.render('pages/helsenorge');
});

router.get(`${urls.privacyPolicy}`, (req, res) => {
  return res.render('pages/privacy-policy');
});

router.get(`${urls.contributors}`, (req, res) => {
  return res.render('pages/frivillige');
});

export default router;