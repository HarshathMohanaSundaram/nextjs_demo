import books from "../../db";

export async function PUT (request: Request, context: { params: { id: string } },) {
  const id = +context.params.id;
  const book = request.json();
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return Response.json({ message: 'Book not found' }, { status: 404 });
  }
  books[index] = { ...books[index], ...book };
  return Response.json(books);
}


export async function DELETE(_request: Request, context: { params: { id: string } }) {
  const id = +context.params.id;
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return Response.json({ message: 'Book not found' }, { status: 404 });
  }
  books.splice(index, 1);
  return Response.json(books);
}