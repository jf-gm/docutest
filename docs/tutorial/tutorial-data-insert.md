---
sidebar_position: 4
---

# Insert data

Let's make sure the project is running, if is not, run the command:

```shell
npm run watch
```

## Using a http client

For this test, you can use a http client, [Postman](https://www.postman.com/) is a good option.

## Request

So, let's use the example of the **Hero** model and controller that we created in the lastest sections.
The model is composed of 3 fields; _**name**_, _**role**_ and _**power**_.
Also, the controller gave us 5 routes:

| Method   | Path             |
|----------|------------------|
| GET      | /api/v1/hero     |
| GET      | /api/v1/hero/:id |
| POST     | /api/v1/hero     |
| PUT      | /api/v1/hero/:id |
| DELETE   | /api/v1/hero/:id |

To insert data, we need to use the _**POST**_ route.

| Method | Path         |
|--------|--------------|
| POST   | /api/v1/hero |

#### Body
```json
{
  "name": "Spiderman",
  "role": "hero",
  "power": "300"
}
```

#### Response
```json
{
  "message": "Created",
  "data": {
    "id": 1,
    "name": "Spiderman",
    "role": "hero",
    "power": 300,
    "createdAt": "2021-10-27T20:17:53.682Z",
    "updatedAt": "2021-10-27T20:17:53.682Z"
  }
}
```