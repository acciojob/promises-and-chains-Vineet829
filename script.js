let form = document.querySelector("#form-test");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let age = document.querySelector("#age").value;
    let name = document.querySelector("#name").value;

    const newPromise = () => {
        return new Promise((resolve, reject) => {
            if (age > 18) {
                setTimeout(() => {
                    alert(`Welcome, ${name}. You can vote.`);
                    resolve();
                }, 4000);
            } else {
                alert(`Oh sorry ${name}. You aren't old enough.`);
                reject();
            }
        });
    };

    newPromise().catch(() => {});
});
