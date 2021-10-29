---
sidebar_position: 5
---

# Get data

To get data, we need to use the _**GET**_ route.

### Get multiple records

| Method | Path         |
|--------|--------------|
| GET    | /api/v1/hero |

#### Response

```json
{
  "message": "Ok",
  "count": 3,
  "limit": 99,
  "offset": 0,
  "data": [
    {
      "id": 1,
      "name": "Spiderman",
      "role": "hero",
      "power": 300,
      "createdAt": "2021-10-27T20:17:53.682Z",
      "updatedAt": "2021-10-27T20:17:53.682Z"
    },
    {
      "id": 2,
      "name": "Batman",
      "role": "hero",
      "power": 100,
      "createdAt": "2021-10-27T21:29:14.278Z",
      "updatedAt": "2021-10-27T21:29:14.278Z"
    },
    {
        "id": 3,
      "name": "Robin",
      "role": "sidekick",
      "power": 80,
      "createdAt": "2021-10-27T21:29:14.278Z",
      "updatedAt": "2021-10-27T21:29:14.278Z"
    }
  ]
}
```

### Get one record

| Method | Path             |
|--------|------------------|
| GET    | /api/v1/hero/:id |

#### Response

```json
{
    "message": "Ok",
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