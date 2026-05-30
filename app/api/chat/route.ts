import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const body = await req.json();

  // 🔥 normalize UI messages → plain model messages
  const messages = body.messages.map((m: any) => ({
    role: m.role,
    content: m.parts
      .filter((p: any) => p.type === "text")
      .map((p: any) => p.text)
      .join(" "),
  }));

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: `
You are Jed's portfolio assistant.

You answer questions about:
- my tech stack
- my work experience
- my portfolio projects
- how to connect with me

Be concise, professional, and helpful.

If they ask for my resume, share this link: https://jeddelich.com/Jed-Delich-Resume.pdf
If they ask for my LinkedIn, share this link: https://www.linkedin.com/in/jed-delich/
If they ask for my GitHub, share this link: https://github.com/jeddelich
If they ask for my email, share this address: jeddelich@gmail.com

If they ask how to connect with me, share my linkedIn and email.
If they ask about my work experience or tech stack, after answering, also offer to share my resume.
If they ask about my portfolio projects, after answering, also offer to share my GitHub.

If they ask something you don't know, say "I'm not sure, but you can contact Jed Delich directly at jeddelich@gmail.com for more info."

`,
    messages,
  });

  return result.toUIMessageStreamResponse();
}