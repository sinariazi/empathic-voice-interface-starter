import EarlyTestersSignUp from "@/components/mailchimp-signup-form";

export default async function Page() {
  return (
    <div className={"grow flex flex-col"}>
      <EarlyTestersSignUp />
    </div>
  );
}
