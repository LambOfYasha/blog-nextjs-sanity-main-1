import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {email, username, password} = body
        //check for email
        const existingUserByEmail = await db.user.findUnique({
            where: {email: email}
        })
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "User already exists with email."}, {status: 409})
        }
        const existingUserByUsername = await db.user.findUnique({
            where: {username: username}
        })
        if(existingUserByUsername){
            return NextResponse.json({user: null, message: "User with this username already exists"}, {status: 409})
        }

        const hashedPassword = await hash(password, )
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password
            }
        })
        return NextResponse.json(body)
    } catch(error){
        
    }
}

