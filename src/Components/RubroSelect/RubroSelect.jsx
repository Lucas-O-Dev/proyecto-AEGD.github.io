import React from 'react';
import { Select } from '@chakra-ui/react';

const RubroSelect = ({ rubros, rubro, subRubro, handleRubroChange, handleSubRubroChange }) => {
    return (
        <>
            <div className="containerInputAddJobs">
                <label htmlFor="rubro">Rubro</label>
                <Select
                    placeholder='Selecciona un rubro'
                    value={rubro}
                    onChange={handleRubroChange}>
                    {Object.keys(rubros).map((rubroKey) => (
                        <option key={rubroKey} value={rubroKey}>
                            {rubroKey}
                        </option>
                    ))}
                </Select>
            </div>

            {rubro && (
                <div className="containerInputAddJobs">
                    <label htmlFor="subRubro">Sub-Rubro</label>
                    <Select
                        placeholder='Selecciona un sub-rubro'
                        value={subRubro}
                        onChange={handleSubRubroChange}
                    >
                        {rubros[rubro].map((subRubroKey) => (
                            <option key={subRubroKey} value={subRubroKey}>
                                {subRubroKey}
                            </option>
                        ))}
                    </Select>
                </div>
            )}
        </>
    );
};

export default RubroSelect;
