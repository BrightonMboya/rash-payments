---
sidebar_position: 3
---


This endpoint allows you to create a new customer record. This endpoint requires you to provide essential information about the customer, which will be used for communication, billing, and account management.

#### Endpoint

```http
POST /api/v1/customers
```

#### Request Body

The request body should be a JSON object containing the following attributes. Only the fields provided in the request will be used; fields not included will be set to default values or left null.

#### Required Fields

- `name` (string): The full name of the customer. This can be either an individual's name or the name of an organization.
- `email` (string): The email address of the customer. This is used for communication and sending receipts or notifications.

#### Optional Fields

- `phone` (string or null): The phone number of the customer. This is optional and used for contact purposes.
- `address` (object or null): The billing address of the customer. This object can be null if the address is not provided.
  - `city` (string): The city of the address.
  - `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code.
- `payment_method` (string or null): The payment method associated with the customer, such as a credit card, mobile payment, or bank account. This is optional and can be null if not set.
- `status` (string): The status of the customer's account. Possible values include:
  - `active`: The customer's account is active and in good standing.
  - `inactive`: The customer's account is inactive and may require reactivation.
  - `suspended`: The customer's account is suspended due to issues such as payment problems.
- `custom_data` (object or null): A structured key-value data that contains additional custom information about the customer.

#### Example Request

```json
{
  "name": "Brighton Mboya",
  "email": "brighton@jani.com",
  "phone": "+2557881234567",
  "address": {
    "city": "Dar es Salaam",
    "country": "Tanzania"
  },
  "payment_method": "card_01h3vjs3b16yc3f9q8q9pfrb79",
  "status": "active",
  "custom_data": {
    "loyalty_program": "Gold"
  }
}
```

#### Response

If the customer is successfully created, the API will return a JSON object representing the newly created customer.

#### Example Response

```json
{
  "id": "cus_01h3vjs3b16yc3f9q8q9pfrb80",
  "name": "Brighton Mboya",
  "email": "brighton@jani.com",
  "phone": "+2557881234567",
  "address": {
    "city": "Dar es Salaam",
    "country": "Tanzania"
  },
  "payment_method": "card_01h3vjs3b16yc3f9q8q9pfrb79",
  "created_at": "2024-09-01T15:00:00.000Z",
  "updated_at": "2024-09-01T15:00:00.000Z",
  "status": "active",
  "custom_data": {
    "loyalty_program": "Gold"
  }
}
```

#### Error Responses

- `400 Bad Request`: Returned if the request body is missing required fields or contains invalid data.
- `409 Conflict`: Returned if a customer with the same email already exists (if uniqueness is enforced on the email field).
