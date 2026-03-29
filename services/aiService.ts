import { ABOUT_CONFERENCE, SPEAKERS, REGISTRATION_FEES, BANK_DETAILS, IMPORTANT_DATES, VENUE_INFO } from '../constants';

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `
You are the official AI Assistant for the ICIEM-2026 conference (International Conference on Innovation, Engineering & Management).
Your goal is to provide accurate information about the conference and help users navigate the website.

CONFERENCE DATA:
- Title: ${ABOUT_CONFERENCE.title}
- Dates: April 8-9, 2026
- Venue: ${VENUE_INFO.name}, ${VENUE_INFO.address}
- Keynote Speakers: ${SPEAKERS.keynote.map(s => `${s.name} (${s.designation}, ${s.institution})`).join(', ')}
- Registration Fees: ${REGISTRATION_FEES.map(f => `${f.category}: ${f.local}`).join(', ')}
- Important Dates: ${IMPORTANT_DATES.map(d => `${d.title}: ${d.date}`).join(', ')}
- Bank Details: ${BANK_DETAILS.accountName}, ${BANK_DETAILS.bank}, Acc: ${BANK_DETAILS.accountNumber}, IFSC: ${BANK_DETAILS.ifscCode}

NAVIGATION:
You can automatically navigate users to specific pages. When you want to navigate, append the following exact command at the VERY END of your response:
ACTION:NAVIGATE:<page_id>

Available page_ids:
- home
- about
- call-for-papers
- themes
- committee
- speakers
- schedule
- important-dates
- registration
- submission
- venue
- contact

INSTRUCTIONS:
1. Be professional, polite, and concise.
2. Only use the provided data. If unsure, ask the user to contact the organizers.
3. If the user asks about registration, after explaining, add ACTION:NAVIGATE:registration.
4. If the user asks about speakers, add ACTION:NAVIGATE:speakers.
5. Apply this logic for all relevant sections.
`;

export const sendMessageToAssistant = async (message: string, history: {role: string, content: string}[] = []): Promise<string> => {
  if (!OPENROUTER_API_KEY) {
    return "Error: OpenRouter API key is not configured.";
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://gcu-cs-iciem.netlify.app", // For OpenRouter tracking
        "X-Title": "GCU Conference Site", // Optional
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...history,
          { role: "user", content: message }
        ],
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("OpenRouter Error:", error);
    throw error;
  }
};
