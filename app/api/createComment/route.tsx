import { NextResponse } from 'next/server'
import { client } from '../../../lib/sanity.client'
import { createClient } from '@sanity/client'

export const revalidate = 30

// Create client with write permissions
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN_WRITE,
  apiVersion: '2023-05-03',
  useCdn: false,
})

export async function POST(request: Request) {
  try {
    // Validate request body
    const body = await request.json()
    const { _id, name, email, commentPost } = body

    // Check for required fields
    if (!_id || !name || !email || !commentPost) {
      return NextResponse.json(
        { 
          message: 'Missing required fields',
          details: {
            _id: !_id ? 'Post ID is required' : null,
            name: !name ? 'Name is required' : null,
            email: !email ? 'Email is required' : null,
            commentPost: !commentPost ? 'Comment text is required' : null
          }
        },
        { status: 400 }
      )
    }

    // Create comment using write client
    await writeClient.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      commentPost,
      approved: false,
    })

    return NextResponse.json(
      { message: 'Comment submitted successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating comment:', error)
    
    // Handle Sanity-specific errors
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      )
    }

    // Generic server error
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}