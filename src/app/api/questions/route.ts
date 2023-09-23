import { NextResponse } from "next/server";
import questionsMock from "./config";

export default async function GET() {
  return NextResponse.json({
    questions: questionsMock,
  });
}
