/**
 * @swagger
 * 
 * /ai:
 *      post:
 *          tags: [ask AI]
 *          summary: allow ask aritificial intergence.
 *          description: every one can ask!
 *          requestBody:
 *              description: send a new message
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           query:
 *                               type: string
  
 *                           
 *          responses:
 *              201:
 *                  description: Successfully!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 */ 
