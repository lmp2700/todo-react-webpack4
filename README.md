# Wireframe
![Image of Wireframe](/src/images/wireframe.png)

## Additonal Requirements
- Organized front end code
- Interaction with existing API
- Used React
- Used custom CSS grid
- Scalable & secure code: Updated CORS code to coincide with recent documentation. I did not include a login requirement or a session time out. I based this on the fact that a lot of the "To Do List" applications I've had in the past run without a sign up or log in. They just need to be installed on your phone or computer. If I were to make this a PWA or a mobile application, I would address having a log in or some sort of authentication (email verification for example) in order to run or continue using. If I were scaling this out into a Notion or Evernote-type of application, I would absolutely include a login but keep the session open for an extended period of time, i.e. 1 week or more.

## Challenges
- CORS and Webpack setup was definitely a challenge
- Once I [figured out](https://stackoverflow.com/questions/56083049/how-to-fix-response-to-preflight-request-doesnt-pass-access-control-check-it/56083214#56083214) how to set up Webpack, the GET route finally worked and I stopped getting CORS errors
- The issue that I am struggling with is the other routes are trying to route through the front end port with the back end API route (i.e. http://localhost:8005/api/todos)
- Double checked the API calls with Postman and they are working appropriately 
- I will continue to work on this challenge and push to Github

# Resources
- Google Fonts
- Ionicons
- [Coolers](https://coolors.co/dcf5f8-2ccad6-21939c-fb6666-333333)
- Grabient
- [Webpack Tutorial](https://youtu.be/TzdEpgONurw)
- Various StackOverflow and Google searches