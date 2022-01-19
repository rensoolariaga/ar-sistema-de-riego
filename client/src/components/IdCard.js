import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllProjects } from "../Redux/actions/actions.js";

import CardDetail from "./CardDetail.js";

import { useParams } from "react-router";
import NavBar from "./NavBar.js";

export default function IdCard() {
  const dispatch = useDispatch();
  const allProjects = useSelector((state) => state.allProjects);
  let { id } = useParams();
  id = parseInt(id);

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const project = allProjects?.filter((p) => p.id === id);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      ;
      {
        <CardDetail
          title={project[0]?.title}
          image={project[0]?.image}
          parragraph={project[0]?.parragraph}
          proyectType={project[0]?.proyectType}
          id={project[0]?.id}
        />
      }
    </div>
  );
}
