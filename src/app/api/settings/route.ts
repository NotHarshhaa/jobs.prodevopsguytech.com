import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { z } from "zod";

const settingsSchema = z.object({
  username: z.string().min(3),
  currentPassword: z.string().min(6),
  newPassword: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export async function PUT(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const validatedData = settingsSchema.parse(body);

    // Verify current password against environment variable
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      return new NextResponse("Server configuration error", { status: 500 });
    }

    if (validatedData.currentPassword !== adminPassword) {
      return new NextResponse("Invalid current password", { status: 400 });
    }

    // Update the environment variable with the new password
    // Note: This will only persist until the server restarts
    process.env.ADMIN_PASSWORD = validatedData.newPassword;

    return new NextResponse("Settings updated successfully", { status: 200 });
  } catch (error) {
    console.error("Settings update error:", error);
    if (error instanceof z.ZodError) {
      return new NextResponse("Invalid request data", { status: 400 });
    }
    return new NextResponse("Internal server error", { status: 500 });
  }
} 