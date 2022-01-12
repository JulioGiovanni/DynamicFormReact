import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export const ListFields = () => {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Option1', value: '1' },
        { name: 'Option2', value: '2' },
        { name: 'Option3', value: '3' },

      ];
    return (
        <div>
            <h1 className='text-center'>Lista de campos </h1>
            <hr/>

            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo texto</label>
                <input
                    className='form-control'
                    name='text'
                    id='text'
                    type='text'
                />
            </div>

            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo correo</label>
                <input
                    className='form-control'
                    name='email'
                    id='text'
                    type='email'
                />
            </div>

            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo número</label>
                <input
                    className='form-control'
                    name='text'
                    id='text'
                    type='number'
                />
            </div>

            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo Contraseña</label>
                <input
                    className='form-control'
                    name='text'
                    id='text'
                    type='password'
                />
            </div>

            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo Select</label>
                <select
                    className='form-control'
                    name='select'
                    id='select'
                >
                    <option value=''>Seleccione una opción</option>
                    <option value='1'>Opción 1</option>
                    <option value='2'>Opción 2</option>
                    <option value='3'>Opción 3</option>
                </select>
            

            </div>
            <div className='my-3'>
                <label className='form-label' htmlFor='text'>Input tipo Radio</label>
                <ButtonGroup className='pl-5'>
                    {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>

        </div>
    )
}
