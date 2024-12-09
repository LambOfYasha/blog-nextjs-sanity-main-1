// ... existing imports ...

// Add error reporting
if (process.env.NODE_ENV !== 'production') {
  Error.stackTraceLimit = Infinity;
}

export default async function handler(
  req: import('next').NextApiRequest,
  res: import('next').NextApiResponse
) {
  try {
    // ... existing code ...
  } catch (error) {
    console.error(error); // Log the full error
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'An unknown error occurred',
      stack: process.env.NODE_ENV !== 'production' && error instanceof Error ? error.stack : undefined 
    });
  }
} 