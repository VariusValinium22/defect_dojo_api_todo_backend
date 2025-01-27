### Project Title: defect_dojo_api_todo_backend

### Associated Project: defect_dojo_api_todo_frontend

**Description:** This is a FullStack project to present the many things I have learned by implementing the new language of Vue3 for my interviews with DefectDojo.

**Technologies:** Vue3; Express.js; Nodemon; Postman; CORS; Axios; Pinia; body-parser;

**Future Techs and improvements:** MongoDB; JWT tokens; Authentication; Register/Login\

### Future Extensions

Add UPDATE/PUT functionality for editing todos.

Authentication Registration/login with JWT.

Database Integration w/ MongoDB for persistent data storage.

BackEnd: Add utils/error.js file to centralize error codes/messages for consistent error handling

### Abilities Demonstrated by the Project

**Define and Use Objects:**

Frontend: Managing todo objects in Pinia's state and passing them through Vue components. A pinia store is where todo objects are managed: added, fetched, deleted.

Backend: Using objects to represent todos in the backend (todos.js) and managing data in-memory or with a database.

i.e. Todos are stored as objects in the server's memory as an in-memory array on the server, until the db is integrated.

**Make and Process API Calls:**

Frontend: API calls (GET, POST, DELETE) integrated with the backend using axios in the Pinia store.

Backend: Express routes process API requests and return responses for todos.

**Import External Sources:**

Frontend: Importing external libraries (in store/todos.js file and index.js file: axios, Pinia, Vue Router) and configuration variables from .env.

Backend: Importing middleware like express, body-parser and cors in app.js

**State Management:**

Using Pinia in the store/todos.js file for centralized state management in the frontend, ensuring reactive data flow. Specifically, the defineStore function is used to define the STATE function and initialize the todo array for returned values from the todo APIs.

**Dynamic Routing:**

In the Frontend, using Vue Router in index.js to navigate between Home.vue, About.vue and Info.vue on the client-side(webpage).

**Frontend-Backend Integration:**

The frontend request uses the axios.js file's apiClient function(that has PORT 3002 assigned to VITE_API_BASE_URL in .env file) to make an HTTP request. This communicates with the Express backend API endpoints in the routes/todos.js file.
When the API gets a response, it sends it back to the frontend.

**Error Handling:**

Backend: Handles basic operation errors  
**IMPROVE:** build utils/errors.js file for standardized error responses

Frontend: Gracefully handling API errors with try/catch blocks in the Pinia store in store/todos.js  
**IMPROVE:** Add UI notifications to inform the user of errors. e.g. notification or alert()

**Dynamic Data Rendering: real-time updates**

By using the v-for directive, the todo array is iterated, and any changes (such as adding or deleting an object) dynamically updates the array. These updates are automatically reflected in the UI in real-time due to Vue's reactivity system.

**CRUD Functionality:**

Implementing full CRUD operations.
Create: POST AddTodo  
Read: GET fetchTodos  
**IMPROVE:** Update: (PUT putTodos)  
Delete: removeTodo

**Scoped and Global Styling:**

< style scoped > tags, like in Home.vue file, scopes the styles to ONLY the component while maintaining a Global style.css file for general styles built during the initial creation of the Vue project and imported into main.js file.

**Environment Configuration:**

Using .env files to manage environment-specific variables, ensures flexibility across development and production environments.

**Reusable and Modular Code:**

Breaking code into reusable modules (e.g., todos.js store, axios.js API client, backend routes/todos.js).

**Lifecycle Management:**

Used the onMounted() lifecycle hook in the Home.vue file to fetch todos data from the backend when the component is initially rendered.

**Form Handling:**

Managing form>input element in the Home.vue component, by using v-model, will bind the input value to the newTodo variable. The newTodo variable is updated, in real-time, with each user input and functions, like addTodo, handle the value when the form is submitted.
