const BASE_URL = "http://localhost:8080/"

export async function listAgendas() {
    const options = { method: 'GET' };
    const res = await fetch(BASE_URL + 'agendas', options);
    return await res.json();
};

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

export async function getPhysicians() {
    const res = await fetch(BASE_URL+"medicos");
    return await res.json();
};