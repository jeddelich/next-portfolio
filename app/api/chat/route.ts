import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai("gpt-4.1-mini"),

    system: `
You are Jed's portfolio assistant.

You answer questions about:
- web development
- UI/UX
- business websites
- Next.js
- AI integrations
- portfolio projects

Be concise, professional, and helpful.

If they ask for your resume, share this link: https://jeddelich.com/Jed-Delich-Resume.pdf
`,

    messages,
  })

  return result.toTextStreamResponse()
}