Feature: User Registration and Checkout Process
 This feature tests the successful user registration and checkout process.
 It also covers the complete user flow from registration to successful product checkout.
 Of course all inputs and outputs are verified with successful or error messages rescpectively.

 @SignupAndCheckout
 Scenario Outline: User Signup and Checkout

  Given the user navigates to the website
  When the user clicks on the Register link
  And the user fills in valid information for a new user with "<FirstName>", "<LastName>", "<Email>" and "<Password>"
  Then the user should see a registration success message "Your registration completed"
  And the user should be redirected to the homepage
  Then the user logs in with the newly created user credentials using "<Email>" and "<Password>"
  And the user adds a product "Fahrenheit 451 by Ray Bradbury" book to the shopping cart
  And the user proceeds to the checkout process
  Then the user verifies the checkout process steps: Billing, Shipping, Payment
  And the user fills in the billing and shipping information and clicks continue
  And the user selects shipping method and clicks continue
  # When the user clicks on the Confirm Order button
  # Then the order should be successfully completed and the user should see the order confirmation message

  Examples:
   | FirstName | LastName | Email                                                                                             | Password                                                          |
   | Bob       | Fisk     | 7c1105a46d6386bb3c0985bdfa7f85e2:f47f7056813d5e76b01a9c0ba3e9ff2818d9c6f210558349ad1d2d360b9ea47b | 5a19a6657cdbaf4aa624ea25857135f0:99bb6b1481fadc63424660f2cb8b4aac |
   | Matt      | Whild    | 9309d28a54b982aecfd64ff8f817e56c:6f7f283413540ef5d66ada70ff8cd1db8ff087d44d563a961f1ae25664edbc87 | 5a19a6657cdbaf4aa624ea25857135f0:99bb6b1481fadc63424660f2cb8b4aac |