import { makeStyles } from '@material-ui/core';

export const useStyles = <T extends object>(styles: T) => makeStyles(styles)();