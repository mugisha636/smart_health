/**
 * @swagger
 * 
 * /product:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [product]
 *          summary: This helps  to create product.
 *          description: every user can add product!
 *          requestBody:
 *              description: send a new product
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           productName:
 *                               type: string
 *                           productDescription:
 *                               type: string
 *                           productPrice:
 *                               type: integer
 *        
 *                           productImage:
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
 * /products:
 *      get:
 
 *          tags: [product]
 *          summary: This helps to list all product.
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
 * 
  * /buy:
 *      post:
 *          security:
 *              - BearerToken: []
 *          tags: [product]
 *          summary: This helps  to buy product.
 *          description: every user can buy product!
 *          requestBody:
 *              description: send a new order
 *              required: true
 *              content:
 *                application/json:
 *                    schema:
 *                       type: object
 *                       properties:
 *                           quantity:
 *                               type: integer
 *                           productId:
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


 */ 
