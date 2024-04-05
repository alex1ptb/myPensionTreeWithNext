import "@/assets/styles/contactWebpage.css";

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="text-3xl">Contact Page</h1>
      <hr></hr>
      <div>
        <p>
          For any questions,<br></br> please feel free to schedule a
          consultation with our<br></br> <b>Pension Tree Consultants</b>
          <br></br> by using the <a href="URL_FOR_CALENDLY">Calendly link</a>{" "}
          posted below.
        </p>
        <br></br>
        <p>
          Call us at <a href="tel:305-901-6174">305-901-6174</a>
          <br></br>
          Email us at{" "}
          <a href="mailto:newbusiness@mypensiontree.com">
            newbusiness@mypensiontree.com
          </a>
        </p>
        <p>
          Or<br></br>
          Please fill out the form listed below and one of our Pension Tree
          Consultant will contact you within 24 hours of your inquiry submission
        </p>
      </div>
      <div className="container">
        <form action="SUBMIT_FORM_URL" method="post">
          <label for="firstName">First Name:</label>
          <br></br>
          <input type="text" id="firstName" name="firstName"></input>
          <br></br>

          <label for="lastName">Last Name:</label>
          <br></br>
          <input type="text" id="lastName" name="lastName"></input>
          <br></br>

          <label for="phone">Phone Number:</label>
          <br></br>
          <input type="tel" id="phone" name="phone"></input>
          <br></br>

          <label for="email">Email:</label>
          <br></br>
          <input type="email" id="email" name="email"></input>
          <br></br>

          <label for="companyName">Company Name:</label>
          <br></br>
          <input type="text" id="companyName" name="companyName"></input>
          <br></br>

          <label for="inquiry">Inquiry:</label>
          <br></br>
          <textarea id="inquiry" name="inquiry"></textarea>
          <br></br>

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
