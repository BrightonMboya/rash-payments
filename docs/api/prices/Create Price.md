---
sidebar_position: 3
---

### Create Price

This endpoint allows you to define a new price for an existing product. This is essential for setting up the cost that customers will be charged, whether it's a one-time fee, a recurring subscription, or a usage-based charge. You can also specify the billing cycle and additional custom data for more complex pricing structures.

#### Endpoint

```http
POST /api/v1/prices
```

#### Request Body

The request body must be a JSON object containing the following fields:

- `product_id` (string, required): The unique identifier of the product for which you are creating the price.
- `unit_price` (object, required):
  - `amount` (string, required): The amount to be charged for the product.
  - `currency` (string, required): The currency code in which the price will be charged, following ISO 4217 standards (e.g., `KES`, `RWF`).
- `name` (string, required): A descriptive name of the price shown to customers at checkout.
- `description` (string or null, optional): A short description about the price for internal reference.
- `type` (string, required): The type of pricing applied to the product. Possible values include:
  - `one_time`: A one-time payment for the product.
  - `recurring`: A recurring payment, typically associated with subscription-based products.
  - `usage`: A usage-based payment, where the amount varies based on usage metrics.
- `custom_data` (object or null, optional): A structured key-value data that contains additional information about the price.
- `billing_cycle` (object or null, optional): The billing cycle details for recurring payments. Set this to `null` if the price is non-recurring.
  - `frequency` (integer, required if `billing_cycle` is provided): How often the price should be charged based on the interval.
  - `interval` (string, required if `billing_cycle` is provided): The unit of time for the billing cycle. Possible values include `daily`, `weekly`, `monthly`, or `yearly`.
- `status` (string, optional): The current status of the price entity. Possible values include `active`, `inactive`, or `archived`. Defaults to `active` if not provided.

#### Example Request

```json
{
    "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "unit_price": {
        "amount": "499",
        "currency": "KES"
    },
    "name": "Basic Monthly Subscription",
    "description": "Monthly subscription for the basic tier of services.",
    "type": "recurring",
    "billing_cycle": {
        "frequency": 1,
        "interval": "monthly"
    },
    "status": "active"
}
```

#### Response

On successful creation, the API will return the newly created price entity as a JSON object.

- `id` (string): A unique identifier for the price entity.
- `product_id` (string): The unique identifier of the product associated with this price.
- `unit_price` (object):
  - `amount` (string): The amount to be charged for the product.
  - `currency` (string): The currency code in which the price will be charged.
- `name` (string): The descriptive name of the price shown to customers at checkout.
- `description` (string or null): The short description about the price for internal reference.
- `type` (string): The type of pricing applied to the product.
- `custom_data` (object or null): The structured key-value data containing additional information about the price.
- `billing_cycle` (object or null): The billing cycle details for recurring payments.
  - `frequency` (integer): How often the price should be charged based on the interval.
  - `interval` (string): The unit of time for the billing cycle.
- `status` (string): The current status of the price entity.
- `created_at` (string): The date and time when the price entity was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the price entity was last updated, in ISO 8601 format.

#### Example Response

```json
{
    "id": "price_01h2vjf02g163xfj1rh1tkfz89",
    "product_id": "pro_01h1vjes1y163xfj1rh1tkfb65",
    "unit_price": {
        "amount": "499",
        "currency": "KES"
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

- `400 Bad Request`: Returned if any required fields are missing or if the provided data is invalid.
- `404 Not Found`: Returned if the specified `product_id` does not exist.
- `409 Conflict`: Returned if a price with the same `name` already exists for the specified product.

#### Use Cases

- **Product Launch:** Define the price for a new product you are launching, ensuring that customers are charged the correct amount.
- **Subscription Services:** Create recurring prices for subscription-based services, specifying the frequency and interval for billing.
- **Discounts and Promotions:** Set up special pricing for limited-time offers or promotions by creating a new price entity and managing its status.

This endpoint is crucial for establishing and managing the pricing strategies for your products, allowing you to create flexible and dynamic pricing structures that meet your business needs.