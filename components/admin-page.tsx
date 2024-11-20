"use client";

import { UserManagement } from "@/hooks/user-management";
import { SurveyResults } from "./survey-results";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { PaymentManagement } from "./payment-management";

export function AdminPageComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Moodwhisper Admin Panel</h1>
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-3 ">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="surveys">Survey Results</TabsTrigger>
          <TabsTrigger value="Payment">Payment</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        <TabsContent value="surveys">
          <SurveyResults />
        </TabsContent>
        <TabsContent value="Payment">
          <PaymentManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
}
