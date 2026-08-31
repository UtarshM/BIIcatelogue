# BuilditIndia Brand Hub

Absolutely — below is a structured Product Requirements Document (PRD) that converts your notes into a development-ready specification, while keeping room for marketing/content flexibility.

Product Requirements Document (PRD)

BuilditIndia — Brand Catalogue / Brochure Library

Proposed URL: builditindia.com/brand-catalogue

Product/Feature: Brand Catalogue Page

Document Status: Proposed

Primary Objective: Brand discovery, catalogue access and lead generation

1. Overview

The Brand Catalogue page will serve as a centralised digital catalogue and brochure library for BuilditIndia.

The page will allow users to:

Explore BuilditIndia's associate brands.

Browse products and categories.

Discover relevant brands based on their project requirements.

View available product brochures/catalogues.

Submit project details through a lead-generation form.

Access or download brochures/catalogues after submitting their details.

Enable the BuilditIndia team to capture, qualify and follow up on catalogue-related enquiries.

Core User Flow

Brand Catalogue → Category → Associate Brand → Brochure/Catalogue → Enquiry Form → View/Download → BuilditIndia Follow-up

2. Business Objectives

The Brand Catalogue page should achieve the following objectives:

Primary Objectives

Create a single destination for BuilditIndia's associate brands and product catalogues.

Improve discoverability of partner brands and product solutions.

Generate qualified project enquiries through brochure downloads.

Capture user/project information for sales follow-up.

Create a scalable catalogue system where new brands, categories and brochures can easily be added.

Provide a premium browsing experience consistent with the BuilditIndia brand.

Secondary Objectives

Support social media and digital marketing campaigns.

Create landing-page opportunities for featured brands and products.

Track which categories, brands and brochures generate the most interest.

Build a structured catalogue-based lead database.

3. Target Users

The page should primarily serve:

Homeowners planning construction or renovation projects.

Architects and interior designers.

Contractors and builders.

Commercial project owners.

Hospitality project stakeholders.

Retail and office project stakeholders.

Users researching building materials and solutions.

Existing BuilditIndia customers looking for product information.

4. Page Structure

The Brand Catalogue page will consist of the following major sections:

Header / Hero Banner

Category Navigation

Associate Brand Listing

Brochure / Catalogue Listing

Enquiry / Lead-Gate Form

Form Success / Catalogue Access

Supporting CTA / Lead-generation elements

5. Section 1 — Header / Hero Banner

Objective

Introduce the Brand Catalogue and clearly communicate its value to users.

A dedicated BuilditIndia hero/banner image should be created for the page.

Primary Headline

Explore Brands. Discover Solutions. Build Better.

Supporting Copy

Explore BuilditIndia's trusted associate brands, product categories and brochures — all in one place.

Alternative Headline Options

Option 1 — Brand-focused

Discover the Brands Behind Better Projects

Supporting copy:

Browse our associate brands and explore product brochures, catalogues and solutions for your next project.

Option 2 — Solution-focused

Everything You Need to Build Better

Supporting copy:

Explore leading brands, discover the right solutions and download product catalogues for your project.

Content Requirements

Hero headline and supporting copy must be CMS/content configurable and should not be hard-coded.

The marketing/admin team should be able to update the messaging based on:

Current campaigns

Featured brands

Seasonal promotions

Product launches

Marketing priorities

Website campaigns

Content strategy

This allows the hero area to function as a campaign-ready promotional space.

6. Section 2 — Category Navigation

Objective

Allow users to quickly identify the product category relevant to their project.

UI Requirements

Categories should be presented as visually engaging cards containing:

Category image

Category name

Optional short description

Optional product count

Interactive hover state

Click/tap interaction

Visual Direction

The category section should use:

Modern card-based UI

Premium product/category imagery

Clean spacing

Consistent visual hierarchy

Subtle hover animations

Smooth entrance/reveal animations

Responsive layout

Mobile-friendly interactions

Example Categories

The actual category list should be configurable, but may include:

Bathroom / Sanitary Solutions

Tiles

Flooring

Kitchen

Lighting

Doors & Windows

Hardware

Paints & Finishes

Electrical

Plumbing

Building Materials

Other applicable BuilditIndia categories

