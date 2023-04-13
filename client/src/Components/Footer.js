import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {useNavigate } from "react-router-dom";
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
    let navigate = useNavigate();
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2">
                Powered by Company
            </Typography>
            <div className={classes.links}>
                <Link color="blue">
                    Need Help
                </Link>
                <Link color="blue">
                    Privacy Policy
                </Link>


            </div>

        </footer>
    );
};

export default Footer;