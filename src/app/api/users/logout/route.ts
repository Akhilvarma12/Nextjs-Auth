import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function GET(request:NextRequest){
    try {
        const response=NextResponse.json({message:"logout success",
            success:true
        })
         
        response.cookies.set("token","",{
            httpOnly:true,
            expires: new Date(0)
        })
        
        return response;

    } catch (error:any) {
            return NextResponse.json(
            {error:"login error"+ error.message},
            {status:500}
        )
    }


}