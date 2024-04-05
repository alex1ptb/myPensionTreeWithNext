"use client";
import React, { useEffect } from "react";
import M from "materialize-css";
import "@/assets/styles/qualifyWebpage.css";

const QualifyWebpage = () => {
  // Use useEffect to run code after the component has mounted
  useEffect(() => {
    if (typeof M !== "undefined") {
      var collapsibles = document.querySelectorAll(".collapsible");
      M.Collapsible.init(collapsibles);
    } else {
      console.error("Materialize CSS not initialized");
    }
  }, []); // The empty array ensures this effect runs once after initial render

  return (
    <>
      <div className="container">
        <h1>Qualify Page</h1>
        <div className="container">
          <p>
            If you are self-employed or own a business, you may qualify to
            sponsor a retirement plan with two components; an employee salary
            deferral and a company funded retirement benefit.
          </p>
          <p>
            The employee salary deferral and the company funded retirement
            benefit work together annually to reduce the amount of W-2, Form
            1099, S/C Corporate, or Partnership income that gets reported and
            taxed on your Form 1040.
          </p>
          <p>
            By sponsoring a Customized Safe Harbor 401(k) plan and Cash Balance
            Pension Plan, you may be able to generate Four sources
            tax-deductions.
          </p>
        </div>
        <div className="container">
          <ul className="collapsible popout">
            <li>
              <div className="collapsible-header">
                <strong>Employee Funded Benefit Deduction</strong>
              </div>
              <div className="collapsible-body">Salary deferral</div>
              <div className="collapsible-body">
                Tax Year 2023 Limits -$22,500 for all employees under the age of
                50; $27,500 for all employees age 50 and over.
              </div>
              <div className="collapsible-body">
                Tax Year 2024 Limits -$23,000 for all employees under the age of
                50; $30,500 for all employees age 50 and over.
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong>Company Funded Benefit Deduction</strong>
              </div>
              <div className="collapsible-body">
                Safe-Harbor Non-Elective Contribution 3-4% of employee/owner’s
                salary; or
              </div>
              <div className="collapsible-body">
                Profit Sharing Contribution – 6% of employee/owner salary;
                whichever is greater
              </div>
              <div className="collapsible-body">
                Cash Balance Pension Plan Contribution – Funded from company
                profits, the pension plan contribution is calculated by a
                pension actuary and is an amount to be funded each year so that
                the employee/owner can have a lump-sum accumulated and grown to
                payout an average amount of their W-2 income for the rest of
                their life. (Annual Pension Funding could be $80,000-$400,000
                per year)
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong>Eligible Earnings for Benefit Calculation</strong>
              </div>
              <div className="collapsible-body">
                Schedule C Filing As Sole Proprietorship – Considered Earnings –
                Net Business Profit, Reported on Line 31 on Schedule C (i.e.
                Line 31 Net Business Profit= Self Employment Tax Income Base)
              </div>
              <div className="collapsible-body">
                S-Corporation – Considered Earnings – Owners W-2 Form, Line or
                Compensation of Officers Reported On Line 7 of Form 1120-S.
              </div>
              <div className="collapsible-body">
                Partnership- Considered Earnings – Partners Schedule K-1, Line
                4a Guaranteed Payments for Services or Line 14 Self-Employment
                Earnings.
              </div>
              <div className="collapsible-body">
                C-Corporation- Considered Earnings - Owners W-2 Form, Line or
                Compensation of Officers Reported On Line 12 of Form 1120.
              </div>
            </li>
            <li>
              <div className="collapsible-header">
                <strong>
                  Using the Eligible Earnings Listed Above, you can:
                </strong>
              </div>
              <div className="collapsible-body">
                Visit our Interactive Retirement Contribution Calculator build a
                sample Pension Tree Calculation (or)
              </div>
              <div className="collapsible-body">
                Take a short questionnaire to receive customized quote by email.
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <p>
            *You may qualify for a much higher retirement contribution than if
            you were to sponsor a SEP-IRA, Solo/Self-Employed 401(k), Simple-IRA
            Plan, Money Purchase Pension, or any other standardized plan offered
            by other institutions.
          </p>
          <p>
            **If you qualify for a fully-insured pension plan benefit, your
            pension plan contribution might be double the aforementioned range.
          </p>

          <p>
            Please visit our{" "}
            <a href="URL_FOR_CALCULATOR">
              Interactive Retirement Plan Contribution Calculator
            </a>
            <br></br>
            Or<br></br>
            For any questions, please feel free to schedule a consultation with
            our Pension Tree Consultants by using the{" "}
            <a href="URL_FOR_CALENDLY">Calendly link</a> posted below.
          </p>

          <p>
            Or<br></br>
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
            Consultant will contact you within 24 hours of your inquiry
            submission
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
    </>
  );
};

export default QualifyWebpage;
