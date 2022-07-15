import React, { useState } from "react";
import { useRequestData } from "../../Hooks/useRequestData";
import { urlBase } from "../../Constants/Constants";
import { useForm } from "../../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goBack, goToListTrips } from "../../Routes/Coordinator";


export const ApplicationFormPage = () => {
  const [tripId, setTripId] = useState("");
  const { form, onChange, clearInputs } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const navigate = useNavigate()
  const tripsList = useRequestData(`${urlBase}/trips`, []);

  const onChangeTrip = (event) => {
    setTripId(event.target.value);
    goToListTrips(navigate);
  };

  const tripsOptions = tripsList.map((t) => {
    return (
      <option key={t.id} value={t.id}>
        {t.name}
      </option>
    );
  });

  console.log(tripsList);
  console.log(tripsOptions);

  return (
    <div>
      <form>
        <select defaultValue="" onChange={onChangeTrip}>
          <option value="" disabled>
            Escolha uma viagem
          </option>
          {tripsOptions ? (
            tripsOptions
          ) : (
            <option>Sem viagens no momento</option>
          )}
        </select>
        <input
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          placeholder="Age"
          name="age"
          value={form.age}
          onChange={onChange}
          min={18}
          required
        />
        <input
          placeholder="ApplicationText"
          name="applicationText"
          value={form.applicationText}
          onChange={onChange}
          required
        />
        <input
          placeholder="Profession"
          name="profession"
          value={form.profession}
          onChange={onChange}
          required
        />
        <input
          placeholder="Country"
          name="country"
          value={form.country}
          onChange={onChange}
          required
        />
      </form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};
