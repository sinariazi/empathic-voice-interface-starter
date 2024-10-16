import { MoodTracker } from "@/components/MoodTracker";

export default async function Page() {
  return (
    <div className={"grow flex flex-col"}>
      <MoodTracker />
    </div>
  );
}
