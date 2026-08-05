import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getBackendUrl(): string | null {
  const url = process.env.NGROK_API_URL?.trim();
  if (!url) return null;
  return url.replace(/\/+$/, "");
}

export async function POST(request: NextRequest) {
  const backendUrl = getBackendUrl();

  if (!backendUrl) {
    return NextResponse.json(
      {
        answer:
          "❌ Backend URL not configured. Set NGROK_API_URL in .env.local (local) or Vercel environment variables (production).",
      },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const question =
      typeof body?.question === "string" ? body.question.trim() : "";

    if (!question) {
      return NextResponse.json(
        { answer: "⚠️ Please enter a question." },
        { status: 400 }
      );
    }

    const response = await fetch(`${backendUrl}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({ question }),
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          answer:
            "❌ Backend unavailable. Ensure your Colab notebook is running and ngrok is connected, then update NGROK_API_URL if the tunnel URL changed.",
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({
      question: data.question ?? question,
      answer: data.answer ?? "No answer returned from backend.",
    });
  } catch {
    return NextResponse.json(
      {
        answer:
          "❌ Cannot reach Colab backend. Start your Colab notebook and ngrok tunnel, then update NGROK_API_URL.",
      },
      { status: 503 }
    );
  }
}
