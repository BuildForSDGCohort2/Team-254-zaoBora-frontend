import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';
import { Form } from "formik";


const useStyles = makeStyles((theme) => ({
    root: {
    	"&.Mui-focused": {
	        "& .MuiOutlinedInput-notchedOutline": {
	        	borderColor: "#4dbc51",
	        	borderWidth: "1px"
	        }
    	}
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.success.main,
        padding: theme.spacing(1.5)
    }
}));

const theme = createMuiTheme({
	overrides: {
	    MuiInputLabel: {
	    	root: {
	        	"&$focused": {
	          		color: "#4dbc51"
	        	}
	    	}
	    }
	},
	palette: {
		primary: {
			main: '#4dbc51',
			contrastText: "#fff"
		},
	}
});

const ResetPasswordForm = (props) => {
    const classes = useStyles();
	const {
		values: { currentPassword, newPassword, confirmNewPassword },
		errors,
		handleChange,
	} = props;

	return (
		<Form
			className={classes.form}
			noValidate
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							value={currentPassword}
							label={errors.password ? 'Error' : 'Current Password'}
							id={errors.password ? 'outlined-error-helper-text' : 'password'}
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							value={newPassword}
							label={errors.password ? 'Error' : 'New Password'}
							id={errors.password ? 'outlined-error-helper-text' : 'password'}
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							type="password"
							value={confirmNewPassword}
							label={errors.password ? 'Error' : 'Confirm Password'}
							id={errors.password ? 'outlined-error-helper-text' : 'password'}
							autoComplete="current-password"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.password ? errors.password : ''}
							error={errors.password ? true : false}
						/>
					</ThemeProvider>
				</Grid>
			</Grid>
			<ThemeProvider theme={theme}>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={`s-font-size ${classes.submit}`}
				>
					Reset
				</Button>
			</ThemeProvider>
		</Form>
	);
}

export default ResetPasswordForm;