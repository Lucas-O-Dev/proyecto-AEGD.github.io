import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import './_rubroselect.scss'

const RubroSelect = ({ rubros, rubro, subRubro, handleRubroChange, handleSubRubroChange }) => {
    return (
        <>
            <div className="containerInputAddJobs" >
                <FormControl fullWidth>
                    <InputLabel id="rubro-label">Rubro</InputLabel>
                    <Select
                        labelId="rubro-label"
                        id="rubro"
                        value={rubro}
                        input={<OutlinedInput label="Rubro" />}
                        onChange={handleRubroChange}
                        displayEmpty
                    >
                        {Object.keys(rubros).map((rubroKey) => (
                            <MenuItem key={rubroKey} value={rubroKey}>
                                {rubroKey}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            {rubro && (
                <div className="containerInputAddJobs">
                    <FormControl fullWidth>
                        <InputLabel id="puesto-label">Puesto</InputLabel>
                        <Select
                            labelId="subRubro-label"
                            id="subRubro"
                            value={subRubro}
                            input={<OutlinedInput label="Puesto" />}
                            onChange={handleSubRubroChange}
                            displayEmpty
                        >
                            {rubros[rubro].map((subRubroKey) => (
                                <MenuItem key={subRubroKey} value={subRubroKey}>
                                    {subRubroKey}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            )}
        </>
    );
};

export default RubroSelect;
