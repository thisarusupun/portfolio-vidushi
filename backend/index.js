const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors');
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  }));

 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "mr.decemberdevil@gmail.com",// This email is belong to (H.D shashika kavinda) & please use differnt email address to send message 
      pass: "uvza wcsp teak jepf",// this pass code also provided for testing purposes 
    },
  })

app.post("/msg",async(req,res)=>{

    const data ={
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
  try{   
  let mail = {
    from: `${data.name}`,
    to:`shashigakavinda@gmail.com`,// change with your receiver email (ebbandara199@gmail.com)
    subject: `${data.subject}`,
    text: `contact us ${data.email} .`,
    html: `<h1>from :${data.name}</h1><br/><h2>contact :${data.email}</h2><br/><P>Message:${data.message}</p>`,
  };

  // send the mail using the transporter object 
  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("message sent successfully");
      alert("Message Sent successfully");
    }
  });
}
catch (error) {
  console.error(error);
  res.status(500).send("Internal Server Error");
}

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
