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
 * 
 * /advice:
 *      post:
 *          tags: [advice]
 *          summary: This helps add advise and description of diseases.
 *          description: only doctor  can add advice!
 *          requestBody:
 *              description: send a new post
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           category:
 *                               type: string
 *                           health_issue:
 *                               type: string
 *                           description:
 *                               type: string
 *                           medical_advice:
 *                               type: string 
 *                           doctorId:
 *                               type: string 
 
  
 *                           
 *          responses:
 *              201:
 *                  description: Successfully!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 * 
 * /All:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [advice]
 *          summary: This helps to list all advice.
 *          description: List advice
 * 
 *          responses:
 *                  200:
 *                      description: advice retrieved successfully
 *                  403:
 *                      description: Not allowed
 *                  500:
 *                      description: Internal Server Error
 *
 *
 */