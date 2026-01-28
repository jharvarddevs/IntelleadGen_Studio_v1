---
description: How to add an interactive HPA Live Preview (BrowserMockup) for a client project.
---

Use this workflow to showcase a completed client project using the interactive `BrowserMockup` component.

### Prerequisites
- The target website must allow iframing (no `X-Frame-Options: SAMEORIGIN`).
- You have the `BrowserMockup.tsx` component available in `src/components/`.

### Step-by-Step implementation

1. **Verify Embeddability**
   - Check the client's website headers to ensure it can be embedded in an `<iframe>`.
   - If blocked, prepare a high-fidelity screenshot for a fallback mockup.

2. **Import the Component**
   - In the target page (e.g., `Home.tsx` or `Portfolio.tsx`), add the import:
     ```tsx
     import { BrowserMockup } from '../components/BrowserMockup';
     ```

3. **Insert the Mockup**
   - Add the `<BrowserMockup />` component into the JSX. 
   - Wrap it in a parent container with a defined height (e.g., `h-96` or `aspect-video`).
   - Example:
     ```tsx
     <div className="h-96 lg:h-auto bg-primary-700/10 p-4">
       <BrowserMockup 
         url="https://client-site.org/" 
         className="h-full min-h-[400px]"
       />
     </div>
     ```

4. **Add "Live" Indicators**
   - Ensure the `BrowserMockup` is configured to show the "Live Demo" pulse animation to catch the user's eye.

5. **Verify Build**
   // turbo
   - Run `npm run build` to ensure the component integration doesn't break the bundle.
