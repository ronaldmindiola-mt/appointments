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

export async function findAgendaById(id) {
    const response =await fetch(BASE_URL+'agendas/'+id);
    const responseJSON = await response.json();
  return await responseJSON;
}

export async function saveAgenda(agenda) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(agenda)
    };
    const res = await fetch(BASE_URL+"agendas", options);
    return await res.json();
};

export async function deleteAgendaById(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"agendas/"+id, options);
    return await res.text();
};

// Medicos - Listar Agendas
export async function findAllPhysicians() {
    const res = await fetch(BASE_URL+"medicos");
    return await res.json();
};