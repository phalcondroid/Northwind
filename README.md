# Northwind JS

Northwind is a javascript framework oriented to perform applications using something similar to MVC "Model View Controller", northwind is based in backend server frameworks like Laravel, Phalcon or Ruby on rails or Django.

### File structure
![GitHub Logo](https://raw.githubusercontent.com/phalcondroid/Northwind/master/FileStructure.png)
Format: ![Alt Text](https://raw.githubusercontent.com/phalcondroid/Northwind/master/FileStructure.png)

### Views

Views in northwind are object oriented similar to JSX of React.js but this works as wraper of DOM of javascript but becomes to object oriented each html components.

```typescript
let div = new Northwind.Tag.Div();
div.append("Something in div");
```
Northwind internally use document.createElement("div"); to access to html element but add more functionalities to modify this like jquery but with object oriented manner, for example .append("Something in div").

##### View properties
Every tag of native html is wraped in a northwind class like Northwind.Tag.Table(), this gives the possibility of being able to modify the html elements with methods of Northwind.Tag.

```typescript
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

### Event Manager

```typescript
namespace YourProject.Controllers
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

### Controllers

We can to start to modify all components in your application through controllers, you can to modify sections of your web content, in controllers you should develop all business logic of your frontend application.

```typescript
namespace YourProject.Controllers
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
namespace YourProject.Controllers
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

##### Manage elements by methods

You can create a method with the same name id to the element of html and northwind call this element and will be passed as param there.

```typescript
namespace YourProject.Controllers
{
    export class IndexController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
        }
        
        public myInput(input)
        {
          let input = this.getDom().getById("myInput");
          input.val("some value to input");
        }
    }
}
```

### Models and Ajax
The best way to make an ajax request through Northwind is create models similar to any ORM of any framework, such as Doctrine, Phalcon ORM, JPA or Hibbernate, you should define class models that represent a table in the ORM, northwind do something similar, you can create models to represent any object response of ajax as object models.

##### Response of server API

```javascript
[
  {
    "name" : "Jonn",
    "last" : "Doe"
  },
  {
    "name" : "Jonn2",
    "last" : "Doe2"
  }
]
```

##### Model - Entity

```typescript
namespace YourProject.Models
{
    export class Sample extends Northwind.Mvc.AjaxModel
    {
        private id   : number = 0;
        private name : string = "";
        private last : string = "";

        public setName(value : string) { this.name = value; }
        public getName() : string { return this.name; }
        
        public setLast(value : string) { this.last = value; }
        public getLast() : string { return this.last; }
    }
}
```

##### in controller...

```typescript
namespace YourProject.Controllers
{
    export class IndexController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
          let entityManager = this.getEm();
          entityManager.find(
            Models.Sample
          ).response(function (data) {
            for (let sample of data) {
              console.log(
                sample.getName() + " - " sample.getLast()
              );
            }
          });
        }
    }
}
```

### Query Builder

Northwind query builder works in array objects of javascript, this component iterate and filter data.

```typescript
let data = [
  {
    "id"   : 1, 
    "name" : "Jonn",
    "last" : "Doe"
  },
  {
    "id"   : 2,
    "name" : "Jonn2",
    "last" : "Doe2"
  }
];

let builder = new Mvc.Query(data);
builder.where(new Builder.Like({
  "name" : "2"
));

```

#### After

```javascript
let data = [
  {
    "id"   : 2,
    "name" : "Jonn2",
    "last" : "Doe2"
  }
];
```

#### Filter columns

```typescript
let builder = new Mvc.Query(data);
builder.columns([
  "name",
  "last"
]);

```

#### Limit data

```typescript
let builder = new Mvc.Query(data);
builder.limit(1);
```

#### Order by column

```typescript
let builder = new Mvc.Query(data);
builder.orderBy({
  "name" : 1
});
```

#### Other features classes

* AND
* OR
* Like
* Not
* Lte - Less than or equals
* Lt  - Less than
* Gt  - Greather than
* Gte - Greather than equals
* Group
* Sort  - just arrange in two ways 1, -1 as mongo db
* In    - list
* NotIn - list

### Dependency Injector
Di is a container, you can save any data or objects into DI, DI is going to be shared with all components in your application.

##### IndexController.ts

```typescript
namespace YourProject.Controllers
{
    export class IndexController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
          this.getDi().set("shareText", "myText");
          this.getDi().set("function", function (params) {
            console.log("Created in index controller and " + params);
          });
        }
    }
}
```

##### OtherController.ts

```typescript
namespace YourProject.Controllers
{
    export class OtherController extends Northwind.Mvc.Controller
    {
        public initialize()
        {
          this.getDi().get("shareText"); // myText
          
          let fn = this.getDi().get("function");
          fn("other param"); // Created in index controller and other param
        }
    }
}
```

#### Final step - start application in html

```javascript
let northwind = new Northwind.Application();
let config = new YourProject.Config.AppConfig;
config.setBaseUrl("{{ url() }}");
northwind.setScope(
    Environment.Scope.LOCAL
);
northwind.setConfig(
    config.getConfig()
);
northwind.catch(function (exception) {
    console.log(exception);
    console.log(exception.message);
    console.log(exception.description);
    console.log(exception.fileName);
    console.log(exception.lineNumber);
    console.log(exception.name);
});
northwind.start();
```



