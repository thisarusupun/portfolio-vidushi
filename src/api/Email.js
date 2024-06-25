import axios from 'axios';

const sendMail =(data)=>
{
    axios.post('http://localhost:3000/msg',data)
}
export { sendMail };