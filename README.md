# front-end
this project uses react to handle:
  1. Login
  2. Account creation
  3. User Authentication
  4. Searching for classes
  5. Displaying classes
  6. Creating classes for instructors
hooks: 
  0. all hooks go in the hooks folder in the src directory
  1. useSearch
     // takes a an intial data array and a search object
     // that is a one to one copy of the object being searched for
     // except the key values are set to empty strings and 0's.
     // when ever the search object changes the hook will loop 
     // through each matching key of each object of the 
     // initial data array and see if the respective key of the 
     // search object is include (after both values are 
     // converted to strings). If every search key that is filled out is 
     // included in the tested object, that object is added to 
     // a filtered data array that is returned by the hook.
     // This is best used in conjunction with the useForm hook
  2. use Form
     // takes a yup validation schema and an inital state object
     // that represents the intial value of the form values. 
     // It returns a form Values object that is meant to be 
     // used for evaluating tha value of the user input, an 
     // error value that is false when the user inputs a value 
     // that is unapporoved by the yup schema, a change function
     // that is meant to be set to the onChange value of the
     // html inputs (those inputs must have name values equal
     // to the key of the formvalue they are meant to change),
     // and a reset function that resets the form values to 
     // their default state. The useForm hook is perfect for 
     // anything form related, so long as a yup schema is 
     // created for that form.
     
 verification:
   0. all schemas go in the verification folder of the src directory  
   1. class schema
      // for validating the class creation form for instructors. 
      // It ensures that no classes can be created without any 
      // of the following values: name, type, startTime, startDate,
      // duration, intensity, location, and max.
      // name, type, startTime, and location must all be strings. 
      // startDate must be a date that is in the future (does not accept same day classes. 
      // Intensity must be between 1 and 10. 
      // The max cannot be less than 1. 
      // The duration may not be less than 5.
  2. login schema
      // requires a username and string that both must be 5 characters
  3. search schema
      // only requires that each input is the correct type
  4. sign up schema
      // the same as the the login schema, but with a 
      // confirm password value that MUST be the same
      // as the password and an email that is also required.
