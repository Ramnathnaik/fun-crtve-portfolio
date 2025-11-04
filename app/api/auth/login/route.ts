import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Load credentials from environment variables
const AUTHORIZED_USERNAME = process.env.AUTHORIZED_USERNAME;
const AUTHORIZED_PASSWORD = process.env.AUTHORIZED_PASSWORD;

export async function POST(request: Request) {
  try {
    // Validate environment variables are set
    if (!AUTHORIZED_USERNAME || !AUTHORIZED_PASSWORD) {
      console.error(
        "Missing environment variables: AUTHORIZED_USERNAME or AUTHORIZED_PASSWORD"
      );
      return NextResponse.json(
        { error: "ಸರ್ವರ್ ಕಾನ್ಫಿಗರೇಶನ್ ದೋಷ 🚫" },
        { status: 500 }
      );
    }

    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: "ಹೆಸರು ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ಅಗತ್ಯವಿದೆ 📝" },
        { status: 400 }
      );
    }

    // Check if username matches
    if (username !== AUTHORIZED_USERNAME) {
      return NextResponse.json(
        { error: "ಅಮಾನ್ಯವಾದ ಹೆಸರು ಅಥವಾ ಪಾಸ್ವರ್ಡ್ 🙅‍♀️" },
        { status: 401 }
      );
    }

    const hashedPassword = await bcrypt.hash(AUTHORIZED_PASSWORD, 10);

    // Validate password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "ಅಮಾನ್ಯವಾದ ಹೆಸರು ಅಥವಾ ಪಾಸ್ವರ್ಡ್ 🙅‍♀️" },
        { status: 401 }
      );
    }

    // Generate a secure token
    const token = Buffer.from(
      `${username}:${Date.now()}:${Math.random().toString(36).substring(2)}`
    ).toString("base64");

    return NextResponse.json(
      {
        success: true,
        token,
        message: "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ! 🎉",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: "ಬನೋ ತಪ್ಪಾಗಿದೆ 😢" }, { status: 500 });
  }
}
