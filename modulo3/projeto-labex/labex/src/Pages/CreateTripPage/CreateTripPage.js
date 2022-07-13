import React from "react";
import { useProtectedPages } from "../../Hooks/customHooks";

export const CreateTripPage = () => {
  useProtectedPages();

  return (
    <div>
      <form>
        <input placeholder="Name" />
        <input placeholder="Planet" />
        <input type="date" placeholder="Data" />
        <input placeholder="Descrição" />
        <input placeholder="Duração" />
      </form>
    </div>
  );
};
