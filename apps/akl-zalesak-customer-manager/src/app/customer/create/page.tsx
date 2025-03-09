import { CreateCustomerForm } from "~/features/customers/components";

export default async function CreateCustomerPage() {
  return (
    <>
      <main className="container mx-auto py-10">
        <CreateCustomerForm />
      </main>
    </>
  );
}
