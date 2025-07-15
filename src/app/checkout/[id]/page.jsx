import CheckoutForm from "@/app/login/components/form/CheckoutForm/CheckoutForm";


export default async function checkOutPage({ params }) {
  const p = await params;
  const res = await fetch(`https://next-car-doctor-tan.vercel.app/api/service/${p.id}`);
  const data = await res.json();

  return (
    <>
      <CheckoutForm data={data} />
    </>
  );
}
