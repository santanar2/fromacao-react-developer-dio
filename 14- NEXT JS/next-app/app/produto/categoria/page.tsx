export default function categoria({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>  ...Categoria 🚀 {params.id}</h1>
    </div>
  );
}