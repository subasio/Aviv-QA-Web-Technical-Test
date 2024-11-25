Feature: User Registration and Checkout Process
 This feature tests the unsuccessful user registration process attempts.
 Of course all inputs and outputs are verified with successful or error messages rescpectively.

  # @InvalidSignupAttempt
  # Scenario Outline: Scenario - Signup with invalid user information

  #   Given User is on the signup page
  #   When User enters firstName as "<firstName>"
  #   And User enters lastName as "<lastName>"
  #   And User enters email as "<email>"
  #   And User enters password as "<password>"
  #   And User enters confirmPassword as "<confirmPassword>"
  #   And User clicks on the register button
  #   Then Error message "<message>" should be displayed

  #   Examples:
  #     Examples:
  #  | FirstName | LastName |  Email              | Password        | ConfirmPassword | ErrorMessage                                        |
  #  |           | Fisk     |  bob.fisk@aviv.com  | invalidpassword | invalidpassword | First name is required.                             |
  #  | Bob       |          |  bob.fisk@aviv.com  | invalidpassword | invalidpassword | Last name is required.                              |
  #  | Bob       | Fisk     |                     | invalidpassword | invalidpassword | Email is required.                                  |
  #  | Bob       | Fisk     |  bob.fisk           | invalidpassword | invalidpassword | Please enter a valid email address.                 |
  #  | Bob       | Fisk     |  bob.fisk@aviv.com  |                 |                 | Password is required.                               |
  #  | Bob       | Fisk     |  bob.fisk@aviv.com  | invalidpassword |                 | Password is required.                               |
  #  | Bob       | Fisk     |  bob.fisk@aviv.com  | invalidpassword | passwordinvalid | The password and confirmation password do not match.|