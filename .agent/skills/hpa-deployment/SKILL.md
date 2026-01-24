---
name: HPA Deployment Framework
description: The official IntelleadGen Studio standard for building and auditing high-performance, AI-integrated lead generation websites.
---

# HPA Deployment Framework: The Elite Standard

This skill defines the requirements for every website developed by IntelleadGen Studio. Use this framework to audit, build, and optimize client sites for maximum lead conversion and search/AI visibility.

## 1. High-Performance Architecture (HPA)
*   **Load Speed:** Must achieve <1s LCP (Largest Contentful Paint).
*   **Tech Stack:** React (Vite) + Tailwind CSS + Lucide Icons.
*   **Optimization:**
    - [ ] `will-change: transform` or `will-change: opacity` on all heavy background animations.
    - [ ] Modern image formats (WebP/AVIF) with explicit `width` and `height`.
    - [ ] Zero-cumulative Layout Shift (CLS) via container locking.

## 2. Global Entity Optimization (GEO) & AI Hardening
*   **Semantic Data:** Use highly structured `LD+JSON` for more than just contact info.
*   **LLM Visibility:**
    - [ ] Implement a `GEOValidator` diagnostic component.
    - [ ] Add semantically rich `<meta>` descriptions tailored for conversational AI.
    - [ ] Use `hasOfferCatalog` in Schema to define services for AI search engines.

## 3. Map Pack Domination (Local SEO)
*   **SAB Model:** Default to the "Service-Area Business" model for boutique clients (protect privacy).
*   **NAP Consistency:**
    - [ ] Mandatory `LocalBusinessSchema` with precise latitude/longitude.
    - [ ] Footer must contain synchronized Name, Area Served, and Phone.
    - [ ] Use `areaServed` property with WikiData links for cities.

## 4. Conversion Engineering
*   **Interactive Hooks:** Every site must have at least one interactive lead qualifier.
    - [ ] `ROICalculator`: Prove value before the pitch.
    - [ ] `LeadMagnetSection`: Multi-channel capture (PDF/Video).
*   **Mobile Hand-Locking:**
    - [ ] Viewport meta: `shrink-to-fit=no, viewport-fit=cover`.
    - [ ] Root CSS: `overflow-x: hidden`, `width: 100vw`.

## 5. Analytics & Reliability
*   **Edge Tracking:** Integrate Supabase Edge Functions for real-time lead tracking.
*   **Resilient Init:** Wrap all third-party SDKs (Supabase, Analytics) in `try-catch` blocks to prevent "White Screen of Death."

---

## Usage Instructions
When starting a new client project or audit:
1. Run a `grep_search` for current SEO/Performance markers.
2. Implement the `LocalBusinessSchema` using the SAB template.
3. Validate mobile scaling on simulated Android/iOS viewports.
4. Deploy `track-event` Edge Functions for conversion monitoring.
