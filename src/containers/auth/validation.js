import * as Yup from "yup";

const validationSchema = Yup.object({
   username: Yup.string().required("harus diisi"),
   password: Yup.string().required("harus diisi")
});

export { validationSchema };
