/**
 * @swagger
 * 
 * /contact:
 *      post:
 *          tags: [contactUs]
 *          summary: This helps any one to contact us.
 *          description: every one can send message!
 *          requestBody:
 *              description: send a new message
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           name:
 *                               type: string
 *                           email:
 *                               type: string
 *                           phone:
 *                               type: string
 *                           message:
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