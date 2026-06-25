import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, BookOpen, FileText, PenSquare, GitBranch,
  Archive, CreditCard, ArrowRight, Mail, ChevronDown, ChevronUp,
  ChevronLeft, Clock, CheckCircle, AlertCircle, Info,
} from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

/* ─────────────────────────── types ─────────────────────────── */

type BlockType = 'p' | 'h2' | 'h3' | 'ul' | 'ol' | 'note' | 'warn' | 'tip' | 'step-list'

interface Block {
  type: BlockType
  text?: string
  items?: string[]
  steps?: { title: string; body: string }[]
}

interface Article {
  id: string
  title: string
  category: string
  readMins: number
  blocks: Block[]
}

interface Category {
  id: string
  icon: React.ElementType
  title: string
  desc: string
  articleIds: string[]
}

/* ─────────────────────────── content ───────────────────────── */

const allArticles: Article[] = [
  /* ── Getting Started ── */
  {
    id: 'gs-1', category: 'Getting Started', readMins: 3,
    title: 'Quick start: your first document in 3 minutes',
    blocks: [
      { type: 'p', text: 'This guide walks you through creating, completing, and sending your first document in MyTypist — from blank workspace to signed record in under three minutes.' },
      { type: 'h2', text: 'Step 1 — Create your workspace' },
      { type: 'p', text: 'When you first sign up, MyTypist creates a personal workspace for you. If you are part of a team, your administrator will have invited you to an existing workspace.' },
      { type: 'step-list', steps: [
        { title: 'Sign up or log in', body: 'Go to app.mytypist.com and create a free account. No credit card required for the Free plan.' },
        { title: 'Name your workspace', body: "Give your workspace a name — usually your name or your organisation's name. You can change this at any time in Settings." },
        { title: 'Choose a starting point', body: 'Select "Start from template" to pick one of 100+ pre-built templates, or "Blank document" to start from scratch.' },
      ]},
      { type: 'h2', text: 'Step 2 — Fill in your fields' },
      { type: 'p', text: 'Every template has labelled fields. Click any highlighted field in Studio and type your content. The live PDF preview on the right updates instantly.' },
      { type: 'note', text: 'Fields marked with a red asterisk (*) are required. You cannot advance the document to Fidelity Check until all required fields are filled.' },
      { type: 'h2', text: 'Step 3 — Send for signature' },
      { type: 'p', text: "Once your document passes the Fidelity Check, click \"Request Signature\" and enter the recipient's email address. They will receive a secure link — no account needed on their end." },
      { type: 'tip', text: 'Recipients sign in-browser on any device, including mobile. Signatures are legally binding under Nigerian law.' },
      { type: 'h2', text: 'What happens next?' },
      { type: 'p', text: 'After signing, the document automatically advances through the pipeline — Approval → Signed → Archived. You can track progress in real time on your dashboard.' },
    ],
  },
  {
    id: 'gs-2', category: 'Getting Started', readMins: 4,
    title: 'Understanding the 5-stage pipeline',
    blocks: [
      { type: 'p', text: 'Every document in MyTypist moves through a structured five-stage pipeline. Each stage has clear entry rules, role gates, and exit actions — so nothing reaches signatures without proper review.' },
      { type: 'h2', text: 'The five stages' },
      { type: 'step-list', steps: [
        { title: '1. Draft', body: 'The document is being created or edited in Studio. Only the document owner (and Editors) can make changes at this stage.' },
        { title: '2. Fidelity Check', body: 'MyTypist validates all required fields, formatting rules, and any business logic you\'ve configured (e.g. salary range checks). The document cannot advance until all checks pass.' },
        { title: '3. Approval', body: 'One or more designated Approvers must review and approve the document. You can configure sequential or parallel approval flows.' },
        { title: '4. Signature', body: 'Signature requests are sent to all required signatories. The document is locked from editing. Progress is tracked per-signatory.' },
        { title: '5. Archive', body: 'Once all signatures are collected, the document and its full audit trail are stored in the Vault. It is immutable at this point.' },
      ]},
      { type: 'h2', text: 'How to move a document between stages' },
      { type: 'p', text: 'Use the pipeline controls at the top of any document in Studio. The "Advance" button is only enabled when all conditions for that stage transition are met.' },
      { type: 'warn', text: 'You cannot skip stages. A document that fails Fidelity Check will be returned to Draft automatically.' },
      { type: 'h2', text: 'Stage notifications' },
      { type: 'p', text: 'Every stage transition sends email notifications to the relevant parties: Approvers when a document enters Approval, signatories when a document enters Signature, and the owner when all signatures are collected.' },
    ],
  },
  {
    id: 'gs-3', category: 'Getting Started', readMins: 3,
    title: 'Inviting team members and setting roles',
    blocks: [
      { type: 'p', text: 'MyTypist supports team workspaces with role-based access control. Each member has a role that determines what they can see and do.' },
      { type: 'h2', text: 'Available roles' },
      { type: 'ul', items: [
        'Owner — full administrative access; can manage billing, delete the workspace, and manage all members.',
        'Admin — can invite/remove members, configure workspace settings, and manage all documents.',
        'Editor — can create and edit documents, advance them through Draft and Fidelity Check.',
        'Approver — can review and approve documents in the Approval stage.',
        'Viewer — read-only access to documents shared with them.',
      ]},
      { type: 'h2', text: 'How to invite a team member' },
      { type: 'step-list', steps: [
        { title: 'Open Admin Console', body: 'Click your workspace name in the top-left corner, then select "Admin Console".' },
        { title: 'Go to Users & Roles', body: 'Select the "Users & Roles" tab in the left sidebar.' },
        { title: 'Click Invite User', body: 'Enter the person\'s email address and select their role. Click Send Invitation.' },
        { title: 'They accept', body: 'The invitee receives an email with a secure link valid for 7 days. Once they accept, they appear in your Users list.' },
      ]},
      { type: 'note', text: 'Free plan supports 1 user (yourself). Professional supports up to 5 users. Enterprise has no user limit.' },
      { type: 'h2', text: 'Changing a member\'s role' },
      { type: 'p', text: 'In Admin Console → Users & Roles, click the three-dot menu next to any user and select "Change role". Role changes take effect immediately.' },
    ],
  },
  {
    id: 'gs-4', category: 'Getting Started', readMins: 3,
    title: 'Importing a DOCX template',
    blocks: [
      { type: 'p', text: 'If you already have a Word document (.docx) you use as a template, you can import it directly into MyTypist Studio. The import process converts your document to the MyTypist format and identifies likely field positions.' },
      { type: 'h2', text: 'Supported formats' },
      { type: 'ul', items: [
        '.docx (Microsoft Word 2007 and later) — fully supported',
        '.doc (older Word format) — convert to .docx first',
        '.odt (LibreOffice) — partially supported; complex formatting may not convert perfectly',
        'PDF — not supported for import (PDF is an output format only)',
      ]},
      { type: 'h2', text: 'How to import' },
      { type: 'step-list', steps: [
        { title: 'From the dashboard', body: 'Click "New Document" → "Import from DOCX".' },
        { title: 'Upload your file', body: 'Drag and drop your .docx file or click to browse. Maximum file size is 10 MB.' },
        { title: 'Review field detection', body: 'MyTypist highlights text it thinks are fields (e.g. [Employee Name], blanks). Review and confirm or adjust each detected field.' },
        { title: 'Save as template', body: 'Once you\'re happy with the fields, save the document as a template in your library. Future documents can be generated from this template.' },
      ]},
      { type: 'warn', text: 'Complex Word formatting — tracked changes, embedded macros, or protected sections — may not import correctly. Review the imported document carefully.' },
      { type: 'tip', text: 'For best results, use simple, clean Word documents with fields clearly marked in brackets like [Field Name].' },
    ],
  },
  {
    id: 'gs-5', category: 'Getting Started', readMins: 2,
    title: 'How billing works',
    blocks: [
      { type: 'p', text: 'MyTypist uses a flat monthly or annual subscription. You pay one fixed price regardless of how many documents you create, sign, or store. There are no per-document fees, no signature transaction fees, and no storage overage charges.' },
      { type: 'h2', text: 'Plans at a glance' },
      { type: 'ul', items: [
        'Free — ₦0/month. Up to 3 documents, 1 user, basic templates.',
        'Professional — ₦75,000/month. Unlimited documents, 5 users, all features.',
        'Enterprise — ₦230,000/month. Unlimited everything, custom integrations, dedicated support.',
      ]},
      { type: 'h2', text: 'Annual billing discount' },
      { type: 'p', text: 'Paying annually saves 20% compared to monthly billing. Your account is charged once per year and you receive a receipt immediately.' },
      { type: 'h2', text: 'Payment methods' },
      { type: 'p', text: 'We accept Nigerian debit and credit cards, bank transfers, and USSD payments. All payments are processed in Naira (₦) via Paystack.' },
      { type: 'note', text: 'VAT (7.5%) is added to all subscription amounts in compliance with Nigerian tax law.' },
      { type: 'h2', text: 'Free trial' },
      { type: 'p', text: 'Professional and Enterprise plans include a 14-day free trial. No card required to start. Your card is charged only after the trial ends unless you cancel.' },
    ],
  },

  /* ── Documents & Studio ── */
  {
    id: 'ds-1', category: 'Documents & Studio', readMins: 5,
    title: 'Using the block editor in Studio',
    blocks: [
      { type: 'p', text: 'Studio is MyTypist\'s document editor. It uses a block-based structure — each heading, paragraph, table, or field is a distinct block you can drag, duplicate, or delete.' },
      { type: 'h2', text: 'Block types' },
      { type: 'ul', items: [
        'Text block — paragraphs, headings (H1–H3), bullet lists, numbered lists.',
        'Field block — a user-fillable placeholder with a label, type (text, date, number, select), and validation rules.',
        'Table block — structured rows and columns; cells can contain fields.',
        'Signature block — a dedicated signature placeholder that links to a signatory.',
        'Divider — a horizontal rule for visual separation.',
        'Image block — a static image (e.g. company logo or seal).',
      ]},
      { type: 'h2', text: 'Adding a block' },
      { type: 'p', text: 'Click the "+" button that appears when you hover between blocks, or press "/" on a new line to open the block picker. Type to filter block types.' },
      { type: 'h2', text: 'Editing a block' },
      { type: 'p', text: 'Click any block to select it. A toolbar appears above with formatting options relevant to that block type. Right-click for additional options like duplicate, move to, or delete.' },
      { type: 'h2', text: 'Reordering blocks' },
      { type: 'p', text: 'Drag the six-dot handle on the left of any block to reorder it. You can also use the arrow buttons in the block toolbar.' },
      { type: 'tip', text: 'Use ⌘+Z (Mac) or Ctrl+Z (Windows) to undo any change. Studio keeps a full undo history for the current editing session.' },
    ],
  },
  {
    id: 'ds-2', category: 'Documents & Studio', readMins: 4,
    title: 'Working with fields and field types',
    blocks: [
      { type: 'p', text: 'Fields are the interactive parts of a document — the placeholders that get filled in when a document is used. Understanding field types helps you build documents that are both flexible and properly validated.' },
      { type: 'h2', text: 'Field types' },
      { type: 'ul', items: [
        'Text — free-form text input. Supports min/max character validation.',
        'Number — numeric input only. Supports min/max value and decimal places.',
        'Date — a date picker. Supports min/max date constraints.',
        'Select — a dropdown with predefined options you configure.',
        'Checkbox — a true/false tick box.',
        'Signature — links to a named signatory; rendered as a signature block.',
        'Calculated — a read-only field whose value is derived from other fields (e.g. Total = Qty × Price).',
      ]},
      { type: 'h2', text: 'Making a field required' },
      { type: 'p', text: 'In the field settings panel (click a field and then the gear icon), toggle "Required". Required fields must be filled before the document can pass Fidelity Check.' },
      { type: 'h2', text: 'Field labels and tooltips' },
      { type: 'p', text: 'Each field has a label (shown above the field) and an optional tooltip (shown as a "?" icon). Use tooltips to give users guidance on what to enter — e.g. "Enter in format DD/MM/YYYY".' },
      { type: 'note', text: 'Field labels are visible during editing and filling but are not printed in the PDF output. Only the field value appears in the final document.' },
    ],
  },
  {
    id: 'ds-3', category: 'Documents & Studio', readMins: 2,
    title: 'Live PDF preview — what you see is what prints',
    blocks: [
      { type: 'p', text: 'Studio\'s live preview shows an exact rendering of what your document will look like when exported as a PDF. It updates in real time as you type and edit.' },
      { type: 'h2', text: 'How the preview works' },
      { type: 'p', text: 'The preview panel uses the same rendering engine as the PDF export. Fonts, spacing, page breaks, headers, and footers are all rendered exactly as they will appear in the final document.' },
      { type: 'h2', text: 'Zoom and page navigation' },
      { type: 'p', text: 'Use the zoom controls at the top of the preview panel to zoom in or out (50%–200%). If your document spans multiple pages, use the page navigation arrows to move between pages.' },
      { type: 'h2', text: 'Print vs screen' },
      { type: 'p', text: 'The preview uses A4 page dimensions by default. If you need a different page size (e.g. US Letter), change it in Document Settings → Page Setup.' },
      { type: 'tip', text: 'Unfilled fields are shown with a light purple highlight in the preview. Once filled, the value replaces the highlight. This helps you quickly spot any missing fields.' },
    ],
  },
  {
    id: 'ds-4', category: 'Documents & Studio', readMins: 3,
    title: 'Fidelity check: what it validates',
    blocks: [
      { type: 'p', text: 'The Fidelity Check is an automated pre-flight that runs when you try to advance a document from Draft to Approval. It catches errors before they reach reviewers or signatories.' },
      { type: 'h2', text: 'What gets checked' },
      { type: 'ul', items: [
        'Required fields — all required fields must have a value.',
        'Field validation — numbers must be within configured min/max; dates must be valid; text must meet character limits.',
        'Signature blocks — every signature block must be assigned to a named signatory.',
        'Calculated fields — all referenced source fields must be filled so calculations can resolve.',
        'Document structure — no empty required sections, no broken table layouts.',
      ]},
      { type: 'h2', text: 'Reading the fidelity report' },
      { type: 'p', text: 'If the check fails, MyTypist shows a Fidelity Report with each error listed by block. Click any error to jump directly to the problematic block in the editor.' },
      { type: 'warn', text: 'A document that fails Fidelity Check is automatically returned to Draft status. It cannot be seen by Approvers or sent for signature until all errors are resolved.' },
      { type: 'h2', text: 'Custom business rules' },
      { type: 'p', text: 'Enterprise customers can configure custom validation rules — for example, "Salary must not exceed ₦500,000 for Grade Level 8" — which are also enforced during Fidelity Check.' },
    ],
  },
  {
    id: 'ds-5', category: 'Documents & Studio', readMins: 2,
    title: 'Exporting documents as PDF',
    blocks: [
      { type: 'p', text: 'You can export any document in MyTypist as a PDF at any stage of the pipeline. The export includes the current field values and, for signed documents, embedded signature data.' },
      { type: 'h2', text: 'Standard PDF export' },
      { type: 'step-list', steps: [
        { title: 'Open the document in Studio', body: 'Navigate to the document from your dashboard or Vault.' },
        { title: 'Click Export', body: 'Click the "Export" button in the top-right corner of Studio.' },
        { title: 'Choose PDF', body: 'Select "PDF" from the export options.' },
        { title: 'Download', body: 'The PDF is generated and downloaded to your browser within a few seconds.' },
      ]},
      { type: 'h2', text: 'PDF with audit trail' },
      { type: 'p', text: 'For signed documents, you can export a "PDF with audit trail". This bundles the signed PDF with a tamper-evident event log showing every action taken on the document — who viewed it, when, from what IP address, and what they signed.' },
      { type: 'note', text: 'Audit trail exports are only available for documents that have completed the Signature stage.' },
    ],
  },

  /* ── Signatures ── */
  {
    id: 'sig-1', category: 'Signatures', readMins: 3,
    title: 'Sending a signature request',
    blocks: [
      { type: 'p', text: 'Once your document has been approved, you can send it for signature. MyTypist handles delivery, tracking, and collection of all signatures automatically.' },
      { type: 'h2', text: 'Before you send' },
      { type: 'ul', items: [
        'The document must have passed Fidelity Check.',
        'All Approvers must have approved (if Approval is configured).',
        'Every signature block must be assigned to a signatory with a valid email address.',
      ]},
      { type: 'h2', text: 'How to send' },
      { type: 'step-list', steps: [
        { title: 'Open the document', body: 'From your dashboard, open the document in Studio.' },
        { title: 'Click Request Signatures', body: 'Click the "Request Signatures" button in the pipeline bar at the top.' },
        { title: 'Review signatories', body: 'Confirm the list of signatories and their email addresses. Add a personalised message if needed.' },
        { title: 'Send', body: 'Click "Send". Each signatory receives an email with their unique signing link immediately.' },
      ]},
      { type: 'tip', text: 'You can send to signatories in a specific order (sequential) or all at once (parallel). Configure this in Document Settings before advancing to Signature.' },
    ],
  },
  {
    id: 'sig-2', category: 'Signatures', readMins: 4,
    title: 'Sequential vs. parallel signing flows',
    blocks: [
      { type: 'p', text: 'MyTypist supports two modes for collecting multiple signatures: sequential and parallel. Choosing the right mode depends on whether order matters for your use case.' },
      { type: 'h2', text: 'Sequential signing' },
      { type: 'p', text: 'Signatories are notified one at a time, in a defined order. Signatory 2 only receives their signing link after Signatory 1 has signed. This is the standard for employment contracts, NDAs, and formal agreements where hierarchy matters.' },
      { type: 'h2', text: 'Parallel signing' },
      { type: 'p', text: 'All signatories receive their signing links simultaneously. The document is considered complete when the last person signs. Use this for peer-level agreements, multi-party contracts, or when speed is more important than order.' },
      { type: 'h2', text: 'Configuring the signing order' },
      { type: 'step-list', steps: [
        { title: 'Open Document Settings', body: 'Click the gear icon in Studio or "Document Settings" in the top menu.' },
        { title: 'Go to Signatures tab', body: 'Select the "Signatures" tab.' },
        { title: 'Choose signing mode', body: 'Toggle between "Sequential" and "Parallel".' },
        { title: 'Set order (Sequential only)', body: 'Drag signatories to set their signing order. Signatory at position 1 signs first.' },
      ]},
      { type: 'note', text: 'You can mix modes — for example, two parallel signatories at step 1, then a manager counter-sign at step 2. Contact support to configure custom flows.' },
    ],
  },
  {
    id: 'sig-3', category: 'Signatures', readMins: 2,
    title: 'What recipients see (no account needed)',
    blocks: [
      { type: 'p', text: 'Recipients do not need a MyTypist account to sign a document. The entire signing experience happens in their browser via a secure, unique link.' },
      { type: 'h2', text: 'The signing experience' },
      { type: 'step-list', steps: [
        { title: 'Email notification', body: 'The recipient receives a branded email from MyTypist (sent on your behalf) with a "Review & Sign" button.' },
        { title: 'Identity verification', body: 'Clicking the link opens the document. The recipient must confirm their full name and email before proceeding.' },
        { title: 'Review the document', body: 'They can scroll through the full document before signing. They cannot edit any content.' },
        { title: 'Apply signature', body: 'They draw, type, or upload their signature and click "Sign". A timestamp and IP address are recorded.' },
        { title: 'Confirmation', body: 'They receive a confirmation email with a copy of the signed document attached as a PDF.' },
      ]},
      { type: 'tip', text: 'The signing link works on mobile, tablet, and desktop. No app download required.' },
      { type: 'h2', text: 'Legal validity' },
      { type: 'p', text: 'Electronic signatures collected via MyTypist are legally binding under the Nigerian Electronic Transactions Act (ETA) 2011.' },
    ],
  },
  {
    id: 'sig-4', category: 'Signatures', readMins: 3,
    title: 'Downloading signed copies and audit trails',
    blocks: [
      { type: 'p', text: 'After all signatures are collected, MyTypist automatically archives the signed document and makes it available for download in two formats.' },
      { type: 'h2', text: 'Signed PDF' },
      { type: 'p', text: 'The signed PDF contains all field values and embedded signature images. It is the definitive, readable version of the signed document suitable for record-keeping and sharing.' },
      { type: 'h2', text: 'PDF with audit trail' },
      { type: 'p', text: 'The audit trail PDF includes a tamper-evident event log appended to the signed document. It records:' },
      { type: 'ul', items: [
        'Document creation date and creator',
        'Every time the document was viewed (by whom, when, IP address)',
        'Fidelity Check results',
        'Approvals (who approved, timestamp)',
        'Signature events (name, email, timestamp, IP, signature hash)',
        'Final archive timestamp',
      ]},
      { type: 'h2', text: 'How to download' },
      { type: 'step-list', steps: [
        { title: 'Open the document', body: 'Find it in your Vault or dashboard.' },
        { title: 'Click Export', body: 'Click "Export" in Studio.' },
        { title: 'Choose format', body: 'Select "Signed PDF" or "PDF with audit trail".' },
        { title: 'Download', body: 'The file downloads immediately.' },
      ]},
    ],
  },
  {
    id: 'sig-5', category: 'Signatures', readMins: 2,
    title: 'Expiry dates and automatic reminders',
    blocks: [
      { type: 'p', text: 'You can set an expiry date for signature requests and configure automatic reminder emails to reduce delays from unresponsive signatories.' },
      { type: 'h2', text: 'Setting an expiry date' },
      { type: 'p', text: 'In Document Settings → Signatures, enable "Expiry date" and choose how many days the signing link remains active (1–90 days). If a signatory has not signed by the expiry date, their link is deactivated and you are notified.' },
      { type: 'h2', text: 'Automatic reminders' },
      { type: 'p', text: 'Enable "Automatic reminders" to send email nudges to signatories who have not yet signed. Choose from:' },
      { type: 'ul', items: [
        'Every 1 day',
        'Every 3 days',
        'Every 7 days',
        'Custom schedule',
      ]},
      { type: 'h2', text: 'Manual reminders' },
      { type: 'p', text: 'You can also send a one-off reminder at any time. From the document\'s signature tracking view, click "Send reminder" next to any outstanding signatory.' },
      { type: 'warn', text: 'Excessive reminders may be perceived as spam. Use automatic reminders sparingly for time-sensitive documents only.' },
    ],
  },

  /* ── Pipeline ── */
  {
    id: 'pl-1', category: 'Pipeline', readMins: 4,
    title: 'How pipeline stages work',
    blocks: [
      { type: 'p', text: 'The MyTypist pipeline enforces a structured lifecycle for every document — from first draft to permanent archive. Each stage has defined entry criteria, permitted actions, and exit conditions.' },
      { type: 'h2', text: 'Stage summary' },
      { type: 'ul', items: [
        'Draft — document being written. Editable by owner and editors.',
        'Fidelity Check — automated validation. No human editing; document either passes or returns to Draft.',
        'Approval — human review stage. Approvers can approve, reject, or leave comments.',
        'Signature — locked for editing. Outstanding signatories receive signing links.',
        'Archive — final, immutable state. Full audit trail sealed.',
      ]},
      { type: 'h2', text: 'Entering and exiting stages' },
      { type: 'p', text: 'You advance a document by clicking the "Advance" button in Studio\'s pipeline bar. MyTypist checks all entry criteria for the next stage before allowing the transition. If criteria are not met, you see a detailed explanation of what is blocking the move.' },
      { type: 'h2', text: 'Stage history' },
      { type: 'p', text: 'Every stage transition — including who triggered it and when — is recorded in the document\'s activity log. You can view this log in Studio under the "History" tab.' },
      { type: 'note', text: 'Documents can be sent back to Draft from Approval if an Approver rejects them. This resets the Fidelity Check requirement.' },
    ],
  },
  {
    id: 'pl-2', category: 'Pipeline', readMins: 3,
    title: 'Stage permissions and role gates',
    blocks: [
      { type: 'p', text: 'Each pipeline stage enforces access controls. Only users with the appropriate role can perform actions within a stage.' },
      { type: 'h2', text: 'Permissions by stage' },
      { type: 'ul', items: [
        'Draft — Editor and Owner can write and edit.',
        'Fidelity Check — system-automated; no user actions available.',
        'Approval — Approver role required to approve or reject. Owner can view but not approve their own documents.',
        'Signature — Signatories (external or internal) can sign. Owner can send reminders or cancel.',
        'Archive — Viewer and above can read. Owner can download. Only Owner or Admin can delete.',
      ]},
      { type: 'h2', text: 'Custom role gates (Enterprise)' },
      { type: 'p', text: 'Enterprise customers can define custom role gates — for example, requiring approval from a "Finance Director" role specifically for documents above a certain salary threshold.' },
      { type: 'tip', text: 'An Owner cannot approve their own document in the Approval stage. This is an intentional segregation-of-duties control. Assign a separate Approver for all outgoing documents.' },
    ],
  },
  {
    id: 'pl-3', category: 'Pipeline', readMins: 3,
    title: 'Moving a document through approval',
    blocks: [
      { type: 'p', text: 'The Approval stage is where designated reviewers assess the document before it goes to signature. Here is how the process works end-to-end.' },
      { type: 'h2', text: 'For the document owner' },
      { type: 'step-list', steps: [
        { title: 'Assign approvers', body: 'In Document Settings → Approval, add the email addresses or usernames of your approvers. You can require one or all to approve.' },
        { title: 'Advance to Approval', body: 'After Fidelity Check passes, click "Advance to Approval". Approvers receive an email notification immediately.' },
        { title: 'Monitor progress', body: 'The document dashboard shows each approver\'s status: Pending, Approved, or Rejected.' },
      ]},
      { type: 'h2', text: 'For approvers' },
      { type: 'step-list', steps: [
        { title: 'Receive notification', body: 'You receive an email with a link to review the document in MyTypist.' },
        { title: 'Review in Studio', body: 'Open the document (read-only view). You can view all content, fields, and the audit trail.' },
        { title: 'Approve or reject', body: 'Click "Approve" to advance the document, or "Reject" with a required reason. Rejection returns the document to Draft.' },
      ]},
      { type: 'h2', text: 'Comments' },
      { type: 'p', text: 'Approvers can leave inline comments on specific blocks before approving or rejecting. Comments are visible to the document owner in Studio.' },
    ],
  },
  {
    id: 'pl-4', category: 'Pipeline', readMins: 3,
    title: 'Viewing pipeline throughput in Admin',
    blocks: [
      { type: 'p', text: 'The Admin Console includes a Pipeline Analytics view that shows you how documents are moving through your organisation\'s workflow — where bottlenecks occur and how long each stage takes.' },
      { type: 'h2', text: 'Accessing pipeline analytics' },
      { type: 'p', text: 'Go to Admin Console → Analytics → Pipeline. You need Admin or Owner role to access this view.' },
      { type: 'h2', text: 'Available metrics' },
      { type: 'ul', items: [
        'Documents by stage — how many documents are currently in each pipeline stage.',
        'Average time per stage — how long documents typically spend in each stage.',
        'Approval bottlenecks — which approvers have the most pending documents.',
        'Signature completion rate — percentage of signature requests completed within 7 days.',
        'Rejection rate — percentage of documents rejected at Approval and returned to Draft.',
      ]},
      { type: 'h2', text: 'Date filtering' },
      { type: 'p', text: 'Filter analytics by date range (last 7 days, 30 days, 90 days, or custom range) to identify trends over time.' },
      { type: 'note', text: 'Pipeline analytics are available on Professional and Enterprise plans only.' },
    ],
  },
  {
    id: 'pl-5', category: 'Pipeline', readMins: 3,
    title: 'Handling stuck or rejected documents',
    blocks: [
      { type: 'p', text: 'Sometimes documents get stuck — an approver is unavailable, a signatory has not responded, or a document was rejected and needs revision. Here is how to handle each scenario.' },
      { type: 'h2', text: 'Document rejected at Approval' },
      { type: 'step-list', steps: [
        { title: 'Review rejection reason', body: 'The rejecting approver must provide a reason. Read it in the document\'s History tab.' },
        { title: 'Make corrections in Draft', body: 'The document is automatically returned to Draft. Edit as needed.' },
        { title: 'Re-submit', body: 'Advance through Fidelity Check and Approval again. Approvers are notified of the new submission.' },
      ]},
      { type: 'h2', text: 'Approver unavailable' },
      { type: 'p', text: 'If an approver is on leave or unreachable, an Admin or Owner can reassign the approval to another user from Admin Console → Documents → [Document] → Reassign Approver.' },
      { type: 'h2', text: 'Signatory not responding' },
      { type: 'p', text: 'Send a manual reminder from the signature tracking view. If the signatory is no longer the right person, you can update the signatory (before they sign) from Document Settings → Signatures → Edit Signatory.' },
      { type: 'warn', text: 'Changing a signatory after any partial signing has occurred requires voiding the document and starting a new signature round.' },
    ],
  },

  /* ── Vault ── */
  {
    id: 'vt-1', category: 'Vault', readMins: 2,
    title: 'How the Vault stores documents',
    blocks: [
      { type: 'p', text: 'The Vault is MyTypist\'s permanent document store. Every document that completes the pipeline is automatically archived here. It is designed for long-term, tamper-evident storage.' },
      { type: 'h2', text: 'Storage guarantees' },
      { type: 'ul', items: [
        'Geographic redundancy — data stored in multiple locations; no single point of failure.',
        'Daily snapshots — automatic daily backups with 90-day retention.',
        'Immutable records — archived documents cannot be edited. A new version must be created as a separate document.',
        'Encryption at rest — all documents encrypted with AES-256.',
        'Encryption in transit — all connections use TLS 1.3.',
      ]},
      { type: 'h2', text: 'What gets stored' },
      { type: 'p', text: 'The Vault stores the final signed PDF, all previous versions, the complete audit trail, and all metadata (creation date, signatories, approvers, field values).' },
      { type: 'note', text: 'Vault storage is unlimited on Professional and Enterprise plans. Free plan includes 500 MB of document storage.' },
    ],
  },
  {
    id: 'vt-2', category: 'Vault', readMins: 2,
    title: 'Searching across all documents',
    blocks: [
      { type: 'p', text: 'The Vault\'s search indexes document titles, field values, tags, and metadata — so you can find any document in seconds.' },
      { type: 'h2', text: 'Using global search' },
      { type: 'p', text: 'Click the search icon in the top navigation bar (or press ⌘+K / Ctrl+K) to open global search. Type any keyword — a name, a reference number, a date — and results appear instantly.' },
      { type: 'h2', text: 'Vault search filters' },
      { type: 'p', text: 'In the Vault view, use the filter panel on the left to narrow results by:' },
      { type: 'ul', items: [
        'Date range (created or signed)',
        'Document category or template',
        'Pipeline stage',
        'Signatory name',
        'Approver name',
        'Tags',
      ]},
      { type: 'h2', text: 'Field-level search' },
      { type: 'p', text: 'You can search by the contents of specific fields — for example, searching for all employment agreements where the salary field contains "₦250,000".' },
      { type: 'tip', text: 'Use quotation marks for exact phrases: searching for "Chidera Okonkwo" returns only exact matches, not partial name matches.' },
    ],
  },
  {
    id: 'vt-3', category: 'Vault', readMins: 3,
    title: 'Viewing and comparing versions',
    blocks: [
      { type: 'p', text: 'MyTypist tracks every saved version of a document from creation to archive. You can view any historical version and compare it side-by-side with any other version.' },
      { type: 'h2', text: 'Accessing version history' },
      { type: 'step-list', steps: [
        { title: 'Open the document', body: 'Open the document in Studio.' },
        { title: 'Go to History tab', body: 'Click the "History" tab in the right panel.' },
        { title: 'Browse versions', body: 'Each version is listed with a timestamp and the name of the user who saved it. Click any version to view it in read-only mode.' },
      ]},
      { type: 'h2', text: 'Comparing two versions' },
      { type: 'step-list', steps: [
        { title: 'Select a version', body: 'Click a version in the History list.' },
        { title: 'Click Compare', body: 'Click "Compare with current" or "Compare with another version".' },
        { title: 'Review differences', body: 'Added content is highlighted in green; removed content in red. Field value changes are shown as before/after.' },
      ]},
      { type: 'note', text: 'Version history is read-only for Archived documents. You cannot edit or delete historical versions.' },
    ],
  },
  {
    id: 'vt-4', category: 'Vault', readMins: 2,
    title: 'Restoring a previous version',
    blocks: [
      { type: 'p', text: 'If a document was edited incorrectly or content was accidentally deleted, you can restore a previous version. Restoring creates a new Draft based on the historical version — the original history is preserved.' },
      { type: 'h2', text: 'How to restore' },
      { type: 'step-list', steps: [
        { title: 'Open History', body: 'Go to the document → History tab.' },
        { title: 'Select the version', body: 'Click the version you want to restore.' },
        { title: 'Click Restore', body: 'Click the "Restore this version" button. A confirmation dialog appears.' },
        { title: 'Confirm', body: 'Confirm the restoration. A new Draft document is created with the content of the selected version. The original document is unchanged.' },
      ]},
      { type: 'warn', text: 'Restoring a version does not delete or modify any existing documents. It creates a new Draft copy. You are responsible for retiring the old version if needed.' },
      { type: 'h2', text: 'For archived documents' },
      { type: 'p', text: 'Archived (fully signed) documents cannot be restored in place — they are immutable. However, you can use "Copy as new Draft" to start a new document based on the archived content.' },
    ],
  },
  {
    id: 'vt-5', category: 'Vault', readMins: 2,
    title: 'Setting document retention policies',
    blocks: [
      { type: 'p', text: 'Retention policies define how long documents are kept in the Vault before they are flagged for deletion. This helps organisations comply with data minimisation requirements.' },
      { type: 'h2', text: 'Default retention' },
      { type: 'p', text: 'By default, all documents are retained indefinitely (no automatic deletion). You must explicitly set a retention policy if you want documents removed after a period.' },
      { type: 'h2', text: 'Setting a retention policy' },
      { type: 'step-list', steps: [
        { title: 'Go to Admin Console → Vault', body: 'Open Admin Console and select the Vault tab.' },
        { title: 'Retention Policies', body: 'Click "Retention Policies" and then "New Policy".' },
        { title: 'Configure', body: 'Set the document category or tag it applies to, and the retention period (e.g. 5 years from archive date).' },
        { title: 'Action on expiry', body: 'Choose "Flag for manual review" or "Auto-delete" (with a confirmation step). We recommend manual review for legal documents.' },
      ]},
      { type: 'note', text: 'Retention policies are available on Enterprise plan only. Contact your account manager to enable.' },
    ],
  },

  /* ── Billing ── */
  {
    id: 'bi-1', category: 'Billing & Plans', readMins: 2,
    title: "What's included in each plan",
    blocks: [
      { type: 'p', text: 'MyTypist has three plans: Free, Professional, and Enterprise. All plans include core document creation and signing capabilities.' },
      { type: 'h2', text: 'Free — ₦0/month' },
      { type: 'ul', items: [
        'Up to 3 active documents',
        '1 user',
        'Access to all basic templates',
        'Basic PDF export',
        'Community support (email, 48-hour response)',
      ]},
      { type: 'h2', text: 'Professional — ₦75,000/month' },
      { type: 'ul', items: [
        'Unlimited documents',
        'Up to 5 users',
        'Full template library (100+ templates)',
        'E-signatures with audit trail',
        '5-stage pipeline with Approval workflows',
        'Vault with unlimited storage',
        'PDF with audit trail export',
        'Priority support (4-hour response)',
      ]},
      { type: 'h2', text: 'Enterprise — ₦230,000/month' },
      { type: 'ul', items: [
        'Everything in Professional',
        'Unlimited users',
        'Custom pipeline configuration',
        'Custom field validation rules',
        'Retention policies',
        'Admin Console with pipeline analytics',
        'Dedicated account manager',
        '1-hour support SLA',
        'Custom integrations on request',
      ]},
    ],
  },
  {
    id: 'bi-2', category: 'Billing & Plans', readMins: 2,
    title: 'Upgrading from Professional to Enterprise',
    blocks: [
      { type: 'p', text: 'Upgrading from Professional to Enterprise is instant. Your data, documents, and settings carry over with no interruption.' },
      { type: 'h2', text: 'How to upgrade' },
      { type: 'step-list', steps: [
        { title: 'Go to Billing', body: 'Click your workspace name → Settings → Billing.' },
        { title: 'Click Upgrade', body: 'Click "Upgrade to Enterprise".' },
        { title: 'Review pricing', body: 'Confirm the new billing amount. If you\'re mid-cycle, you\'ll be charged a prorated amount for the remainder of the current billing period.' },
        { title: 'Confirm', body: 'Click "Confirm Upgrade". Your account is upgraded immediately.' },
      ]},
      { type: 'h2', text: 'What changes after upgrading' },
      { type: 'ul', items: [
        'User limit removed — you can invite unlimited team members.',
        'Admin Console unlocked — pipeline analytics, retention policies, audit tools.',
        'Support SLA changes to 1-hour response.',
        'Dedicated account manager assigned within 1 business day.',
      ]},
      { type: 'tip', text: 'If you need custom integrations or volume discounts for large teams (50+ users), contact sales@mytypist.com before upgrading.' },
    ],
  },
  {
    id: 'bi-3', category: 'Billing & Plans', readMins: 1,
    title: 'Downloading invoices',
    blocks: [
      { type: 'p', text: 'MyTypist generates an invoice for every payment. You can download all past invoices from your Billing settings.' },
      { type: 'h2', text: 'How to download an invoice' },
      { type: 'step-list', steps: [
        { title: 'Go to Billing', body: 'Click your workspace name → Settings → Billing.' },
        { title: 'Payment History', body: 'Scroll down to the "Payment History" section.' },
        { title: 'Download', body: 'Click the download icon next to any payment. The invoice downloads as a PDF immediately.' },
      ]},
      { type: 'h2', text: 'Invoice details' },
      { type: 'p', text: 'Each invoice includes: invoice number, date, your organisation name, description of service, amount, VAT (7.5%), and total. Invoices are compliant with Nigerian tax requirements.' },
      { type: 'note', text: 'If you need invoices addressed to a specific company name or with a specific billing address, update this in Billing → Company Details before your next payment.' },
    ],
  },
  {
    id: 'bi-4', category: 'Billing & Plans', readMins: 2,
    title: 'Cancelling your subscription',
    blocks: [
      { type: 'p', text: 'You can cancel your subscription at any time. Cancellation takes effect at the end of the current billing period — you continue to have full access until then.' },
      { type: 'h2', text: 'How to cancel' },
      { type: 'step-list', steps: [
        { title: 'Go to Billing', body: 'Click your workspace name → Settings → Billing.' },
        { title: 'Click Cancel Subscription', body: 'Scroll to the bottom and click "Cancel Subscription".' },
        { title: 'Choose reason', body: 'Select a cancellation reason (helps us improve).' },
        { title: 'Confirm', body: 'Click "Confirm Cancellation". You\'ll receive a confirmation email.' },
      ]},
      { type: 'h2', text: 'What happens to your data?' },
      { type: 'p', text: 'Your documents and data are retained for 90 days after cancellation. You can log back in and download everything during this period. After 90 days, data is permanently deleted.' },
      { type: 'warn', text: 'Cancellation is immediate for the subscription but data deletion is on a 90-day schedule. If you want to delete data sooner, go to Settings → Privacy → Delete all data.' },
      { type: 'h2', text: 'Reactivating' },
      { type: 'p', text: 'To reactivate within the 90-day window, go to Settings → Billing → Reactivate. All your documents and data will be restored.' },
    ],
  },
  {
    id: 'bi-5', category: 'Billing & Plans', readMins: 1,
    title: 'Custom pricing for large teams',
    blocks: [
      { type: 'p', text: 'For organisations with 20 or more users, or specific volume requirements, we offer custom pricing with flexible payment terms.' },
      { type: 'h2', text: 'What custom pricing includes' },
      { type: 'ul', items: [
        'Volume discount on Enterprise pricing',
        'Annual payment with institutional bank transfer (no card required)',
        'Custom SLA terms',
        'Dedicated implementation support',
        'Training sessions for your team',
        'Custom integrations with your existing HR, ERP, or contract systems',
      ]},
      { type: 'h2', text: 'How to get a quote' },
      { type: 'p', text: 'Email sales@mytypist.com with your organisation name, expected number of users, and primary use case. We typically respond within 1 business day with a tailored proposal.' },
      { type: 'tip', text: 'Government agencies and educational institutions may qualify for special pricing. Mention your organisation type in your email.' },
    ],
  },
]

