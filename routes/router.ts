import { Router,Request,Response } from "express";

const router = Router();

//Ruta para un get
router.get('/mensajes',(req:Request,res:Response)=>{

    res.json({
        ok:true,
        mensaje:'Todo bien!'
    });

});

//Ruta para un post
router.post('/mensajes',(req:Request,res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;


    res.json({
        ok:true,
        mensaje:'Todo bien!',
        cuerpo,
        de
    });

});

//Ruta para un post con id:
router.post('/mensajes/:id',(req:Request, res:Response)=>{

    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;


    res.json({
        ok:true,
        mensaje:'Todo bien!',
        cuerpo,
        de,
        id
    });

});

export default router;