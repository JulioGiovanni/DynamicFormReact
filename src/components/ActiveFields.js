import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { AddField } from './AddField';
import { Fields } from './Fields';

const initalFields = [
    {
        id: uuidv4(),
        type: 'text',
        label: 'Nombre',
        name: 'name',
        value: '',
        required: true,
        disabled: false,
    },
    {
        id: uuidv4(),
        type: 'select',
        label: 'Opciones',
        name: 'select',
        value: '',
        required: true,
        disabled: false,
    },
    {
        id: uuidv4(),
        type: 'radio',
        label: 'Nombre',
        name: 'name',
        value: '',
        required: true,
        disabled: false,
    }

];

export const ActiveFields = () => {
    const [FieldValues, setFieldValues] = useState(initalFields);

    return (
        <div >
            <h1 className='text-center'>Formulario</h1>
            <hr/>

            <div className='row'>
                <AddField FieldValues={FieldValues} setFieldValues={setFieldValues}/>
            </div>
            <div className='row'>
                <Fields FieldValues={FieldValues} setFieldValues={setFieldValues}/>
            </div>

        </div>
    )
}
