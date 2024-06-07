import React from 'react';
// Importación de componentes específicos de Material-UI
import { Select, MenuItem, FormControl, InputLabel, OutlinedInput } from '@mui/material';
// Importación del archivo de estilos personalizados para el componente
import './_rubroselect.scss';

// Definición del componente funcional RubroSelect con sus propiedades
const RubroSelect = ({
    rubros, // Objeto que contiene los rubros y sus subrubros
    rubro, // Rubro seleccionado
    subRubro, // Subrubro seleccionado
    handleRubroChange, // Función para manejar el cambio de rubro
    handleSubRubroChange // Función para manejar el cambio de subrubro
}) => {

    // Función auxiliar para renderizar los elementos del menú

    // Entrada (items): Es un arreglo de strings. Puede ser un arreglo de rubros (como ["Tecnología", "Marketing", "Ventas"])
    //  o un arreglo de subrubros (como ["Desarrollador", "QA", "Soporte"]).

    const renderMenuItems = (items) => {
        return items.map((itemKey) => (
            // Cada string en items se convierte en un MenuItem
            <MenuItem key={itemKey} value={itemKey}>
                {itemKey}
            </MenuItem>
        ));
    };

    // Salida: La función devuelve un arreglo de componentes MenuItem.
    //  Cada string en items se convierte en un MenuItem con la key y value establecidas en el string correspondiente, y el contenido del MenuItem también es ese string.

    return (
        <>
            {/* Contenedor para el primer selector (Rubro) */}
            <div className="containerInputAddJobs">
                {/* Control de formulario que contiene el selector */}
                <FormControl fullWidth>
                    {/* Etiqueta del selector para indicar que se seleccionará un "Rubro" */}
                    <InputLabel id="rubro-label">Rubro</InputLabel>
                    {/* Componente de selección de Material-UI */}
                    <Select
                        labelId="rubro-label" // Asignación de la etiqueta al selector mediante su ID
                        id="rubro" // ID único para el selector
                        value={rubro} // Valor seleccionado del rubro (vinculado a las props)
                        input={<OutlinedInput label="Rubro" />} // Input subyacente con una etiqueta visual
                        onChange={handleRubroChange} // Manejador de cambios cuando se selecciona un nuevo rubro
                        displayEmpty // Permite mostrar un valor vacío cuando no hay selección
                    >
                        {/* Llamada a la función auxiliar para renderizar los elementos del menú */}
                        {renderMenuItems(Object.keys(rubros))}
                        
                        {/* Object.keys(rubros): Esta función devuelve un arreglo con todas las claves del objeto rubros. */}
                        
                    </Select>
                </FormControl>
            </div>

            {/* Renderizado condicional del segundo selector (SubRubro) solo si hay un rubro seleccionado */}
            {rubro && (
                <div className="containerInputAddJobs">
                    <FormControl fullWidth>
                        {/* Etiqueta del selector para indicar que se seleccionará un "Puesto" */}
                        <InputLabel id="subRubro-label">Puesto</InputLabel>
                        <Select
                            labelId="subRubro-label" // Asignación de la etiqueta al selector mediante su ID
                            id="subRubro" // ID único para el selector
                            value={subRubro} // Valor seleccionado del subRubro (vinculado a las props)
                            input={<OutlinedInput label="Puesto" />} // Input subyacente con una etiqueta visual
                            onChange={handleSubRubroChange} // Manejador de cambios cuando se selecciona un nuevo subRubro
                            displayEmpty // Permite mostrar un valor vacío cuando no hay selección
                        >
                            {/* Llamada a la función auxiliar para renderizar los elementos del menú */}
                            {renderMenuItems(rubros[rubro])}
                            {/* renderMenuItems(Object.keys(rubros)): Llamamos a la función renderMenuItems pasando el arreglo de claves como items. */}
                        </Select>
                    </FormControl>
                </div>
            )}
        </>
    );
};

// Exportación del componente para su uso en otras partes de la aplicación
export default RubroSelect;
