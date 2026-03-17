
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const API_KEY = process.env.API_KEY || '';

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a friendly, expert AI educator. Your goal is to explain machine learning concepts to a total beginner (like a 10-year-old). 
        Use simple analogies (like teaching a child, sorting blocks, or recognizing fruits). 
        Keep responses concise, encouraging, and visually structured with bullet points. 
        Always relate back to how a machine "learns" from patterns rather than being told exactly what to do step-by-step.`,
      },
    });
  }

  async sendMessage(text: string): Promise<string> {
    try {
      const response: GenerateContentResponse = await this.chat.sendMessage({ message: text });
      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "There was an error communicating with the AI. Please try again.";
    }
  }

  async getSummary(topic: string): Promise<string> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Provide a 2-sentence simple explanation of ${topic} for a beginner.`,
      });
      return response.text || "";
    } catch (error) {
      return "Check out the details below!";
    }
  }
}

export const gemini = new GeminiService();
