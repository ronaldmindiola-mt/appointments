const BASE_URL = "http://localhost:8080/api/";

// Agendas - Listar Agendas
export async function listAgendas() {
    const options = { 
        method: 'GET',
        mode: "cors",
        cache: "default"
    };
    const response = await fetch(BASE_URL + 'agendas', options);
    console.log(response.status);
    const responseJSON = await response.json();
    return await responseJSON;
};

// Agendas - Buscar por Id
export async function findAgendaById(id) {
    const response =await fetch(BASE_URL+'agendas/'+id);
    const responseJSON = await response.json();
  return await responseJSON;
}

// Agendas - Guardar
export async function saveAgenda(agenda) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(agenda)
    };
    const res = await fetch(BASE_URL+"agendas", options);
    return await res.json();
};

// Agendas - Eliminar
export async function deleteAgendaById(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"agendas/"+id, options);
    return await res.text();
};

// Medicos - Listar Medicos
export async function findAllPhysicians() {
    const res = await fetch(BASE_URL+"medicos");
    return await res.json();
};

// Pacientes - Evalua si existe un paciente por su Id
export async function existPatientByDni(id) {
    const res = await fetch(BASE_URL+"pacientes/existe/query?ndocumento="+id);
    return await res.json();
};

// Pacientes - Busca un paciente por su DNI
export async function findpatientByDni(dni) {
    const res = await fetch(BASE_URL+"pacientes/cc/"+dni);
    return await res.json();
};

// Pacientes - Busca un paciente por su Id
export async function findPatientById(id) {
    const res = await fetch(BASE_URL + "pacientes/"+id);
    return await res.json();
}

// Pacientes - Guardar
export async function savePatient(patient) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(patient)
    }
    const res = await fetch(BASE_URL+"pacientes/", options);
    return await res.text();
}

// Pacientes - Elimina un paciente por su id
export async function deletePatientById(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"pacientes/"+id, options);
    return await res.text();
};

