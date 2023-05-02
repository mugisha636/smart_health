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
 *                           image:
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
 * 
  * /verifydoctor/{token}:
 *      get:
 *          tags: [doctor]
 *          description: It helps to verify user
 *          parameters:
 *              - name: token
 *                in: path
 *                description: Registration token
 *                required: true
 * 
 *          responses:
 *                  200:
 *                     description: user verified succesfully
 *                  400:
 *                     description: bad request
 *                  409:
 *                     description: user already verified
 *                  500:
 *                     description: Internal server error
 * 
  * /doctorLogin:
 *      post:
 *          tags: [doctor]
 *          summary: This helps to login as a user.
 *          description: Teacher, Parent, Patron, Matron, DoS, DoD, and Head Teacher registration!
 *          requestBody:
 *              description: login
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           email:
 *                               type: string
 *                           password:
 *                               type: string 
 *          responses:
 *              200:
 *                  description: Successfully user logged in!
 *              400:
 *                  description: Bad request
 *              404: 
 *                  description: Not Found
 *              500:
 *                  description: Internal server error!
 * 
 * 

 *

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

 * /doctorAvailability:
 *      post:
 *          security:
 *              - BearerToken: []

 *          tags: [doctor]
 *          summary: This helps to schedule availability.
 *          description: availability registration!
 *          requestBody:
 *              description: availability
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 
 *                           date:
 *                               type: string
 *                           time:
 *                               type: string
                            
 *          responses:
 *              201:
 *                  description: Successfully shedured!
 *              400:
 *                  description: Bad request
 *              500:
 *                  description: Internal server error!
 
 * 

* /AvailabilityList:
 *      get:
 *          security:
 *              - BearerToken: []
 *          tags: [doctor]
 *          summary: This helps to list all availability.
 *          description: availability
 * 
 *          responses:
 *                  200:
 *                      description:  retrieved successfully
 *                  403:
 *                      description: Not allowed
 *                  500:
 *                      description: Internal Server Error
 *
 * 

  */
