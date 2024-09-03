---
sidebar_position: 5
---


This endpoint allows you to modify the details of an existing business entity associated with a specific customer. This endpoint is useful when you need to update information such as the business name, contact details, tax identifiers, or custom data.

#### Endpoint

```
PATCH /v1/customers/{customer_id}/businesses/{business_id}
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer to whom the business belongs. This ID is typically prefixed with `cus_`.
- `business_id` (string): The unique identifier of the business you want to update. This ID is typically prefixed with `biz_`.

#### Request Body

The request body should be a JSON object containing the fields you want to update. All fields are optional, so you can update one or multiple fields as needed.

- `name` (string, optional): The official name of the business.
- `phone` (string or null, optional): The contact phone number of the business.
- `company_number` (string or null, optional): The company registration number.
- `tax_identifier` (string or null, optional): The tax or VAT number.
- `status` (string, optional): The status of the business. Possible values include:
  - `active`: The business is active and operational.
  - `archived`: The business is archived and no longer in use.
- `contacts` (array[object], optional): An array of contact objects, where each object contains:
  - `name` (string): Full name of the contact.
  - `email` (string): Email address of the contact.
- `custom_data` (object or null, optional): A structured key-value data object that allows for additional custom information to be stored with the business.

#### Example Request

```http
PATCH /v1/customers/cus_01h1w8r7s2v4l5m6n7p8j9k0q2/businesses/biz_01h1x7y8z9a0b1c2d3e4f5g6h7 HTTP/1.1
Host: api.jani.com
Authorization: Bearer {your_api_key}
Content-Type: application/json

{
  "name": "Global Tech Innovations",
  "phone": "+1-800-555-5678",
  "tax_identifier": "US987654321",
  "contacts": [
    {
      "name": "John Doe",
      "email": "john.doe@globaltechinnovations.com"
    }
  ],
  "custom_data": {
    "industry": "Tech Innovations",
    "employee_count": 250
  }
}
```

#### Example Response

A successful response will return the updated business object.

```json
{
  "id": "biz_01h1x7y8z9a0b1c2d3e4f5g6h7",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "name": "Global Tech Innovations",
  "phone": "+1-800-555-5678",
  "company_number": "567890123",
  "tax_identifier": "US987654321",
  "status": "active",
  "contacts": [
    {
      "name": "John Doe",
      "email": "john.doe@globaltechinnovations.com"
    }
  ],
  "created_at": "2024-09-03T12:00:00.000Z",
  "updated_at": "2024-09-04T10:15:30.000Z",
  "custom_data": {
    "industry": "Tech Innovations",
    "employee_count": 250
  }
}
```

#### Fields

- `id` (string): The unique identifier of the business.
- `customer_id` (string): The unique identifier of the customer associated with this business.
- `name` (string): The official name of the business.
- `phone` (string or null): The contact phone number of the business.
- `company_number` (string or null): The company registration number.
- `tax_identifier` (string or null): The tax or VAT number.
- `status` (string): The status of the business, either `active` or `archived`.
- `contacts` (array of objects): A list of contacts related to the business.
  - `name` (string): The full name of the contact.
  - `email` (string): The email address of the contact.
- `created_at` (string): The date and time when the business record was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the business record was last updated, in ISO 8601 format.
- `custom_data` (object or null): Additional custom information related to the business.

#### Usage

Use this endpoint when you need to update information related to a specific business associated with a customer. This could include changing contact details, updating tax information, or adding custom data specific to the business.