/**
 * @swagger
 * 
 * /appointment:
 *      post:
 *          tags: [appointment]
 *          summary: This helps  to request appointment.
 *          description: every user can send appointment!
 *          requestBody:
 *              description: send a new appointment
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           userId:
 *                               type: string
 *                           description:
 *                               type: string
 *                           date:
 *                               type: string
 *                           doctorId:
 *                               type: string 
 *                           time:
 *                               type: string
 *        
 *                           scheduleId:
 *                               type: string
 *                    
  
 *                           
 *          responses:
 *              201:
 *                  description: Successfully!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 */ 
