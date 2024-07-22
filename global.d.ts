// src/global.d.ts
interface Window {
    Telegram: {
      WebApp: {
        expand: () => void;
        showAlert: (message: string) => void;
        // Add other methods from the Telegram Web App SDK as needed
      };
    };
  }
  