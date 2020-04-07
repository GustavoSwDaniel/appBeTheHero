const express = require('express');
const OngController = require('./constrollers/OngController')
const IncidentController = require('./constrollers/IncidentController');
const ProfileController = require('./constrollers/ProfileController');
const SessionController = require('./constrollers/SessionController');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate')

/**Login */
routes.post('/sessions', SessionController.create);
/**Listagem*/
routes.get('/ongs', OngController.index);
/**Cadastros de ONGs*/
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);
/**Listagem de Casos*/
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    }),
}), IncidentController.index);
/**Cadastro de Casos*/


routes.post('/incidents', IncidentController.create);
/**Deletar Casos */


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete)



module.exports = routes