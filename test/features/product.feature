Feature:  As a user I should be able to buy the products

    Background: Navigate to the SignIn page
        Given I navigate to the homepage of myStore website
        When I click on the signIn button

    Scenario Outline: Verify that user will be able to buy product from the website successfully
        When I set "<emailAddress>" and "<password>" to the signIn inputfield and click signInButton
        When I click on the dresses button
        When I scroll to the "<dress>" and click
        When I click on the addToCart button
        When I click on the proceedToCheckout button
        When I click on the proceedToCheckoutInSummaryTab button
        When I click on the proceedToCheckoutInAddressTab button
        When I click on the terms of service condition checkbox
        When I click on the proceedToCheckoutInShippingTab button
        Then I expect that "<dress>" productColorAndSize has the value "<productColorAndSize>"
        Then I expect that "<dress>" productName has the value "<productName>"
        Then I expect that "<dress>" availability has the value "<productAvailability>"
        Then I expect that "<dress>" productUnitcost has the value "<productUnitcost>"
        Then I expect that "<dress>" productTotalcost has the value "<productTotalcost>"
        Then I expect that "<dress>" productQuantity has the value "<productQuantity>"
        Then I click on the signOut button

        Examples:
            | emailAddress              | dress       | password    | productColorAndSize      | productUnitcost | productTotalcost | productQuantity | productName   | productAvailability |
            | CustFirstTest123@test.com | firstDress  | Qwert12345# | Color : Orange, Size : S | $26.00          | $28.00           | 1               | Printed Dress | In stock            |
            | CustThirda2Test@test.com  | secondDress | FPjLcg57$   | Color : Beige, Size : S  | $50.99          | $52.99           | 1               | Printed Dress | In stock            |