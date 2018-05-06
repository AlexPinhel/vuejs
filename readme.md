vue.js readme

##How des it work ?
- in html integrate script pointing to vue.js
- in html, declare an element with id (e.g: div)
- in html, declare script to point to app.js below the element
- in app.js, create a new Vue and declare element pointing to id with # in front

The Vue.js will take care of all part in the element starting with id. It is managed by the application in app.js

##Start
- define a data part in app.js data : {}
- define what you want to write to the html in this data part. Example a string. This string will have a name to be used in the html between {{Name}}
- Where the name is put, you will see the data available in the app.js

##Methods
- Methods is another object in the app.js
- The declaration done you could add method with 
MethodName(){
    return ...
}
- The method could take parameter send when called in the html
- The call is done in html like data {{ MethodName() }}