import books from '../db';


export async function GET() {
  return Response.json(books);
}

export async function POST(request: Request) {
  const newBook = await request.json();
  books.push(newBook);
  return Response.json(books, { status: 201 });
}