Functional Requirement

Clicking a category should filter/display the associate brands applicable to that category.

User Flow

Category → Relevant Associate Brands

7. Section 3 — Associate Brand Display

Objective

Display brands associated with the selected product category.

Example

Bathroom / Sanitary Solutions

Relevant brands could include:

Hindware

Hindware Italian Collection

QUEO

Other applicable associate brands

UI Requirements

Brands should be displayed using a clean:

Logo grid

Brand cards

Consistent card dimensions

High-quality logos

Subtle hover/focus animation

Clickable interaction

Brand Card

Each brand card should support:

Brand logo

Brand name

Optional short description

Optional brand image

Associated category

Number of available catalogues, if applicable

Functional Behaviour

When a user selects a brand:

Category → Brand → Available Brochures

The system should only display brochures associated with that brand/category combination.

8. Section 4 — Brochure / Catalogue Display

Objective

Allow users to discover and access available brochures/catalogues for the selected brand.

Single Brochure Scenario

If only one brochure is available:

Display the brochure prominently.

Show brochure cover.

Show brochure name.

Show short description.

Show brand/category.

Provide View Catalogue CTA.

Provide Download CTA.

Multiple Brochure Scenario

If multiple brochures are available:

Display each brochure as an individual card.

Brochure Card Requirements

Each card should contain:

Brochure/catalogue cover image

Brochure name

Short description

Brand name

Category

Optional publication/year information

View Catalogue CTA

Download CTA

Example

Hindware Italian Collection — Bathroom Collection Catalogue

[View Catalogue] [Download]

9. Catalogue Viewer

Objective

Allow users to preview/read a catalogue without immediately leaving the website.

Recommended Behaviour

When the user selects View Catalogue after completing the enquiry gate:

Open catalogue in an in-page viewer/modal or dedicated viewer page.

Support PDF viewing.

Provide page navigation.

Provide zoom controls where supported.

Provide Download CTA.

Provide Close/Back navigation.

Important Requirement

The catalogue should not become accessible before the enquiry form is successfully submitted.

The same lead-gate logic should apply to both:

View Catalogue

Download Catalogue

10. Section 5 — Enquiry Form / Lead Gate

Objective

Capture qualified project enquiries before providing access to brochures/catalogues.

The enquiry form is a mandatory lead gate.

Recommended Heading

Looking for the Right Solution for Your Project?

Supporting Copy

Tell us a little about your project and our team will help you find the right brands, products and solutions.

Primary CTA

Get Expert Help

CTA Alternatives

Connect with a BuilditIndia Expert

Get Expert Assistance

Talk to an Expert

Get Product Assistance

Find the Right Solution

Discuss Your Project

Get a Project Recommendation

Supporting Microcopy

Share your project details and we'll help you find the right solution.

11. Form Fields

Required Fields

Field	Type	Required

Name	Text	Yes

Mobile Number	Phone	Yes

Area / Locality	Text	Yes

Project Name	Text	Yes

Project Type / Requirement	Select	Recommended

Project Type Options

Residential

Commercial

Hospitality

Office

Retail

Other

Hidden/System Fields

The system should automatically capture:

Enquiry date/time

Selected category

Selected brand

Selected brochure

Page/source URL

Lead source

Campaign/UTM information, where available

This ensures the sales team knows exactly what the user was interested in when submitting the enquiry.

12. Form Validation

The form should provide client-side and server-side validation.

Name

Required.

Should reject obviously invalid input.

Mobile Number

Required.

Validate Indian mobile-number format.

Prevent invalid/non-numeric submissions where appropriate.

Area / Locality

Required.

Text input.

Project Name

Required.

Text input.

Project Type

Recommended.

Dropdown/select field.

Error Handling

Validation errors should be:

Clearly visible.

Displayed near the relevant field.

Written in simple language.

Preserved when possible so users do not need to re-enter valid fields.

13. Lead-Gate Behaviour

The brochure access flow must work as follows:

User selects brochure

↓

Enquiry form opens

↓

User enters project details

↓

User submits form

↓

Form validation

↓

Lead is successfully recorded

↓

Success message is displayed

↓

View/Download Catalogue becomes available

Important

The direct PDF/file URL should not be exposed before successful form submission.

