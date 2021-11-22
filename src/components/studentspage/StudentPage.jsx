import React from "react";
import StudentCard from "../studentcards/StudentCard";
import students from "../../studentInfo";
import "./StudentPage.css";

export default function StudentPage() {
  return (
    <article>
      <StudentCard students={students} />
    </article>
  );
}
