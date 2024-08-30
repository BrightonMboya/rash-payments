---
sidebar_position: 1
---

The `Address` object represents the billing address of a customer. It contains key details needed for accurate billing, shipping, and other customer-related operations. This object is associated with a customer, helping to identify their location for various transactional purposes. You can create as many addresses against a customer, this is useful for billing companies with multiple locations.

#### Fields

- `id` (string): A unique id of the address, prefixed with `add_`.

- `customer_id` (string): The unique customer id in which this address is associated with, prefixed with `cus_`.

- `description` (string or null): A descriptive description of the address.

- `region` (string): State, county, or region of this address.

- `city` (string): The city of the address. This field is required.

- `country` (string): The country of the address, represented as a two-letter ISO 3166-1 alpha-2 country code (e.g., `US` for the United States, `GB` for the United Kingdom). This field is required.

- `custom_data` (object or null): A structured key-value data object that allows for additional, custom information to be stored with the address. This field can be null if not used.

- `created_at` (string): The date and time when the record was created, in ISO 8601 format. Sets automatically by Jani

- `updated_at` (string): The date and time when the customer record was last updated, in ISO 8601 format. Sets automatically by Jani

#### Example Address Object

```json
{
  "id": "add_01h1x0z5y4c1v2f5k6p3j9n8m7",
  "customer_id": "cus_01h1w8r7s2v4l5m6n7p8j9k0q2",
  "description": "Home Address",
  "region": "Kigali",
  "city": "Kigali",
  "country": "RW",
  "custom_data": {
    "landmark": "Office at Kigali Heights"
  },
  "created_at": "2024-08-01T10:15:30.000Z",
  "updated_at": "2024-08-29T14:45:22.000Z"
}
```

#### Use Cases

- **Billing Information:** Use the address object to store and manage billing addresses for customers.
- **Shipping Details:** Capture detailed shipping information when products are being physically delivered.
- **Geographical Segmentation:** Utilize the address information for customer segmentation based on location.
- **Custom Requirements:** Store additional data such as delivery instructions or special notes using the `custom_data` field.

The `Address` object provides a structured way to capture and manage location-specific information, ensuring accurate and efficient billing and shipping processes.