Where technically feasible, catalogue files should be served through a protected/download mechanism rather than exposing publicly accessible static file URLs.

14. Form Success State

After successful submission, display:

Success Message

Thank You! Your details have been received successfully. You can now access the brochure/catalogue. Our BuilditIndia team may also connect with you regarding your project requirements.

Primary CTA

Download Catalogue

Optional secondary CTA:

View Catalogue

The user should not have to submit the form again during the same catalogue-access session unless required by the business rules.

15. Lead Management

All brochure/catalogue enquiries should be recorded in BuilditIndia's lead-management system.

The current requirement is an Excel-based lead-management system.

Excel Columns

Field	Purpose

Date	Enquiry date/time

Name	Customer identification

Mobile Number	Follow-up

Area / Locality	Location

Project Name	Project identification

Project Type	Lead qualification

Selected Category	Requirement

Selected Brand	Brand interest

Selected Brochure	Brochure interest

Lead Source	Website / Social Media / Other

Campaign/UTM	Marketing attribution

Status	Lead stage

Remarks	Sales/team notes

Follow-up Date	Next action

Status Options

New

Contacted

Follow-up

Converted

Closed / Not Interested

16. Lead Data Flow

Recommended system flow:

Website Form

↓

Form/API Backend

↓

Lead Validation

↓

Lead Storage / Excel Integration

↓

Success Response

↓

Catalogue Access

The system should ensure that catalogue access is only granted after successful lead submission.

Duplicate Leads

The system should support duplicate detection based on mobile number and/or other configurable identifiers.

Duplicate handling should not unnecessarily prevent a legitimate user from accessing a requested catalogue.

17. Marketing Attribution

To understand which campaigns generate catalogue leads, the system should capture UTM parameters when available.

Recommended fields:

UTM Source

UTM Medium

UTM Campaign

UTM Content

Landing Page

Referrer

Example:

A user arriving from an Instagram campaign should ideally be identifiable as:

Source: Instagram

Medium: Social

Campaign: September Brand Catalogue Campaign

18. Page User Journey

Primary Journey

BuilditIndia Website

↓

Brand Catalogue

↓

Explore Categories

↓

Select Category

↓

View Associate Brands

↓

Select Brand

↓

View Brochures

↓

Select Brochure

↓

Enquiry Form

↓

Submit Details

↓

View / Download Brochure

↓

BuilditIndia Follow-up

19. Alternative Journey — Direct Catalogue Discovery

Where appropriate, users may also enter through campaign links.

Example:

Social Media Campaign

↓

Brand Catalogue

↓

Specific Category

↓

Specific Brand

↓

Specific Brochure

↓

Enquiry Form

↓

Catalogue Access

The system should ideally support campaign/deep links that allow marketing teams to direct users closer to a specific catalogue.

20. Animation & Interaction Requirements

The page should provide a modern, premium browsing experience without negatively affecting performance.

Recommended Animations

Category card hover animation

Brand logo fade/slide animation

Smooth category expansion

Brochure card hover effects

Modal/form transition

CTA hover interactions

Scroll-based subtle reveal animations

Smooth transitions between sections

Performance Requirement

Animations must be:

Lightweight

Smooth

Performance-friendly

Responsive

Accessible

Appropriate for mobile devices

Avoid excessive animation that could distract users or negatively impact page speed.

21. Responsive Design

The page must work across:

Desktop

Laptop

Tablet

Mobile

Desktop

Multi-column category grid.

Multi-column brand grid.

Multi-column brochure grid.

Tablet

Adaptive grid.

Touch-friendly interactions.

Mobile

Single/two-column cards depending on viewport.

Large touch targets.

Easy-to-use form.

Optimised catalogue viewer.

Sticky or easily accessible CTA where appropriate.

No core functionality should depend exclusively on hover.

22. Accessibility Requirements

The page should follow standard web accessibility best practices.

Requirements include:

Semantic HTML.

Keyboard-accessible interactive elements.

Visible focus states.

Appropriate colour contrast.

Descriptive image alt text.

Accessible form labels.

Accessible error messages.

Modal focus management.

Touch-friendly controls.

No hover-only functionality.

23. SEO Requirements

The Brand Catalogue page should be indexable and SEO-friendly where appropriate.

