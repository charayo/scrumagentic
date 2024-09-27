# Services to handle the logic of the LLM model
# import openai
# from app.config import settings

# class LLMService:
#     def __init__(self):
#         openai.api_key = settings.openai_api_key

#     def generate_response(self, prompt: str) -> str:
#         """Generates a response from an LLM (OpenAI in this case)."""
#         response = openai.Completion.create(
#             engine="text-davinci-003",
#             prompt=prompt,
#             max_tokens=100
#         )
#         return response.choices[0].text.strip()
