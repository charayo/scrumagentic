"use client";
import React, { useState } from "react";
import { CheckSquare, Square } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
}

const teamMembers: TeamMember[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
];

const TaskAssignment = () => {
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleMember = (memberId: number) => {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Selected members:", selectedMembers);
    console.log("Task description:", taskDescription);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team-members"
          >
            Select Team Members
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {selectedMembers.length === 0
                ? "Select members"
                : `${selectedMembers.length} member(s) selected`}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 w-full bg-white shadow-lg max-h-60 rounded-md mt-1 overflow-auto">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => toggleMember(member.id)}
                  >
                    {selectedMembers.includes(member.id) ? (
                      <CheckSquare className="h-5 w-5 text-blue-500 mr-2" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-400 mr-2" />
                    )}
                    {member.name}
                  </div>
                ))}
                <div onClick={()=>setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-center mb-1">
                  <button className="text-red-500 text-center  px-2 border-red-500 border-[1px] rounded-sm active:text-white active:bg-red-500">
                    close
                  </button>
                </div>
              </div>
            )}
          </div>
          <small className="flex"><p className="text-orange-300">Can't find member?</p> <span className="underline text-blue-500">Add a new member</span></small>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="task-description"
          >
            Task Description
          </label>
          <textarea
            id="task-description"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows={4}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default TaskAssignment;