Recommended Metadata

Title:

BuilditIndia Brand Catalogue | Explore Brands & Product Brochures

Meta Description:

Explore BuilditIndia's associate brands, product categories and brochures. Discover the right building solutions and access product catalogues for your project.

SEO Content

The page should include relevant, crawlable content around:

Associate brands

Product categories

Building products

Product solutions

Product brochures

Catalogues

Dynamic SEO

If individual brand/category pages or URLs are created later, each should support:

Unique title

Meta description

Canonical URL

Open Graph metadata

Structured content

24. Analytics & Tracking

The following events should ideally be tracked.

Page Events

Brand Catalogue page view

Category viewed

Category selected

Brand selected

Brochure viewed

Brochure CTA clicked

Enquiry form opened

Form started

Form submitted

Form validation error

Catalogue view unlocked

Catalogue downloaded

Recommended Event Parameters

Where applicable:

Category

Brand

Brochure

Project Type

Lead Source

Campaign

Device type

This will allow BuilditIndia to identify the most popular categories, brands and catalogues.

25. Content Management Requirements

The catalogue system should be designed for easy content updates.

Admin/content managers should ideally be able to add/edit:

Categories

Category name

Category image

Description

Display order

Active/inactive status

Brands

Brand name

Brand logo

Brand description

Brand image

Associated categories

Display order

Active/inactive status

Brochures

Brochure name

Cover image

Description

Brand

Category

PDF/file

Publication/year

Display order

Active/inactive status

Hero

Headline

Supporting copy

Hero image

CTA, if required

Campaign dates/status

26. Recommended Data Model

The underlying catalogue should be structured around three primary entities:

Category

↓

Brand

↓

Brochure

Example:

Category: Bathroom / Sanitary Solutions

→ Brand: Hindware

→ Brochure A

→ Brochure B

→ Brand: Hindware Italian Collection

→ Brochure A

→ Brochure B

→ Brand: QUEO

→ Brochure A

This structure will make the system scalable as the catalogue grows.

27. Functional Requirements

ID	Requirement	Priority

FR-01	User can access Brand Catalogue page	Must

FR-02	User can browse categories	Must

FR-03	User can select a category	Must

FR-04	System displays relevant associate brands	Must

FR-05	User can select a brand	Must

FR-06	System displays relevant brochures	Must

FR-07	User can select a brochure	Must

FR-08	Enquiry form appears before catalogue access	Must

FR-09	Required fields are validated	Must

FR-10	Lead is recorded after successful submission	Must

FR-11	Catalogue access is unlocked after submission	Must

FR-12	User can view catalogue	Must

FR-13	User can download catalogue	Must

FR-14	Lead captures selected category/brand/brochure	Must

FR-15	Hero content can be updated	Should

FR-16	Categories/brands/brochures are manageable	Should

FR-17	UTM/source attribution is captured	Should

FR-18	Catalogue interactions are tracked in analytics	Should

28. Non-Functional Requirements

Performance

Optimised images.

Lazy-load below-the-fold content.

Optimised PDF/catalogue handling.

Avoid unnecessary JavaScript.

Animations should not significantly affect Core Web Vitals.

Security

Validate and sanitise form inputs.

Protect catalogue file URLs where possible.

Prevent unauthorised access to gated files.

Secure lead data.

Use HTTPS.

Implement appropriate spam protection.

Scalability

The architecture should support adding:

New categories

New brands

Multiple brochures per brand

Hundreds of brochures

Campaign-specific landing/deep links

without requiring significant structural changes.

29. Error & Empty States

The page should handle scenarios where content is unavailable.

No Brands

No brands are currently available in this category.

No Brochures

Brochures for this brand are coming soon. Contact our team for assistance.

CTA:

Get Expert Help

Catalogue Loading Error

We couldn't load this catalogue. Please try again or contact our team for assistance.

Form Submission Error

We couldn't submit your details right now. Please check your information and try again.

30. Spam & Abuse Prevention

Because the catalogue is behind a lead form, appropriate protection should be implemented.

Recommended:

CAPTCHA or invisible bot protection.

Server-side validation.

Rate limiting.

Mobile-number validation.

Duplicate/spam detection.

