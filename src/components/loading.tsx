export default function Loading() {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500 mx-auto"
      ></div>
      <h2 className="text-zinc-600  mt-4">Carregando...</h2>
      <p className="text-zinc-400 ">
        Buscando os dados no servidor
      </p>
    </div>
  )
}