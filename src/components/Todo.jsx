import { useParams } from "react-router-dom";
import { retrieveTodo } from "./api/TodoApiService";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";

function Todo() {
    const { id } = useParams();
    const authContext = useAuth();
    const username = authContext.userName;
    const navigate = useNavigate();

    const [description, setDescription] = useState("");
    const [targetDate, setTargetDate] = useState("");

    useEffect(() => {
        getTodo();
    }, [id]);

    function getTodo() {
        retrieveTodo(username, id)
            .then(response => {
                console.log("Fetched Todo:", response.data);
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate);
            })
            .catch(error => {
                console.error("Error fetching todo:", error);
            });
    }

    function goBack() {
        navigate('/todoList');
    }

    function handleSubmit(values) {
        console.log("Form Submitted:", values);
    }

    function validate(values) {
        let errors = {};

        if (!values.description || values.description.length < 5) {
            errors.description = "Enter at least 5 characters.";
        }

        if (!values.targetDate) {
            errors.targetDate = "Select a valid date.";
        }

        return errors;
    }

    return (
        <div>
            <button onClick={goBack}>Return to List</button>
            <Formik
                initialValues={{ description, targetDate }}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <ErrorMessage name="description" component="div" className="error-message" />
                            <ErrorMessage name="targetDate" component="div" className="error-message" />
                        </div>
                        <fieldset>
                            <label>Description</label>
                            <Field type="text" name="description" />
                        </fieldset>
                        <fieldset>
                            <label>Target Date</label>
                            <Field type="date" name="targetDate" />
                        </fieldset>
                        <div>
                            <button type="submit" disabled={isSubmitting}>Save</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Todo;
