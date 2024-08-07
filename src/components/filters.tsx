import React from 'react';
import './filters.css';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, SxProps, useMediaQuery, useTheme } from "@mui/material"
import FilterListIcon from '@mui/icons-material/FilterList';
import { ListFilter } from './game-collection-list';

type FiltersProps = {
    onFilterChange: (filter: ListFilter) => void;
};

export const Filters: React.FC<FiltersProps> = (props) => {
    const { onFilterChange } = props;
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('sm'));
    const radioStyleOverrides: SxProps = { color: 'black', '&.Mui-checked': { color: 'black' } };
    const typographyStyleOverrides: SxProps = { fontWeight: 'bold', fontSize: isSmallBreakpoint ? '18px' : '20px'};

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen(!open);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
      <div>
        <Button
            className="filter-button"
            sx={{ textTransform: 'none', color: 'black', backgroundColor: 'whitesmoke', '&:hover': { backgroundColor: '#e2e2e2' } }}
            ref={anchorRef}
            id="filter-button"
            onClick={handleToggle}
        >
          <>
            <FilterListIcon />
            Filter
          </>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom"
          transition
          disablePortal
          className="popper"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => { setOpen(false) }}>
                  <MenuList
                    autoFocusItem={open}
                    id="filter-menu"
                    // onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={() => { onFilterChange('owned-games'); setOpen(false); }}>Owned Games</MenuItem>
                    <MenuItem onClick={() => { onFilterChange('unowned-games'); setOpen(false);}}>Unowned Games</MenuItem>
                    <MenuItem onClick={() => { onFilterChange('all-games'); setOpen(false);}}>All Mario Games</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    )
}