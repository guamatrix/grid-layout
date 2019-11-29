import React from 'react';
import { useStyles } from 'utils/hooks';
import AddToQueue from '@material-ui/icons/AddToQueue';
import AccountBox from '@material-ui/icons/AccountBox';

const styles = {
    header: {
        gridArea: 'header',
        display: 'grid',
        gridTemplateRows: 60,
        gridTemplateAreas: 
        `'header-icon header-title header-title header-title header-title header-user'`
    },    
    headerIcon: {
        gridArea: 'header-icon'
    },    
    headerTitle: {
        gridArea: 'header-title',
        justifySelf: 'center'
    
    },    
    headerUser: {
        gridArea: 'header-user',
        justifySelf: 'end'
    }
    
}


const Header = () => {
    const classes: any = useStyles(styles);
    return (        
    <header className={classes.header}>
        <div className={classes.headerIcon}>
            <AddToQueue />
        </div>
        <div className={classes.headerTitle}>
            HEADER TITLE
        </div>
        <div className={classes.headerUser}>
            <AccountBox />
        </div>
    </header>        
    )
}

export default Header