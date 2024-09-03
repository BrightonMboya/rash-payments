---
sidebar_position: 5
---



**Endpoint:** `PATCH /transactions/{id}`

**Description:**  
Updates the details of a specific transaction. This endpoint allows you to modify various attributes of a transaction, including its status, billing details, and custom data.

**Path Parameters:**

- **id** (string, required): The unique identifier of the transaction you want to update. This ID is prefixed with `txn_`.

**Request Body:**

The request body should be a JSON object containing the fields you want to update. Only the fields provided will be updated. Fields not included in the request will remain unchanged.

**Fields that can be updated include:**

- **status** (string, optional): The new status for the transaction (e.g., `completed`, `pending`, `canceled`).
- **currency_code** (string, optional): The ISO 4217 currency code to update the transaction's currency (e.g., `USD`).
- **collection_mode** (string, optional): Update the payment collection mode (`automatic` or `manual`).
- **billing_details** (object, optional): Update billing information. This object can include:
  - **billing_address** (string): The new billing address.
  - **company_name** (string): The updated company name.
  - **vat_number** (string): The new VAT number.
- **custom_data** (object, optional): Update custom data associated with the transaction.
- **purchase_order_number** (string, optional): Update the purchase order number.
- **additional_information** (string, optional): Update any additional notes or details about the transaction.

**Request Example:**

```json
{
  "status": "completed",
  "currency_code": "USD",
  "billing_details": {
    "billing_address": "456 Elm St, Springfield, IL, USA",
    "company_name": "ACME Corp",
    "vat_number": "US987654321"
  },
  "custom_data": {
    "order_reference": "ORDER-002",
    "notes": "Customer updated billing address"
  },
  "purchase_order_number": "PO-654321",
  "additional_information": "Updated additional information about the transaction."
}
```

**Response:**

Upon successful update, the response will contain the updated transaction details.

**Response Example:**

```json
{
  "id": "txn_7890123456",
  "status": "completed",
  "currency_code": "USD",
  "collection_mode": "manual",
  "billing_details": {
    "billing_address": "456 Elm St, Springfield, IL, USA",
    "company_name": "ACME Corp",
    "vat_number": "US987654321"
  },
  "custom_data": {
    "order_reference": "ORDER-002",
    "notes": "Customer updated billing address"
  },
  "purchase_order_number": "PO-654321",
  "additional_information": "Updated additional information about the transaction.",
  "created_at": "2024-08-01T12:00:00Z",
  "updated_at": "2024-09-03T10:00:00Z",
  "billed_at": "2024-08-01T12:00:00Z"
}
```

**Response Fields:**

- **id** (string): The unique identifier for the transaction, prefixed with `txn_`.
- **status** (string): The updated status of the transaction.
- **currency_code** (string): The ISO 4217 currency code used for the transaction.
- **collection_mode** (string): The updated payment collection mode.
- **billing_details** (object): Updated billing information, including address, company name, and VAT number.
- **custom_data** (object): Updated custom data associated with the transaction.
- **purchase_order_number** (string): The updated purchase order number.
- **additional_information** (string): Updated additional notes or details about the transaction.
- **created_at** (string): The timestamp of when the transaction was originally created.
- **updated_at** (string): The timestamp of when the transaction was last updated.
- **billed_at** (string): The timestamp of when the transaction was marked as billed.

**Notes:**

- Only include fields in the request body that you want to update. Fields not included will not be modified.
- Ensure the `id` parameter in the request path is valid and exists in the system.
- Updates to `billing_details`, `custom_data`, and `additional_information` should follow the expected format as described in the request body.