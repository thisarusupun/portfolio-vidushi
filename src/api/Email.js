import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const sendMail = async (data)=>
{
    const navigate = useNavigate();
    try{
    const response =  await axios.post('http://localhost:3000/msg',data)


    console.log(response);
    if(response.status === 200)
        {
           alert("SUBMISSION SUCCESSFUL!")
           navigate('/success');
        }
    else
    {
           alert("SUBMISSION FAILED!")
    }
    }catch(error)
    {
           alert("SUBMISSION FAILED!")
    }

    return response;
}
export { sendMail };