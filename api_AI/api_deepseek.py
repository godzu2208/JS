from openai import OpenAI

client = OpenAI(api_key="<ollama>", base_url="http://localhost:11434/v1")

response = client.chat.completions.create(
    model="deepseek-r1:14b",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)