import { NextResponse } from "next/server";
import AWS from "aws-sdk";

// Configure AWS S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || "us-east-1",
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || "your-bucket-name";
const FOLDER_PREFIX = process.env.AWS_S3_FOLDER_PREFIX || ""; // e.g., "gallery/"

export async function GET(request: Request) {
  try {
    // Simple token validation
    const authHeader = request.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json(
        { error: "ಅನಧಿಕೃತ ಪ್ರವೇಶ 🚫" },
        { status: 401 }
      );
    }

    // List objects in S3 bucket
    const params = {
      Bucket: BUCKET_NAME,
      Prefix: FOLDER_PREFIX,
    };

    const data = await s3.listObjectsV2(params).promise();

    if (!data.Contents) {
      return NextResponse.json({ photos: [] });
    }

    // Filter only image files and generate signed URLs
    const photos = await Promise.all(
      data.Contents.filter(
        (item) =>
          item.Key &&
          (item.Key.endsWith(".jpg") ||
            item.Key.endsWith(".jpeg") ||
            item.Key.endsWith(".png") ||
            item.Key.endsWith(".gif") ||
            item.Key.endsWith(".webp"))
      ).map(async (item) => {
        const url = s3.getSignedUrl("getObject", {
          Bucket: BUCKET_NAME,
          Key: item.Key!,
          Expires: 3600, // URL expires in 1 hour
        });

        return {
          key: item.Key,
          url,
          lastModified: item.LastModified,
          size: item.Size,
        };
      })
    );

    return NextResponse.json({ photos });
  } catch (error) {
    console.error("Error fetching photos from S3:", error);
    return NextResponse.json(
      { error: "ಫೋಟೋಗಳನ್ನು ತರಲು ವಿಫಲವಾಗಿದೆ 😢" },
      { status: 500 }
    );
  }
}
