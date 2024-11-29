import { Router } from "express";
import verificarAutenticacion from '../middlewares/autenticacion.js'


import {
    // ! Rutas de propietario

    login,
    perfil,
    registro,
    confirmEmail,
    actualizarPerfil,
    actualizarEmail,
    actualizarPassword,
	recuperarPassword,
    comprobarTokenPasword,
	nuevoPassword,

    // ! Rutas de tienda

    solicitarTienda,
    confirmarTienda,
    listarTiendas,
    listarTiendasproductos,
    obtenerTiendaDelpropietario,
    obtenerTiendaConProductos
} from "../controllers/propietario_controller.js";

const router =Router()

// ! Rutas propietario

router.post('/propietario/login',login) //OK
router.post('/propietario/registro',registro) //OK
router.get('/propietario/confirmar/:token',confirmEmail) //OK
router.post('/propietario/recuperar-password',recuperarPassword) //OK
router.get('/propietario/recuperar-password/:token',comprobarTokenPasword) //OK
router.post('/propietario/nuevo-password/:token',nuevoPassword) //OK
router.get('/propietario/perfil',verificarAutenticacion,perfil) //OK
router.put('/propietario/actualizaremail',verificarAutenticacion,actualizarEmail) //OK
router.put('/propietario/actualizarpassword',verificarAutenticacion,actualizarPassword) //OK
router.put('/propietario/:id',verificarAutenticacion,actualizarPerfil) //OK
router.get('/propietario/tienda/:id_propietario', obtenerTiendaDelpropietario);


// ! Rutas tienda 

router.post('/propietario/solicitud/',verificarAutorizacion,solicitarTienda) //OK
router.get('/confirmartienda/:tokentienda',confirmarTienda) //OK
router.get('/listartiendas',verificarAutorizacion,listarTiendas) //OK
router.get('/tienda/:id',verificarAutorizacion,obtenerTiendaConProductos) //OK
router.get('/listartiendasopciones',verificarAutorizacion,listarTiendasproductos) // OK



export default router