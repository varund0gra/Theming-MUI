import { useNavigate } from "react-router-dom";
import { Button, Typography, TextField } from "@mui/material";
import Footer from "./Footer";
import DrawerAppBar from "./Navbarcomp";
import { useForm } from "react-hook-form";

function Comp2() {
  const { handleSubmit, register, formState: { errors } } = useForm({
    criteriaMode: "all",
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: (values) => {
      const errors = {};
      if (!values.name.trim()) {
        errors.name = "Name is required";
      }
      if (!values.email.trim()) {
        errors.email = "Email is required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password.trim()) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      if (!values.phone.trim()) {
        errors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Invalid phone number";
      }
      return {
        values: values,
        errors: errors,
      };
    },
  });
  
  const route = useNavigate();
  function handlesubmit() {
    route("/login");
  }

  return (
    <form onSubmit={handleSubmit(handlesubmit)} style={{ padding: "70px", maxWidth: "800px", margin: "auto" }}>
      <DrawerAppBar />
      <Typography
        component="h1"
        variant="h2"
        color="primary"
        style={{ textAlign: "center" }}
      >
        SIGN UP
      </Typography>
      <form
        onSubmit={handlesubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
          {...register("name", { required: true })}
          error={Boolean(errors.name)}
          helperText={errors.name ? errors.name : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
          {...register("email", { required: true })}
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
          {...register("password", { required: true })}
          error={Boolean(errors.password)}
          helperText={errors.password ? "Password is required" : ""}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone No"
          type="number"
          id="phone"
          autoComplete="tel"
          InputLabelProps={{
            style: { color: "grey" },
          }}
          InputProps={{
            style: {
              border: "1px solid grey",
              color: "#FF7F7F",
            },
          }}
          {...register("phoneno", { required: true })}
          error={Boolean(errors.phone)}
          helperText={errors.phone ? "Password is required" : ""}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlesubmit}
          style={{ alignSelf: "center", marginTop: "20px" }}
        >
          Submit
        </Button>
        <Footer />
      </form>
    </form>
  );
}

export default Comp2;
