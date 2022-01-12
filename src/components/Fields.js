import React, { useState } from 'react'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteField } from '../actions/fieldActions';

export const Fields = () => {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Option1', value: '1' },
        { name: 'Option2', value: '2' },
        { name: 'Option3', value: '3' },

      ];
    const dispatch = useDispatch();
    const {fields} = useSelector((state) => state);

    const handleDelete = (id) => dispatch(deleteField(id));
    return (
        <div>
            {fields.map(field => (

                field.type === 'select' ? (
                    <div className='my-3 row'>
                        <label className='form-label' htmlFor={field.name}>{field.label}</label>
                        <div className='col-10'>
                            <select
                                className='form-control'
                                name={field.name}
                                id={field.name}
                                disabled={field.disabled}
                            >
                                <option value=''>Seleccione una opción</option>
                                <option value='1'>Opción 1</option>
                                <option value='2'>Opción 2</option>
                                <option value='3'>Opción 3</option>
                            </select>
                        </div>
                        
                       <div className='col-2'>
                        <button
                                className='btn btn-danger'
                                onClick={()=>handleDelete(field.id)}
                        >Eliminar</button>

                       </div>
                    </div>
                ) : field.type === 'radio' ? (
                    <div>
                        <label className='form-label' htmlFor={field.name}>{field.label}</label>
                    <div className='col-10'>
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
                    <div className='col-2'>
                        <button
                                    className='btn btn-danger'
                                    onClick={()=>handleDelete(field.id)}
                            >Eliminar</button>
                    </div>
                    </div>
                ) : (

                <div className='my-3 row' key={field.id}>
                    <label className='form-label' htmlFor={field.name}>{field.label}</label>
                    <div className='col-10'>
                        <input
                            className='form-control'
                            name={field.name}
                            id={field.name}
                            type={field.type}
                            disabled={field.disabled}
                        />
                    </div>
                    <div className='col-2'>
                        <button
                                    className='btn btn-danger'
                                    onClick={()=>handleDelete(field.id)}
                            >Eliminar</button>
                    </div>
                </div>
            )
            ))}

        </div>
    )
}
