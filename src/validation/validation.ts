import * as YUP from "yup";

export const signUpSchema = YUP.object().shape({
    firstname:YUP.string().required(),
    lastname:YUP.string().required(),
    email:YUP.string().required().email(),
    password:YUP.string().required(),
    confirmPass:YUP.string().required().oneOf([YUP.ref("password")])
});

export const loginSchema = YUP.object().shape({
    username:YUP.string().required().email(),
    password:YUP.string().required()
})