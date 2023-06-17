import { deleteCordinatorById, getCordinatorById, updateCordinatorById } from "@/app/model/cordinatorsService"
import { NextResponse } from "next/server"

export async function DELETE(request:Request, {params}:any) {
    console.log(params.id)
    deleteCordinatorById(params.id)
    return NextResponse.json({delete: "ok"})    
}

export async function GET(request: Request, {params}: any) {
    const course = await getCordinatorById(params.id)
    return NextResponse.json(course)    
}

export async function PUT(request: Request, { params }: any) {
    const course = await request.json()
    await updateCordinatorById(params.id, course.name, course.description)
    return NextResponse.json(await getCordinatorById(params.id))
}