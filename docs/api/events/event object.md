---
sidebar_position: 1
---


The event object represents significant occurrences or actions within your billing system. These events can be triggered by various actions, such as API requests, dashboard interactions, customer actions, or automated system processes like subscription renewals.

When something noteworthy happens in the system, an event entity is created, detailing what occurred. Jani generates events for specific **event types**, which can be viewed using the list event types operation. These events provide key information about the event, such as the type, the time it occurred, and the entities involved.

### Key Details of the Event Object:

1. **Event Type**: Events are categorized based on the type of action that occurred. Each event has an `event_type` attribute that indicates the kind of event (e.g., `subscription.resumed`, `transaction.created`). Multiple related events can be created from a single action.

2. **Timestamp**: The `occurred_at` attribute provides the exact time when the event happened, recorded in the RFC 3339 datetime format.

3. **Data**: The `data` attribute contains the new or modified entity associated with the event, providing details about the changes triggered by the action.

4. **Notifications**: Events are closely tied to notifications. You can set up notification destinations to be alerted when specific events occur. For example, you might want notifications for subscription renewals or transaction creations.

### Key Attributes

- **event_id**: Unique identifier for the event (prefixed with `evt_`).
- **event_type**: Specifies the type of event in the format `entity.event_type` (e.g., `subscription.resumed`, `transaction.created`).
- **occurred_at**: The date and time when the event occurred, in RFC 3339 format.
- **data**: Contains the new or modified entity as a result of the event.

Events provide a clear, structured way to track and respond to important activities within your system, ensuring you stay informed about subscription changes, transactions, and more.