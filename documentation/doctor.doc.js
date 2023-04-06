/**
 * @swagger
 * 
 * /doc-signup:
 *      post:
 *          tags: [doctor]
 *          summary: This helps to register a new doctor.
 *          description: doctor registration!
 *          requestBody:
 *              description: Register a new doctor
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           firstName:
 *                               type: string
 *                           lastName:
 *                               type: string
 *                           email:
 *                               type: string
 *                           password:
 *                               type: string 
 *                           telephone:
 *                               type: string 
 *                           specialized_in:
 *                               type: string 
 *                           from:
 *                               type: string
 *                           to:
 *                               type: string
 
 

 *                           
 *          responses:
 *              201:
 *                  description: Successfully user craeted!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 * 
 * /expert:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [doctor]
 *          summary: This helps to list all doctor.
 *          description: List doctor
 * 
 *          responses:
 *                  200:
 *                      description: users retrieved successfully
 *                  403:
 *                      description: Not allowed
 *                  500:
 *                      description: Internal Server Error
 *

 
 * 
  */
