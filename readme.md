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

##Bind data
- Bind is used in element within attributes
- the keyword is v-bind:attributeName and you map the value to the attribute in app.js
- v-bind could also be replaced by :attributeName
- e.g <a v-bind:href="url">Link</a>

##Events
- Events could be used with v-on:nameofEvent
- in the value, could call javascript or methods e.g: v-on:click="changeWage(1)"
- dblclick = double click events
- v-on could be replaced with @ so e.g: @click="changeWage(1)"
- A lot of information is available in the event. e.g: mouse coordinates. (offsetX, offsetY)
- Could use it to display in variables in the html

- keyboard event is the same. e.g: @keyup="updateName" will allow to update a field based on the key typed in calling the method updateName.

##Model binding
- We could simplify the data binding and have it in 2 ways using the keyword: v-model
- putting v-model='variable name' the variable we want to use in app.js

##Modifier
- We could modify a given event by adding something behind the name of the event. v-on:click.alt means it will do something if we hold alt at the same time we click.
- Other kind of behavior could prevent as example the default behavior like clicking on a link.
<a href="www.google.fr" v-on:click.prevent>Google</a>
More events available here:
https://vuejs.org/v2/guide/events.html#Event-Modifiers

##Operators
v-if will allow to put condition based on value
v-else-if will follow an v-if and provide the else like a javascript statement

v-for will allow to loop on a list/table
e/g: <li v-for: p in items> {{ p }}</li> will output all the item in the list items and the value represented through the {{}}
We could also loop through object and call the properties within the value like <div v-for="nin in ninjas">
          <p>{{ nin.name }}</p>


