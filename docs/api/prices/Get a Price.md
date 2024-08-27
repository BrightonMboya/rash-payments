---
sidebar_position: 4
---

### Get a Price

This endpoint allows you to retrieve detailed information about a specific price entity. This is useful for displaying pricing information to customers, verifying pricing details, or integrating pricing data into your billing system.

#### Endpoint

```http
GET /api/v1/prices/{price_id}
```

#### Path Parameters

- `price_id` (string, required): The unique identifier of the price entity you want to retrieve.

#### Response

The response is a JSON object containing the details of the requested price entity, with the following fields:

- `id` (string): The unique identifier of the price entity.
- `product_id` (string): The unique identifier of the product associated with this price.
- `unit_price` (object):
  - `amount` (string): The amount to be charged for the product.
  - `currency` (string): The currency code in which the price will be charged, following ISO 4217 standards.
- `name` (string): The descriptive name of the price shown to customers at checkout.
- `description` (string or null): A short description about the price for internal reference.
- `type` (string): The type of pricing applied to the product. Possible values include `one_time`, `recurring`, or `usage`.
- `custom_data` (object or null): A structured key-value data that contains additional information about the price.
- `billing_cycle` (object or null): Details on how often the price should be charged for recurring payments:
  - `frequency` (integer): How often the price should be charged based on the interval.
  - `interval` (string): The unit of time for the billing cycle, such as `daily`, `weekly`, `monthly`, or `yearly`.
- `status` (string): The current status of the price entity. Possible values include `active`, `inactive`, or `archived`.
- `created_at` (string): The date and time when the price entity was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the price entity was last updated, in ISO 8601 format.

#### Example Request

```http
GET /api/v1/prices/price_01h2vjf02g163xfj1rh1tkfz89
```

#### Example Response

```json
{
    "id": "price_01h2vjf02g163xfj1rh1tkfz89",
    "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "unit_price": {
        "amount": "499",
        "currency": "USD"
    },
    "name": "Basic Monthly Subscription",
    "description": "Monthly subscription for the basic tier of services.",
    "type": "recurring",
    "custom_data": null,
    "billing_cycle": {
        "frequency": 1,
        "interval": "monthly"
    },
    "status": "active",
    "created_at": "2024-08-26T10:15:30.302Z",
    "updated_at": "2024-08-26T10:15:30.302Z"
}
```

#### Error Responses

- `400 Bad Request`: Returned if the `price_id` is not valid.
- `404 Not Found`: Returned if no price entity with the specified `price_id` exists.

#### Use Cases

- **Customer Billing:** Retrieve and display detailed pricing information to customers during the checkout process.
- **Audit and Compliance:** Verify the details of a price entity for auditing and compliance purposes.
- **System Integration:** Integrate the pricing information into your billing or accounting systems, ensuring that accurate and up-to-date pricing is used.

This endpoint is essential for obtaining detailed and specific information about a price entity, allowing for accurate display and integration of pricing data within your systems.