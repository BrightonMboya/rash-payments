---
sidebar_position: 3
---

This endpoint allows you to create a new business entity associated with a specific customer. This is useful when you need to manage multiple businesses under one customer account, such as for organizations with multiple subsidiaries or business units.

#### Endpoint

**POST** `/v1/customers/{customer_id}/businesses`

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer for whom you want to create a business. This ID is typically prefixed with `cus_`.

#### Request Body

The request body should be a JSON object containing the following fields:

- `name` (string, required): The official name of the business or organization.
- `phone` (string or null, optional): The phone number of the business. This is used for contact purposes.
- `company_number` (string or null, optional): The company registration number for this business.
- `tax_identifier` (string or null, optional): The tax or VAT number for this business.
- `status` (string, required): The status of the business entity. Possible values are:
  - `active`: The business is active and can be used in transactions.
  - `archived`: The business is archived and no longer active.
- `contacts` (array of objects, optional): A list of contacts related to this business, typically used for sending invoices. Each contact should include:
  - `name` (string, required): The full name of the contact.
  - `email` (string, required): The email address of the contact.
- `custom_data` (object or null, optional): A structured key-value data object that allows for additional custom information to be stored with the business.

#### Example Request

```json
{
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
  "custom_data": {
    "industry": "Information Technology",
    "employee_count": 200
  }
}
```

#### Response

If the business is successfully created, the response will include a JSON object representing the newly created business entity.

#### Example Response

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

This endpoint is essential for adding new business entities under a customer account, allowing for detailed management of organizations, subsidiaries, or business units. Each business can have its own contacts, identifiers, and custom data, making it easier to handle complex customer structures.