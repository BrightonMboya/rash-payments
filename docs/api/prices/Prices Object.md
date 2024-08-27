---
sidebar_position: 1
---

### Price Entity

The `Price` entity represents the pricing details associated with a product within your billing platform. Each product can have one or more price entities, depending on the complexity of your pricing structure. This entity is essential for defining how much a customer will be charged for a product, whether it's a one-time purchase, a subscription, or a usage-based fee.

#### Attributes

The `Price` entity contains the following attributes:

- `id` (string): A unique identifier for the price entity.

- `product_id` (string): The unique identifier of the product associated with this price.

- `unit_price` (object):
This is the base price in which your product will be charged on. It contains the amount and the currency.

  - `amount` string:
  Amount that needs to be charged

  - `currency` string:
  The currency code in which the price will charged on. We support a three later ISO 4217 currency codes.

- `name` (string): A descriptive name of the price shown to customers on checkout.

- `description` (string or null): A short description about the price. This won't be shown to customers, it can be used to add additional info about the price for future reference.

- `type` (string): The type of pricing applied to the product. Possible values include:
  - `one_time`: A one-time payment for the product.
  - `recurring`: A recurring payment, typically associated with subscription-based products.
  - `usage`: A usage-based payment, where the amount varies based on usage metrics.

- `custom_data` (object or null): A structured key-value data that contains additional information about the price.

- `billing_cycle` (object or null): How often should this price be charged to customers. Set this to null if the price is non-recurring (one time payment).
  - `frequency` integer
   How often should this price be charged based on the interval below.
  - `interval` string
  Unit of time, possible values include
    - `daily`
    - `weekly`
    - `monthly`
    - `yearly`

- `status` (string): The current status of the price entity. Possible values include `active`, `inactive`, or `archived`.
- `created_at` (string): The date and time when the price entity was created, in ISO 8601 format.
- `updated_at` (string): The date and time when the price entity was last updated, in ISO 8601 format.


#### Key Concepts

- **Pricing Flexibility:** The `Price` entity allows you to define various pricing models, from simple one-time payments to complex subscription-based models with customizable billing intervals.
- **Currency Support:** Prices can be defined in different currencies, making it easier to manage international pricing strategies.
- **Status Management:** The status attribute allows you to control the availability of a particular price, enabling you to manage active, inactive, or archived pricing options.
- **Recurring Payments:** When the price type is `recurring`, the `interval` and `billing_cycles` attributes provide control over how frequently the customer is charged and for how long the charges continue.

#### Use Cases

- **Subscription Services:** Use the `Price` entity to define monthly or yearly subscription fees for your products.
- **International Sales:** Manage prices in multiple currencies to cater to customers across different regions.
- **Promotions and Discounts:** Temporarily create a `Price` entity with a lower amount and set it to `active` for promotional periods, switching back to the standard price afterward.

The `Price` entity is a crucial part of your billing platform, enabling flexible and dynamic pricing strategies to meet the diverse needs of your customers.