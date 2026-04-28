import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

type EarlyAccessPayload = {
  firstName?: string;
  lastName?: string;
  workEmail?: string;
  phoneNumber?: string;
  companyProjectName?: string;
  primaryUseCase?: string;
  monthlyCallVolume?: string;
  anythingElse?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EarlyAccessPayload;

    if (payload.website) {
      return NextResponse.json({ ok: true });
    }

    const firstName = payload.firstName?.trim() ?? "";
    const lastName = payload.lastName?.trim() ?? "";
    const workEmail = payload.workEmail?.trim().toLowerCase() ?? "";
    const phoneNumber = payload.phoneNumber?.trim() ?? "";
    const companyProjectName = payload.companyProjectName?.trim() ?? "";
    const primaryUseCase = payload.primaryUseCase?.trim() ?? "";
    const monthlyCallVolume = payload.monthlyCallVolume?.trim() ?? "";
    const anythingElse = payload.anythingElse?.trim() ?? "";

    if (
      !firstName ||
      !lastName ||
      !workEmail ||
      !companyProjectName ||
      !primaryUseCase ||
      !monthlyCallVolume
    ) {
      return NextResponse.json(
        { error: "Missing required fields. Please complete all mandatory inputs." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(workEmail)) {
      return NextResponse.json({ error: "Please provide a valid work email address." }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("early_access_requests").insert({
      first_name: firstName,
      last_name: lastName,
      work_email: workEmail,
      phone_number: phoneNumber || null,
      company_project_name: companyProjectName,
      primary_use_case: primaryUseCase,
      monthly_call_volume: monthlyCallVolume,
      anything_else: anythingElse || null,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to save your request. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
