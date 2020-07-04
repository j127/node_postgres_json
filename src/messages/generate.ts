import faker from "faker";
import _ from "lodash";

enum MessageType {
    Notification = "Notification",
}

enum NotificationType {
    Delivery = "Delivery",
    Send = "Send",
    Bounce = "Bounce",
}

function generateKebabString() {
    return faker.lorem.words().replace(/ /g, "-");
}

/**
 * Generate `quantity` messages.
 */
export function createMessages(quantity: number): object[] {
    return _.times(quantity, createMessage);
}

/**
 * Generate a random message that can be stored in Postgres as JSONB.
 */
export function createMessage(): object {
    const msg = `
        {
            "message": {
                "Type": "${_.sample(MessageType)}",
                "MessageId": "${faker.random.uuid()}",
                "TopicArn": "${generateKebabString()}",
                "Message": {
                    "notificationType": "${_.sample(NotificationType)}",
                    "mail": {
                        "timestamp": "${faker.date.past()}",
                        "source": "${faker.internet.email()}",
                        "sourceArn": "${generateKebabString()}",
                        "sourceIp": "${faker.internet.ip()}",
                        "sendingAccountId": "${faker.random.uuid()}",
                        "messageId": "${faker.random.uuid()}",
                        "destination": ["${faker.internet.email()}"],
                        "headersTruncated": false,
                        "headers": [
                            {
                                "name": "Received",
                                "value": "${faker.lorem.sentence()}"
                            },
                            {
                                "name": "Date",
                                "value": "${faker.date.past()}"
                            },
                            {
                                "name": "From",
                                "value": "${faker.name.firstName()} <${faker.internet.email()}>"
                            },
                            {
                                "name": "Reply-To",
                                "value": "${faker.name.firstName()} <${faker.internet.email()}>"
                            },
                            { "name": "To", "value": "${faker.name.firstName()} <${faker.internet.email()}>" },
                            {
                                "name": "Message-ID",
                                "value": "<${faker.internet.email()}>"
                            },
                            {
                                "name": "Subject",
                                "value": "${faker.lorem.words()}"
                            },
                            { "name": "Mime-Version", "value": "1.0" },
                            {
                                "name": "Content-Type",
                                "value": "multipart/alternative; charset=UTF-8"
                            },
                            { "name": "Content-Transfer-Encoding", "value": "7bit" },
                            {
                                "name": "List-Unsubscribe",
                                "value": "<${faker.internet.url()}>"
                            },
                            { "name": "X-Auto-Response-Suppress", "value": "All" },
                            { "name": "Auto-Submitted", "value": "auto-generated" }
                        ],
                        "commonHeaders": {
                            "from": ["${faker.name.firstName()} <${faker.internet.email()}>"],
                            "replyTo": [
                                "${faker.name.firstName()} <${faker.internet.email()}>"
                            ],
                            "date": "${faker.date.past()}",
                            "to": ["${faker.internet.email()}"],
                            "messageId": "<${faker.internet.email()}>",
                            "subject": "${faker.lorem.words()}"
                        }
                    },
                    "delivery": {
                        "timestamp": "${faker.date.past()}",
                        "processingTimeMillis": ${faker.random.number()},
                        "recipients": ["${faker.internet.email()}"],
                        "smtpResponse": "${faker.lorem.words()}",
                        "remoteMtaIp": "${faker.internet.ip()}",
                        "reportingMTA": "${faker.lorem.words()}"
                    }
                },
                "Timestamp": "${faker.date.past()}",
                "SignatureVersion": "1",
                "Signature": "${faker.lorem.words().replace(/ /g, "")}",
                "SigningCertURL": "${faker.internet.url()}.pem",
                "UnsubscribeURL": "${faker.internet.url()}"
            },
            "level": "info",
            "service": "${faker.lorem.words().replace(/ /g, "-")}"
        }
    `;
    return JSON.parse(msg);
}
