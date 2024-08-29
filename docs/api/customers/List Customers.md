---
sidebar_position: 2
---

This endpoint allows you to retrieve a list of customer records. This is useful for managing customer data, analyzing customer interactions, and integrating with other systems.

#### Endpoint

```http
GET /api/v1/customers
```

#### Example Response

```json

 [
    {
      "id": "cus_01h3vjs3b16yc3f9q8q9pfrb78",
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": "+255788323255",
      "address": {
        "city": "Arusha",
        "country": "Tanzania"
      },
      "payment_method": "momo_01h3vjs3b16yc3f9q8q9pfrb78",
      "created_at": "2024-08-26T12:15:00.000Z",
      "updated_at": "2024-09-01T14:30:00.000Z",
      "status": "active",
      "custom_data": {
        "loyalty_program": "gold"
      }
    },
    {
      "id": "cus_01h3vjs3b16yc3f9q8q9pfrb79",
      "name": "John Smith",
      "email": "john.smith@example.com",
      "phone": "+9876543210",
      "address": {
        "city": "Arusha",
        "country": "Tanzania"
      },
      "payment_method": null,
      "created_at": "2024-08-27T09:45:00.000Z",
      "updated_at": "2024-08-27T09:45:00.000Z",
      "status": "active",
      "custom_data": {
        "referral_source": "web"
      }
    }
  ],
```

#### Error Responses

- `400 Bad Request`: Returned if the query parameters are invalid or if required parameters are missing.
- `500 Internal Server Error`: Returned if there is an unexpected error on the server side.