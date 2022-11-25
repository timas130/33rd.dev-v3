function setting(name) {
    const setting = document.getElementsByClassName("setting__" + name)[0];
    const localValue = window.localStorage && localStorage.getItem("settings." + name) === "true";
    if (setting.checked || localValue) { // the browser might save checkbox state after reloading
        document.body.classList.add(name);
        setting.checked = true;
    }
    setting.addEventListener("change", ev => {
        window.localStorage &&
            localStorage.setItem("settings." + name, ev.target.checked.toString());
        if (ev.target.checked) document.body.classList.add(name);
        else document.body.classList.remove(name);
    });
}

setting("square-avatar");
setting("light-theme");

const el = document.getElementById("email");
setTimeout(() => {
  const part1 = "me";
  const part3 = "sit.s";
  const part2 = "@";
  el.href = "mail" + "to:" + part1 + part2 + part3 + "h";
  el.innerHTML = part1 + part2 + part3 + "h";
}, 1200);
