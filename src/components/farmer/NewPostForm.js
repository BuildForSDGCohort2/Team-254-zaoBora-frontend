import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Form } from "formik";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from '@material-ui/core/styles';


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

const NewPostForm = (props) => {
    const classes = useStyles();
	const {
		values: { postName, description, img },
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
							name="postName"
							value={postName}
							label={errors.postName ? 'Error' : 'Title..'}
							id={errors.postName ? 'outlined-error-helper-text' : 'postName'}
							autoComplete="postName"
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.postName ? errors.postName : ''}
							error={errors.postName ? true : false}
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={12}>
					<ThemeProvider theme={theme}>
						<TextField
							id="description"
							label={errors.description ? 'Error' : 'Description'}
							variant="outlined"
							name="description"
							value={description}
							onChange={handleChange}
							InputProps={{ className: classes.root }}
							helperText={errors.description ? errors.description : ''}
							error={errors.description ? true : false}
							rows={10}
							required
							fullWidth
							multiline
						/>
					</ThemeProvider>
				</Grid>
				<Grid item xs={6}>
					<ThemeProvider theme={theme}>
						<TextField
							accept="image/*"
							value={img}
							onChange={handleChange}
							className={classes.input}
							style={{ display: 'none' }}
							id="raised-button-file"
							multiple
							type="file"
							required
						/>
						<label htmlFor="raised-button-file">
							<Button variant="raised" component="span" className={classes.button}>
								Upload Photo
							</Button>
						</label>
					</ThemeProvider>
				</Grid>
			</Grid>
			<Grid item xs={3}>
				<ThemeProvider theme={theme}>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={`s-font-size ${classes.submit}`}
					>
						Post
					</Button>
				</ThemeProvider>
			</Grid>
		</Form>
	);
}

export default NewPostForm;