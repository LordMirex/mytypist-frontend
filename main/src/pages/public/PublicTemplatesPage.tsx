import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Search, X, ArrowRight, FileText } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

type Category = 'All' | 'Legal' | 'Academic' | 'Business' | 'HR & People' | 'Finance'

interface TemplateField {
  key: string
  label: string
  placeholder: string
  type?: 'text' | 'date' | 'select'
  options?: string[]
  defaultValue?: string
}

interface Template {
  id: number
  name: string
  desc: string
  category: Category
  fields: number
  pages: number
  color: string
  formFields: TemplateField[]
  previewFn: (vals: Record<string, string>) => PreviewSection[]
}

interface PreviewSection {
  type: 'heading' | 'subheading' | 'body' | 'field' | 'divider' | 'signature' | 'parties'
  content?: string
  label?: string
  value?: string
  parties?: Array<{ role: string; name: string }>
}

const categories: Category[] = ['All', 'Legal', 'Academic', 'Business', 'HR & People', 'Finance']

const catColors: Record<string, string> = {
  Legal: '#DC2626',
  Academic: '#6C47FF',
  Business: '#D97706',
  'HR & People': '#059669',
  Finance: '#0891B2',
}

const templates: Template[] = [
  {
    id: 1, name: 'Employment Agreement', category: 'HR & People',
    desc: 'Full-time employment contract with IP clause, probation terms, and confidentiality provisions.',
    fields: 14, pages: 4, color: '#059669',
    formFields: [
      { key: 'employeeName', label: 'Employee Full Name', placeholder: 'e.g. Chidera Okonkwo' },
      { key: 'position', label: 'Job Title / Position', placeholder: 'e.g. Software Engineer' },
      { key: 'companyName', label: 'Company Name', placeholder: 'e.g. TechCorp Nigeria Ltd.' },
      { key: 'startDate', label: 'Start Date', placeholder: '', type: 'date' },
      { key: 'salary', label: 'Monthly Salary (₦)', placeholder: 'e.g. 450,000' },
      { key: 'department', label: 'Department', placeholder: 'e.g. Engineering' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.companyName || '[Company Name]' },
      { type: 'subheading', content: 'EMPLOYMENT AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This Employment Agreement ("Agreement") is entered into as of ${v.startDate || '[Start Date]'}, between ${v.companyName || '[Company Name]'} ("Employer") and ${v.employeeName || '[Employee Name]'} ("Employee").` },
      { type: 'field', label: 'Position', value: v.position || '[Job Title]' },
      { type: 'field', label: 'Department', value: v.department || '[Department]' },
      { type: 'field', label: 'Monthly Salary', value: v.salary ? `₦${v.salary}` : '[Salary]' },
      { type: 'field', label: 'Start Date', value: v.startDate || '[Date]' },
      { type: 'body', content: 'The Employee agrees to perform duties diligently and maintain confidentiality of all proprietary information. Probationary period: 3 months.' },
      { type: 'divider' },
      { type: 'signature', content: 'Authorised Signatures' },
      { type: 'parties', parties: [{ role: 'Employer', name: v.companyName || '__________' }, { role: 'Employee', name: v.employeeName || '__________' }] },
    ],
  },
  {
    id: 2, name: 'Student Acceptance Letter', category: 'Academic',
    desc: 'University admission offer letter with programme details, student ID field, and reporting instructions.',
    fields: 8, pages: 1, color: '#6C47FF',
    formFields: [
      { key: 'studentName', label: 'Student Full Name', placeholder: 'e.g. Amaka Eze' },
      { key: 'programme', label: 'Programme / Course', placeholder: 'e.g. B.Sc. Computer Science' },
      { key: 'university', label: 'Institution Name', placeholder: 'e.g. University of Lagos' },
      { key: 'level', label: 'Level', placeholder: '', type: 'select', options: ['100 Level', '200 Level', 'Postgraduate', 'PhD'] },
      { key: 'session', label: 'Academic Session', placeholder: 'e.g. 2025/2026' },
      { key: 'reportDate', label: 'Reporting Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.university || '[University Name]' },
      { type: 'subheading', content: 'OFFER OF ADMISSION' },
      { type: 'divider' },
      { type: 'body', content: `Dear ${v.studentName || '[Student Name]'},` },
      { type: 'body', content: `We are pleased to offer you admission to ${v.university || '[University Name]'} for the ${v.session || '[Session]'} academic session.` },
      { type: 'field', label: 'Programme', value: v.programme || '[Programme]' },
      { type: 'field', label: 'Level of Entry', value: v.level || '[Level]' },
      { type: 'field', label: 'Reporting Date', value: v.reportDate || '[Date]' },
      { type: 'body', content: 'Please report to the Student Affairs office with this letter and all required credentials on or before the reporting date.' },
      { type: 'divider' },
      { type: 'signature', content: "Registrar's Signature" },
    ],
  },
  {
    id: 3, name: 'Mutual Non-Disclosure Agreement', category: 'Legal',
    desc: 'Two-party NDA covering confidential information, permitted disclosures, and governing law.',
    fields: 12, pages: 3, color: '#DC2626',
    formFields: [
      { key: 'party1', label: 'Party 1 (Your Name / Company)', placeholder: 'e.g. Ade Consulting Ltd.' },
      { key: 'party2', label: 'Party 2 (Other Party)', placeholder: 'e.g. BridgeTech Solutions' },
      { key: 'purpose', label: 'Purpose of Disclosure', placeholder: 'e.g. Evaluation of potential partnership' },
      { key: 'duration', label: 'Confidentiality Duration', placeholder: '', type: 'select', options: ['1 year', '2 years', '3 years', '5 years', 'Indefinite'] },
      { key: 'effectiveDate', label: 'Effective Date', placeholder: '', type: 'date' },
      { key: 'governingLaw', label: 'Governing Law (State/Country)', placeholder: 'e.g. Lagos, Nigeria' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'MUTUAL NON-DISCLOSURE AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of ${v.effectiveDate || '[Date]'} between ${v.party1 || '[Party 1]'} and ${v.party2 || '[Party 2]'} (collectively the "Parties").` },
      { type: 'field', label: 'Purpose', value: v.purpose || '[Purpose]' },
      { type: 'field', label: 'Confidentiality Period', value: v.duration || '[Duration]' },
      { type: 'field', label: 'Governing Law', value: v.governingLaw || '[State/Country]' },
      { type: 'body', content: 'Each party agrees not to disclose confidential information received from the other party to any third party or use it for any purpose other than the stated purpose above.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: v.party1 || '[Party 1]', name: '___________' }, { role: v.party2 || '[Party 2]', name: '___________' }] },
    ],
  },
  {
    id: 4, name: 'Vendor Master Agreement', category: 'Business',
    desc: 'Comprehensive vendor contract covering services, payment terms, warranties, and dispute resolution.',
    fields: 18, pages: 6, color: '#D97706',
    formFields: [
      { key: 'vendorName', label: 'Vendor Company Name', placeholder: 'e.g. Nexus Supplies Ltd.' },
      { key: 'clientName', label: 'Client Company Name', placeholder: 'e.g. MainCorp Nigeria' },
      { key: 'serviceDesc', label: 'Services / Goods Provided', placeholder: 'e.g. IT equipment supply & maintenance' },
      { key: 'paymentTerms', label: 'Payment Terms', placeholder: '', type: 'select', options: ['Net 7', 'Net 15', 'Net 30', 'Net 60', '50% upfront / 50% on delivery'] },
      { key: 'contractValue', label: 'Contract Value (₦)', placeholder: 'e.g. 5,000,000' },
      { key: 'startDate', label: 'Agreement Start Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'VENDOR MASTER AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This Vendor Master Agreement is entered into between ${v.clientName || '[Client]'} ("Client") and ${v.vendorName || '[Vendor]'} ("Vendor") effective ${v.startDate || '[Date]'}.` },
      { type: 'field', label: 'Services / Goods', value: v.serviceDesc || '[Description]' },
      { type: 'field', label: 'Contract Value', value: v.contractValue ? `₦${v.contractValue}` : '[Value]' },
      { type: 'field', label: 'Payment Terms', value: v.paymentTerms || '[Terms]' },
      { type: 'body', content: 'Vendor shall provide the agreed services/goods to a standard of reasonable care and skill. All warranties implied by applicable law are expressly preserved.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Client', name: v.clientName || '__________' }, { role: 'Vendor', name: v.vendorName || '__________' }] },
    ],
  },
  {
    id: 5, name: 'Faculty ID Request Form', category: 'Academic',
    desc: 'Academic staff ID card request with auto-populated department and employee data fields.',
    fields: 6, pages: 1, color: '#6C47FF',
    formFields: [
      { key: 'staffName', label: 'Staff Full Name', placeholder: 'e.g. Dr. Emeka Nwosu' },
      { key: 'staffId', label: 'Staff ID Number', placeholder: 'e.g. STF/2024/001' },
      { key: 'faculty', label: 'Faculty', placeholder: 'e.g. Faculty of Engineering' },
      { key: 'department', label: 'Department', placeholder: 'e.g. Electrical Engineering' },
      { key: 'rank', label: 'Academic Rank', placeholder: '', type: 'select', options: ['Lecturer I', 'Lecturer II', 'Senior Lecturer', 'Associate Professor', 'Professor', 'Non-Academic Staff'] },
      { key: 'dateOfRequest', label: 'Date of Request', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'FACULTY STAFF ID REQUEST FORM' },
      { type: 'divider' },
      { type: 'field', label: 'Staff Name', value: v.staffName || '[Full Name]' },
      { type: 'field', label: 'Staff ID', value: v.staffId || '[ID Number]' },
      { type: 'field', label: 'Faculty', value: v.faculty || '[Faculty]' },
      { type: 'field', label: 'Department', value: v.department || '[Department]' },
      { type: 'field', label: 'Academic Rank', value: v.rank || '[Rank]' },
      { type: 'field', label: 'Date', value: v.dateOfRequest || '[Date]' },
      { type: 'body', content: 'This form certifies that the above-named staff member is requesting an official institutional ID card. All information provided is accurate.' },
      { type: 'divider' },
      { type: 'signature', content: 'Head of Department Signature' },
    ],
  },
  {
    id: 6, name: 'Board Resolution', category: 'Business',
    desc: 'Corporate board resolution document for approving major decisions, with signatory blocks.',
    fields: 10, pages: 2, color: '#D97706',
    formFields: [
      { key: 'companyName', label: 'Company Name', placeholder: 'e.g. Pinnacle Holdings Ltd.' },
      { key: 'resolutionTitle', label: 'Resolution Subject', placeholder: 'e.g. Approval of New Office Lease' },
      { key: 'meetingDate', label: 'Board Meeting Date', placeholder: '', type: 'date' },
      { key: 'chairperson', label: 'Chairperson Name', placeholder: 'e.g. Alhaji Bello Suleiman' },
      { key: 'secretary', label: 'Company Secretary', placeholder: 'e.g. Ngozi Adeyemi' },
      { key: 'decision', label: 'Resolution Decision (brief)', placeholder: 'e.g. Board unanimously approves lease at ₦12m p.a.' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.companyName || '[Company Name]' },
      { type: 'subheading', content: 'BOARD RESOLUTION' },
      { type: 'divider' },
      { type: 'body', content: `At a duly convened meeting of the Board of Directors of ${v.companyName || '[Company Name]'} held on ${v.meetingDate || '[Date]'}, the following resolution was passed:` },
      { type: 'field', label: 'Subject', value: v.resolutionTitle || '[Resolution Subject]' },
      { type: 'field', label: 'Decision', value: v.decision || '[Resolution Text]' },
      { type: 'body', content: 'This resolution is passed by the unanimous vote of all directors present and shall take immediate effect.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Chairperson', name: v.chairperson || '__________' }, { role: 'Company Secretary', name: v.secretary || '__________' }] },
    ],
  },
  {
    id: 7, name: 'Service Level Agreement', category: 'Legal',
    desc: 'SLA template defining service scope, uptime commitments, response times, and remedies.',
    fields: 16, pages: 5, color: '#DC2626',
    formFields: [
      { key: 'providerName', label: 'Service Provider', placeholder: 'e.g. CloudHost Nigeria' },
      { key: 'clientName', label: 'Client Name', placeholder: 'e.g. RetailCo Ltd.' },
      { key: 'serviceType', label: 'Service Type', placeholder: 'e.g. Cloud hosting & managed support' },
      { key: 'uptime', label: 'Uptime Guarantee', placeholder: '', type: 'select', options: ['99.9%', '99.5%', '99%', '95%'] },
      { key: 'responseTime', label: 'Incident Response Time', placeholder: '', type: 'select', options: ['1 hour', '2 hours', '4 hours', '8 hours', '24 hours'] },
      { key: 'startDate', label: 'Agreement Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'SERVICE LEVEL AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This SLA is entered into between ${v.providerName || '[Provider]'} ("Provider") and ${v.clientName || '[Client]'} ("Client") effective ${v.startDate || '[Date]'}.` },
      { type: 'field', label: 'Service', value: v.serviceType || '[Service]' },
      { type: 'field', label: 'Uptime Guarantee', value: v.uptime || '[Uptime]' },
      { type: 'field', label: 'Incident Response', value: v.responseTime || '[Response Time]' },
      { type: 'body', content: 'In the event of downtime exceeding the guaranteed uptime, Client shall be entitled to service credits as defined in Schedule A.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Provider', name: v.providerName || '__________' }, { role: 'Client', name: v.clientName || '__________' }] },
    ],
  },
  {
    id: 8, name: 'Invoice Template', category: 'Finance',
    desc: 'Professional invoice with itemized line items, tax calculation, and payment terms.',
    fields: 9, pages: 1, color: '#0891B2',
    formFields: [
      { key: 'businessName', label: 'Your Business Name', placeholder: 'e.g. Zara Design Studio' },
      { key: 'clientName', label: 'Client / Billed To', placeholder: 'e.g. PrimeCo Ltd.' },
      { key: 'invoiceNum', label: 'Invoice Number', placeholder: 'e.g. INV-2025-001' },
      { key: 'serviceDesc', label: 'Service / Item Description', placeholder: 'e.g. Brand identity design package' },
      { key: 'amount', label: 'Amount (₦)', placeholder: 'e.g. 250,000' },
      { key: 'dueDate', label: 'Payment Due Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.businessName || '[Business Name]' },
      { type: 'subheading', content: `INVOICE ${v.invoiceNum ? `· ${v.invoiceNum}` : ''}` },
      { type: 'divider' },
      { type: 'field', label: 'Billed To', value: v.clientName || '[Client Name]' },
      { type: 'field', label: 'Due Date', value: v.dueDate || '[Due Date]' },
      { type: 'body', content: 'SERVICES RENDERED:' },
      { type: 'field', label: v.serviceDesc || '[Service Description]', value: v.amount ? `₦${v.amount}` : '[Amount]' },
      { type: 'divider' },
      { type: 'field', label: 'TOTAL DUE', value: v.amount ? `₦${v.amount}` : '[Total]' },
      { type: 'body', content: `Payment is due by ${v.dueDate || '[date]'}. Bank transfer details enclosed. Late payments attract 5% monthly interest.` },
    ],
  },
  {
    id: 9, name: 'Offer Letter', category: 'HR & People',
    desc: 'Job offer letter with position title, compensation, start date, and conditions of employment.',
    fields: 11, pages: 2, color: '#059669',
    formFields: [
      { key: 'candidateName', label: 'Candidate Full Name', placeholder: 'e.g. Funmilayo Adebayo' },
      { key: 'position', label: 'Offered Position', placeholder: 'e.g. Product Manager' },
      { key: 'companyName', label: 'Company Name', placeholder: 'e.g. NextGen Africa' },
      { key: 'salary', label: 'Annual Salary (₦)', placeholder: 'e.g. 6,000,000' },
      { key: 'startDate', label: 'Proposed Start Date', placeholder: '', type: 'date' },
      { key: 'offerExpiry', label: 'Offer Expiry Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.companyName || '[Company Name]' },
      { type: 'subheading', content: 'OFFER OF EMPLOYMENT' },
      { type: 'divider' },
      { type: 'body', content: `Dear ${v.candidateName || '[Candidate Name]'},` },
      { type: 'body', content: `We are delighted to offer you the position of ${v.position || '[Position]'} at ${v.companyName || '[Company]'}, subject to the terms set out below.` },
      { type: 'field', label: 'Annual Salary', value: v.salary ? `₦${v.salary}` : '[Salary]' },
      { type: 'field', label: 'Start Date', value: v.startDate || '[Date]' },
      { type: 'field', label: 'Offer Valid Until', value: v.offerExpiry || '[Date]' },
      { type: 'body', content: 'Please sign and return this letter by the expiry date to confirm your acceptance.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Authorised Signatory', name: '__________' }, { role: 'Candidate Acceptance', name: v.candidateName || '__________' }] },
    ],
  },
  {
    id: 10, name: 'Student ID Request', category: 'Academic',
    desc: 'Undergraduate and graduate student ID card request with programme and photo submission fields.',
    fields: 7, pages: 1, color: '#6C47FF',
    formFields: [
      { key: 'studentName', label: 'Student Full Name', placeholder: 'e.g. Uche Obi' },
      { key: 'matricNo', label: 'Matriculation Number', placeholder: 'e.g. 2023/UNILAG/ENG/001' },
      { key: 'faculty', label: 'Faculty', placeholder: 'e.g. Faculty of Social Sciences' },
      { key: 'department', label: 'Department', placeholder: 'e.g. Economics' },
      { key: 'level', label: 'Current Level', placeholder: '', type: 'select', options: ['100 Level', '200 Level', '300 Level', '400 Level', '500 Level', 'Postgraduate'] },
      { key: 'session', label: 'Academic Session', placeholder: 'e.g. 2025/2026' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'STUDENT ID CARD REQUEST FORM' },
      { type: 'divider' },
      { type: 'field', label: 'Full Name', value: v.studentName || '[Name]' },
      { type: 'field', label: 'Matric No.', value: v.matricNo || '[Matric No.]' },
      { type: 'field', label: 'Faculty', value: v.faculty || '[Faculty]' },
      { type: 'field', label: 'Department', value: v.department || '[Department]' },
      { type: 'field', label: 'Level', value: v.level || '[Level]' },
      { type: 'field', label: 'Session', value: v.session || '[Session]' },
      { type: 'body', content: 'I hereby confirm that the information provided is accurate. I understand that this card is non-transferable and must be carried at all times within the institution.' },
      { type: 'divider' },
      { type: 'signature', content: 'Student Signature' },
    ],
  },
  {
    id: 11, name: 'Freelance Contract', category: 'Legal',
    desc: 'Independent contractor agreement covering scope, deliverables, payment, and intellectual property.',
    fields: 13, pages: 3, color: '#DC2626',
    formFields: [
      { key: 'freelancerName', label: 'Freelancer / Contractor Name', placeholder: 'e.g. Tolu Designs' },
      { key: 'clientName', label: 'Client Name', placeholder: 'e.g. Bloom Media Ltd.' },
      { key: 'projectDesc', label: 'Project / Deliverables', placeholder: 'e.g. Website design and development' },
      { key: 'fee', label: 'Total Project Fee (₦)', placeholder: 'e.g. 350,000' },
      { key: 'deadline', label: 'Project Deadline', placeholder: '', type: 'date' },
      { key: 'paymentTerms', label: 'Payment Structure', placeholder: '', type: 'select', options: ['Full payment upfront', '50% upfront / 50% on delivery', 'Milestone-based', 'Net 30 on completion'] },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'FREELANCE SERVICE AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This agreement is between ${v.clientName || '[Client]'} ("Client") and ${v.freelancerName || '[Contractor]'} ("Contractor") for the following work:` },
      { type: 'field', label: 'Scope of Work', value: v.projectDesc || '[Project Description]' },
      { type: 'field', label: 'Total Fee', value: v.fee ? `₦${v.fee}` : '[Fee]' },
      { type: 'field', label: 'Payment Terms', value: v.paymentTerms || '[Terms]' },
      { type: 'field', label: 'Deadline', value: v.deadline || '[Date]' },
      { type: 'body', content: 'All intellectual property created under this agreement transfers to Client upon full payment. Contractor retains the right to display work in portfolio.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Client', name: v.clientName || '__________' }, { role: 'Contractor', name: v.freelancerName || '__________' }] },
    ],
  },
  {
    id: 12, name: 'Budget Proposal', category: 'Finance',
    desc: 'Departmental or project budget request with itemized cost breakdown and approval signature blocks.',
    fields: 8, pages: 2, color: '#0891B2',
    formFields: [
      { key: 'department', label: 'Department / Team', placeholder: 'e.g. Marketing Department' },
      { key: 'projectName', label: 'Project / Budget Title', placeholder: 'e.g. Q3 2025 Marketing Budget' },
      { key: 'preparedBy', label: 'Prepared By', placeholder: 'e.g. Seun Adewale, Head of Marketing' },
      { key: 'totalBudget', label: 'Total Budget Requested (₦)', placeholder: 'e.g. 2,500,000' },
      { key: 'period', label: 'Budget Period', placeholder: 'e.g. July – September 2025' },
      { key: 'submittedDate', label: 'Date Submitted', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'BUDGET PROPOSAL' },
      { type: 'divider' },
      { type: 'field', label: 'Department', value: v.department || '[Department]' },
      { type: 'field', label: 'Budget Title', value: v.projectName || '[Project Name]' },
      { type: 'field', label: 'Prepared By', value: v.preparedBy || '[Name & Title]' },
      { type: 'field', label: 'Budget Period', value: v.period || '[Period]' },
      { type: 'field', label: 'Total Requested', value: v.totalBudget ? `₦${v.totalBudget}` : '[Amount]' },
      { type: 'field', label: 'Date Submitted', value: v.submittedDate || '[Date]' },
      { type: 'body', content: 'The above budget is required to achieve the departmental objectives for the stated period. A detailed breakdown is provided in the attached schedule.' },
      { type: 'divider' },
      { type: 'signature', content: 'Approval Signatures Required' },
    ],
  },
  {
    id: 13, name: 'Performance Review', category: 'HR & People',
    desc: 'Annual or mid-year employee performance evaluation with rating scales and development plan.',
    fields: 15, pages: 3, color: '#059669',
    formFields: [
      { key: 'employeeName', label: 'Employee Name', placeholder: 'e.g. Kemi Olatunji' },
      { key: 'role', label: 'Role / Position', placeholder: 'e.g. Senior Analyst' },
      { key: 'reviewPeriod', label: 'Review Period', placeholder: 'e.g. January – June 2025' },
      { key: 'overallRating', label: 'Overall Rating', placeholder: '', type: 'select', options: ['5 – Exceptional', '4 – Exceeds Expectations', '3 – Meets Expectations', '2 – Needs Improvement', '1 – Unsatisfactory'] },
      { key: 'reviewerName', label: 'Reviewer / Manager', placeholder: 'e.g. Chukwuemeka Bello' },
      { key: 'reviewDate', label: 'Review Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'EMPLOYEE PERFORMANCE REVIEW' },
      { type: 'divider' },
      { type: 'field', label: 'Employee', value: v.employeeName || '[Name]' },
      { type: 'field', label: 'Position', value: v.role || '[Role]' },
      { type: 'field', label: 'Review Period', value: v.reviewPeriod || '[Period]' },
      { type: 'field', label: 'Overall Rating', value: v.overallRating || '[Rating]' },
      { type: 'field', label: 'Reviewed By', value: v.reviewerName || '[Manager]' },
      { type: 'field', label: 'Date', value: v.reviewDate || '[Date]' },
      { type: 'body', content: 'This review is intended to provide structured feedback, recognise achievements, and set development goals for the next review period. Ratings are based on KPIs agreed at the beginning of the period.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Manager', name: v.reviewerName || '__________' }, { role: 'Employee', name: v.employeeName || '__________' }] },
    ],
  },
  {
    id: 14, name: 'Partnership Agreement', category: 'Business',
    desc: 'Business partnership agreement defining roles, profit sharing, decision rights, and exit terms.',
    fields: 20, pages: 7, color: '#D97706',
    formFields: [
      { key: 'partner1', label: 'Partner 1 Full Name / Company', placeholder: 'e.g. Ifeanyi Obi & Associates' },
      { key: 'partner2', label: 'Partner 2 Full Name / Company', placeholder: 'e.g. Stella Ventures Ltd.' },
      { key: 'businessName', label: 'Partnership / Business Name', placeholder: 'e.g. IOS Ventures' },
      { key: 'profitSplit', label: 'Profit Share Split', placeholder: '', type: 'select', options: ['50% / 50%', '60% / 40%', '70% / 30%', '75% / 25%', 'Custom (specify in schedule)'] },
      { key: 'duration', label: 'Partnership Duration', placeholder: '', type: 'select', options: ['1 year', '2 years', '5 years', '10 years', 'Indefinite'] },
      { key: 'commenceDate', label: 'Commencement Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'subheading', content: 'BUSINESS PARTNERSHIP AGREEMENT' },
      { type: 'divider' },
      { type: 'body', content: `This Partnership Agreement is made between ${v.partner1 || '[Partner 1]'} and ${v.partner2 || '[Partner 2]'}, collectively forming ${v.businessName || '[Business Name]'}, effective ${v.commenceDate || '[Date]'}.` },
      { type: 'field', label: 'Business Name', value: v.businessName || '[Name]' },
      { type: 'field', label: 'Profit Distribution', value: v.profitSplit || '[Split]' },
      { type: 'field', label: 'Duration', value: v.duration || '[Duration]' },
      { type: 'body', content: 'Each partner shall contribute agreed capital and time. All major decisions require unanimous consent. Exit clauses are defined in Schedule B.' },
      { type: 'divider' },
      { type: 'parties', parties: [{ role: 'Partner 1', name: v.partner1 || '__________' }, { role: 'Partner 2', name: v.partner2 || '__________' }] },
    ],
  },
  {
    id: 15, name: 'Internship Offer Letter', category: 'HR & People',
    desc: 'Formal internship offer with duration, stipend, department, and supervisor assignment fields.',
    fields: 9, pages: 1, color: '#059669',
    formFields: [
      { key: 'internName', label: 'Intern Full Name', placeholder: 'e.g. Blessing Nwachukwu' },
      { key: 'companyName', label: 'Company Name', placeholder: 'e.g. TechForward Ltd.' },
      { key: 'department', label: 'Department', placeholder: 'e.g. Software Engineering' },
      { key: 'stipend', label: 'Monthly Stipend (₦)', placeholder: 'e.g. 50,000' },
      { key: 'startDate', label: 'Start Date', placeholder: '', type: 'date' },
      { key: 'endDate', label: 'End Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.companyName || '[Company Name]' },
      { type: 'subheading', content: 'INTERNSHIP OFFER LETTER' },
      { type: 'divider' },
      { type: 'body', content: `Dear ${v.internName || '[Intern Name]'},` },
      { type: 'body', content: `We are pleased to offer you an internship position at ${v.companyName || '[Company]'} in the ${v.department || '[Department]'} department.` },
      { type: 'field', label: 'Monthly Stipend', value: v.stipend ? `₦${v.stipend}` : '[Stipend]' },
      { type: 'field', label: 'Start Date', value: v.startDate || '[Date]' },
      { type: 'field', label: 'End Date', value: v.endDate || '[Date]' },
      { type: 'body', content: 'Please report to HR on your first day. A laptop and access credentials will be provided.' },
      { type: 'divider' },
      { type: 'signature', content: 'HR Manager Signature' },
    ],
  },
  {
    id: 16, name: 'Purchase Order', category: 'Finance',
    desc: 'Vendor purchase order with item description, quantity, unit price, delivery terms, and approval.',
    fields: 11, pages: 1, color: '#0891B2',
    formFields: [
      { key: 'companyName', label: 'Purchasing Company', placeholder: 'e.g. BuildRight Construction Ltd.' },
      { key: 'vendorName', label: 'Vendor / Supplier', placeholder: 'e.g. Lagos Steel Merchants' },
      { key: 'poNumber', label: 'PO Number', placeholder: 'e.g. PO-2025-045' },
      { key: 'itemDesc', label: 'Item / Goods Description', placeholder: 'e.g. 500 bags of cement (Dangote)' },
      { key: 'totalAmount', label: 'Total Amount (₦)', placeholder: 'e.g. 1,250,000' },
      { key: 'deliveryDate', label: 'Expected Delivery Date', placeholder: '', type: 'date' },
    ],
    previewFn: (v) => [
      { type: 'heading', content: v.companyName || '[Company Name]' },
      { type: 'subheading', content: `PURCHASE ORDER ${v.poNumber ? `· ${v.poNumber}` : ''}` },
      { type: 'divider' },
      { type: 'field', label: 'Supplier', value: v.vendorName || '[Vendor]' },
      { type: 'field', label: 'Item Description', value: v.itemDesc || '[Item]' },
      { type: 'field', label: 'Total Amount', value: v.totalAmount ? `₦${v.totalAmount}` : '[Amount]' },
      { type: 'field', label: 'Delivery Date', value: v.deliveryDate || '[Date]' },
      { type: 'body', content: 'Goods must be delivered in full to the address specified. Partial delivery must be pre-approved. This PO constitutes a binding order upon vendor acceptance.' },
      { type: 'divider' },
      { type: 'signature', content: 'Authorised Purchaser' },
    ],
  },
]

function TemplateMiniPreview({ color, filled }: { color: string; filled?: boolean }) {
  return (
    <div style={{
      height: 180, background: '#F5F5F2',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: color,
      }} />
      <div style={{
        width: '100%', maxWidth: 170,
        background: '#fff',
        borderRadius: 2,
        padding: '14px 16px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      }}>
        <div style={{ height: 5, background: color, borderRadius: 2, marginBottom: 10, width: '50%' }} />
        <div style={{ height: 3, background: '#e5e5e3', borderRadius: 1, marginBottom: 5, width: '85%' }} />
        <div style={{ height: 3, background: '#e5e5e3', borderRadius: 1, marginBottom: 10, width: '70%' }} />
        <div style={{ height: 1, background: '#ebebea', marginBottom: 10 }} />
        <div style={{
          height: 14, background: `${color}14`, border: `1px solid ${color}28`,
          borderRadius: 2, marginBottom: 5, width: '65%',
          display: 'flex', alignItems: 'center', paddingLeft: 6,
        }}>
          <div style={{ height: 2, background: filled ? color : '#d0d0cc', borderRadius: 1, width: filled ? '60%' : '0%', transition: 'width 300ms' }} />
        </div>
        <div style={{
          height: 14, background: `${color}14`, border: `1px solid ${color}28`,
          borderRadius: 2, marginBottom: 10, width: '80%',
          display: 'flex', alignItems: 'center', paddingLeft: 6,
        }}>
          <div style={{ height: 2, background: filled ? color : '#d0d0cc', borderRadius: 1, width: filled ? '75%' : '0%', transition: 'width 300ms 50ms' }} />
        </div>
        <div style={{ height: 1, background: '#ebebea', marginBottom: 8 }} />
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ height: 8, background: color, borderRadius: 1, width: '30%', opacity: 0.7 }} />
          <div style={{ height: 8, background: '#e5e5e3', borderRadius: 1, width: '30%' }} />
        </div>
      </div>
    </div>
  )
}

function LiveDocPreview({ sections, color }: { sections: PreviewSection[]; color: string }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 4,
      boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
      padding: '28px 28px 32px',
      fontFamily: '"Georgia", serif',
      fontSize: 12,
      lineHeight: 1.65,
      color: '#222',
      minHeight: 480,
      maxHeight: 520,
      overflowY: 'auto',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: color, borderRadius: '4px 4px 0 0' }} />
      <div style={{ marginTop: 4 }}>
        {sections.map((s, i) => {
          if (s.type === 'heading') return (
            <div key={i} style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 4, fontFamily: 'sans-serif', letterSpacing: -0.3 }}>{s.content}</div>
          )
          if (s.type === 'subheading') return (
            <div key={i} style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: color, marginBottom: 14, fontFamily: 'sans-serif' }}>{s.content}</div>
          )
          if (s.type === 'divider') return (
            <div key={i} style={{ height: 1, background: '#e8e8e6', margin: '12px 0' }} />
          )
          if (s.type === 'body') return (
            <p key={i} style={{ fontSize: 11, color: '#444', lineHeight: 1.7, marginBottom: 10 }}>{s.content}</p>
          )
          if (s.type === 'field') return (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 7, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#888', fontFamily: 'sans-serif', minWidth: 100, paddingTop: 1, flexShrink: 0 }}>{s.label}:</span>
              <span style={{
                fontSize: 11, color: s.value && !s.value.startsWith('[') ? '#111' : '#bbb',
                fontWeight: s.value && !s.value.startsWith('[') ? 600 : 400,
                background: s.value && !s.value.startsWith('[') ? `${color}0a` : 'transparent',
                padding: s.value && !s.value.startsWith('[') ? '1px 6px' : '0',
                borderRadius: 2,
                transition: 'all 200ms',
              }}>{s.value || '[empty]'}</span>
            </div>
          )
          if (s.type === 'signature') return (
            <div key={i} style={{ marginTop: 4, marginBottom: 8 }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: '#999', fontFamily: 'sans-serif', marginBottom: 8 }}>{s.content}</div>
              <div style={{ height: 24, borderBottom: '1px solid #ccc', width: 140 }} />
            </div>
          )
          if (s.type === 'parties' && s.parties) return (
            <div key={i} style={{ display: 'flex', gap: 20, marginTop: 4, flexWrap: 'wrap' }}>
              {s.parties.map((p, pi) => (
                <div key={pi} style={{ flex: 1, minWidth: 100 }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: '#999', fontFamily: 'sans-serif', marginBottom: 6 }}>{p.role}</div>
                  <div style={{ height: 20, borderBottom: '1px solid #ccc', marginBottom: 4 }} />
                  <div style={{ fontSize: 10, color: '#555', fontFamily: 'sans-serif' }}>{p.name}</div>
                </div>
              ))}
            </div>
          )
          return null
        })}
      </div>
    </div>
  )
}

