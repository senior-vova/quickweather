import React, {FC} from "react";
import {Formik, Form, Field} from "formik";
import {Button} from "react-bootstrap";

type Props = {
    submitForm: (cityName: string) => void
}
const SearchForm: FC<Props> = (props: Props) => {
    const submitForm = (values: any, actions: any) => {
        if (!values.cityName) actions.setSubmitting(false);
        props.submitForm(values.cityName);
        actions.setSubmitting(false);
    };
    return <>
        <Formik initialValues={{cityName: ''}} onSubmit={submitForm}>
            {({isSubmitting}) => (
                <Form className={"mt-3 d-flex"}>
                    <Field
                        name="cityName"
                        type={'text'}
                        className={"form-control text-primary"}
                        placeholder={"City Name"}
                    />
                    <Button className={"ml-1 "} type={"submit"} disabled={isSubmitting}>GO</Button>
                </Form>
            )}
        </Formik>
    </>
};

export default SearchForm;