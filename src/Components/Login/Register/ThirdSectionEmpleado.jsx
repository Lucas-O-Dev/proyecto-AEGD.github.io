import React from 'react'
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import './_thirdsectionempleado.scss'

const ThirdSectionEmpleado = () => {

    const Item = styled(Sheet)(({ theme }) => ({
        ...theme.typography['body-sm'],
        textAlign: 'center',
        gap: '18px',
        background: 'rgba(255, 255, 255, 0.5)', // Fondo blanco con 50% de transparencia
        fontWeight: theme.fontWeight.md,
        color: theme.vars.palette.text.secondary,
        border: '1px solid',
        borderColor: theme.palette.divider,
        padding: theme.spacing(2),
        borderRadius: theme.radius.md,
        width: '90%',
    }));
    

    return (
        <div className='conteinerParrafoEmpleado'>

            <Item >En una entrevista tendrás que responder a preguntas como estas...
                <ul>
                    <li>"¿Alguna vez tuviste
                        que ir más allá de tus responsabilidades habituales
                        para asegurar que un proyecto se completara con éxito?"
                    </li>
                    <li>
                        "¿Cómo priorizas y manejas múltiples problemas al mismo tiempo?"
                    </li>
                </ul>
            </Item>
        </div>
    )
}

export default ThirdSectionEmpleado
