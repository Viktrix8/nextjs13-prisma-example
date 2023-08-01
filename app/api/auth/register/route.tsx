import { db } from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, email, password } = (await req.json()) as {
      name: string;
      email: string;
      password: string;
    };

    const hashedPassword = await hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      status: "success",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "error",
        body: { message: error.message },
      },
      {
        status: 500,
      }
    );
  }
};
