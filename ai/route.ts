import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    status: "completed",
    recommendation: "Rebalance portfolio"
  });
}
