# Admin System Specification

This document details the administrative tools and management interfaces required to oversee the MyTypist platform.

## 1. Admin Dashboard (Monitoring & Oversight)

### Key Metrics (Real-time)
- **Total Users**: Number of registered accounts.
- **Documents Created**: Total system output.
- **Monthly Revenue**: Financial performance.
- **Active Sessions**: Real-time traffic.
- **System Health**: Uptime status and server response times (from v1 AdminHealth).

### User Management
- **Directory**: A searchable, filterable table of all users.
- **User Profile View**: Detailed view of a user's activity, documents, and billing history.
- **Actions**:
  - Suspend/Activate account.
  - Reset password.
  - Upgrade/Downgrade tier manually.
  - Send direct notifications/newsletters.

## 2. Template Management System

### Template Creator (v1 Logic)
A specialized studio for admins to build the core library.
- **Settings Sidebar**:
  - Name, Description, Category.
  - Tagging system (with dynamic tag creation).
  - Visibility toggle (Draft vs Public).
- **Template Editor**:
  - Full-screen Markdown/Text editor.
  - **Placeholder System**: Support for curly-brace variables:
    - `{{user_name}}`, `{{company_name}}`, `{{date}}`.
    - `{{signature_field_1}}` for e-signature placement.
- **Import/Export**: Ability to upload `.docx` or `.pdf` files and convert them to the internal template format.

## 3. Bonus & Incentive Engine

### Campaign Manager (v1 AdminBonuses)
- **Campaign Types**: New User Signup, Premium Upgrade, Seasonal, Referral.
- **Configuration**:
  - Bonus amount (Fixed $ or %).
  - Total budget cap.
  - Start/End date scheduling.
- **Performance Tracking**:
  - Claims rate (%).
  - Budget spent vs remaining.
  - Total recipients reached.

## 4. Operational Tools
- **System Health Check**: Visual monitor for API latency, database status, and third-party service availability (e.g., Stripe, SendGrid).
- **Audit Logs**: A chronological record of all administrative actions (Who changed what and when).
- **Support Inbox**: Interface for responding to user-submitted tickets from the "Contact" page.

## 5. UI & UX Standards
- **Theme**: Use a distinct "Admin Red" (`bg-red-600`) as the primary accent to differentiate from the user-facing "Brand Blue."
- **Layout**: Full-width container (`max-w-7xl`) for data-heavy tables.
- **Accessibility**: All admin tables must be sortable and exportable to CSV/Excel.
