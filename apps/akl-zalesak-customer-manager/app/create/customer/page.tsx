import { SetTitle } from "~/components/title";

export default async function CreateCustomerPage() {
  return (
    <>
      <SetTitle>Create Customer</SetTitle>
      <main className="container mx-auto py-10">
        <CustomerForm />
      </main>
    </>
  );
}
