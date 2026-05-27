# Notarize (Proof) — Competitor Analysis

Source: Proof.com, TrustRadius, Trustpilot, Zendikt, bluenotary.us

## Positioning
Remote online notarization (RON) market leader. Rebranded from Notarize → Proof in 2024. Per-transaction pricing ($25-75). Best for real estate, mortgage, legal-services verticals where a notary public must witness signing.

## Design & UX Pattern

### Signer Flow
1. Upload document (or scan via phone link)
2. Upload identity document (KBA + ID verification)
3. Connect with notary via video call (~5 min average)
4. Sign in notary's presence
5. Receive notarized document + authentication code + video recording

### Trust UX
- Authentication code provides online verification of document
- A/V recording of entire session (audit trail)
- Identity verification: document authenticity check + knowledge-based questions
- AES-256 encryption in transit and at rest

## Known Failure Points (What NOT To Copy)

### 1. Account Requirement (MAJOR FRICTION)
Notarize requires signers to create an account before accessing services. Multiple reviewers cite this as a pain point: "I didn't like that I had to make an account before I could access its services, even if I needed just one thing notarized."

Also problematic: the platform markets directly to signers, effectively poaching clients from the notaries who brought them to the platform.

### 2. Per-Transaction Cost
$25-75 per notarized document adds up quickly. Multiple reviewers noted cost concerns. For businesses needing regular notarizations, this is prohibitive.

### 3. State Law Complexity
RON legality varies by state. Some documents notarized through the platform were rejected by third-party institutions (passport office, etc.). This undermines trust in the product.

### 4. Multi-Participant Confusion
Coordinating 5+ signers in a single session is confusing. "Had to figure out what we were doing as we went along" — common complaint.

### 5. Notary Handoff Issues
Platform sometimes routes signers to a different notary than expected, causing document redo and delays.

## What MyTypist Can Learn
- **The identity verification stack is the real value** — KBA + document verification + liveness checks. If MyTypist adds notarization, this is the IP to study.
- **A/V recording for audit trail** — the gold standard for legally binding document operations
- **DO NOT require account creation for signers** — this is DocuSign's correct pattern (no login needed to sign)
- **Authentication codes for document verification** — allows third parties to verify document authenticity without contacting the platform
- **The "Nigerian documents not trusted overseas" problem** — ToNote is solving this with Supreme Court-certified notaries. MyTypist could integrate with this or offer similar verification infrastructure.
