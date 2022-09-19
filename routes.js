import { Router, json } from 'express'
import { lojaIndex,lojaStore,lojaUpdate,lojaDelete,lojaModelo } from './controllers/RopaController.js'
import { vendedorIndex,vendedorRegistro} from './controllers/vendedorController.js'
const router = Router()

router.use(json())

router.get('/produtos', lojaIndex)
      .post('/produtos', lojaStore) 
      .put('/produtos/:id', lojaUpdate) 
      .delete('/produtos/:id', lojaDelete)   
      .get('/produtos/modelo/:modelo', lojaModelo) 


router.get('/vendedor', vendedorIndex)
      .post('/vendedor', vendedorRegistro) 


export default router