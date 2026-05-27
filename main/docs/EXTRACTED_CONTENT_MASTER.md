# Extracted Content Master: MyTypist Frontend

This document contains the exact text, labels, and content structure extracted from `v1` and `v2`. This ensures the project can be reconstructed without the original source code.

## 1. Landing Page & Product Value Proposition

### Hero Copy (v1)
- **Tagline**: SOC 2 COMPLIANT & SECURE
- **Headline**: The Future of Document Automation & E-Signatures
- **Sub-headline**: MyTypist empowers businesses to create, manage, and sign professional documents in seconds. Streamline your workflow with AI-powered typing and legally binding digital signatures.
- **CTAs**: "Start Free Trial", "Watch Demo"
- **Trust Badges**: "Trusted by 10,000+ companies", "No credit card required", "14-day free trial"

### Hero Copy (v2)
- **Headline**: Create Professional Documents **instantly**
- **Sub-headline**: Transform your ideas into polished, professional documents in minutes with our AI-powered creator studio and curated template library.
- **Search Placeholder**: "Search templates... (business letter, invoice, resume)"
- **Search Suggestions**: "Business Letter", "Resume", "Invoice", "Service Agreement", "NDA"

### AutoSign Service (v1)
- **Headline**: Streamline Your Digital Signatures
- **Sub-headline**: AutoSign revolutionizes document signing with advanced workflow automation, real-time tracking, and enterprise-grade security.
- **Features**:
  - **Lightning Fast**: Sign documents in seconds, not hours.
  - **Bank-Level Security**: SOC 2 compliant with 256-bit encryption.
  - **Multi-Party Signing**: Coordinate complex workflows with multiple parties and automatic reminders.
  - **Legal Compliance**: eIDAS and ESIGN Act compliant signatures.

### AutoType Service (v1)
- **Headline**: Generate Documents Instantly with AI
- **Sub-headline**: AutoType harnesses advanced AI to create professional documents from simple prompts, saving you hours of manual work.
- **Workflow Steps**:
  1. **Describe Your Document**: Tell AutoType what you need in plain language.
  2. **AI Generates Content**: Advanced AI analyzes requirements and generates accurate content.
  3. **Review & Customize**: Make adjustments and export in preferred formats.

### Pricing Plans & Tier Details (v1)
- **Free Plan (₦0/forever)**:
  - 5 documents per month.
  - 2 e-signatures per month.
  - Basic templates & Email support.
- **Professional Plan (₦7,500/month)**:
  - Unlimited documents & e-signatures.
  - Premium templates & Priority support.
  - Team collaboration & Custom branding.
  - Analytics dashboard.
- **Enterprise Plan (₦12,000/month)**:
  - SSO integration.
  - Dedicated account manager.
  - SLA guarantee & Advanced analytics.
  - White-label options.

### Product Features (v1)
- **AutoType Documents**: Create professional documents instantly with intelligent automation.
- **AutoSign E-Signatures**: Legally binding e-signatures complying with global standards.
- **Save Hours Daily**: Reduce document processing time by 90%.
- **Enterprise Security**: Bank-level encryption (GDPR, HIPAA, SOC 2).
- **Team Collaboration**: Real-time collaboration with role-based permissions.
- **Instant Integration**: Connect with Google Drive, Dropbox, Slack.

---

## 2. Legal Documentation (Exact Text)

### Terms of Service
- **Effective Date**: June 15, 2025
- **Sections**:
  1. **Agreement to Terms**: Acceptance by usage.
  2. **Use License**: Grant of temporary license; restrictions on modifying/copying/reverse engineering.
  3. **User Accounts**: Accuracy requirement; password safeguarding responsibility.
  4. **Content**: User retains IP; grant of license to Service for provision of functionality.
  5. **Termination**: Discretionary suspension/termination for breaches.

### Privacy Policy
- **Sections**:
  - **Information We Collect**: Account info (name/email), Profile info, User-created content, Communications.
  - **How We Use Information**: Service improvement, Transactions, Technical notices, Usage monitoring.
  - **Sharing**: No sale to third parties; sharing limited to necessary service providers.
  - **Security**: AES-256 encryption; organizational measures.

---

## 3. FAQ Content (Exact Text)

### Categories & Questions
- **Getting Started**: 
  - *Q*: How do I get started? 
  - *A*: Sign up for a free account, choose a template, no credit card required.
- **Security**:
  - *Q*: How secure is my data?
  - *A*: Bank-level encryption (AES-256), SOC 2 compliant, regular audits.
  - *Q*: Where is data stored?
  - *A*: Geographically distributed data centers, GDPR/HIPAA compliant.
- **Pricing**:
  - *Q*: Annual discounts?
  - *A*: Yes, 17% discount for annual subscriptions.
  - *Q*: Payment methods?
  - *A*: All major credit/debit cards and bank transfers.

---

## 4. UI Metadata & Design Elements

### Component Styling (v2)
- **Glassmorphism**: `bg-surface/95 backdrop-blur-sm border-b border-border shadow-subtle`
- **Buttons**:
  - **Default**: `bg-primary text-primary-foreground shadow-conversion`
  - **Secondary**: `bg-secondary text-secondary-foreground shadow-subtle`
  - **Conversion**: `bg-gradient-to-r from-primary to-brand-authority shadow-conversion`

### Navigation Roles (v1)
- **Guest**: Home, About, Pricing, Login, Signup.
- **User**: Dashboard, Templates, Create Document, Profile, Bonuses.
- **Admin**: User Management, System Health, Bonus Campaigns, Template Upload.

## 5. "Business Core" Content Mandate
All content extracted above from v1 and v2 is considered "Skeleton/Mockup Quality." The final `main` application must replace these with professional, unique business copy:

### Copywriting Requirements:
1.  **Unique Value Prop**: Move beyond "The Future of Document Automation." Focus on specific business outcomes (e.g., "Automate your Legal & HR Workflows with Enterprise-Grade Precision").
2.  **No Generic Placeholders**: Every FAQ, Blog post, and Case Study must be high-quality and relevant to a professional audience.
3.  **Detailed Service Descriptions**: AutoSign and AutoType must have deeply technical and benefit-driven copy that builds trust with enterprise users.
4.  **Guided Success Content**: Every input field in the Document Studio must have "Help Text" that provides a professional example of what to enter.

---

## 6. Mock Data Schemas

### Templates
- **Fields**: ID, Name, Description, Category, Industry, Formality, Length, Rating, Download Count, Tags, Features List.
- **Example**: "Professional Business Letter", "Formal", "Short", "2.3K downloads".

### Admin Users
- **Fields**: ID, Name, Email, Role (Free/Premium/Business), Status (Active/Suspended/Inactive), Document Count, Revenue, Join Date, Location.
