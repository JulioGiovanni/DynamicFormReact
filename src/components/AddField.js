import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Modal, ToggleButton } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { addField } from '../actions/fieldActions';
import { useForm } from '../hooks/useForm';

export const AddField = ({setFieldValues}) => {
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [formValues,handleInputChange,reset] = useForm({
        type: '',
        name: '',
        label: '',
        
    })
    const dispatch = useDispatch()
    
    const {name,type,label} = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        const newField = {
            type,
            name,
            label,
            id: uuidv4(),
            disabled: checked,
        }
        console.log(newField);
       dispatch(addField(newField))
       reset();
    } 

    return (
        <div className='d-flex align-items-center justify-content-end'>
            <button onClick={handleShow} className="btn btn-primary">Agregar campo</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar nuevo campo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='my-3'>
                            <label className='form-label' htmlFor='type'>Selecciona tipo de campo</label>
                            <select
                                className='form-control'
                                name='type'
                                id='type'
                                value={type}
                                onChange={handleInputChange}
                            >
                                <option value=''>Seleccione una opción</option>
                                <option value='text'>Texto</option>
                                <option value='email'>Correo</option>
                                <option value='password'>Contraseña</option>
                                <option value='number'>Número</option>
                                <option value='radio'>radio</option>
                            </select>
                        </div>
                        <div className='my-3'>
                            <label className='form-label' htmlFor='name'>Nombre del campo</label>
                            <input
                                type='text'
                                className='form-control'
                                name='name'
                                id='name'
                                value={name}
                                onChange={handleInputChange}
                            />
                        
                        </div>
                        <div className='my-3'>
                        <label className='form-label' htmlFor='label'>Etiqueta label del campo</label>
                            <input
                                type='text'
                                className='form-control'
                                name='label'
                                id='label'
                                value={label}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="my-3">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked}
                                value="1"
                                onChange={(e) => setChecked(e.currentTarget.checked)}
                            >
                                Campo deshabilitado
                            </ToggleButton>
                        </div>




                        <div className="my-3 d-flex justify-contend-end">
                            <Button variant="success" type='submit'>
                                Agregar campo
                            </Button>
                        </div>
                    </form>


                </Modal.Body>
            </Modal>
        </div>
    )
}
