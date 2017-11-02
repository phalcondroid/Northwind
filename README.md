# Northwind JS

Northwind is a javascript framework oriented to perform applications using something similar to MVC "Model View Controller", northwind is based in backend server frameworks like Laravel, Phalcon or Ruby on rails or Django.

### Views

Views in northwind are object oriented similar to JSX of React.js but this works as wraper of DOM of javascript but becomes to object oriented each html components.

```typescript
let div = new Northwind.Tag.Div();
div.append("Something in div");
```
Northwind internally use document.createElement("div"); to access to html element but add more functionalities to modify this like jquery but with object oriented manner, for example .append("Something in div").

##### View properties
Every tag of native html is wraped in a northwind class like Northwind.Tag.Table(), this gives the possibility of being able to modify the html elements with methods of Northwind.Tag.

````
let table = new Northwind.Tag.Table();
table.class("table table-striped");
table.css("display", "none");
table.html("example");
table.show();

let input = new Northwind.Tag.Input();

//Here append to Div table and input similar to jquery but object oriented.
let div = new Northwind.Tag.Div();
div.append([
    table,
    input
]);
```

### Controllers

We can to start to modify all components in your application through controllers, you can to modify sections of your web content, in controllers you should develop all business logic of your frontend application.

```typescript
namespace NewProject.Controllers
{
    export class IndexController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
        	console.log("Hello world");
        }
    }
}

```

The controllers have injected all of necesary to manipulate the html components and business logic, you can get elements by id for example and Northwind gives you a Northwind.Tag component instead.

```html
<html>
    <body>
        <input type="text" id="myInput">
    </body>
</html>
```

```typescript
namespace NewProject.Controllers
{
    export class IndexController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
        	let input = this.getDom().getById("myInput");
            input.val("some value to input");
        }
    }
}
```

##### After

```html
<html>
    <body>
        <input type="text" id="myInput" value="some value to input">
    </body>
</html>
```

### Models

### Ajax

### Dependency Injector

### Event Manager

### Data Mapper

### Query Builder
