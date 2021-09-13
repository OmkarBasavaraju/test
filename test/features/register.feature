Feature:  As a user I should be able to register on the website

  Background: Navigate to the SignIn page
    Given I navigate to the homepage of myStore website
    When I click on the signIn button

  Scenario Outline: Verify that user will be able to register to the website successfully
    When I set "<emailAddress>" to the createAccountEmail inputfield
     When I click on the createAccountButton button
    When I click on the "<genderRadio>" radio button
    When I set "<customerFirstName>" to the customerFirstName inputfield
    When I set "<customerLastName>" to the customerLastName inputfield
    When I set "<password>" to the password inputfield
    When I select the date "<day>" from dropdownlist
    When I select the month "<month>" from dropdownlist
    When I select the year "<year>" from dropdownlist
    When I click the signUp and recieveSpecialOffers checkbox
    When I set "<companyName>" to the companyName inputfield
    When I set "<address>" to the address inputfield
    When I set "<cityName>" to the cityName inputfield
    When I select the state "<stateName>" from dropdownlist
    When I set "<postcodeNumber>" to the postcodeNumber inputfield
    When I select the country "<countryName>" from dropdownlist
    When I set "<additionalInformation>" to the additionalInformation inputfield
    When I set "<mobilePhoneNumber>" to the mobilePhoneNumber inputfield
    When I set "<aliasAddress>" to the aliasAddress inputfield
    When I click on the register button
    Then I expect that verifySignInHeader has the value "<headerTitle>"
    Then I click on the signOut button

    Examples:
      | emailAddress                | genderRadio | customerFirstName | customerLastName | password   | day | month | year | companyName | address           | cityName  | stateName  | postcodeNumber | countryName   | mobilePhoneNumber | aliasAddress      | headerTitle                | additionalInformation |
      | customerOneTest@test.com    | Mr          | customerOne       | customerTwo      | ABcd123#   | 4   | 3     | 1990 | CompanyOne  | 341 Alfred Street | Sydney    | Alabama    | 12345          | United States | 123456789         | 341 Alfred Street | customerOne customerTwo    | RegisterCustomerOne   |
      | customerThree3Test@test.com| Mrs         | customerThree     | customerFour     | Qazwsx123# | 20  | 9     | 1992 | CompanyTwo  | 3 Pitt Street     | Melbourne | California | 34567          | United States | 456789094         | 3 Pitt Street     | customerThree customerFour | RegisterCustomerThree |
      | customerFive-Test@test.com  | Mr          | customer-Five     | customer'Six     | Qazwsx123# | 31  | 5     | 2000 | Company3    | 3 'jis avenue     | Darwin    | Iowa       | 06746          | United States | +21456789094      | 3 'jis avenue     | customer-Five customer'Six   | RegisterCustomerFive  |