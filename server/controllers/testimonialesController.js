const Testimonial = require('../models/Testimoniales');


exports.mostrarTestimoniales = async (req, res) => {
     const testimoniales = await Testimonial.findAll()
           res.render('testimoniales', {
               pagina: 'Testimoniales',
               testimoniales
          })
}

exports.agregarTestimonial = async (req, res) => {
          //*Validar que todos los campos esten llenos
          let { nombre, correo, mensaje } = req.body;

          let errores = [];
          if (!nombre) {
               errores.push({ 'mensaje': 'Agrega tu nombre' })
          }
          if (!correo) {
               errores.push({ 'mensaje': 'Agrega tu correo' })
          }
          if (!mensaje) {
               errores.push({ 'mensaje': 'Agrega tu mensaje' })
          }

          //*Revisar por errores
          if (errores.length > 0) {
               //*Muestra la vista con errores  
              const testimoniales = await Testimonial.findAll()
              res.render('testimoniales', {
               errores,
               nombre,
               correo,
               mensaje,
               pagina: 'Testimoniales',
               testimoniales
    
     })     
          } else {
               //*Almacenarlos en la base de datos
               await Testimonial.create({
                    nombre,
                    correo,
                    mensaje
               })
               res.redirect('/testimoniales')
          }
     }