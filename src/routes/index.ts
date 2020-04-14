import { Router } from 'express';
import VehicleRouter from './vehicle';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/vehicle', VehicleRouter);

// Export the base-router
export default router;
