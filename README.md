# React-album

###### ⮞ React-album is a simple React application that allows you to view, add, update, and delete albums from a list. The list of albums is fetched from an external API (https://jsonplaceholder.typicode.com/albums) and displayed on the page as cards.

#### The application makes use of the following libraries and features:

- React Hooks (useState, useEffect, useRef)
- React Router (Routes, Route)
- react-toastify (ToastContainer, toast)

### Getting started

##### To run the application locally, follow these steps:

- Clone the repository to your local machine
- Run npm install to install the necessary dependencies
- Run npm start to start the application
- Open _http://localhost:3000_ in your browser to view the application

### Components

##### The application is made up of several components:

- **App**: The root component that renders the other components and manages the state of the application
- **Cards**: A component that displays the list of albums as cards
- **AddAlbumCard**: A component that allows you to add a new album to the list
- **UpdateAlbumCard**: A component that allows you to update an existing album in the list

### Functionality

##### The application allows you to perform the following actions:

- View a list of albums
- Add a new album to the list
- Update an existing album in the list
- Delete an existing album from the list
- When adding or updating an album, the application makes a POST or PUT request to the external API. When deleting an album, the application makes a DELETE request to the API.

### Limitations

###### ⮞ The application is a simple demonstration of how to work with an external API and does not provide any error handling or validation. Additionally, the API used in the application is a placeholder and may not always return the expected results.

### Conclusion

###### ⮞ react-album is a simple application that shows how to use React Hooks, React Router and react-toastify. It is a good starting point for learning how to work with external APIs and use common React libraries.
