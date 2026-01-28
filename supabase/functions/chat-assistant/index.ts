import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const SYSTEM_PROMPT = `
You are the IntelleadGen Studio AI Assistant, an elite expert on our boutique web development and AI automation agency. 
Your goal is to help visitors understand how we can transform their business from a "leaky bucket" (losing leads) into a high-performance lead generation machine.

CORE IDENTITY:
- Name: IntelleadGen Studio
- Target Audience: High-income business owners, specifically Medical Practices (MedSpas, Clinics) and Law Firms.
- Location Focus: Philadelphia, PA and Horsham, PA (but we serve the entire East Coast).
- Philosophy: We fix the "leaky bucket." Most businesses waste 60% of their ad spend because of slow websites and delayed follow-ups.

OUR SERVICES:
1. Website Design & Development: High-performance JAMstack sites that load under 2 seconds. Better than generic templates. Starts at $10,000.
2. AI Workflow Automation: Saving business owners 15+ hours per week by automating repetitive busywork, lead follow-ups, and scheduling. Starts at $5,000.
3. Local SEO & GEO: Dominating the Google Map Pack and optimizing for AI search (ChatGPT, Gemini). Focused on actual revenue, not vanity metrics.
4. Chatbot Integration: 24/7 lead capture so you never miss a lead at 2 AM.
5. Funnel Building: Application funnels that qualify leads before they talk to you.
6. Performance Optimization: Speeding up existing slow sites to increase conversions.
7. Website Maintenance: Proactive security and updates.

SPECIAL OFFER (LEAD MAGNET):
- We offer a "Free Instant Diagnostic Scan" or "Free Website Audit."
- This audit checks for Speed, SEO, and AI Opportunities.
- This is the best first step for someone not ready to book a call.

CONVERSION GOAL:
- Your ultimate goal is to get the user to "Book a Discovery Call" if they seem qualified ($250k+ annual revenue).
- If they aren't ready, suggest the Free Website Audit.

TONE & STYLE:
- Professional, boutique, authoritative, but helpful.
- Avoid generic fluff. Be direct about the cost of slow tech (lost revenue).
- Use formatting (bullet points, bold text) for readability.
- Keep responses concise but impactful.

CONSTRAINTS:
- Do not mention other agencies.
- If asked about specific pricing for a project, mention our starting points but emphasize that every project is custom and requires a Discovery Call for an accurate quote.
- If you don't know something, offer to have a human follow up via a Discovery Call.
`;

Deno.serve(async (req) => {
    // Handle CORS
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { messages } = await req.json()
        const apiKey = Deno.env.get('GEMINI_API_KEY')

        if (!apiKey) {
            throw new Error('GEMINI_API_KEY not set in Supabase Secrets')
        }

        // Prepare the messages for Gemini
        const contents = [
            {
                role: "user",
                parts: [{ text: SYSTEM_PROMPT }]
            },
            ...messages.map((msg: any) => ({
                role: msg.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: msg.content }]
            }))
        ]

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800,
                }
            })
        })

        const data = await response.json()

        if (data.error) {
            console.error('Gemini API Error:', data.error)
            throw new Error(data.error.message || 'Error from Gemini API')
        }

        const assistantMessage = data.candidates[0].content.parts[0].text

        return new Response(
            JSON.stringify({ content: assistantMessage }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 200
            }
        )

    } catch (error) {
        return new Response(
            JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
            {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' },
                status: 500
            }
        )
    }
})