const categories: Category[] = [
  {
    id: 'Getting Started',
    icon: BookOpen,
    title: 'Getting Started',
    desc: 'Set up your workspace and send your first document.',
    articleIds: allArticles.filter(a => a.category === 'Getting Started').map(a => a.id),
  },
  {
    id: 'Documents & Studio',
    icon: FileText,
    title: 'Documents & Studio',
    desc: 'Creating, editing, and managing documents.',
    articleIds: allArticles.filter(a => a.category === 'Documents & Studio').map(a => a.id),
  },
  {
    id: 'Signatures',
    icon: PenSquare,
    title: 'Signatures',
    desc: 'Sending, tracking, and managing signature requests.',
    articleIds: allArticles.filter(a => a.category === 'Signatures').map(a => a.id),
  },
  {
    id: 'Pipeline',
    icon: GitBranch,
    title: 'Pipeline',
    desc: 'Managing your document pipeline and approvals.',
    articleIds: allArticles.filter(a => a.category === 'Pipeline').map(a => a.id),
  },
  {
    id: 'Vault',
    icon: Archive,
    title: 'Vault',
    desc: 'Storing, searching, and versioning documents.',
    articleIds: allArticles.filter(a => a.category === 'Vault').map(a => a.id),
  },
  {
    id: 'Billing & Plans',
    icon: CreditCard,
    title: 'Billing & Plans',
    desc: 'Subscriptions, invoices, and upgrades.',
    articleIds: allArticles.filter(a => a.category === 'Billing & Plans').map(a => a.id),
  },
]

