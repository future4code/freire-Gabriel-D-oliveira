import axios from "axios";
import React from "react";
import { useProtectedPages } from "../../Hooks/useProtectedPages";
import { useForm } from "../../Hooks/useForm";
import { goToAdminPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../Hooks/useRequestData";
import { auth, headersAxios } from "../../Constants/Constants";

export const CreateTripPage = () => {
  useProtectedPages();
  const { form, onChange, clearInputs } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const navigate = useNavigate();
 
  const createTrip = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Gabriel-D-oliveira/trips",
        form, headersAxios
        
      )
      .then((res) => {
        alert("Viagem criada com sucesso");
        goToAdminPage(navigate);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={createTrip}>
        <input
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          placeholder="Planet"
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
        />
        <input
          type="date"
          placeholder="Data"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
        <input
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
          required
        />
        <input
          placeholder="Duração"
          type="number"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          required
        />
        <button>Criar viagem</button>
      </form>

      <button onClick={()=> goToAdminPage(navigate)}>Voltar</button>
    </div>
  );
};
