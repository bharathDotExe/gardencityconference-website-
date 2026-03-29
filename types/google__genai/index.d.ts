declare module "@google/genai" {
  export interface GoogleGenAIConfig {
    apiKey: string;
  }

  export interface ChatConfig {
    model: string;
    config?: {
      systemInstruction?: string;
      temperature?: number;
      topK?: number;
      topP?: number;
    };
  }

  export interface Message {
    message: string;
  }

  export interface ChatResponse {
    text: string;
  }

  export interface Chat {
    sendMessage(message: Message | string): Promise<ChatResponse>;
  }

  export interface ChatsManager {
    create(config: ChatConfig): Chat;
  }

  export class GoogleGenAI {
    constructor(config: GoogleGenAIConfig);
    chats: ChatsManager;
  }
}
