import * as Yup from "yup";

const validationSchema = Yup.object({
   name: Yup.string().required("harus diisi"),
   phone: Yup.string()
      .required("wajib diisi")
      .min(8, "masukan min. 8-digit angka")
      .matches(/^[0-9]+$/, "hanya menerima angka"),
   email: Yup.string()
      .required("wajib diisi")
      .email("format email tidak valid"),
   area: Yup.number().nullable().required("Value is not provided"),
   saldo: Yup.string()
      .required("wajib diisi")
      .test("saldo", "saldo minimal 10.000", function (value) {
         if (Number(value) >= 10000) {
            return true;
         }
      })
});

export { validationSchema };
