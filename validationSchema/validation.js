import Joi from "joi";
import { join } from "path";

const schema = {
  signupvalidate: Joi.object().keys({
    email: Joi.string().required().email(),
    telephone: Joi.string()
                .regex(/^[0-9]{10}$/)
                .messages({'string.pattern.base': `Phone number must have 10 digits.`})
                .required(),
                
      firstName: Joi.string()
      .empty()
      .pattern(/^[a-zA-Z]/)
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
        "string.pattern.base":
          "{{#label}} must contain only characters from a to z.",
      }),

      lastName: Joi.string()
      .empty()
      .pattern(/^[a-zA-Z]/)
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
        "string.pattern.base":
          "{{#label}} must contain only characters from a to z.",
      }),
      specialized_in: Joi.string()
      .empty()
      .pattern(/^[a-zA-Z]/)
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
        "string.pattern.base":
          "{{#label}} must contain only characters from a to z.",
      }),
      availability: Joi.string()
      .empty()
      .pattern(/^[a-zA-Z]/)
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
        "string.pattern.base":
          "{{#label}} must contain only characters from a to z.",
      }),
      from: Joi.string()
      .empty()
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
      }),
      to: Joi.string()
      .empty()
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
      }),
      profile_image:Joi.string(),
    password: Joi.string()
      .required()
      .empty()
      .pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
      .messages({
        "any.required": "{{#label}} field is required",
        "string.base": "{{#label}} must be of type string",
        "string.empty": "{{#label}} can not be empty",
        "string.pattern.base":
          "{{#label}} must contain at least a number, a special character, an upper-case letter and longer than 8 characters",
      }),
  }),

  signin: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

const { signupvalidate } = schema;

class AuthValidation {
  static async verifySignup(req, res, next) {
    const { error } = signupvalidate.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details[0].message.replace(/["'`]+/g, ""),
      });
    }
    return next();
  }
  static async verifySignin(req, res, next) {
    const { error } = schema.signin.validate(req.body);
    if (error) {
      throw new Error(
        res.status(400).json({
          error: error.details[0].message.replace(/["'`]+/g, ""),
        })
      );
    }
    return next();
  }
}
export default AuthValidation;