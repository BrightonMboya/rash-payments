---
sidebar_position: 2
---

This endpoint allows you to retrieve a list of all businesses associated with a specific customer. This is useful for managing and viewing all the businesses tied to a particular customer account.

#### Endpoint

```
GET https://api/v1/customers/{customer_id}/businesses
```

#### Path Parameters

- `customer_id` (string): The unique identifier of the customer whose associated businesses you want to list. This ID is typically prefixed with `cus_`.

#### Query Parameters

- `status` (string, optional): Filter businesses by status. Possible values include `active`, `archived`. If not provided, all businesses regardless of status will be returned.
- `limit` (integer, optional): The number of business records to return in the response. Defaults to 10 if not specified.


#### Response

The response will be a JSON object containing an array of businesses associated with the specified customer. Each business in the list will include its details as defined in the `Business` object.

#### Example Response

```json
{
  "data": [
    {
      "id": "biz_01h1w8r7s2v4l5m6n7p8j9k0q1",
      "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
      "name": "Tech Innovations LLC",
      "phone": "+1-555-123-4567",
      "company_number": "987654321",
      "tax_identifier": "US987654321",
      "status": "active",
      "contacts": [
        {
          "name": "Alice Johnson",
          "email": "alice.johnson@techinnovations.com"
        }
      ],
      "created_at": "2023-01-20T10:15:30.000Z",
      "updated_at": "2024-08-01T14:00:00.000Z",
      "custom_data": {
        "industry": "Technology",
        "employee_count": 150
      }
    },
    {
      "id": "biz_01h1w8r7s2v4l5m6n7p8j9k0q2",
      "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
      "name": "Creative Solutions Inc.",
      "phone": "+1-555-987-6543",
      "company_number": "123456789",
      "tax_identifier": "US123456789",
      "status": "archived",
      "contacts": [
        {
          "name": "Bob Lee",
          "email": "bob.lee@creativesolutions.com"
        }
      ],
      "created_at": "2022-06-10T09:30:00.000Z",
      "updated_at": "2023-12-15T13:00:00.000Z",
      "custom_data": {
        "industry": "Marketing",
        "employee_count": 30
      }
    }
  ],
}
```

#### Fields

- `data` (array of objects): A list of businesses associated with the customer.
  - Each object in the array contains:
    - `id` (string): A unique identifier for the business, prefixed with `biz_`.
    - `customer_id` (string): The unique identifier of the customer to whom this business belongs.
    - `name` (string): The official name of the business.
    - `phone` (string or null): The contact phone number of the business.
    - `company_number` (string or null): Company number for this business.
    - `tax_identifier` (string or null): Tax or VAT number for this business.
    - `status` (string): The status of the business, either `active` or `archived`.
    - `contacts` (array of objects): List of contacts related to the business.
      - `name` (string): Full names of the contact.
      - `email` (string): The email address of the contact.
    - `created_at` (string): The date and time when the business record was created, in ISO 8601 format.
    - `updated_at` (string): The date and time when the business record was last updated, in ISO 8601 format.
    - `custom_data` (object or null): Additional custom information related to the business.

#### Usage

This endpoint is useful for retrieving a comprehensive list of all businesses linked to a particular customer. It supports filtering by status and pagination, allowing for flexible and efficient management of business records. This is essential for viewing, auditing, and managing all business entities under a specific customer account.
