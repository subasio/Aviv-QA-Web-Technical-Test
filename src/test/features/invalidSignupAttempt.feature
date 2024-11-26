Feature: User Registration and Checkout Process
 This feature tests the unsuccessful user registration process attempts.
 Of course all inputs and outputs are verified with successful or error messages rescpectively.

  @InvalidSignupAttempt
  Scenario Outline: Signup with invalid user information

    Given the user navigates to the website
    When the user clicks on the Register link
    And the user fills in valid information for a new user with "<FirstName>", "<LastName>", "<Email>", "<Password>" and "<ConfirmPassword>"
    Then error message "<ErrorMessage>" should be displayed

    Examples:
   | FirstName | LastName |  Email              | Password        | ConfirmPassword | ErrorMessage                                        |
   |           | Fisk     |  bob.fisk@aviv.com  | invalidpassword | invalidpassword | First name is required.                             |
   | Bob       |          |  bob.fisk@aviv.com  | invalidpassword | invalidpassword | Last name is required.                              |
   | Bob       | Fisk     |                     | invalidpassword | invalidpassword | Email is required.                                  |
   | Bob       | Fisk     |  bob.fisk           | invalidpassword | invalidpassword | Please enter a valid email address.                 |
   | Bob       | Fisk     |  bob.fisk@aviv.com  |                 |                 | Password is required.                               |
   | Bob       | Fisk     |  bob.fisk@aviv.com  | invalidpassword |                 | Password is required.                               |
   | Bob       | Fisk     |  bob.fisk@aviv.com  | invalidpassword | passwordinvalid | The password and confirmation password do not match.|