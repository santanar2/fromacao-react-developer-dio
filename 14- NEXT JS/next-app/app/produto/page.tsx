export default function Produto({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Página Produto 🚀 {params.id}</h1>
    </div>
  );
}