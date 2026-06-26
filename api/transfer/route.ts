import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    tx: "private_transfer_hash"
  });
}
