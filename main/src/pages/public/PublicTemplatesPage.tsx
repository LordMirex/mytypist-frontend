import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, FileText, Briefcase, GraduationCap, Scale, Users, TrendingUp, LayoutGrid, SlidersHorizontal, ChevronRight, X } from 'lucide-react'
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

function TemplateStudio({ template, onBack }: { template: Template; onBack: () => void }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [showAuthPrompt, setShowAuthPrompt] = useState(false)
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form')

  const handleChange = useCallback((key: string, val: string) => {
    setValues(prev => ({ ...prev, [key]: val }))
  }, [])

  const previewSections = template.previewFn(values)
  const filledCount = Object.values(values).filter(v => v.trim()).length
  const progress = Math.min(100, Math.round((filledCount / template.formFields.length) * 100))

  const formPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Form header */}
      <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid var(--color-border)', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: template.color }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: catColors[template.category] || 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            {template.category}
          </span>
        </div>
        <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: '0 0 12px' }}>{template.desc}</p>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ padding: '2px 8px', borderRadius: 9999, fontSize: 10, fontWeight: 700, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-tertiary)' }}>
            {template.fields} fields
          </span>
          <span style={{ padding: '2px 8px', borderRadius: 9999, fontSize: 10, fontWeight: 700, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-tertiary)' }}>
            {template.pages} page{template.pages > 1 ? 's' : ''}
          </span>
          <span style={{ padding: '2px 8px', borderRadius: 9999, fontSize: 10, fontWeight: 700, background: `${template.color}14`, border: `1px solid ${template.color}30`, color: template.color }}>
            {progress}% filled
          </span>
        </div>
        {/* Progress bar */}
        <div style={{ marginTop: 10, height: 3, background: 'var(--color-border)', borderRadius: 9999 }}>
          <div style={{
            height: '100%', borderRadius: 9999, background: template.color,
            width: `${progress}%`, transition: 'width 250ms',
          }} />
        </div>
      </div>

      {/* Fields */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {template.formFields.map(field => (
            <div key={field.key}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 5 }}>
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  value={values[field.key] || ''}
                  onChange={e => handleChange(field.key, e.target.value)}
                  style={{
                    width: '100%', height: 40, padding: '0 12px',
                    border: '1px solid var(--color-border)', borderRadius: 7,
                    background: 'var(--color-surface)', color: 'var(--color-text-primary)',
                    fontSize: 16, cursor: 'pointer', outline: 'none', boxSizing: 'border-box',
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
                    border: `1px solid ${values[field.key] ? template.color + '60' : 'var(--color-border)'}`,
                    borderRadius: 7, background: 'var(--color-surface)',
                    color: 'var(--color-text-primary)', fontSize: 16,
                    outline: 'none', boxSizing: 'border-box', transition: 'border-color 150ms',
                  }}
                  onFocus={e => { e.target.style.borderColor = template.color; e.target.style.boxShadow = `0 0 0 3px ${template.color}18` }}
                  onBlur={e => { e.target.style.borderColor = values[field.key] ? template.color + '60' : 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA footer */}
      <div style={{ padding: '16px 24px', borderTop: '1px solid var(--color-border)', flexShrink: 0, background: 'var(--color-bg)' }}>
        {showAuthPrompt ? (
          <div style={{ padding: 14, background: 'rgba(108,71,255,0.06)', border: '1px solid rgba(108,71,255,0.2)', borderRadius: 10 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4 }}>
              Create a free account to download
            </p>
            <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 12 }}>
              No card required. Your progress is saved.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              <Link to="/auth" style={{ flex: 1 }}>
                <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 700 }}>Sign up free</button>
              </Link>
              <Link to="/auth" style={{ flex: 1 }}>
                <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13 }}>Log in</button>
              </Link>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowAuthPrompt(true)}
            style={{
              width: '100%', height: 46, background: template.color, color: '#fff',
              border: 'none', borderRadius: 9, fontSize: 14, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: `0 4px 16px ${template.color}35`, transition: 'opacity 120ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <FileText size={15} />
            Use This Template — Free
            <ArrowRight size={14} />
          </button>
        )}
      </div>
    </div>
  )

  const previewPanel = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#f0efe9' }}>
      <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid var(--color-border)', flexShrink: 0, background: 'var(--color-surface)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 11, fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e' }} />
          Live Preview · updates as you type
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
        <LiveDocPreview sections={previewSections} color={template.color} />
        <p style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 10, textAlign: 'center' }}>
          Full document renders in Studio after sign-up.
        </p>
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      {/* Studio top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 20px', borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)', flexShrink: 0, position: 'sticky', top: 54, zIndex: 10,
      }}>
        <button
          onClick={onBack}
          style={{
            display: 'flex', alignItems: 'center', gap: 5, padding: '6px 12px',
            background: 'var(--color-bg)', border: '1px solid var(--color-border)',
            borderRadius: 7, cursor: 'pointer', fontSize: 12, fontWeight: 600,
            color: 'var(--color-text-secondary)', flexShrink: 0, whiteSpace: 'nowrap',
          }}
        >
          ← Gallery
        </button>
        <ChevronRight size={12} color="var(--color-text-quaternary)" style={{ flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: -0.2, color: 'var(--color-text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {template.name}
          </span>
          <span style={{
            flexShrink: 0, padding: '2px 8px', borderRadius: 9999, fontSize: 10, fontWeight: 700,
            background: `${template.color}14`, border: `1px solid ${template.color}28`, color: template.color,
          }}>
            {template.category}
          </span>
        </div>
        {/* Step indicator — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0, fontSize: 11, color: 'var(--color-text-tertiary)' }} className="studio-step-indicator">
          <span style={{ fontWeight: 700, color: 'var(--color-accent)' }}>Step 1</span>
          <span>Fill fields</span>
          <ChevronRight size={10} />
          <span>Step 2 Sign up to download</span>
        </div>
        {/* Mobile tab toggle */}
        <div style={{ display: 'flex', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 7, padding: 3, gap: 2, flexShrink: 0 }} className="studio-mobile-tabs">
          {(['form', 'preview'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setMobileTab(tab)}
              style={{
                padding: '5px 12px', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 600,
                background: mobileTab === tab ? 'var(--color-accent)' : 'none',
                color: mobileTab === tab ? '#fff' : 'var(--color-text-secondary)',
                transition: 'all 150ms',
              }}
            >
              {tab === 'form' ? 'Form' : 'Preview'}
            </button>
          ))}
        </div>
      </div>

      {/* Studio body — two panels */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0, height: 'calc(100vh - 120px)' }} className="studio-body">
        {/* Left: form */}
        <div style={{ width: '40%', minWidth: 280, borderRight: '1px solid var(--color-border)', overflowY: 'auto', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }} className="studio-form-col">
          {formPanel}
        </div>
        {/* Right: preview */}
        <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }} className="studio-preview-col">
          {previewPanel}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @media (max-width: 680px) {
          .studio-body { height: calc(100vh - 110px); }
          .studio-form-col {
            width: 100% !important;
            display: ${mobileTab === 'form' ? 'flex' : 'none'} !important;
            border-right: none !important;
          }
          .studio-preview-col { display: ${mobileTab === 'preview' ? 'flex' : 'none'} !important; }
        }
        @media (min-width: 681px) {
          .studio-mobile-tabs { display: none !important; }
        }
      `}</style>
    </div>
  )
}

const catMeta: Record<Category, { icon: React.ReactNode; color: string }> = {
  'All':        { icon: <LayoutGrid size={14} />,       color: '#6C47FF' },
  'Legal':      { icon: <Scale size={14} />,            color: '#DC2626' },
  'Academic':   { icon: <GraduationCap size={14} />,   color: '#6C47FF' },
  'Business':   { icon: <Briefcase size={14} />,        color: '#D97706' },
  'HR & People':{ icon: <Users size={14} />,            color: '#059669' },
  'Finance':    { icon: <TrendingUp size={14} />,       color: '#0891B2' },
}

export function PublicTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [query, setQuery] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const filtered = templates.filter(t => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory
    const matchQ = !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.desc.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  const catCount = (cat: Category) => cat === 'All' ? templates.length : templates.filter(t => t.category === cat).length

  if (selectedTemplate) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
        <PublicHeader />
        <TemplateStudio template={selectedTemplate} onBack={() => setSelectedTemplate(null)} />
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Page header bar ── */}
      <div style={{
        borderBottom: '1px solid var(--color-border)',
        background: 'radial-gradient(ellipse 80% 120% at 50% 0%, rgba(108,71,255,0.05) 0%, transparent 70%)',
        padding: '36px 24px 28px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <div className="lp-hero-eyebrow" style={{ marginBottom: 10, fontSize: 11 }}>
                <div className="lp-hero-eyebrow-dot" />
                Document Library
              </div>
              <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.1, color: 'var(--color-text-primary)', margin: 0 }}>
                Create a document — free
              </h1>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)', marginTop: 8, maxWidth: 440 }}>
                Pick a template, fill your details, preview it live. No account needed to start.
              </p>
            </div>
            {/* Search */}
            <div style={{ position: 'relative', width: '100%', maxWidth: 360, flexShrink: 0 }}>
              <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
              {query && (
                <button onClick={() => setQuery('')} style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)', display: 'flex', padding: 2 }}>
                  <X size={13} />
                </button>
              )}
              <input
                className="input"
                style={{ height: 42, paddingLeft: 36, paddingRight: query ? 30 : 12, fontSize: 16, width: '100%', boxSizing: 'border-box', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}
                placeholder="Search templates…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>
          {/* Quick stats */}
          <div style={{ display: 'flex', gap: 20, marginTop: 20, flexWrap: 'wrap' }}>
            {[
              { val: templates.length.toString(), label: 'templates' },
              { val: categories.filter(c => c !== 'All').length.toString(), label: 'categories' },
              { val: 'Free', label: 'no account to preview' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                <span style={{ fontWeight: 800, color: 'var(--color-accent)', fontSize: 13 }}>{s.val}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sidebar + Grid layout ── */}
      <div style={{ flex: 1, display: 'flex', maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Sidebar — desktop */}
        <aside className="gallery-sidebar" style={{
          width: 220, flexShrink: 0, borderRight: '1px solid var(--color-border)',
          padding: '28px 0', position: 'sticky', top: 54, height: 'calc(100vh - 54px)',
          overflowY: 'auto', background: 'var(--color-bg)',
        }}>
          <div style={{ padding: '0 16px 10px', fontSize: 10, fontWeight: 800, letterSpacing: 0.8, color: 'var(--color-text-tertiary)', textTransform: 'uppercase' }}>
            Categories
          </div>
          <nav>
            {categories.map(cat => {
              const isActive = activeCategory === cat
              const meta = catMeta[cat]
              const count = catCount(cat)
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 9,
                    padding: '9px 16px', border: 'none', cursor: 'pointer',
                    background: isActive ? 'rgba(108,71,255,0.08)' : 'transparent',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                    textAlign: 'left', fontSize: 13, fontWeight: isActive ? 700 : 400,
                    transition: 'all 100ms', boxSizing: 'border-box',
                    borderLeft: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
                  }}
                >
                  <span style={{ opacity: isActive ? 1 : 0.6, color: isActive ? 'var(--color-accent)' : meta.color, flexShrink: 0 }}>
                    {meta.icon}
                  </span>
                  <span style={{ flex: 1 }}>{cat}</span>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 9999, flexShrink: 0,
                    background: isActive ? 'rgba(108,71,255,0.15)' : 'var(--color-border)',
                    color: isActive ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                  }}>
                    {count}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* Sidebar CTA */}
          <div style={{ margin: '20px 12px 0', padding: '14px', background: 'rgba(108,71,255,0.06)', border: '1px solid rgba(108,71,255,0.15)', borderRadius: 10 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 4, lineHeight: 1.4 }}>
              Don't see your template?
            </p>
            <p style={{ fontSize: 11, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 10 }}>
              Build a custom one in Studio — free.
            </p>
            <Link to="/auth">
              <button style={{
                width: '100%', padding: '7px 0', background: 'var(--color-accent)', color: '#fff',
                border: 'none', borderRadius: 7, fontSize: 11, fontWeight: 700, cursor: 'pointer',
              }}>
                Open Studio →
              </button>
            </Link>
          </div>
        </aside>

        {/* Main area */}
        <main style={{ flex: 1, padding: '28px 24px 80px', minWidth: 0 }}>

          {/* Mobile filter bar */}
          <div className="gallery-mobile-filter" style={{ display: 'none', marginBottom: 16, gap: 8 }}>
            <button
              onClick={() => setMobileSidebarOpen(v => !v)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px',
                border: '1px solid var(--color-border)', borderRadius: 8, background: 'var(--color-surface)',
                fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)', cursor: 'pointer',
              }}
            >
              <SlidersHorizontal size={13} />
              {activeCategory === 'All' ? 'Filter' : activeCategory}
            </button>
            {activeCategory !== 'All' && (
              <button onClick={() => setActiveCategory('All')} style={{
                padding: '8px 12px', border: '1px solid var(--color-border)', borderRadius: 8,
                background: 'var(--color-surface)', fontSize: 12, color: 'var(--color-text-tertiary)', cursor: 'pointer',
              }}>
                Clear
              </button>
            )}
          </div>

          {/* Mobile category drawer */}
          {mobileSidebarOpen && (
            <div style={{
              marginBottom: 20, padding: 12, background: 'var(--color-surface)',
              border: '1px solid var(--color-border)', borderRadius: 10,
            }} className="gallery-mobile-filter">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setMobileSidebarOpen(false) }}
                    style={{
                      padding: '6px 12px', borderRadius: 9999, fontSize: 12, fontWeight: activeCategory === cat ? 700 : 400,
                      background: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-bg)',
                      color: activeCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                      border: activeCategory === cat ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                      cursor: 'pointer',
                    }}
                  >
                    {cat} <span style={{ opacity: 0.6 }}>{catCount(cat)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results info */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <div style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>
              <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{filtered.length}</span>
              {' '}template{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' && <span> in <span style={{ color: catMeta[activeCategory].color, fontWeight: 600 }}>{activeCategory}</span></span>}
              {query && <span> matching "<strong>{query}</strong>"</span>}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-accent)', fontWeight: 600 }}>
              Click any card to fill &amp; preview free
            </div>
          </div>

          {/* Template grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
            {filtered.map(template => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column',
                  cursor: 'pointer', transition: 'border-color 140ms, box-shadow 140ms, transform 140ms',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${template.color}55`
                  el.style.boxShadow = `0 8px 32px ${template.color}1a`
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Color accent bar + mini doc preview */}
                <div style={{ position: 'relative' }}>
                  <div style={{ height: 4, background: template.color, opacity: 0.85 }} />
                  <TemplateMiniPreview color={template.color} />
                </div>

                <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {/* Category + icon row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                    <span style={{
                      padding: '2px 8px', borderRadius: 9999, fontSize: 10, fontWeight: 700,
                      color: catColors[template.category] || 'var(--color-accent)',
                      background: `${catColors[template.category] || '#6C47FF'}12`,
                      border: `1px solid ${catColors[template.category] || '#6C47FF'}20`,
                    }}>
                      {template.category}
                    </span>
                    <div style={{
                      width: 26, height: 26, borderRadius: 6, flexShrink: 0,
                      background: `${template.color}10`, border: `1px solid ${template.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FileText size={11} color={template.color} />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3, letterSpacing: -0.2, margin: 0 }}>
                    {template.name}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-text-secondary)', flex: 1, margin: 0 }}>
                    {template.desc}
                  </p>

                  {/* Fields / pages meta */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 4 }}>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.fields} fields</span>
                    <span style={{ fontSize: 10, color: 'var(--color-border)' }}>·</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.pages} page{template.pages !== 1 ? 's' : ''}</span>
                  </div>
                </div>

                {/* CTA bar */}
                <div style={{
                  padding: '10px 16px',
                  borderTop: `1px solid ${template.color}18`,
                  background: `linear-gradient(135deg, ${template.color}07 0%, transparent 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: template.color }}>
                    Fill &amp; preview free
                  </span>
                  <ArrowRight size={12} color={template.color} />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--color-text-tertiary)' }}>
              <div style={{ fontSize: 36, marginBottom: 14 }}>🗂️</div>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 6 }}>No templates found</p>
              <p style={{ fontSize: 13, lineHeight: 1.6 }}>
                Try a different category or clear the search.{' '}
                <Link to="/auth" style={{ color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>Build a custom one →</Link>
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 720px) {
          .gallery-sidebar { display: none !important; }
          .gallery-mobile-filter { display: flex !important; }
        }
        @media (min-width: 721px) {
          .gallery-mobile-filter { display: none !important; }
        }
        .studio-step-indicator {
          display: flex;
        }
        @media (max-width: 560px) {
          .studio-step-indicator { display: none !important; }
        }
      `}</style>

      <PublicFooter />
    </div>
  )
}
