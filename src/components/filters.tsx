import React from 'react';
import './filters.css';
import { FormControl, FormControlLabel, Radio, RadioGroup, SxProps, Typography, useMediaQuery, useTheme } from "@mui/material"

type FiltersProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const Filters: React.FC<FiltersProps> = (props) => {
    const { onChange } = props;
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const radioStyleOverrides: SxProps = { color: 'black', '&.Mui-checked': { color: 'black' } };
    const typographyStyleOverrides: SxProps = { fontWeight: 'bold', fontSize: isSmallBreakpoint ? '18px' : '20px'};

    return (
        <div className="form-control">
                <FormControl>
                    <RadioGroup className="radio-group" defaultValue="owned-games" onChange={onChange} row={!isSmallBreakpoint}>
                        <FormControlLabel
                            className="form-control-label"
                            value="owned-games"
                            control={<Radio sx={radioStyleOverrides}/>}
                            label={<Typography sx={typographyStyleOverrides} className="radio-button-label">Owned games</Typography>}/>
                        <FormControlLabel
                            className="form-control-label"
                            value="unowned-games"
                            control={<Radio sx={radioStyleOverrides}/>}
                            label={<Typography sx={typographyStyleOverrides} className="radio-button-label">Unowned games</Typography>}/>
                        <FormControlLabel
                            className="form-control-label"
                            value="all-games"
                            control={<Radio sx={radioStyleOverrides}/>}
                            label={<Typography sx={typographyStyleOverrides} className="radio-button-label">All Mario games</Typography>}/>
                    </RadioGroup>
                </FormControl>
            </div>
    )
}