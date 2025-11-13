// src/app/api/sse/route.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();

  let intervalId: NodeJS.Timeout;

  const stream = new ReadableStream({
    start(controller) {
      const send = (data: string) => {
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
      };

      // Send initial welcome message
      send('Connected to SSE!');
      send('Connected to SSE! update test');

      // Send message every 2 seconds
      intervalId = setInterval(() => {
        const message = `Server time: ${new Date().toLocaleTimeString()}`;
        send(message);
        send("sse testnm");
      }, 2000);
    },
    cancel() {
      // This function runs when the client disconnects
      clearInterval(intervalId);
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*', // for testing
    },
  });
}