Secure API endpoints.

The anti-spam solution should have minimal impact on legitimate users.

31. Social Media Integration / Promotion

September social media content should drive traffic to the Brand Catalogue page.

Suggested Social CTA

Explore the complete catalogue on BuilditIndia.

Alternative CTA

Looking for the right products for your project? Explore our associate brands and download their catalogues.

Campaign Opportunities

Social campaigns can promote:

New brands

New catalogues

Specific product categories

Featured products

Seasonal solutions

Project-specific product recommendations

Where possible, campaign links should deep-link users to the relevant category/brand/brochure.

32. Recommended CTA Hierarchy

The page should maintain a clear CTA hierarchy.

Discovery

Explore Categories

Brand

Explore Brand

Brochure

View Catalogue

Download

Lead Generation

Get Expert Help

Post-submission

View Catalogue

Download Catalogue

33. Success Metrics / KPIs

The success of the Brand Catalogue should be measured using:

Engagement

Brand Catalogue page visits

Average engagement time

Categories viewed

Brands viewed

Brochures viewed

Conversion

Enquiry form starts

Enquiry form completion rate

Catalogue access rate

Catalogue downloads

Catalogue-to-lead conversion rate

Lead Quality

Number of qualified project enquiries

Contacted leads

Follow-ups generated

Converted leads

Conversion by category

Conversion by brand

Conversion by brochure

Marketing

Leads by source

Leads by campaign

Social media traffic

Campaign-to-catalogue conversion rate

34. Acceptance Criteria

The feature will be considered ready for launch when:

 Brand Catalogue page is accessible at the proposed URL.

 Hero section is responsive and content is configurable.

 Categories are displayed correctly.

 Category selection displays the correct associate brands.

 Brand selection displays the correct brochures.

 Single and multiple brochure scenarios work correctly.

 Brochure access is gated by the enquiry form.

 All mandatory form fields are validated.

 Successful form submissions create a lead record.

 Selected category, brand and brochure are captured with the lead.

 Successful submission unlocks catalogue access.

 Users can view the catalogue.

 Users can download the catalogue.

 Direct unauthorised catalogue access is appropriately protected.

 Mobile/tablet/desktop layouts are tested.

 Animations and transitions work without performance issues.

 Analytics events are implemented.

 UTM/source data is captured where applicable.

 Spam protection is implemented.

 Empty/error states are handled.

 SEO metadata is implemented.

 Content/admin workflow for adding catalogues is documented.

 Lead data can be exported/maintained in the agreed Excel workflow.

35. Recommended MVP Scope

For the initial launch, the following should be treated as MVP / Must Have:

Hero section

Category listing

Category → brand filtering

Brand → brochure filtering

Brochure cards

Mandatory enquiry form

Lead capture

Excel lead integration

Catalogue view

Catalogue download

Responsive design

Basic analytics

Basic SEO

Spam protection

Basic animations

Phase 2 Opportunities

The following can be considered after launch:

Advanced search

Product-level filtering

Brand comparison

Catalogue favourites

User accounts

WhatsApp integration

CRM integration

Automated email/WhatsApp follow-up

Personalised product recommendations

AI-powered product/brand discovery

Catalogue analytics dashboard

Brand-specific landing pages

Product-specific landing pages

36. Final Product Experience

The intended experience should be:

Discover

Users easily discover categories and brands.

↓

Explore

Users browse relevant associate brands and catalogues.

↓

Engage

Users select a catalogue that matches their project requirement.

↓

Enquire

Users provide basic project details through a clean lead form.

↓

Access

Users immediately receive access to the requested catalogue.

↓

Connect

BuilditIndia receives the enquiry and can follow up with the user to provide product/project assistance.

Product Principle

Make it easy for users to discover the right brand, easy to access the right catalogue, and easy for BuilditIndia to turn catalogue interest into a qualified project enquiry.

This version can be handed to UI/UX, development, content, marketing, and sales teams as a shared requirements document. If you want, I can also turn this into a developer-ready Jira/feature specification with user stories, API requirements, database schema, and detailed acceptance criteria for each screen. use this wbsite for the logo fonts and colour combinations https://builditindia.com/

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3c722e95-7f52-4530-b681-88d562e1773c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
