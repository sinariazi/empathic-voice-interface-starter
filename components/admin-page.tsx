"use client";

import { UserManagement } from "@/hooks/user-management";
import { SurveyResults } from "./survey-results";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function AdminPageComponent() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Moodwhisper Admin Panel</h1>
      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="surveys">Survey Results</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        <TabsContent value="surveys">
          <SurveyResults />
        </TabsContent>
      </Tabs>
    </div>
  );
}
