import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import ModalFormData from './ModalFormData'

export interface FormState {
    email: string;
    password: string;
    age?: number;
    plan: string;
}

const FormWithModal = () => {

    const { register, handleSubmit } = useForm<FormState>()
    const [dataForModal, setDataForModal] = useState<FormState>({
        email: "",
        password: "",
        age: 0,
        plan: "",
    }) 

    const onSubmit = (data: FormState) => {
        console.log("datos", data)
        setDataForModal(data)
    }

    return (
        <>
            <h3>Form</h3>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor='email'> Email:</label>
                <input type='mail' id='email' required {...register('email')}></input>

                <label htmlFor='password'> Password:</label>
                <input type='password' id='password' required {...register('password')}></input>

                <label htmlFor='age'> Age:</label>
                <input type='number' id='age'  {...register('age', { valueAsNumber: true })}></input>

                <label htmlFor='number'> Plan:</label>
                <select id='plan' required {...register('plan')}>
                    <option aria-valuetext='basic'>Basic</option>
                    <option aria-valuetext='basic'>Medium</option>
                    <option aria-valuetext='basic'>Premium</option>
                </select>

                {/* <button type='submit'>check the info</button> */}
                <ModalFormData dataForModal={dataForModal}></ModalFormData>
            </form>

        </>
    )
}

export default FormWithModal