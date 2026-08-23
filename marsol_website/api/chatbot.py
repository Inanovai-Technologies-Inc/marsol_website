import frappe
from google import genai


@frappe.whitelist(allow_guest=True)
def chat(message):
    if not message:
        return {"reply": "Please enter a message."}

    api_key = frappe.conf.get("gemini_api_key")

    if not api_key:
        frappe.throw("Gemini API key is not configured.")

    client = genai.Client(api_key=api_key)

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=message
    )

    return {
        "reply": response.text
    }
