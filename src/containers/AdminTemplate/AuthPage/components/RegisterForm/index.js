import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import InputField from "../../../../../components/form-controls/InputField";
import PasswordField from "../../../../../components/form-controls/PasswordField";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import bg from "../../../../../assets/images/backapp.jpg";
const useStyles = makeStyles((theme) => ({
  register: {
    position: "relative",
    backgroundImage: "url(" + bg + ")",
    height: "100vh",
    width: '100vw',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  root: {
    position: "absolute",
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    width: "25%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 3,
    boxShadow: "0 8px 10px 8px rgba(255, 105, 135, .3)",
  },

  avatar: {
    margin: theme.spacing(1),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },

  title: {
    margin: theme.spacing(1, 0, 2, 0),
    textAlign: "center",
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:focus": {
      outline: "none",
    },
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
  input: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff671f",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ff671f",
    },
    "& .MuiOutlinedInput-input": {
      color: "black",
    },

    "&:hover .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black",
    },
    "& .MuiInputLabel-outlined": {
      color: "#ff671f",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "black ",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "black",
    },
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name.")
      .test(
        "should has at least two words",
        "Please enter at least two words.",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),

    email: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter a valid email address."),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters."),
    retypePassword: yup
      .string()
      .required("Please retype your password.")
      .oneOf([yup.ref("password")], "Password does not match"),
  });
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div clasName={classes.register}>
      <div className={classes.root}>
        {isSubmitting && <LinearProgress className={classes.progress} />}

        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>

        <Typography className={classes.title} component="h3" variant="h5">
          Create An Account
        </Typography>

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={classes.form}
        >
          <InputField
            name="fullName"
            label="Full Name"
            form={form}
            className={classes.input}
          />
          <InputField
            name="email"
            label="Email"
            form={form}
            className={classes.input}
          />
          <PasswordField
            name="password"
            label="Password"
            form={form}
            className={classes.input}
          />
          <PasswordField
            name="retypePassword"
            label="Retype Password"
            form={form}
            className={classes.input}
          />

          <Button
            disabled={isSubmitting}
            type="submit"
            className={classes.submit}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Create an account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
