import React from 'react'

// Componente Formulario
const JobForm = ({ inputValues, handleInputChange, handleRubroChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div className='containerInputAddJobs'>
            <label htmlFor="descripciondelpuesto">Descripción del puesto.</label>
            <input
                type="text"
                id="descripciondelpuesto"
                name="descripciondelpuesto"
                value={inputValues.descripciondelpuesto}
                onChange={handleInputChange}
                placeholder="descripcion del puesto"
            />
        </div>
        <div className='containerInputAddJobs'>
            <label htmlFor="jornadaLaboral">Jornada Laboral</label>
            <input
                type="text"
                id="jornadaLaboral"
                name="jornadaLaboral"
                value={inputValues.jornadaLaboral}
                onChange={handleInputChange}
                placeholder="tiempo completo, medio-tiempo.."
            />
        </div>
        <div className='containerInputAddJobs'>
            <label htmlFor="experienciaRequerida">Experiencia Requerida</label>
            <input
                type="text"
                id="experienciaRequerida"
                name="experienciaRequerida"
                value={inputValues.experienciaRequerida}
                onChange={handleInputChange}
                placeholder="experiencia"
            />
        </div>
        <div className='containerInputAddJobs'>
            <label htmlFor="duracion">Duración</label>
            <input
                type="text"
                id="duracion"
                name="duracion"
                value={inputValues.duracion}
                onChange={handleInputChange}
                placeholder="3 meses, 6 meses..."
            />
        </div>

        {/* Nuevos inputs */}
        <div className='containerInputAddJobs'>
            <label htmlFor="sueldo">Sueldo. (opcional)</label>
            <input
                type="text"
                id="sueldo"
                name="sueldo"
                value={inputValues.sueldo}
                onChange={handleInputChange}
                placeholder="870.000 $"
            />
        </div>
        <div className='containerInputAddJobs'>
            <label htmlFor="nivelEducativo">Nivel educativo mínimo</label>
            <input
                type="text"
                id="nivelEducativo"
                name="nivelEducativo"
                value={inputValues.nivelEducativo}
                onChange={handleInputChange}
                placeholder="nivel Educativo"
            />
        </div>
        <div className='containerInputAddJobs'>
            <label htmlFor="modalidad">Modalidad</label>
            <input
                type="text"
                id="modalidad"
                name="modalidad"
                value={inputValues.modalidad}
                onChange={handleInputChange}
                placeholder="Presencial o a Distancia"
            />
        </div>

        <div className='containerInputAddJobs'>
            <label htmlFor="localidad">Localidad</label>
            <input
                type="text"
                id="localidad"
                name="localidad"
                value={inputValues.localidad}
                onChange={handleInputChange}
                placeholder="Zona"
            />
        </div>

        {/* Select para rubro */}
        <div className="containerInputAddJobs">
            <label htmlFor="rubro">Rubro</label>
            <Select
                placeholder='Selecciona un rubro'
                value={inputValues.rubro}
                onChange={handleRubroChange} // Maneja el cambio del rubro
            >
                {Object.keys(rubros).map((rubro) => (
                    <option key={rubro} value={rubro}>
                        {rubro}
                    </option>
                ))}
            </Select>
        </div>

        {/* Select para sub-rubro, se muestra solo si se selecciona un rubro */}
        {inputValues.rubro && (
            <div className="containerInputAddJobs">
                <label htmlFor="subRubro">Sub-Rubro</label>
                <Select
                    placeholder='Selecciona un sub-rubro'
                    value={inputValues.subRubro}
                    onChange={(e) => setInputValues({ ...inputValues, subRubro: e.target.value })} // Maneja el cambio del sub-rubro
                >
                    {rubros[inputValues.rubro].map((subRubro) => (
                        <option key={subRubro} value={subRubro}>
                            {subRubro}
                        </option>
                    ))}
                </Select>
            </div>
        )}

        <button type="submit">Aceptar</button>
        </form>
    );
};

export default JobForm