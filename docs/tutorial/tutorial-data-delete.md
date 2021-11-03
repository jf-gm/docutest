---
sidebar_position: 6
---

# Delete data

To delete data, we need to use the _**DELETE**_ route.

| Method | Path             |
|--------|------------------|
| DELETE | /api/v1/hero/:id |

This is going to return a 200 status with empty response, but we can modify the controller `Hero.ts` at `app/controllers/v1`.

```js title="Hero.ts"
...
@Controller("hero", Hero)
@ApiDocs()
export class HeroController extends ModelController<Hero> {
    ...

    @ApiDocsRouteSummary("Delete Hero by Id")
    @Delete("/:id")
    @Auth()
    @Middlewares([])
    deleteHero=(req, res) => {
      const hero = this.handleFindOne(req, res);
      this.handleDelete(req, res);
      return hero;
    }
  }
...
```

Now we are going to receive the data of the deleted record.

#### Response
```json
{
  "message": "Ok",
  "data": {
    "id": 3,
    "name": "Robin",
    "role": "sidekick",
    "power": 80,
    "createdAt": "2021-10-27T21:29:14.278Z",
    "updatedAt": "2021-10-27T21:29:14.278Z"
  }
}
```