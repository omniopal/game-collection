import React from 'react';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import { getMuiStyleOverrides } from './filter.styles';
import './filter.css';

export type RegionFilter = 'Kanto' | 'Johto';

export type RegionFiltersProps = {
    onFilterChange: (filter: RegionFilter) => void;
};

export const RegionFilter: React.FC<RegionFiltersProps> = (props) => {
    const { onFilterChange } = props;

    const [open, setOpen] = React.useState(false);
    const muiStyleOverrides = getMuiStyleOverrides();
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const onFilterButtonClick = () => {
        setOpen(!open);
    };

    const onMenuItemClick = (e: React.MouseEvent, filter: RegionFilter) => {
        e.stopPropagation();
        onFilterChange(filter);
        setOpen(false);
    }

    return (
      <div>
        <Button
            sx={muiStyleOverrides.filterButton}
            ref={anchorRef}
            onClick={onFilterButtonClick}
        >
          <>
            <FilterListIcon />
            <div className="filter-text">Filter</div>
          </>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom"
          transition
          sx={muiStyleOverrides.popper}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => { setOpen(false) }}>
                  <MenuList>
                    <MenuItem onClick={(e) => { onMenuItemClick(e, 'Kanto') }}>Kanto</MenuItem>
                    <MenuItem onClick={(e) => { onMenuItemClick(e, 'Johto') }}>Johto</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
}