import { EmployeeSurveyComponent } from "@/components/employee-survey";

export default async function Page() {
  return (
    <div className={"grow flex flex-col"}>
      <EmployeeSurveyComponent />
    </div>
  );
}
