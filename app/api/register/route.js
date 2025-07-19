// app/api/register/route.js
import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = await User.create({ name, email, password });

    return Response.json({ message: 'User registered', user }, { status: 201 });
  } catch (error) {
    return Response.json({ message: 'Server error', error }, { status: 500 });
  }
}
