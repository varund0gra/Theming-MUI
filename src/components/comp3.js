import { useNavigate } from 'react-router-dom';
import {Button , Typography,TextField,Box} from '@mui/material'

function Comp3() {
    const route = useNavigate();
    function handlesubmit() {
      route("/");
    }
  return (
    <Box>
    <Typography variant="h2" color="primary" align="center">LOGIN</Typography>
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField InputLabelProps={{
          style: { color: 'grey' },
        }}
        InputProps={{
          style:{
            border:"1px solid grey"
          }
        }} label="E-mail" variant="outlined" margin="normal" style={{ width: 400 }} />
      <TextField InputLabelProps={{
          style: { color: 'grey' },
        }}
        InputProps={{
          style:{
            border:"1px solid grey"
          }
        }} label="Password" type="password" variant="outlined" margin="normal" style={{ width: 400 }} />
      <Button variant="contained" color="primary" size="large" onClick={handlesubmit}>Submit</Button>
    </Box>
  </Box>
  )
}

export default Comp3;
