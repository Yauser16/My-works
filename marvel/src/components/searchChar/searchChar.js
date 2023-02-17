
import './searchChar.scss';
import { Formik, Form, useField, useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';

const FormSearchChar = (props) => {
    const [field, meta] = useField(props);
    const {values} = useFormikContext(null);
    const [data, setData] = useState(null);
    const [char, setChar] = useState(null);
    const { loading, error, getCharacterName, clearError } = useMarvelService();
    const metaData = meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
    ) : null;

    useEffect(() => {
        updateChar(data);
    }, [data]);

    const onCharLoader = (char) => {
        setChar(char);
    }

    const updateChar = (value) => {
        clearError();
        getCharacterName(value)
            .then(onCharLoader)
    }
    const valueSet = (e) => {
        e.preventDefault();
        setChar(null);
        setData(values.name);
    }

    const result = !char ? (<div className="error">The character was not faund. Check the name and try again</div>)
        : (
            <div className="character"><p className="char">There is! Visit {values.name} page?</p>
                <Link to={`/character/${char.id}`} className="button button__secondary">
                    <div className="inner">TO PAGE</div>
                </Link>
            </div>
          );
    const content = !metaData && !loading && data === values.name ? result : null
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? (<p className="load">loading...</p>) : null;
    return (
        <>
        <Form className="searchar__info" onSubmit={valueSet}>
        <h3 className="searchar__comics">Or find a character by name:</h3>
            <div className="searchar__basics">
                <input {...props} {...field}  className="searchar__comics-item" placeholder='Enter name' />
                <div className="searchar__btns">
                    <button type="submit" className="button button__main">
                        <div className="inner">FIND</div>
                    </button>
                </div>
            </div>
            {spinner}
            {errorMessage}
            {metaData}
            {content}
        </Form>
        </>
    )
}

const SearchCharForm = () => {

    return (
        <Formik
            initialValues={{
                name: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Min 2 simbols')
                    .required('This field is required')
            })}
            onSubmit={values => console.log(JSON.stringify(values, null, 2))}>
            {({isSubmitting}) => (
                <FormSearchChar
                    id="name"
                    name="name"
                    type="text"
                />
                )
            }
        </Formik>

    )
}

export default SearchCharForm;