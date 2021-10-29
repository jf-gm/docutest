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

export class HeroController extends ModelController<Hero> {
  constructor() {
    super();
    this.name = "hero";
    this.model = Hero;
  }

  routes(): Router {
    this.router.get("/", (req, res) => this.handleFindAll(req, res));
    this.router.get("/:id", (req, res) => this.handleFindOne(req, res));
    this.router.post("/", stripNestedObjects(), (req, res) =>
      this.handleCreate(req, res),
    );
    this.router.put("/:id", stripNestedObjects(), (req, res) =>
      this.handleUpdate(req, res),
    );
    this.router.delete("/:id", (req, res) => this.handleDelete(req, res));

    return this.router;
  }
}

...
```