---
sidebar_position: 1
---

The `Discount` object represents a discount applied to a product or a price, allowing for reduced pricing based on specific conditions. You can think of Discounts as Coupon codes that your customers can apply during checkout. Discounts can be applied as percentage reductions, fixed amounts, or other customized criteria, depending on your billing platform's needs.

#### Attributes

- `id` (string): A unique identifier for the discount entity, prefixed with `dsc_`.

- `description` (string or null): A brief explanation of the discount, typically used for internal reference or to provide additional context.

- `code` (string or null):
  Unique code that customers can use to apply this discount at checkout.

- `type` (string): The type of discount being applied. Possible values include:

  - `percentage`: A percentage reduction from the total price.
  - `fixed_amount`: A fixed amount to be subtracted from the total price.
  - `flat_per_seat`: Discounts a transaction by a flat amount per unit.

- `status` (string): The status of the discount that affects if the discount will be displayed on checkout. Possible values include.
  - `active`: The discount is active and can be used in checkout.
  - `archived`: Discount is archived and can't be used in checkout.
  - `expired`: Discount has expired and can't be used in checkout. This is set automatically by Jani.
  - `used`: Discount has already reached the maximum amount of redemptions. It is set automatically by Jani according to `usage_limit`.

- `usage_limit` (integer or null): The maximum amount of times the discount can be used. Leave this value to null if the limit is unlimited.

- `currency_code` (string or null): Supported three-letter ISO 4217 currency code. Required where discount type is `flat` or `flat_per_seat`.

- `enabled_for_checkout` (boolean): Whether this discount can be applied during checkout or not.

- `times_used` (integer): How many times this discount has been applied during checkout. It is set automatically by Jani after the order is completed.

- `amount` (string): Amount to discount by. For percentage discounts, must be an amount between 0.01 and 100. For flat and flat_per_seat discounts, amount in the lowest denomination for a currency

- `custom_data` (object or null): Your own structured key-value data.

- `created_at` (string): The date and time when the discount was created, in ISO 8601 format.

- `updated_at` (string): The date and time when the discount was last updated, in ISO 8601 format.


#### Use Cases

- **Seasonal Promotions:** Apply percentage discounts during sales events, like a summer sale, to encourage purchases.
- **Loyalty Rewards:** Offer fixed amount discounts to loyal customers who have made multiple purchases.
- **Custom Campaigns:** Create custom discounts based on unique business rules, such as bulk order discounts or discounts for first-time customers.

The `Discount` object provides flexibility in pricing strategies, allowing businesses to implement a variety of discount models to drive sales and reward customers.
