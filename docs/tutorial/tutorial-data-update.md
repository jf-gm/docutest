---
sidebar_position: 7
---

# Update data

To update data, we need to use the _**PUT**_ route.

| Method | Path             |
|--------|------------------|
| PUT    | /api/v1/hero/:id |

#### Body
```json
{
  "name": "Nightwing",
  "role": "hero",
  "power": "100"
}
```

#### Response

We are going to receive the data of the record before it is updated.

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