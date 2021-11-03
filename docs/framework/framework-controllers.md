---
sidebar_position: 3
---

# API Controllers

### Controller files

- The controller files go into `app/controllers/v1`.
- The file name must be the controller name in singular with the first letter in uppercase. (PascalCase)
- The module must export a constant instance of the controller as `default`.

### Controller definition

- The controller must be a class that extends `Controller` or `ModelController`.
- In the controller `@Controller` must be defined receiving two parameters: `('name', model)`.
- The controller is going to be composed by some hook decorators:

#### Hook decorators

- `@ApiDocs` defines if it's going to generate documentation for the controller.
- `@ApiDocsRouteSummary` optional decorator that defines a description for the route.
- `@Auth` defines if the route is going to be protected by authentication. Regardless of the order in which it is defined, this decorator will always be executed before the middleware.
- `@Middlewares` receives a list of functions that are going to be executed before the route logic.
- #### Method decorators
  - By default, the route is `/`
  - `@Get`
  - `@Post`
  - `@Put`
  - `@Delete`

Example:

```js
import { ModelController } from "@/libraries/ModelController";
import { User } from "@/models/User";

@ApiDocs(true)
@Controller("user", User)
export class UserController extends ModelController<User> {
  @ApiDocsRouteSummary("Get a User by Id")
  @Get("/:id")
  @Auth()
  @Middlewares([isSelfUser()])
  getUser = (req: Request, res: Response) => {
    this.handleFindOne(req, res);
  };

  @ApiDocsRouteSummary("Upload a User by Id")
  @Put("/:id")
  @Auth()
  @Middlewares([filterRoles(["admin"]), validateBody(UserSchema)])
  updateUser = (req: Request, res: Response) => {
    this.handleUpdate(req, res);
  };

  @ApiDocsRouteSummary("Delete User by Id")
  @Delete("/:id")
  @Auth()
  @Middlewares([filterRoles(["admin"])])
  deleteUser = (req: Request, res: Response) => {
    this.handleDelete(req, res);
  };
}

const controller = new UserController();
export default controller;
```

### Default Controller Rest API

- GET `/api/v1/<modelName>`: Gets a list of all the items of the model (JSON Array). The total number of objects is at the http header "Content-Count".
- GET `/api/v1/<modelName>/<id>`: Gets a item of the model (JSON)
- POST `/api/v1/<modelName>`: Creates a new item of the model (Expects JSON in body, returns JSON)
- PUT `/api/v1/<modelName>/<id>`: Modifies a preexisting item of the model (Expects JSON in body, returns JSON)
- DELETE `api/v1/<modelName>/<id>`: Removes a preexisting item of the model (HTTP 204)

#### Query params

- **where**: Accepts JSON following a modified Sequelize query format. More details in the **Where query format** section.
- **limit**: number, max number of results to get
- **offset** | **skip**: number, offset for the results to get, useful for pagination
- **order** | **sort**: string or an Array of Arrays, specifying ordering for the results, format: `[["<column name>", "<ASC | DESC>"], ...]`
- **include**: JSON(Array< Object | string >): Specify the relations to populate, the members of the array can be strings with the name of the model to populate, the name of the model with a dot and a filter name, the name of the property for the association, or a object with a key of the same format as before that denotes an array with the same format of the parent one (recursive). Examples:

  ```
  include=["Profile", {"Children.ordered": ["ChildrenProfile"]}]

  include=[{"user": ["profile"]}]
  ```

**Example:**

```
GET http://example.com/api/v1/user?where={"name":{"$like":"Alfred"}}&limit=10&offset=20&include=["Profile"]&order=[["lastName", "ASC"]]
```

#### Where query format

Flugzeug query format is based on the Sequelize query format, but limited and adapted for security.

The contents of the `where` query param should be a JSON where the keys are either:

- The name of the parameter that we want to query in the Model, or
- One of the following supported operators:

  | Operator     | Sequelize equivalent |
  | ------------ | -------------------- |
  | \$eq         | Op.eq                |
  | \$ne         | Op.ne                |
  | \$gte        | Op.gte               |
  | \$gt         | Op.gt                |
  | \$lte        | Op.lte               |
  | \$lt         | Op.lt                |
  | \$not        | Op.not               |
  | \$in         | Op.in                |
  | \$notIn      | Op.notIn             |
  | \$is         | Op.is                |
  | \$like       | Op.like              |
  | \$startsWith | Op.startsWith        |
  | \$endsWith   | Op.endsWith          |
  | \$substring  | Op.substring         |
  | \$notLike    | Op.notLike           |
  | \$between    | Op.between           |
  | \$notBetween | Op.notBetween        |
  | \$and        | Op.and               |
  | \$or         | Op.or                |

You can get more details on how to write queries in the [Sequelize Querying documentation](https://sequelize.org/v5/manual/querying.html).