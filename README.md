# Project REST-Rant

REST-Rant is an app where users can review restaurants.











USER STORIES -
"As a foodie, I need the ability to leave a detailed review of a restaurant, 
including a rating and the option to upload photos, so I can share my experience 
with others and help them decide where to eat."




COLOR SCHEME -
Primary color: Sage green
Secondary color: Off-white
Highlight color: Dark navy blue

The Sage green color could be used for the website's background and headings. This color represents nature, freshness and balance.
The Off-white color could be used for text and buttons. This color provides a clean and classic look.
The Dark navy blue color could be used for highlighted text, images borders and menu buttons. This color represents elegance and sophistication.




| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET    | /    | Home page |
| GET    | /places | Places index page |
| POST   | /places | Create new place |
| GET    | /places/new | Form page for creating a new place |
| GET    | /places/:id | Details about a particular place |
| PUT    | /places/:id | Update a particular place |
| GET    | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST   | /places/:id/rant | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | * | 404 page (matches any route not defined above) |





Data Point	Type	Description
Name	string	The name of the restaurant
City	string	The city where the restaurant is located
State	string	The state where the restaurant is located
Cuisines	string	The types of cuisine offered by the restaurant
Pic	string	A URL link to an image of the restaurant
