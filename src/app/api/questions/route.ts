import { NextResponse } from "next/server";
import questionsMock from "./config";

export async function GET(request: Request) {
  return NextResponse.json({
    questions: questionsMock
  });
}
