import React from "react";
import { useProtectedPages } from "../../Hooks/customHooks";

export const AdminHomePage = () => {
  useProtectedPages();

  return (
    <div>
      <button> Voltar</button>
      <button> Criar viagem</button>
      <button> Deslogar</button>
      <hr />
      <li>Trip 1</li>
      <li>Trip 2</li>
      <li>Trip 3</li>
    </div>
  );
};