function TemplateModal({ template, onClose }: { template: Template; onClose: () => void }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)

  const handleChange = useCallback((key: string, val: string) => {
    setValues(prev => ({ ...prev, [key]: val }))
  }, [])

  const previewSections = template.previewFn(values)
  const filledCount = Object.values(values).filter(v => v.trim()).length

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        background: 'var(--color-bg)',
        borderRadius: 14,
        boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
        width: '100%', maxWidth: 920,
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
      }}>
        {/* Modal Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid var(--color-border)',
          position: 'sticky', top: 0, background: 'var(--color-bg)', zIndex: 2,
          borderRadius: '14px 14px 0 0',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: template.color }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: catColors[template.category] || 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {template.category}
              </span>
            </div>
            <h2 style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.4, color: 'var(--color-text-primary)', margin: 0 }}>{template.name}</h2>
          </div>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 8, background: 'var(--color-surface)',
            border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', flexShrink: 0,
          }}>
            <X size={16} color="var(--color-text-tertiary)" />
          </button>
        </div>

        {/* Progress bar */}
        <div style={{ height: 3, background: 'var(--color-border)' }}>
          <div style={{
            height: '100%', background: template.color,
            width: `${Math.min(100, (filledCount / template.formFields.length) * 100)}%`,
            transition: 'width 200ms',
            borderRadius: '0 3px 3px 0',
          }} />
        </div>

        {/* Two-column body */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 0,
        }} className="template-modal-grid">
          {/* Form panel */}
          <div style={{ padding: '28px 24px', borderRight: '1px solid var(--color-border)' }}>
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {template.desc}
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <span style={{ padding: '3px 9px', borderRadius: 9999, fontSize: 10, fontWeight: 700, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-tertiary)' }}>
                  {template.fields} fields
                </span>
                <span style={{ padding: '3px 9px', borderRadius: 9999, fontSize: 10, fontWeight: 700, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-tertiary)' }}>
                  {template.pages} page{template.pages > 1 ? 's' : ''}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {template.formFields.map(field => (
                <div key={field.key}>
                  <label style={{
                    display: 'block', fontSize: 12, fontWeight: 600,
                    color: 'var(--color-text-primary)', marginBottom: 6,
                  }}>
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      value={values[field.key] || ''}
                      onChange={e => handleChange(field.key, e.target.value)}
                      style={{
                        width: '100%', height: 40, padding: '0 12px',
                        border: '1px solid var(--color-border)',
                        borderRadius: 7, background: 'var(--color-surface)',
                        color: values[field.key] ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                        fontSize: 16, cursor: 'pointer',
                        outline: 'none', boxSizing: 'border-box',
                        appearance: 'none',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23999\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center',
                      }}
                    >
                      <option value="">Select…</option>
                      {field.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      value={values[field.key] || ''}
                      onChange={e => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      style={{
                        width: '100%', height: 40, padding: '0 12px',
                        border: `1px solid ${values[field.key] ? template.color + '50' : 'var(--color-border)'}`,
                        borderRadius: 7, background: 'var(--color-surface)',
                        color: 'var(--color-text-primary)',
                        fontSize: 16, outline: 'none', boxSizing: 'border-box',
                        transition: 'border-color 150ms',
                      }}
                      onFocus={e => { e.target.style.borderColor = template.color; e.target.style.boxShadow = `0 0 0 3px ${template.color}18` }}
                      onBlur={e => { e.target.style.borderColor = values[field.key] ? template.color + '50' : 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Auth prompt */}
            {showAuthPrompt ? (
              <div style={{
                marginTop: 24, padding: 16, background: 'rgba(108,71,255,0.06)',
                border: '1px solid rgba(108,71,255,0.2)', borderRadius: 10,
              }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>
                  Create a free account to continue
                </p>
                <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 14 }}>
                  Sign up free — no card required. Your filled fields will be saved.
                </p>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Link to="/auth" style={{ flex: 1 }}>
                    <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 700 }}>
                      Sign up free
                    </button>
                  </Link>
                  <Link to="/auth" style={{ flex: 1 }}>
                    <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13 }}>
                      Log in
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthPrompt(true)}
                style={{
                  marginTop: 24, width: '100%', height: 46,
                  background: template.color, color: '#fff',
                  border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 700,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  boxShadow: `0 4px 16px ${template.color}40`,
                  transition: 'opacity 120ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <FileText size={15} />
                Use This Template — Free
                <ArrowRight size={14} />
              </button>
            )}
          </div>

          {/* Live preview panel */}
          <div style={{
            padding: '28px 24px',
            background: 'var(--color-bg-secondary)',
          }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
              color: 'var(--color-text-tertiary)', marginBottom: 16,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite' }} />
              Live Preview — updates as you type
            </div>
            <LiveDocPreview sections={previewSections} color={template.color} />
            <p style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>
              Actual document rendered in Studio after sign-up.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 680px) {
          .template-modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export function PublicTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [query, setQuery] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)

  const filtered = templates.filter(t => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory
    const matchQ = !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.desc.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Hero ── */}
      <section style={{
        padding: '72px 20px 56px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,71,255,0.06) 0%, transparent 70%)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Template Library
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, color: 'var(--color-text-primary)', marginBottom: 16 }}>
            100+ professionally built<br />document templates.
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 28 }}>
            Click any template to fill it and see a live preview instantly.
            Students, freelancers, and businesses — all covered.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 440, margin: '0 auto' }}>
            <Search size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
            <input
              className="input"
              style={{ height: 44, paddingLeft: 40, fontSize: 16, width: '100%', boxSizing: 'border-box', boxShadow: 'var(--shadow-floating)' }}
              placeholder="Search templates…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginTop: 28, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
            {[['16', 'Ready-to-use templates'], ['6', 'Categories'], ['Free', 'No account to preview']].map(([num, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ fontWeight: 800, color: 'var(--color-accent)' }}>{num}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category filter + Grid ── */}
      <section style={{ padding: '48px 20px 80px', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 9999,
                  fontSize: 13,
                  fontWeight: activeCategory === cat ? 600 : 400,
                  background: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-surface)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                  border: activeCategory === cat ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 120ms',
                }}
              >
                {cat}
                {cat !== 'All' && (
                  <span style={{ marginLeft: 6, opacity: 0.65, fontSize: 11 }}>
                    {templates.filter(t => t.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div style={{ marginBottom: 20, fontSize: 13, color: 'var(--color-text-tertiary)' }}>
            {filtered.length} template{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {query && ` matching "${query}"`}
            {' '}· <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Click any card to preview & fill</span>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {filtered.map(template => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 10,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 120ms, box-shadow 120ms, transform 120ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${template.color}50`
                  el.style.boxShadow = `0 8px 28px ${template.color}18`
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <TemplateMiniPreview color={template.color} />

                <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3, letterSpacing: -0.2 }}>
                      {template.name}
                    </h3>
                    <div style={{
                      width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                      background: `${template.color}12`,
                      border: `1px solid ${template.color}28`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FileText size={12} color={template.color} />
                    </div>
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-text-secondary)', flex: 1 }}>
                    {template.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <span style={{
                      padding: '3px 9px', borderRadius: 9999, fontSize: 10, fontWeight: 700,
                      color: catColors[template.category] || 'var(--color-accent)',
                      background: `${catColors[template.category] || '#6C47FF'}12`,
                    }}>
                      {template.category}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.fields} fields</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>·</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.pages}p</span>
                  </div>
                </div>

                {/* Click hint at bottom */}
                <div style={{
                  padding: '10px 18px',
                  borderTop: `1px solid ${template.color}18`,
                  background: `${template.color}06`,
                  fontSize: 11, fontWeight: 600, color: template.color,
                  display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  <ArrowRight size={11} />
                  Preview & fill this template
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 20px', color: 'var(--color-text-tertiary)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🗂️</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>No templates found</p>
              <p style={{ fontSize: 13 }}>Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '48px 20px',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 10 }}>
            Can't find the template you need?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 24 }}>
            Build your own in Studio in under 10 minutes — or request one from our team.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 42, padding: '0 22px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Build in Studio — Free
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/support">
              <button className="btn btn--secondary" style={{ height: 42, padding: '0 22px', fontSize: 14 }}>
                Request a template
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />

      {/* Template fill/preview modal */}
      {selectedTemplate && (
        <TemplateModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </div>
  )
}
