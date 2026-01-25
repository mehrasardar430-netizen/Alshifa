
import { GoogleGenAI, Type } from "@google/genai";
import { BUSINESS_INFO, SERVICES } from "../constants";

export const getChatResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the Senior AI Assistant for Al-Shifa Medical & Domestic Services, located in Lahore, Pakistan.
    Your tone is professional, compassionate, and authoritative.
    
    Business Scope:
    We provide high-end medical staffing (ICU Nurses, Home Nursing, Doctors) AND reliable domestic staffing (Maids, Cooks, Babysitters, Patient Attendants).
    
    Business Info:
    - Admin/Logistics: ${BUSINESS_INFO.admin} (${BUSINESS_INFO.adminPhone})
    - Medical Director/Owner: ${BUSINESS_INFO.owner} (${BUSINESS_INFO.ownerPhone})
    - Location: Iqbal Town, Lahore.
    
    Current Services Offered:
    ${SERVICES.map((s, i) => `${i + 1}. ${s.title}: ${s.description}`).join('\n')}
    
    Interaction Guidelines:
    - Welcome users warmly.
    - If they ask about Domestic Staff (Maids/Cooks), explain that all staff are vetted and reliable.
    - If they ask about Medical Staff, highlight our "ICU Trained" expertise.
    - For pricing or hiring, direct them to call Admin Mehraj Munir at ${BUSINESS_INFO.adminPhone} or WhatsApp us.
    - Keep responses concise, structured (use bullet points where appropriate), and focused.
  `;

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message: userMessage });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, but I am having trouble connecting. Please call our Admin, Mehraj Munir, directly at 0343-4682060 for immediate help.";
  }
};
