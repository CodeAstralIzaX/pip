// Email sending utility for the contact form.
// VITE_API_URL must be set in production (e.g. https://your-backend.com).
// Falls back to localhost:3001 in local development only.

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/** Send contact form data to the email API. Returns a typed response on both success and failure. */
export async function sendContactEmail(
  formData: ContactFormData
): Promise<EmailResponse> {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data: EmailResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return data;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Email sending error:", message);
    return { success: false, message };
  }
}
