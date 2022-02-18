window.addEventListener('load', () => {
    const form = document.querySelector("#to_do_wrapper");
    const input = document.querySelector("#to_do_input");
    const elm = document.querySelector("#all_tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task_input = input.value;

        const one_t = document.createElement('div');
        one_t.classList.add('one_task');

        const one_t_conentet = document.createElement('div');
        one_t_conentet.classList.add('content');

        one_t.appendChild(one_t_conentet);

        const one_t_input = document.createElement('input');
        one_t_input.classList.add('text');
        one_t_input.type = "text";
        one_t_input.value = task_input;
        one_t_input.setAttribute("readonly", "readonly");

        one_t_conentet.appendChild(one_t_input);

        const act = document.createElement('div');
        act.classList.add("actions");

        const ed = document.createElement("button");
        ed.classList.add("edit");
        ed.innerText = 'Edit';

        const de = document.createElement("button");
        de.classList.add("delete");
        de.innerText = 'Delete';

        act.appendChild(de);
        act.appendChild(ed);

        one_t.appendChild(act);

        elm.appendChild(one_t);

        input.value = '';

        ed.addEventListener("click", () => {
            if (ed.innerText.toLocaleLowerCase() == "edit"){
                ed.innerText = "save";
                one_t_input.removeAttribute("readonly");
                one_t_input.focus();
            }
            else {
                ed.innerText = "edit";
                one_t_input.setAttribute("readonly", "readonly");
            }
        });

        de.addEventListener("click", () => {
            elm.removeChild(one_t);
        });
    });
});