Feature: Booking a flight on www.ryanair.ie/en
	As a user
	I want to be able to book a flight
	On www.ryanair.com

  Scenario: Booking up to a declined payment on
		Given I am on main page
        # And I log in to personal account
		When I make a search for booking from 'Dublin' to 'Amsterdam' on '2021-04-16' to '2021-05-16' for 2 adults and 1 child
		And I book available flight and login
		And I fill in passenger details
			|title	|firstName	|lastName	|
			|Mr		|John		|Smith		|
			|Mrs	|Jane		|Smith		|
			|		|Mark		|Smith		|
		# And I fill in second adult passenger details 'Mrs', 'Jane' and 'Smith'
		# And I fill in child passenger details 'Mark' and 'Smith'
		And I fill in contact details country 'Poland' and phone number '12345678'
		And I select seats for 3 passengers
		And I checkout my booking
		And I fill in card details '5555555555555557', 'MasterCard', '10/2018', '267' and 'John Smith'
		And I fill in billing address details '28 Sun street' and city 'Wroclaw'
		And I pay for booking
		Then I should get payment declined message