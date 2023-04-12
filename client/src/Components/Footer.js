import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: 'white',
        color: 'black',
        padding: theme.spacing(2),
        marginTop: 'auto',
        fontFamily: 'Open Sans',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    links: {
        display: 'flex',
        gap: theme.spacing(2),
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2">
                Powered by Company
            </Typography>
            <div className={classes.links}>
                <Link href="" color="inherit">
                    Need Help
                </Link>
                <Link href="" color="inherit">
                    Privacy Policy
                </Link>
            </div>
        </footer>
    );
};

export default Footer;