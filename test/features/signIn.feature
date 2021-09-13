Feature: As a user I should be able to signIn and signOut of the website

    Background: Navigate to the SignIn page
        Given I navigate to the homepage of myStore website
        When I click on the signIn button


    Scenario Outline: Verify that user will be able to signIn and signOut of the website successfully
        When I set "<emailAddress>" and "<password>" to the signIn inputfield and click signInButton
        Then I click on the signOut button

        Examples:
            | emailAddress              | password    |
            | CustFirstTest123@test.com | Qwert12345# |
            | CustSecondTest@test.com   | Frsvu12@    |
            | CustThirda2Test@test.com  | FPjLcg57$   |

    Scenario Outline: Verify that the proper error messages are displayed
        When I set "<inValid/validEmailAddress>" and "<inValid/validPassword>" to the signIn inputfield and click signInButton
        Then I expect that errorText has the value "<errorText>"

        Examples:
            | inValid/validEmailAddress | inValid/validPassword | errorText                  |
            | CustomerFiftyOne@test.com | Qwert12345#           | Authentication failed.     |
            | CustFirstTest123@test.com | ABcd123               | Authentication failed.     |
            |                           | FPjLcg57$             | An email address required. |
            | CustThirda2Test@test.com  |                       | Password is required.      |


