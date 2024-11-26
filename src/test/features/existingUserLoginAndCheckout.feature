Feature: User login and checkout with cart functionality verification
 This feature covers scenarios related to login and checkout process for the existing user with verification of the shopping cart actions including adding, modifying and 
 removing products. It ensures complete user checkout flow with full cart functionality.

 @ExistingUserLoginAndCheckout
 Scenario Outline: Existing user login and checkout

  Given the user navigates to the website
  When the user clicks on the Log in link
  And the user logs in with the existing user credentials using "<Email>" and "<Password>"
  And the user clicks on the Books link
  And the user adds a "Fahrenheit 451 by Ray Bradbury" book to the shopping cart
  And the user proceeds to the shopping cart and checkout process
  Then the user verifies the checkout process steps: Billing, Shipping, Payment
  And the user fills in the billing and shipping information and clicks continue
  And the user selects shipping method and clicks continue
  And the user selects payment method and clicks continue
  And the user validates the payment information and clicks continue
  When the user clicks on the Confirm Order button
  Then the order should be successfully completed and the user should see the order confirmation message

  Examples:
   | Email                                                                                             | Password                                                          |
   | 7c1105a46d6386bb3c0985bdfa7f85e2:f47f7056813d5e76b01a9c0ba3e9ff2818d9c6f210558349ad1d2d360b9ea47b | 5a19a6657cdbaf4aa624ea25857135f0:99bb6b1481fadc63424660f2cb8b4aac |
   | 9309d28a54b982aecfd64ff8f817e56c:6f7f283413540ef5d66ada70ff8cd1db8ff087d44d563a961f1ae25664edbc87 | 5a19a6657cdbaf4aa624ea25857135f0:99bb6b1481fadc63424660f2cb8b4aac |


 @VerifyCartFunctionality
 Scenario Outline: Verify cart functionality

  Given the user navigates to the website
  When the user clicks on the Books link
  And the user adds a "Fahrenheit 451 by Ray Bradbury" book to the shopping cart
  And the user adds a "First Prize Pies" book to the shopping cart
  And the user adds a "Pride and Prejudice" book to the shopping cart
  And the user clicks on the Shopping cart link
  Then the user verifies book "<Book>" with quantity "<Quantity>" in cart
  When the user modifies the quantity of a "Fahrenheit 451 by Ray Bradbury" book

  Examples:
   | Book                            | Quantity |
   | Fahrenheit 451 by Ray Bradbury  | 1        |
   | First Prize Pies                | 1        |
   | Pride and Prejudice             | 1        |