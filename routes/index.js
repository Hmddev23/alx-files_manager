import express from 'express';

import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = express.Router();

/**
  * Auth routes
  */
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);

/**
  * User routes
  */
router.post('/users', UsersController.postNew);
router.get('/users/me', UsersController.getMe);

/**
  * App routes
  */
router.get('/stats', AppController.getStats);
router.get('/status', AppController.getStatus);

/**
  * File routes
  */
router.get('/files', FilesController.getIndex);
router.get('/files/:id', FilesController.getShow);
router.post('/files', FilesController.postUpload);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/unpublish', FilesController.putUnpublish);
router.get('/files/:id/data', FilesController.getFile);

export default router;