const popularArticleIds = [
  'gs-1', 'sig-1', 'sig-3', 'pl-1', 'ds-3', 'bi-2',
]

const faqs = [
  { q: 'How do I invite my team?', a: 'Go to Admin Console → Users & Roles → Invite User. Enter their email and assign a role. They\'ll receive an invitation link valid for 7 days.' },
  { q: 'Can recipients sign without a MyTypist account?', a: 'Yes. Recipients receive a secure signing link via email and sign directly in the browser. No account, no download, no friction.' },
  { q: 'What happens if a fidelity check fails?', a: 'The document is flagged and cannot advance to the Approval stage until all errors are resolved. You\'ll see a detailed error report in Studio.' },
  { q: 'How do I export a document with its audit trail?', a: 'Open the document in Studio → Export → select "PDF with audit trail". This bundles the signed PDF with a tamper-evident event log.' },
  { q: 'Is my data backed up?', a: 'Yes. All documents are stored with geographic redundancy and daily snapshots. Every version is retained indefinitely unless you explicitly delete it.' },
]

/* ─────────────────────────── block renderer ─────────────────── */

function RenderBlock({ block }: { block: Block }) {
  const noteStyle = (bg: string, border: string, icon: React.ReactNode) => (
    <div style={{ display: 'flex', gap: 12, padding: '12px 16px', background: bg, border: `1px solid ${border}`, borderRadius: 8, margin: '16px 0' }}>
      <div style={{ flexShrink: 0, marginTop: 1 }}>{icon}</div>
      <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: 'var(--color-text-primary)' }}>{block.text}</p>
    </div>
  )

  switch (block.type) {
    case 'h2':
      return <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.4, color: 'var(--color-text-primary)', margin: '32px 0 12px' }}>{block.text}</h2>
    case 'h3':
      return <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '24px 0 8px' }}>{block.text}</h3>
    case 'p':
      return <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-secondary)', margin: '0 0 14px' }}>{block.text}</p>
    case 'ul':
      return (
        <ul style={{ margin: '0 0 14px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol style={{ margin: '0 0 14px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 7 }}>
          {block.items?.map((item, i) => (
            <li key={i} style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{item}</li>
          ))}
        </ol>
      )
    case 'step-list':
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '16px 0' }}>
          {block.steps?.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 14 }}>
              <div style={{
                width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#fff', marginTop: 1,
              }}>{i + 1}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 3 }}>{step.title}</div>
                <div style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{step.body}</div>
              </div>
            </div>
          ))}
        </div>
      )
    case 'note':
      return noteStyle('rgba(108,71,255,0.06)', 'rgba(108,71,255,0.2)', <Info size={15} color="var(--color-accent)" />)
    case 'warn':
      return noteStyle('rgba(220,38,38,0.05)', 'rgba(220,38,38,0.2)', <AlertCircle size={15} color="#DC2626" />)
    case 'tip':
      return noteStyle('rgba(5,150,105,0.06)', 'rgba(5,150,105,0.2)', <CheckCircle size={15} color="#059669" />)
    default:
      return null
  }
}

