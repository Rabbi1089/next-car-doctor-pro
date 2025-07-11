import CheckoutForm from "@/app/login/components/form/CheckoutForm/CheckoutForm";


export default async function checkOutPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`);
  const data = await res.json();

  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <CheckoutForm data={data} />
    </>
  );
}
