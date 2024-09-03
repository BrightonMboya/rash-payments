---
sidebar_position: 4
---

This endpoint allows you to retrieve detailed information about a specific business associated with a customer. This is useful for viewing or managing the business entity’s details, including its contacts, tax information, and custom data.

#### Endpoint

```
GET /v1/customers/{customer_id}/businesses/{business_id}
```


#### Path Parameters

- `customer_id` (string): The unique identifier of the customer to whom the business belongs. This ID is typically prefixed with `cus_`.
- `business_id` (string): The unique identifier of the business you want to retrieve. This ID is typically prefixed with `biz_`.


#### Example Response

If the business exists and is successfully retrieved, the response will include a JSON object representing the business entity.

```json
{
  "id": "biz_01h1x7y8z9a0b1c2d3e4f5g6h7",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "name": "Global Tech Solutions",
  "phone": "+1-800-555-1234",
  "company_number": "567890123",
  "tax_identifier": "US567890123",
  "status": "active",
  "contacts": [
    {
      "name": "John Doe",
      "email": "john.doe@globaltech.com"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@globaltech.com"
    }
  ],
  "created_at": "2024-09-03T12:00:00.000Z",
  "updated_at": "2024-09-03T12:00:00.000Z",
  "custom_data": {
    "industry": "Information Technology",
    "employee_count": 200
  }
}
```

#### Fields

- `id` (string): A unique identifier for the business, prefixed with `biz_`.
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

This endpoint is used to retrieve detailed information about a specific business entity associated with a customer. It’s particularly useful for reviewing business details before making updates or for simply viewing the business profile, including its contacts and other relevant information.