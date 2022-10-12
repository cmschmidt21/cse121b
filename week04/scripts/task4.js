/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myself = {
    
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Caitlyn",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/caitlynphoto.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["pasta", "apples", "coconut",],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["volleyball", "hiking", "boating"],
// Step 6: Add another property named placesLived with a value of an empty array
    placesLived: [
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
        {place: "",
         length: "" },
        {place: "",
         length: ""},
// Step 8: For each property, add appropriate values as strings
        {place: "Sandpoint",
         length: "20 years" },

        {place: "Post Falls",
         length: "3 years"},

        {place: "Coeur d'Alene",
         length: "4 years"}]};
// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = myself.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", myself.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", myself.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let foods1 = document.createElement("li");
foods1.textContent = myself.favoriteFoods[0];
let foods2 = document.createElement ("li");
foods2.textContent = myself.favoriteFoods[1];
let foods3 = document.createElement("li");
foods3.textContent = myself.favoriteFoods[2];
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(foods1);
document.querySelector("#favorite-foods").appendChild(foods2);
document.querySelector("#favorite-foods").appendChild(foods3);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbies1 = document.createElement("li");
hobbies1.textContent = myself.hobbies[0];
let hobbies2 = document.hobbies("li");
hobbies2.textContent = myself.hobbies[1];
let hobbies3 = document.hobbies("li");
hobbies3.textContent = myself.hobbies[2];
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
document.querySelector("#hobbies").appendChild(hobbies1);
document.querySelector("#hobbies").appendChild(hobbies2);
document.querySelector("#hobbies").appendChild(hobbies3);
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
let placelived1 = document.createElement("dt");
placelived1.textContent = myself.placesLived[0].place;
let placelength1 = document.createElement("dd");
placelength1.textContent = myself.placesLived[0].length;

let placelived2 = document.createElement("dt");
placelived2.textContent = myself.placesLived[1].place;
let placelength2 = document.createElement("dd");
placelength2.textContent = myself.placesLived[1].length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
document.querySelector("#places-lived").appendChild(placelived1);
document.querySelector("#places-lived").appendChild(placelength1);
document.querySelector("#places-lived").appendChild(placelived2);
document.querySelector("#places-lived").appendChild(placelength2);