/**
* Created with info2180project1.
* User: Don-1
* Date: 2014-10-17
* Time: 09:56 PM
* To change this template use Tools | Templates.
*/


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

var add = function(firstName, lastName, email, phoneNumber)
{
    contacts[contacts.length]={firstName: firstName,lastName: lastName,email: email,phoneNumber: phoneNumber}
    
}
/*Create a search function
then call it passing "Jones"*/
var search = function(lastName)
{
    var contactsLength = contacts.length;
    for(i = 0; i < contactsLength; i++)
    {
        if(lastName === contacts[i].lastName)
        {
            printPerson(contacts[i]);
        }
        else
        {
            console.log("Name does not match");
        }
    }
};
search("Jones")

add("Tom", "Hanks", "tom@hotmail.com","877 078 2452")
list()