// Email sending utility for the contact form
// Configure API_URL here - for production, update to your backend URL

const API_URL = "http://localhost:3001";

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

/**
 * Send contact form data to the email API
 * @param formData - Contact form data
 * @returns Promise with response from email API
 */
export async function sendContactEmail(
  formData: ContactFormData
): Promise<EmailResponse> {
  try {
    const response = await fetch(`${API_URL}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data: EmailResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Email sending error:", errorMessage);
    return {
      success: false,
      message: errorMessage,
    };
  }
}

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns True if valid email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format (basic)
 * @param phone - Phone number to validate
 * @returns True if phone number looks valid
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/**
 * Validate contact form data
 * @param formData - Form data to validate
 * @returns Object with validation errors, empty if valid
 */
export function validateContactForm(
  formData: ContactFormData
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!formData.name || formData.name.trim() === "") {
    errors.name = "Name is required";
  }

  if (!formData.email || formData.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.phone || formData.phone.trim() === "") {
    errors.phone = "Phone number is required";
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = "Invalid phone number format";
  }

  if (!formData.service || formData.service === "") {
    errors.service = "Please select an insurance type";
  }

  return errors;
}
