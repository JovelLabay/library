import React from "react";
import { Button, Image } from "@chakra-ui/react";
import "./year.css";

import gradeImage from "../../assets/logo/schoolLogo.jpg";
import {
  Grade10,
  Grade11,
  Grade12,
  Grade7,
  Grade8,
  Grade9,
} from "../List/StudentList";

export default function Year({
  addBreadCrambs,
  breadCrumbs,
}: {
  addBreadCrambs: (grade: string) => void;
  breadCrumbs: {
    name: string;
    id: number;
  }[];
}) {
  const grades = [
    { id: 1, grade: "Grade 7" },
    { id: 2, grade: "Grade 8" },
    { id: 3, grade: "Grade 9" },
    { id: 3, grade: "Grade 10" },
    { id: 3, grade: "Grade 11" },
    { id: 3, grade: "Grade 12" },
  ];

  const position = breadCrumbs.at(1);

  return (
    <>
      {position?.name === "Grade 7" ? (
        <Grade7 />
      ) : position?.name === "Grade 8" ? (
        <Grade8 />
      ) : position?.name === "Grade 9" ? (
        <Grade9 />
      ) : position?.name === "Grade 10" ? (
        <Grade10 />
      ) : position?.name === "Grade 11" ? (
        <Grade11 />
      ) : position?.name === "Grade 12" ? (
        <Grade12 />
      ) : (
        <div className="yearLevel">
          {grades.map((grade, indes) => {
            return (
              <button
                className="gradeBtn"
                key={indes}
                onClick={() => addBreadCrambs(grade.grade)}
              >
                <Image src={gradeImage} boxSize="60px" padding="5px" />
                <p>{grade.grade}</p>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
