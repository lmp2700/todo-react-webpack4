# Wireframe
![Image of Wireframe](/src/images/wireframe.png)

# Resources
- Google Fonts
- Ionicons
- [Coolers] (https://coolors.co/dcf5f8-2ccad6-21939c-fb6666-333333)
- Grabient
- [Webpack Tutorial] (https://youtu.be/TzdEpgONurw)
- Various StackOverflow and Google searches

## RESTful Routes Created
- Create a new todo item
- Display a list of todo items
- Update an existing todo item
  - Toggle the done status
  - Change the description
- Delete a todo item

## Additonal Requirements
- Organized front end code
- Interaction with existing API
- Used React
- Used custom CSS grid
- Scalable & secure code: I did not include a login requirement or a session time out. I based this on the fact that a lot of the "To Do List" applications I've had in the past run without a sign up or log in. They just need to be installed on your phone or computer. If I were to make this a PWA or a mobile application, I would address having a log in or some sort of authentication (email verification for example) in order to run or continue using. If I were scaling this out into a Notion or Evernote-type of application, I would absolutely include a login but keep the session open for an extended period of time, i.e. 1 week or more.


## Running the application

To run the application, make sure you have `node` and `npm` installed on your
machine. Note that this application was built with node 8.2.1. Then do the
following:

1. Install dependencies:
  ```
  $ npm install
  ```

2. Run the server:
  ```
  $ npm run start:server
  ```

3. Run the client:
  ```
  $ npm run start:client
  ```

4. Point browser to:
  ```
  http://localhost:8005/
  ```