/* ─────────────────────────── article view ───────────────────── */

function ArticleView({ article, onBack, onCategory }: {
  article: Article
  onBack: () => void
  onCategory: (cat: string) => void
}) {
  const cat = categories.find(c => c.id === article.category)!

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px 80px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28, fontSize: 13, color: 'var(--color-text-tertiary)', flexWrap: 'wrap' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--color-accent)', fontWeight: 600, fontSize: 13 }}>
          Support
        </button>
        <ChevronLeft size={12} style={{ transform: 'rotate(180deg)' }} />
        <button onClick={() => onCategory(article.category)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--color-accent)', fontWeight: 600, fontSize: 13 }}>
          {article.category}
        </button>
        <ChevronLeft size={12} style={{ transform: 'rotate(180deg)' }} />
        <span style={{ color: 'var(--color-text-tertiary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 200 }}>{article.title}</span>
      </div>

      {/* Article header */}
      <div style={{ marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(108,71,255,0.08)', border: '1px solid rgba(108,71,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <cat.icon size={14} color="var(--color-accent)" />
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: 0.4 }}>{article.category}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 12, lineHeight: 1.2 }}>
          {article.title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-text-quaternary)', fontSize: 12 }}>
          <Clock size={12} />
          <span>{article.readMins} min read</span>
        </div>
      </div>

      {/* Article body */}
      <div>
        {article.blocks.map((block, i) => <RenderBlock key={i} block={block} />)}
      </div>

      {/* Related articles footer */}
      <div style={{ marginTop: 48, paddingTop: 28, borderTop: '1px solid var(--color-border)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 16 }}>
          More in {article.category}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {allArticles.filter(a => a.category === article.category && a.id !== article.id).map(a => (
            <button
              key={a.id}
              onClick={() => onBack()}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: '1px solid var(--color-border-subtle)', textAlign: 'left', gap: 12,
              }}
            >
              <span style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500 }}>{a.title}</span>
              <ArrowRight size={13} color="var(--color-text-quaternary)" style={{ flexShrink: 0 }} />
            </button>
          ))}
        </div>
      </div>

      {/* Still need help */}
      <div style={{ marginTop: 40, padding: '24px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 10 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>Still need help?</div>
        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 14 }}>
          Our team responds within 4 hours on Professional, 1 hour on Enterprise.
        </p>
        <a href="mailto:support@mytypist.com" style={{ textDecoration: 'none' }}>
          <button className="btn btn--primary" style={{ height: 38, padding: '0 18px', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7 }}>
            <Mail size={13} />
            Email support
          </button>
        </a>
      </div>
    </div>
  )
}

