import { AboutUsComponent } from "@/components/about-us";

export default async function Page() {
  return (
    <div className={"grow flex flex-col"}>
      <AboutUsComponent />
    </div>
  );
}
