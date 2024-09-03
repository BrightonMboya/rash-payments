---
sidebar_position: 1
---

The `Business` entity holds the information about the customer business. They're a sub entity of the customers entity. It contains all the information that you need when working with enteprise rather than an individual.

#### Fields

- `id` (string): A unique identifier for the business. This ID is typically prefixed with `biz_`.

- `customer_id` (string): A unique customer identificatin associated with this business, prefixed with `cus_`.

- `name` (string): The official name of the business or organization. This field is required.

- `phone` (string or null): The phone number of the business. This is optional and used for contact purposes.

- `company_number` (string or null): Company number for this business.

- `tax_identifier` (string or null): Tax or VAT Number for this business.

- `status` (string): Whether this entity can be used in Jani. Possible values include `active` or `archive`.

- `contacts` (array[object]): List of contacts related to this business, typically used for sending invoices.

  - `name` (string): Full names of this contact
  - `email` (string): The email address of this contact.

- `created_at` (string): The date and time when the business record was created, in ISO 8601 format.

- `updated_at` (string): The date and time when the business record was last updated, in ISO 8601 format.

- `custom_data` (object or null): A structured key-value data object that allows for additional custom information to be stored with the business. This field can be null if not used.

#### Example

Here is an example of a business object:

```json
{
  "id": "biz_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "customer_id": "cus_01h1v8r7s2v4l5m6n7p8j9k0q2",
  "name": "Innovative Solutions Ltd.",
  "phone": "+1-555-987-6543",
  "company_number": "123456789",
  "tax_identifier": "US123456789",
  "status": "active",
  "contacts": [
    {
      "name": "Jane Doe",
      "email": "jane.doe@innovativesolutions.com"
    },
    {
      "name": "John Smith",
      "email": "john.smith@innovativesolutions.com"
    }
  ],
  "created_at": "2024-01-15T09:00:00.000Z",
  "updated_at": "2024-08-29T14:00:00.000Z",
  "custom_data": {
    "industry": "Software",
    "number_of_employees": 50
  }
}
```

#### Usage

The `Business` object is used to represent the company or organization in various contexts within the billing platform. It provides essential information for customer interactions, invoicing, and reporting. Proper management of business information helps in ensuring accurate communication and effective operations.
