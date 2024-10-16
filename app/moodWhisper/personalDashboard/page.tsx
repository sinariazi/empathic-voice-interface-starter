import { MoodDashboard } from "@/components/MoodDashboard";

export default async function Page() {
  return (
    <div className={"grow flex flex-col"}>
      <MoodDashboard />
    </div>
  );
}
