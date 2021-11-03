---
sidebar_position: 3
---

# Controller creation

Run the next command *(Remember being located at the directory project)*:

```shell
flug controller
```

Introduce a name for your controller and select options

```shell
Welcome to the Flugzeug Controller generator

? Controller name: Hero
? Model: Hero
? API Version: v1
? Needs authentication? No
? Does the model belongs to User? No
```

Now you will see a new file on ```app/controllers/v1``` with the name **Hero.ts**

```ts title="Hero.ts"
...

@Controller("hero", Hero)
@ApiDocs()
export class HeroController extends ModelController<Hero> {
  @ApiDocsRouteSummary("Get a list of Heros")
  @Get("/")
  @Middlewares([])
  getHeros=(req, res) => this.handleFindAll(req, res);

  @ApiDocsRouteSummary("Get a Hero by Id")
  @Get("/:id")
  @Auth()
  @Middlewares([])
  getHero=(req, res) => this.handleFindOne(req, res);

  @ApiDocsRouteSummary("Adds a new Hero")
  @Post("/")
  @Auth()
  @Middlewares([stripNestedObjects(),])
  postHero=(req, res) => this.handleCreate(req, res);

  @ApiDocsRouteSummary("Upload Hero by Id")
  @Put("/:id")
  @Auth()
  @Middlewares([stripNestedObjects(),])
  putHero=(req, res) => this.handleUpdate(req, res);

  @ApiDocsRouteSummary("Delete Hero by Id")
  @Delete("/:id")
  @Auth()
  @Middlewares([])
  deleteHero=(req, res) => this.handleDelete(req, res);
}
...
```