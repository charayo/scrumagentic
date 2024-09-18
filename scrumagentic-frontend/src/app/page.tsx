import Image from "next/image";
import TaskAssignment from "./TaskAssignment";
import AddTeamMember from "./components/AddTeamMember";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24">
      <h1 className="text-center">Scrumagentic</h1>
     
     <div className="">
      <AddTeamMember />
      {/* <TaskAssignment /> */}
     </div>
    </main>
  );
}
