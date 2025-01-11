import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma/client'

export async function GET() {
  try {
    const opportunities = await prisma.opportunity.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(opportunities)
  } catch ( error ) {
      // TODO: handle error (ET)
    console.error('Error fetching opportunities:', error)
    return NextResponse.json(
      { error: 'Failed to fetch opportunities' },
      { status: 500 }
    )
  }
}