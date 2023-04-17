// components/contactus-form.component.js

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import './deliveryForm.css';
import { useCreateDeliverMutation } from '../../api/apiSlice';

const DeliveryForm = (props) => {
    const [createDeliver] = useCreateDeliverMutation();
    const {setFilteredDeliveries} = props;
    const postDelivery = (values) => { 
        const newDelivery = {
            name: values.name,
            contactName: values.contactName,
            phone: values.phone,
            address: values.address,
            place: values.place,
            date: values.dateOfDelivery,
            documents: values.documentNumbers,
            description: values.description,
            sender: values.sender,
            id: uuidv4()
        };
        
            createDeliver(newDelivery).unwrap();
    }
    return (
        <Formik
            initialValues={{
                name: '',
                contactName: '',
                phone: '',
                address: '',
                place: '',
                dateOfDelivery: '',
                documentNumbers: '',
                description: '',
                sender: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле!'),
                contactName: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле!'),
                phone: Yup.string()
                    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'номер не корректен')
                    .required('Обязательное поле!'),
                address: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле!'),
                place: '',
                dateOfDelivery: Yup.string()
                    .required('Обязательное поле!'),
                documentNumbers: Yup.string()
                    .min(2, 'Минимум 2 символа'),
                description: Yup.string()
                    .min(2, 'Минимум 2 символа'),
                sender: Yup.string()
                    .min(2, 'Минимум 2 символа')
                    .required('Обязательное поле!')

            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                postDelivery(values);
                setFilteredDeliveries(false);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
                resetForm();
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="name">Получатель</label>
                        <Field
                            name="name"
                            id="name"
                            className="form-control"
                            type="text"
                            placeholder="введите название организации получателя" />
                        <ErrorMessage className="error" name="name" component="div" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactName">Контактное лицо получателя</label>
                        <Field
                            name="contactName"
                            id="contactName"
                            className="form-control"
                            type="text"
                            placeholder="укажите контактное лицо получателя" />
                        <ErrorMessage className='error' name="contactName" component='div' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Телефон контактного лица</label>
                        <Field
                            name="phone"
                            id="phone"
                            className="form-control"
                            type="text"
                            placeholder="введите номер телефона получателя" />
                        <ErrorMessage className='error' name="phone" component='div' />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <Field
                            name="address"
                            id="address"
                            className="form-control"
                            type="text"
                            placeholder="укажите адрес доставки" />
                        <ErrorMessage className='error' name="address" component='div' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="place">Округ, район (заполняется автоматически)</label>
                        <Field
                            name="place"
                            id="place"
                            className="form-control"
                            type="text"
                        />
                        <ErrorMessage className='error' name="place" component='div' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfDelivery">Дата доставки</label>
                        <Field
                            name="dateOfDelivery"
                            className="form-control"
                            type="text"
                            placeholder="укажите дату доставки" />
                        <ErrorMessage className='error' name="dateOfDelivery" component='div' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="documentNumbers">Документы</label>
                        <Field
                            name="documentNumbers"
                            id="documentNumbers"
                            className="form-control"
                            type="text"
                            placeholder="укажите номера документов" />
                        <ErrorMessage className='error' name="documentNumbers" component='div' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Детали доставки</label>
                        <Field
                            name="description"
                            id="description"
                            as="textarea"
                            className="form-control"
                            type="text"
                            placeholder="Укажите детали доставки (если необходимо)" />
                        <ErrorMessage className='error' name="description" component='div' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sender">Отправитель</label>
                        <Field
                            name="sender"
                            id="sender"
                            className="form-control"
                            type="text"
                            placeholder="Укажите ответственное лицо отправителя" />
                        <ErrorMessage className='error' name="sender" component='div' />
                    </div>
                    <div className="form-group mt-2">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Идёт отправка..." : "Отправить"}</button>
                        <button type="reset" className="btn btn-secondary" style={{"marginLeft": "4px"}}disabled={isSubmitting}>Очистить форму</button>
                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default DeliveryForm;