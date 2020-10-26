const pjson = require('../../../package.json');

module.exports = {
  swagger: '2.0',
  info: {
    version: pjson.version,
    title: 'Soccer Manager Swagger documentation'
  },
  host: 'localhost:3000',
  basePath: '/api',
  consumes: [
    'application/json'
  ],
  produces: [
      'application/json'
  ],
  paths: {
    '/registration': {
      post: {
        tags: [
          'Authentification'
        ],
        description: 'Create a player',
        parameters: [
          {
            name: 'player',
            in: 'body',
            description: 'Player that we want to create',
            schema: {
              $ref: '#/definitions/playerRegistration'
            }
          }
        ],
        produces: [
          'application/json'
        ],
        responses: {
          200: {
            status: 'success',
            message: 'Player have been created'
          }
        }
      }
    },
    '/connection': {
      post: {
        tags: [
          'Authentification'
        ],
        description: 'Sign into the application',
        parameters: [
          {
            name: 'player',
            in: 'body',
            description: 'Information to login',
            schema: {
              $ref: '#/definitions/playerConnection'
            }
          }
        ],
        produces: [
          'application/json'
        ],
        responses: {
          200: {
            status: 'success',
            message: 'Player have been connected'
          }
        }
      }
    }
  },
  definitions: {
    playerRegistration: {
      type: 'object',
      properties: {
        player: {
          type: 'object',
          properties: {
            firstName: {
              type: 'string'
            },
            lastName: {
              type: 'string'
            },
            pseudo: {
              type: 'string'
            },
            email:{
              type: 'string'
            },
            phoneNumber: {
              type: 'string'
            },
            password: {
              type: 'string'
            },
            confirmPassword: {
              type: 'string'
            }
          }
        }
      }
    },
    playerConnection: {
      type: 'object',
      properties: {
        email: {
          type: 'string'
        },
        password: {
          type: 'string'
        }
      }
    }
  }
}