# Dashboard & User System Specification

This document details the architecture, features, and UI requirements for the final MyTypist user workspace, merging the logic of `v1` with the premium aesthetics of `v2`.

## 1. User Dashboard (Overview)

### Layout & Navigation
- **Base Layout**: v2 Split layout with a left sidebar for desktop and a top tab bar for mobile.
- **Header**: v2 `WelcomeHeader` with personalized stats (Documents Created, Time Saved).

### Key Modules
1.  **Token/Plan Management (v2)**: Display remaining tokens and plan type clearly at the top.
2.  **Quick Actions (v1)**: Large, high-visibility buttons for "Create Document", "Send for Signature", and "Browse Templates".
3.  **Recent Activity (v1/v2)**: A list of documents with:
    - Thumbnail preview (v2).
    - Status badges (v1: Draft, Sent, Pending, Completed).
    - Progress bars (v1).
    - Quick actions (Download, Share, Edit).
4.  **Achievements (v2)**: Gamified badges to encourage platform usage.
5.  **Recommended Templates (v2)**: Personalized suggestions based on user role/history.

## 2. Profile & Account Management

### Tabbed Interface (v1 Architecture)
The profile/settings area should be unified into a single comprehensive tabbed view:

- **Personal Info**: 
  - Fields: First Name, Last Name, Email, Phone, Company, Job Title, Bio.
  - Profile Image upload/display.
- **Security**:
  - Password change flow.
  - 2FA toggle (v1 logic).
  - Session timeout settings.
  - Login history list.
- **Billing & Subscription**:
  - Current Plan card (v1 usage progress bar).
  - Tier Comparison (v1 price cards).
  - Payment method management.
  - Invoice history.
- **Notifications (v2 UI)**:
  - Granular toggles for: Email Alerts, Document Sharing, System Updates, Marketing, Weekly Digest.
- **Preferences**:
  - Theme selector (Light, Dark, System).
  - Language selector (EN, ES, FR, DE).
  - Timezone selector.
  - Auto-save toggle.

## 3. Data & Lifecycle Management
- **Drafts**: Dedicated section for incomplete documents with "Completion Percentage".
- **Data Export**: Feature from v1 to allow users to download all their data in bulk.
- **Danger Zone**: Account deletion flow with double confirmation.

## 4. Design & Interaction Guidelines
- **States**: Every page must handle `Loading` (v1 spinner), `Empty` (v2 illustrated state), and `Error` (v1 toggleable error state).
- **Aesthetics**: Use v2 `backdrop-blur`, `shadow-subtle`, and `animate-fade-in` throughout.
- **Typography**: Use **Playfair Display** for headings in headers and cards to maintain the premium feel.
