import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ReturnBorrow } from "../modules/interface";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import Year from "../student/Year/Year";

export default function BorrowReturnCom({ rbIcons, setRbIcons }: ReturnBorrow) {
  // FOR THE BREAD CRAMBS
  const [breadCrumbs, setBreadCrumbs] = useState([
    {
      name: "Home",
      id: 0,
    },
  ]);

  const [theId, setId] = useState(1);

  const addBreadCrambs = (grade: string) => {
    setId(theId + 1);
    setBreadCrumbs((prev) => {
      return [...prev, { name: grade, id: theId }];
    });
  };

  const removeBreadCrambs = (index: any) => {
    setBreadCrumbs((prev) => {
      return prev.filter((lista) => lista.id <= index);
    });
  };

  return (
    <>
      {rbIcons.borrow === true ? (
        <>
          <div className="px-2 py-0.5 w-full bg-blue-400 rounded  mb-2">
            <Breadcrumb
              spacing="8px"
              separator={<BsChevronRight color="red.500" />}
            >
              {breadCrumbs.map((point, index) => {
                return (
                  <BreadcrumbItem key={index}>
                    <BreadcrumbLink
                      color="white"
                      onClick={() => removeBreadCrambs(point.id)}
                    >
                      {point.name}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                );
              })}
            </Breadcrumb>
          </div>
          <Year addBreadCrambs={addBreadCrambs} breadCrumbs={breadCrumbs} />
        </>
      ) : rbIcons.returnMe === true ? (
        <h1>Faculty</h1>
      ) : null}
    </>
  );
}
