const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
     //!CUANDO QUERES MOSTRAR MULTIPLES CONSULTAS EN LA VISTA DEBES REALIZAR UN ARREGLO DE PROMISES. Necesitas 2 promises con promises.all
     const viajes = await Viaje.findAll({limit: 4});
     const testimoniales = await Testimonial.findAll({limit: 3})
     
     res.render('index', {
          pagina: 'Proximos Viajes',
          clase: 'home',
          viajes, 
          testimoniales
     })
}