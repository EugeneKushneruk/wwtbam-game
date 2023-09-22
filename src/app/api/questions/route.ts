import { NextResponse } from "next/server";
import questionsMock from "./config";

export async function GET() {
  return NextResponse.json({
    questions: questionsMock
  });
}
