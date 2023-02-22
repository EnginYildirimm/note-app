import Note from "@/components/Note";
import { addNoteRequest } from "@/services/addNote";
import { getNotesRequest } from "@/services/getNotes";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import { useFormik } from "formik";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import * as Yup from "yup";

type HomePageProps = {};
type InitialValues = {
  note: string;
  content: string;
};
const initialValues: InitialValues = {
  note: "",
  content: "",
};
const HomePage: NextPage<HomePageProps> = (props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const formik = useFormik<InitialValues>({
    initialValues,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.setSubmitting(true);
      const response = await addNoteRequest({
        title: values.note,
        content: values.content,
      });
      formikHelpers.setSubmitting(false);
      setNotes(response);
      formikHelpers.resetForm();
    },
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
    validationSchema: Yup.object({
      note: Yup.string().min(3, "En az 3 karakter olmalı"),
      content: Yup.string().min(10, "En az 10 karakter olmalı"),
    }),
  });
  useEffect(() => {
    (async () => {
      const x = await getNotesRequest();
      setNotes(x);
    })();
  }, []);
  return (
    <div className="container py-20">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-screen-md mx-auto"
      >
        <div className="flex flex-col space-y-4">
          <Input
            id="note"
            name="note"
            label="Note title"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.note && formik.errors.note}
          />
          <Textarea
            rows={6}
            name="content"
            label="Note"
            id="content"
            value={formik.values.content}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.content && formik.errors.content}
          />
        </div>
        <div className="mt-10 text-right">
          <Button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Ekleniyor" : "Ekle"}
          </Button>
        </div>
        <div className="mt-20 flex flex-col space-y-4">
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={setNotes} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default HomePage;