/* ─────────────────────────── category view ──────────────────── */

function CategoryView({ cat, onBack, onArticle }: {
  cat: Category
  onBack: () => void
  onArticle: (id: string) => void
}) {
  const catArticles = allArticles.filter(a => a.category === cat.id)

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px 80px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28, fontSize: 13 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'var(--color-accent)', fontWeight: 600, fontSize: 13 }}>
          Support
        </button>
        <ChevronLeft size={12} style={{ transform: 'rotate(180deg)' }} />
        <span style={{ color: 'var(--color-text-tertiary)' }}>{cat.title}</span>
      </div>

      {/* Category header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(108,71,255,0.08)', border: '1px solid rgba(108,71,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <cat.icon size={20} color="var(--color-accent)" />
        </div>
        <div>
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>{cat.title}</h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0 }}>{cat.desc} · {catArticles.length} articles</p>
        </div>
      </div>

      {/* Article list */}
      <div style={{ border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
        {catArticles.map((article, i) => (
          <button
            key={article.id}
            onClick={() => onArticle(article.id)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: i < catArticles.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
              textAlign: 'left', gap: 12, transition: 'background 80ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-surface)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'none')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(108,71,255,0.07)', border: '1px solid rgba(108,71,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BookOpen size={12} color="var(--color-accent)" />
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{article.title}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={10} /> {article.readMins} min read
                </div>
              </div>
            </div>
            <ArrowRight size={14} color="var(--color-text-quaternary)" style={{ flexShrink: 0 }} />
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── main page ──────────────────────── */

export function SupportPage() {
  const [query, setQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [view, setView] = useState<{ type: 'home' } | { type: 'category'; id: string } | { type: 'article'; id: string }>({ type: 'home' })

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return allArticles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.blocks.some(b => b.text?.toLowerCase().includes(q) || b.items?.some(i => i.toLowerCase().includes(q)))
    ).slice(0, 8)
  }, [query])

  const goHome = () => { setView({ type: 'home' }); setQuery('') }
  const goCategory = (id: string) => setView({ type: 'category', id })
  const goArticle = (id: string) => setView({ type: 'article', id })

  if (view.type === 'article') {
    const article = allArticles.find(a => a.id === view.id)!
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
        <PublicHeader />
        <div style={{ flex: 1 }}>
          <ArticleView article={article} onBack={goHome} onCategory={goCategory} />
        </div>
        <PublicFooter />
      </div>
    )
  }

  if (view.type === 'category') {
    const cat = categories.find(c => c.id === view.id)!
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
        <PublicHeader />
        <div style={{ flex: 1 }}>
          <CategoryView cat={cat} onBack={goHome} onArticle={goArticle} />
        </div>
        <PublicFooter />
      </div>
    )
  }

  /* ── Home view ── */
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* Hero + Search */}
      <section style={{
        padding: '72px 20px 64px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(108,71,255,0.05) 0%, transparent 100%)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Support Center
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, color: 'var(--color-text-primary)', marginBottom: 14 }}>
            How can we help?
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 32 }}>
            Search our documentation, browse by category, or contact us directly.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
            <input
              className="input"
              style={{ height: 48, paddingLeft: 44, paddingRight: 16, fontSize: 15, width: '100%', boxSizing: 'border-box', boxShadow: 'var(--shadow-floating)' }}
              placeholder="Search documentation…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 8, boxShadow: 'var(--shadow-modal)', overflow: 'hidden', zIndex: 20,
              }}>
                {searchResults.length > 0 ? searchResults.map(a => (
                  <button
                    key={a.id}
                    onClick={() => { goArticle(a.id); setQuery('') }}
                    style={{
                      width: '100%', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                      borderBottom: '1px solid var(--color-border-subtle)', transition: 'background 80ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-bg-secondary)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                  >
                    <BookOpen size={13} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500 }}>{a.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{a.category}</div>
                    </div>
                  </button>
                )) : (
                  <div style={{ padding: '16px', fontSize: 13, color: 'var(--color-text-tertiary)', textAlign: 'center' }}>
                    No articles found. <a href="mailto:support@mytypist.com" style={{ color: 'var(--color-accent)' }}>Contact us</a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
            {[['30', 'articles'], ['6', 'categories'], ['< 4hrs', 'support response']].map(([n, l]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>{n}</span>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Browse by topic</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Documentation categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {categories.map(cat => {
              const catArticles = allArticles.filter(a => a.category === cat.id)
              return (
                <div
                  key={cat.id}
                  onClick={() => goCategory(cat.id)}
                  style={{
                    background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                    borderRadius: 10, padding: '24px', cursor: 'pointer',
                    transition: 'border-color 120ms, box-shadow 120ms',
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(108,71,255,0.3)'; el.style.boxShadow = '0 4px 20px rgba(108,71,255,0.08)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'var(--color-border)'; el.style.boxShadow = 'none' }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(108,71,255,0.08)', border: '1px solid rgba(108,71,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <cat.icon size={16} color="var(--color-accent)" />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>{cat.title}</div>
                  <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 16 }}>{cat.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {catArticles.slice(0, 3).map(article => (
                      <div key={article.id} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-border-strong)', flexShrink: 0 }} />
                        {article.title}
                      </div>
                    ))}
                    <div style={{ fontSize: 12, color: 'var(--color-accent)', fontWeight: 600, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                      View all {catArticles.length} articles
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular articles */}
      <section style={{ padding: '64px 20px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Popular</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 28 }}>
            Most read articles
          </h2>
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
            {popularArticleIds.map((id, i) => {
              const article = allArticles.find(a => a.id === id)!
              return (
                <button
                  key={id}
                  onClick={() => goArticle(id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px', background: 'none', border: 'none', cursor: 'pointer',
                    borderBottom: i < popularArticleIds.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                    textAlign: 'left', gap: 16, transition: 'background 80ms',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-bg-secondary)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-accent)', background: 'rgba(108,71,255,0.08)', border: '1px solid rgba(108,71,255,0.15)', padding: '2px 7px', borderRadius: 9999, flexShrink: 0 }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {article.title}
                    </span>
                  </div>
                  <ArrowRight size={13} color="var(--color-text-quaternary)" style={{ flexShrink: 0 }} />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Frequently asked questions
          </h2>
          <div style={{ borderTop: '1px solid var(--color-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={15} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={15} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />}
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)', paddingBottom: 18, marginTop: -6 }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '64px 20px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 10 }}>
            Still need help?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 36 }}>
            Our support team responds within 4 hours on Professional and 1 hour on Enterprise.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@mytypist.com" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={15} />
                Email support
              </button>
            </a>
            <Link to="/pricing">
              <button className="btn btn--secondary" style={{ height: 44, padding: '0 24px', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                View plans & SLAs
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
          <p style={{ fontSize: 12, color: 'var(--color-text-quaternary)', marginTop: 20 }}>
            Enterprise customers: contact your dedicated account manager directly.
          </p>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
