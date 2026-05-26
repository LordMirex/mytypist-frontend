# Logic Extraction: Hooks & Shared State

This document extracts the core functional logic from `v1` and `v2` to ensure state management and side effects are perfectly preserved in the `main` project.

## 1. Global State Management (v1 Mock Auth)
*File: v1/src/components/Navigation.tsx*

```typescript
// Core logic for role-based navigation and persistence
const useAuth = () => {
  const [role, setRoleState] = useState<'guest' | 'user' | 'admin'>('guest');
  
  useEffect(() => {
    const savedRole = localStorage.getItem('testRole') as 'guest' | 'user' | 'admin';
    if (savedRole && ['guest', 'user', 'admin'].includes(savedRole)) {
      setRoleState(savedRole);
    }
  }, []);

  const setRole = (newRole: 'guest' | 'user' | 'admin') => {
    setRoleState(newRole);
    localStorage.setItem('testRole', newRole);
  };
  
  return { role, setRole };
};
```

## 2. Responsive Design Hook
*File: v1/src/hooks/use-mobile.tsx*

```typescript
const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

## 3. Studio State Logic (v2)
*File: v2/src/pages/document-creator-studio/index.jsx*

### URL Parameter Sync
Ensures the selected template persists across page reloads.
```javascript
const [searchParams] = useSearchParams();
const templateId = searchParams.get('template');

useEffect(() => {
  if (templateId) {
    const template = mockTemplates.find(t => t.id === parseInt(templateId));
    if (template) setSelectedTemplate(template);
  }
}, [templateId]);
```

### Form Progress Calculation
Automatically tracks how much of the document is complete.
```javascript
const calculateProgress = () => {
  if (!formFields.length) return 0;
  const requiredFields = formFields.filter(f => f.required);
  if (!requiredFields.length) return 100;
  
  const completedRequired = requiredFields.filter(f => formData[f.id] && formData[f.id].trim() !== '');
  return Math.round((completedRequired.length / requiredFields.length) * 100);
};
```

## 4. Template Filtering Logic (v2)
*File: v2/src/pages/template-gallery/index.jsx*

Complex memoized filtering for high performance:
```javascript
const filteredAndSortedTemplates = useMemo(() => {
  let filtered = mockTemplates.filter(template => {
    if (selectedCategory !== 'all' && template.category !== selectedCategory) return false;
    if (searchQuery && !template.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (industryFilter !== 'all' && template.industry !== industryFilter) return false;
    // ... additional formality and length filters
    return true;
  });

  filtered.sort((a, b) => {
    // Sort logic for: popularity, newest, rating, trending, alphabetical
  });
  return filtered;
}, [selectedCategory, searchQuery, industryFilter, ...]);
```

## 5. Recipient Management (v1)
*File: v1/src/pages/CreateDocument.tsx*

```typescript
const [recipients, setRecipients] = useState<string[]>(['']);

const addRecipient = () => setRecipients([...recipients, '']);
const removeRecipient = (index: number) => setRecipients(recipients.filter((_, i) => i !== index));
const updateRecipient = (index: number, value: string) => {
  const updated = [...recipients];
  updated[index] = value;
  setRecipients(updated);
};
```

## 6. Layout Side-Effects
*File: v2/src/components/ScrollToTop.jsx*
Ensures the page resets to top on route change.
```javascript
const { pathname } = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
```
