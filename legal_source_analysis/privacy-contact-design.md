# Privacy, consent and contact data design

## Data minimisation

The public contact flow will collect only the details needed to respond to a message: name, email, optional company, message, source page and the timestamp of explicit Privacy & Cookies acknowledgement. It will not collect payment details, passwords, precise location, behavioural profiles or non-essential analytics data.

## Consent model

The banner stores an explicit preference locally in the browser. Essential local storage remains available to remember a consent choice and preserve basic site functionality. No advertising or analytics cookies are enabled by this site version. Visitors can open the preferences panel again to review or change the stored choice.

## Backend flow

The `/api/contact` endpoint accepts same-origin JSON submissions, validates bounded fields server-side, records a message in `contact_messages`, and returns only a neutral confirmation. The client must require acknowledgement of the Privacy & Cookies Notice before sending. No contact data is included in logs or client-side persistence.

## Legal-page status

The Privacy & Cookies Notice and Terms & Conditions are working drafts for maybei. They name the currently known contact channel and data practices but leave the legal entity, registered address and governing law subject to legal review before relying on them.

## Verification record

The `contact_messages` table was verified with eight expected columns, including a server-generated privacy acknowledgement timestamp. Contact input has server-side validation and tests for valid input, missing consent, successful persistence handling and neutral error handling. The browser QA covered Privacy & Cookies, Terms, Contact, Home, Talio, Majlis and Careers at desktop and mobile widths. Smart Boots was intentionally excluded from every page-change and visual-QA step.
