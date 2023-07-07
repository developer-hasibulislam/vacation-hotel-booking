# Important Links

- Asana Board - [Click Here](https://app.asana.com/0/1204958145346521/list)
- GoTrip Home - [Click Here](https://gotrip-next.vercel.app/home/home_4)
- GoTrip Dashboard - [Click Here](http://localhost:3000/dashboard/db-dashboard)

## API Reference

### Add New Hotel

```http
  POST /api/vendor/hotel
```

| Parameter | Type   | Description      |
| :-------- | :----- | :--------------- |
| `null`    | `null` | create new hotel |

### Get All Hotels

```http
  GET /api/vendor/hotel
```

| Parameter | Type   | Description     |
| :-------- | :----- | :-------------- |
| `null`    | `null` | show all hotels |

### Get Single Hotel

```http
  GET /api/vendor/hotel/?id=${id}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `objectID` | **Required**. Id of hotel to fetch |

### Get Single Hotel by Pagination

```http
  GET /api/vendor/hotel/?page=1
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `page`      | `number` | **Required**. Id of hotel to fetch |

### Update Hotel

```http
  PATCH /api/vendor/hotel/?=id${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `objectID` | **Required**. Id of hotel to update |

### Delete Single Hotel

```http
  DELETE /api/vendor/hotel/?id=${id}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `id`      | `objectID` | **Required**. Id of hotel to remove |

### Delete Multiple Hotel

```http
  DELETE /api/vendor/hotel
```

| Parameter | Type   | Description             |
| :-------- | :----- | :---------------------- |
| `null`    | `null` | removed selected hotels |
